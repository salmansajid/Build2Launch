"use client";

import { FormEvent, useState } from "react";

type AnalyzeResponse = {
  sentiment: "Positive" | "Negative";
  confidence: number;
  explanation: string;
  suggestedReply: string;
  source?: {
    ml: string;
    llm: string;
  };
  error?: string;
};

const examples = [
  "I absolutely love this product. Fast delivery and amazing quality!",
  "Terrible experience. The item broke on day one and support ignored me.",
  "Good idea overall, but the setup was confusing and a bit slow.",
];

export default function Home() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalyzeResponse | null>(null);
  const [error, setError] = useState("");

  async function onAnalyze(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = (await response.json()) as AnalyzeResponse;
      if (!response.ok) {
        throw new Error(data.error || "Request failed");
      }
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen px-4 py-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Build2Launch Demo
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            ReviewRadar
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Paste a customer review. A small ML model predicts sentiment, then
            Gemini drafts an explanation and a polite reply.
          </p>
        </header>

        <form onSubmit={onAnalyze} className="space-y-4">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700">
              Customer review
            </span>
            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              rows={6}
              placeholder="Type or paste a review..."
              className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none ring-teal-600/30 transition focus:ring-4"
              required
            />
          </label>

          <div className="flex flex-wrap gap-2">
            {examples.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => setText(example)}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left text-xs text-slate-600 transition hover:border-teal-300 hover:text-teal-800"
              >
                {example.slice(0, 42)}...
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading || text.trim().length < 3}
            className="inline-flex items-center justify-center rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {loading ? "Analyzing..." : "Analyze review"}
          </button>
        </form>

        {error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {error}
          </div>
        ) : null}

        {result ? (
          <section className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Sentiment
              </p>
              <div className="mt-2 flex flex-wrap items-end gap-3">
                <p
                  className={`text-3xl font-semibold ${
                    result.sentiment === "Positive"
                      ? "text-teal-700"
                      : "text-rose-700"
                  }`}
                >
                  {result.sentiment}
                </p>
                <p className="pb-1 text-sm text-slate-500">
                  Confidence {result.confidence}%
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Gemini explanation
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {result.explanation}
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Suggested reply
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {result.suggestedReply}
              </p>
            </article>
          </section>
        ) : null}
      </div>
    </main>
  );
}
