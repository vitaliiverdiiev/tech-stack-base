import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { executeAction } from "@/lib/executeAction";
import { signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

export default function SignInForm() {
  return (
    <form
      className="space-y-8 max-w-3xl mx-auto py-10"
      action={async (formData: FormData) => {
        "use server";

        await executeAction({
          actionFn: async () => {
            await signIn("credentials", formData);
            redirect("/");
          },
        });
      }}
    >
      <div>
        <label>Email</label>
        <Input placeholder="Enter your email" type="email" name="email" />
      </div>

      <div>
        <label>Password</label>
        <Input placeholder="Enter your password" type="text" name="password" />
      </div>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
