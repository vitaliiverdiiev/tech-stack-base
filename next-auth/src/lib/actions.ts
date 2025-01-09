import { executeAction } from "./executeAction";
import db from "./prisma";
import { userSchema } from "./user.schema";

export const signUp = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      const email = formData.get("email");
      const password = formData.get("password");

      const validatedCredentials = userSchema.parse({ email, password });

      await db.user.create({
        data: {
          email: validatedCredentials.email.toLocaleLowerCase(),
          password: validatedCredentials.password,
        }
      })
    },
  });
};
