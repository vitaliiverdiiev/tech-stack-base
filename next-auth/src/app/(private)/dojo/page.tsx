import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  console.log({ session });

  if (!session) redirect("/login");

  return (
    <section>
      <div className="container flex flex-col gap-10">
        <h2>Codewars, CodeLeets and other practices.</h2>
        {JSON.stringify(session, null, 4)}
      </div>
    </section>
  );
}
