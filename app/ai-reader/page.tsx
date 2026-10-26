import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Zi Wei Dou Shu · AI English Reading Assistant',
  description: 'An open-source English interpretation and chart-reading assistant for traditional Chinese astrology.',
};

export default function AIReaderPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-page)] px-4 py-10 text-[var(--tx-1)] sm:px-8">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-6 text-sm">
          <a className="text-amber-700 underline" href="/">Home</a>
          <span className="mx-2 text-slate-400">/</span>
          <span>AI English Reader</span>
        </nav>

        <header className="mb-8 rounded-2xl border border-amber-900/10 bg-white/80 p-6 shadow-sm sm:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">English AI Agent</p>
          <h1 className="mb-3 text-3xl font-bold">Zi Wei Dou Shu Reading Assistant</h1>
          <p className="leading-7 text-slate-700">
            Welcome to the English-localized assistant interface for traditional Zi Wei Dou Shu astrology. 
            This agent combines the open-source charting engine with translated 13-dimensional interpretations.
          </p>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Interactive Reading Console (Demo)</h2>
          <p className="mb-4 text-sm text-slate-600">
            Enter birth details to generate chart parameters and explore translated insights across personality, career, wealth, and health.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-700">Birth Year</label>
              <input type="number" defaultValue={1990} className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700>Birth Month</label>
              <input type="number" defaultValue={1} min={1} max={12} className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700">Birth Day</label>
              <input type="number" defaultValue={1} min={1} max={31} className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700">Double-Hour Index (0-11)</label>
              <input type="number" defaultValue={0} min={0} max={11} className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm" />
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <button onClick={() => alert('Chart calculation engine ready. Connect your dataset or local engine instance to stream readings.')} className="rounded-lg bg-amber-700 px-5 py-2.5 font-semibold text-white hover:bg-amber-800">
              Generate English Reading
            </button>
          </div>
        </section>

        <footer className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-500">
          <p>Powered by Renhuai123/ziwei-doushu engine & dataset v4.0. MIT Licensed code.</p>
        </footer>
      </div>
    </main>
  );
}
