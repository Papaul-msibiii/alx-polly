import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function PollsListPage() {
  // Placeholder items
  const polls = [
    { id: "1", title: "Best JS framework?", description: "Vote your favorite." },
    { id: "2", title: "Tabs vs Spaces", description: "Settle it." },
  ];

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Polls</h1>
        <Link href="/polls/new">
          <Button>New poll</Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {polls.map((poll) => (
          <Card key={poll.id}>
            <CardHeader>
              <CardTitle className="text-lg">
                <Link className="underline" href={`/polls/${poll.id}`}>{poll.title}</Link>
              </CardTitle>
              <CardDescription>{poll.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-neutral-500">Placeholder stats</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
} 

export default PollsListPage;