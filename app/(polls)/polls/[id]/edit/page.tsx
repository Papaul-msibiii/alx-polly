"use client";

import * as React from "react";
import PollForm from "@/components/polls/PollForm";
import { Button } from "@/components/ui/button";

export default function EditPollPage() {
  async function handleUpdate(values: { title: string; description: string; options: string[] }) {
    // Placeholder: pretend to update
    await new Promise((r) => setTimeout(r, 400));
  }

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Edit Poll</h1>
        <div className="flex gap-2">
          <Button variant="secondary" type="button">Cancel</Button>
          <Button type="submit" form="poll-form">Save Changes</Button>
        </div>
      </div>
      <PollForm onSubmit={handleUpdate} />
    </main>
  );
} 