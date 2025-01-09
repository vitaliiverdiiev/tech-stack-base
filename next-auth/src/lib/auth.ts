import NextAuth from "next-auth";
import {encode} from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import db from "./prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { userSchema } from "./user.schema";
import { v4 as uuid } from "uuid";
const adapter = PrismaAdapter(db);

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter,
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = userSchema.parse(credentials);

        const user = await db.user.findFirst({
          where: { email, password },
        });

        if (!user) throw new Error("Invalid credentials.");

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === "credentials") {
        token.credentials = true;
      }

      return token;
    },
  },
  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        const sessionToken = uuid();

        if (!params.token.sub) {
          throw new Error("No user ID found in token");
        }

        const createSession = await adapter?.createSession?.({
          sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        });

        if (!createSession) {
          throw new Error("Failed to create a session");
        }

        return sessionToken;
      }

      return encode(params)
    },
  },
});
