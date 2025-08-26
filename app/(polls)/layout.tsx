import type { ReactNode } from "react";

export default function PollsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh p-6">{children}</div>
  );
} 