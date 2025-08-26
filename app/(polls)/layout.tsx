"use client";

import { useSupabaseAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

export default function PollsLayout({ children }: { children: ReactNode }) {
  const { session, signOut } = useSupabaseAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isSigningOut, setIsSigningOut] = useState(false);

  useEffect(() => {
    if (session === undefined) return; // Wait for session to be defined
    if (session === null) {
      router.push("/sign-in");
    } else {
      setLoading(false);
    }
  }, [session, router]);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await signOut();
    setIsSigningOut(false);
  }

  if (loading) {
    return <div className="min-h-dvh p-6 flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="min-h-dvh p-6">
      <div className="flex justify-end">
        <Button onClick={handleSignOut} disabled={isSigningOut}>
          {isSigningOut ? "Signing out..." : "Sign out"}
        </Button>
      </div>
      {children}
    </div>
  );
}