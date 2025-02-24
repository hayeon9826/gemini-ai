import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function getGeminiResponse(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function streamGeminiResponse(
  prompt: string,
  onText: (text: string) => void
) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const result = await model.generateContentStream({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        maxOutputTokens: 2048,
        temperature: 0.3,
        topP: 0.1,
        topK: 1,
        candidateCount: 1,
      },
    });

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      onText(chunkText);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
