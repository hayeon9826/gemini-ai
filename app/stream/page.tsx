import StreamChat from "@/components/StreamChat";

export default function Stream() {
  return (
    <main className="min-h-screen bg-gray-900 pt-32 pb-16">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Steaming Gemini AI
      </h1>
      <StreamChat />
    </main>
  );
}
