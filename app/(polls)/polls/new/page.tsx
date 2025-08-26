"use client";

import * as React from "react";
import PollForm from "@/components/polls/PollForm";
import QRShare from "@/components/polls/QRShare";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function NewPollPage() {
  const [createdUrl, setCreatedUrl] = React.useState<string | null>(null);
  const [tab, setTab] = React.useState("basic");
  const [allowMulti, setAllowMulti] = React.useState(false);
  const [requireAuth, setRequireAuth] = React.useState(true);
  const [endDate, setEndDate] = React.useState("");

  async function handleCreate(values: { title: string; description: string; options: string[] }) {
    const payload = { ...values, settings: { allowMulti, requireAuth, endDate } };
    const res = await fetch("/api/polls", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    const id = data.id ?? "temp-id";
    setCreatedUrl(`${window.location.origin}/polls/${id}`);
  }

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Create New Poll</h1>
        <div className="flex gap-2">
          <Button variant="secondary" type="button">Cancel</Button>
          <Button type="submit" form="poll-form">Create Poll</Button>
        </div>
      </div>

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList>
          <TabsTrigger value="basic" current={tab} onClick={setTab}>Basic Info</TabsTrigger>
          <TabsTrigger value="settings" current={tab} onClick={setTab}>Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" current={tab}>
          {/* PollForm will render inside a form with a fixed id to connect header button */}
          <div id="poll-form-wrapper">
            <PollForm onSubmit={handleCreate} />
          </div>
        </TabsContent>

        <TabsContent value="settings" current={tab}>
          <div className="grid gap-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <input id="allowMulti" type="checkbox" checked={allowMulti} onChange={(e) => setAllowMulti(e.target.checked)} />
              <Label htmlFor="allowMulti">Allow users to select multiple options</Label>
            </div>
            <div className="flex items-center gap-2">
              <input id="requireAuth" type="checkbox" checked={requireAuth} onChange={(e) => setRequireAuth(e.target.checked)} />
              <Label htmlFor="requireAuth">Require users to be logged in to vote</Label>
            </div>
            <div className="grid gap-2 max-w-sm">
              <Label htmlFor="endDate">Poll End Date (Optional)</Label>
              <Input id="endDate" placeholder="yyyy-mm-dd" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {createdUrl && <QRShare pollUrl={createdUrl} />}
    </main>
  );
} 

export default NewPollPage;