import { signIn } from "@/lib/auth";
import { Button } from "./ui/button";

export const SignInGithub = () => {
  return (
    <form
      action={async () => {
        "use server";

        await signIn('github', { redirectTo: '/' })
      }}
    >
      <Button className="w-full" type="submit">
        Sign in with Google
      </Button>
    </form>
  );
};
