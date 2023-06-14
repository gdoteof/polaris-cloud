export const runtime = 'edge'

import { Stream } from "@cloudflare/stream-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Stream controls src="5f22e591e55b4457b6edeaa8fba56f67" />
      </div>
    </main>
  );
}
