import { auth, signOut } from "@/lib/auth";
import { Button } from "./ui/button";

export const SignOutButton = async () => {
  const session = await auth();

  if (!session) return null;

  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <Button type="submit">Sign out</Button>
    </form>
  );
};
