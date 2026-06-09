import { createProjectNo } from "@/lib/project-number";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ nextProjectNo: createProjectNo(1) });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json(
    {
      id: crypto.randomUUID(),
      projectNo: createProjectNo(body.sequence || 1),
      ...body
    },
    { status: 201 }
  );
}
