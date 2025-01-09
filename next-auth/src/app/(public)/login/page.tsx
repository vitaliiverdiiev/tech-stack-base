import LoginForm from "@/components/login-form";
import { SignInGithub } from "@/components/sign-in-github";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="p-4 rounded-xl max-w-[500px] m-auto bg-gray-100">
          <h2 className="text-xl font-bold">Login</h2>
          <p className="text-sm">Welcome back!</p>
          <LoginForm />
          <div className="w-full h-[1px] bg-gray-300 mb-8" />
          <SignInGithub />
        </div>
      </div>
    </main>
  );
}
