import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ id: params.id, question: "Placeholder", options: [] });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({ id: params.id, ...body });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ id: params.id, deleted: true });
} 