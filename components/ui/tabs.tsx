"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Tabs({ children, value, onValueChange }: { children: React.ReactNode; value: string; onValueChange: (v: string) => void }) {
  return <div data-tabs-value={value} className="grid gap-3">{React.Children.map(children, (child) => child)}</div>;
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="inline-flex h-9 items-center rounded-md bg-neutral-100 p-1 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">{children}</div>;
}

export function TabsTrigger({ value, current, onClick, children }: { value: string; current: string; onClick: (v: string) => void; children: React.ReactNode }) {
  const isActive = value === current;
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 text-sm font-medium transition-all",
        isActive ? "bg-white text-neutral-900 shadow dark:bg-neutral-900 dark:text-neutral-50" : "bg-transparent hover:text-neutral-900 dark:hover:text-neutral-50"
      )}
      aria-pressed={isActive}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, current, children }: { value: string; current: string; children: React.ReactNode }) {
  if (value !== current) return null;
  return <div>{children}</div>;
} 