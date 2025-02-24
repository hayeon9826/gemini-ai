// import Chat from "@/components/Chat";
import StreamChat from "@/components/StreamChat";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 py-8">
      {/* <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Gemini AI 챗봇
      </h1>
      <Chat /> */}
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Steaming Gemini AI
      </h1>
      <StreamChat />
    </main>
  );
}
