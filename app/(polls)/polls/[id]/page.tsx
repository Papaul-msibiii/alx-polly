import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QRShare from "@/components/polls/QRShare";

interface PageProps {
  params: { id: string };
}

function PollDetailsPage({ params }: PageProps) {
  const { id } = params;
  const pollUrl = typeof window !== "undefined" ? `${window.location.origin}/polls/${id}` : `https://example.com/polls/${id}`;

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <Link className="text-sm underline" href="/polls">← Back to Polls</Link>
        <div className="flex gap-2">
          <Link href={`/polls/${id}/edit`}><Button variant="secondary">Edit Poll</Button></Link>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Favorite Programming Language</CardTitle>
          <CardDescription>What programming language do you prefer to use?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid gap-2">
            <div className="grid gap-2">
              <Button variant="secondary">JavaScript</Button>
              <Button variant="secondary">Python</Button>
              <Button variant="secondary">Java</Button>
              <Button variant="secondary">C#</Button>
              <Button variant="secondary">Go</Button>
            </div>
          </div>
          <Button>Submit Vote</Button>
          <div className="text-xs text-neutral-500 flex items-center justify-between">
            <span>Created by John Doe</span>
            <span>Created on 10/15/2023</span>
          </div>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-base font-medium mb-2">Share this poll</h2>
        <QRShare pollUrl={pollUrl} />
      </section>
    </main>
  );
}
 
export default PollDetailsPage;