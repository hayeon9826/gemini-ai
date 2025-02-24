import { streamGeminiResponse } from "@/utils/gemini";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  // SSE 설정
  const encoder = new TextEncoder();
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();

  // 스트리밍 응답 시작
  streamGeminiResponse(prompt, async (text) => {
    await writer.write(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
  }).finally(() => {
    writer.write(encoder.encode("data: [DONE]\n\n")).finally(() => {
      writer.close();
    });
  });

  return new Response(stream.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
