import { Stream } from "@cloudflare/stream-react";

export default function Home() {
  const videoId = "5f22e591e55b4457b6edeaa8fba56f67";
  return (
    <main>
      <Stream controls src={videoId} />
    </main>
  );
}
