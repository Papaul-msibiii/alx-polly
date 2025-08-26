"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function QRShare({ pollUrl }: { pollUrl: string }) {
  const [copied, setCopied] = React.useState(false);

  async function copy() {
    await navigator.clipboard.writeText(pollUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="h-40 w-40 bg-neutral-200 dark:bg-neutral-800 grid place-items-center rounded">
          <span className="text-xs text-neutral-500">QR code here</span>
        </div>
        <div className="flex items-center gap-2">
          <code className="text-xs break-all">{pollUrl}</code>
          <Button onClick={copy} size="sm">{copied ? "Copied" : "Copy"}</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default QRShare; 