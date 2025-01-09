import { SignInGithub } from "./sign-in-github";
import { SignUpForm } from "./sign-up-from";

export const SignUpWidget = () => {
  return (
    <div className="p-4 rounded-xl max-w-[500px] m-auto bg-gray-100">
      <h2 className="text-xl font-bold">Sign in</h2>
      <p className="text-sm">Welcome to the Dojo!</p>
      <SignUpForm />
      <div className="w-full h-[1px] bg-gray-300 mb-8" />
      <SignInGithub />
    </div>
  );
};
