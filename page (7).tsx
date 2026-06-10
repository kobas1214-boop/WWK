import { analyzeDrawingText } from "@/lib/ai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const text = String(form.get("text") || "");

  if (!text.trim()) {
    return NextResponse.json({ error: "解析する図面テキストがありません。" }, { status: 400 });
  }

  const result = await analyzeDrawingText(text);
  return NextResponse.json(result);
}
