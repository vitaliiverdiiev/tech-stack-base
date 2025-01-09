'use client';

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Button variant="destructive" onClick={() => redirect('/login')}>Hekko World</Button>
      </div>
    </main>
  );
}
