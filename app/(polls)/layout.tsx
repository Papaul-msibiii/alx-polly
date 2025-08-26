"use client";

import { useSupabaseAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

export default function PollsLayout({ children }: { children: ReactNode }) {
  const { session, signOut } = useSupabaseAuth();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/sign-in");
    }
  }, [session, router]);

  return (
    <div className="min-h-dvh p-6">
      <div className="flex justify-end">
        <Button onClick={signOut}>Sign out</Button>
      </div>
      {children}
    </div>
  );
} 