'use client';

import { useState } from 'react';

interface EmailOptInFormProps {
  className?: string;
  /** Optional heading shown above the form */
  heading?: string;
}

export default function EmailOptInForm({ className = '', heading }: EmailOptInFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-os-opt-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      window.location.href = '/ai-os-partner-program/thank-you';
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(message);
      setLoading(false);
    }
  }

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      {heading && (
        <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">
          {heading}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Optional name field */}
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name (optional)"
          autoComplete="name"
          className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-orange-cta transition-colors"
        />

        {/* Required email field */}
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Business email address"
          required
          autoComplete="email"
          className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-orange-cta transition-colors"
        />

        {/* Inline error */}
        {error && (
          <p className="text-sm text-red-400 leading-snug" role="alert">
            {error}
          </p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 bg-orange-cta hover:bg-orange-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm uppercase tracking-wide rounded shadow-cta-glow transition-all duration-300"
        >
          {loading ? 'Sending…' : 'Get the AI OS Overview'}
        </button>
      </form>

      <p className="mt-3 text-xs text-white/40 text-center">
        No spam. One email with the overview, then only updates you ask for.
      </p>
    </div>
  );
}
