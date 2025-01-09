import SignInForm from "./sign-in-from";
import { SignInGithub } from "./sign-in-github";

export const SignInWidget = () => {
  return (
    <div className="p-4 rounded-xl max-w-[500px] m-auto bg-gray-100">
      <h2 className="text-xl font-bold">Sign in</h2>
      <p className="text-sm">Welcome back!</p>
      <SignInForm />
      <div className="w-full h-[1px] bg-gray-300 mb-8" />
      <SignInGithub />
    </div>
  );
};
