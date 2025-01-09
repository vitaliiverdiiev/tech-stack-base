import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { signUp } from "@/lib/actions";

export const SignUpForm = () => {
  return (
    <form
      className="space-y-8 max-w-3xl mx-auto py-10"
      action={async (formData: FormData) => {
        "use server";
        const res = await signUp(formData);

        if (res.success) {
          redirect("/");
        }
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
};
