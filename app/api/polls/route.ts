import { NextResponse } from "next/server";

export async function GET() {
  // Placeholder: return a static list
  return NextResponse.json({ polls: [] });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  // Placeholder: return a mocked created poll id
  return NextResponse.json({ id: "temp-id", ...body }, { status: 201 });
} 