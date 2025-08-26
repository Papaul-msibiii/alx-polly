"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type PollFormValues = {
  title: string;
  description: string;
  options: string[];
};

export function PollForm({ onSubmit }: { onSubmit?: (values: PollFormValues) => Promise<void> | void }) {
  const [options, setOptions] = React.useState<string[]>(["", ""]);
  const titleRef = React.useRef<HTMLInputElement>(null);
  const descRef = React.useRef<HTMLTextAreaElement>(null);

  function addOption() {
    setOptions((prev) => [...prev, ""]);
  }

  function updateOption(index: number, value: string) {
    setOptions((prev) => prev.map((opt, i) => (i === index ? value : opt)));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const values: PollFormValues = {
      title: titleRef.current?.value ?? "",
      description: descRef.current?.value ?? "",
      options: options.filter((o) => o.trim().length > 0),
    };
    await onSubmit?.(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a new poll</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="e.g. What should we build next?" ref={titleRef} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Brief context for your poll" ref={descRef} />
          </div>
          <div className="grid gap-2">
            <Label>Options</Label>
            {options.map((value, i) => (
              <Input
                key={i}
                placeholder={`Option ${i + 1}`}
                value={value}
                onChange={(e) => updateOption(i, e.target.value)}
              />
            ))}
            <Button variant="secondary" type="button" onClick={addOption}>Add option</Button>
          </div>
          <Button type="submit">Create</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default PollForm; 