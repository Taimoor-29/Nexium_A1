"use client";
import { useState } from "react";
import { quotes } from "../app/quotes";

interface Quote {
  topic: string;
  text: string;
}

export default function Home() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<string[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const filtered = (quotes as Quote[]).filter(
      (q) => q.topic.toLowerCase() === topic.toLowerCase()
    );
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3).map((q) => q.text);
    setResults(selected.length ? selected : ["No quotes found for this topic."]);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 to-pink-200 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">Random Quote Generator</h1>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic (e.g., life, motivation)"
            className="flex-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            Get Quotes
          </button>
        </form>
        <div className="space-y-4">
          {results.map((quote, index) => (
            <div
              key={index}
              className="bg-indigo-50 border-l-4 border-indigo-500 text-indigo-800 p-4 rounded-lg shadow"
            >
              “{quote}”
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
