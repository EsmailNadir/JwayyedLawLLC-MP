'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

/** Copies a block of text to the clipboard and says so for a moment. */
export default function CopyButton({ text, label = 'Copy template' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (permissions, insecure context); the text
      // is on the page to select by hand.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 min-h-[40px] px-3 text-[length:var(--step-small)] font-semibold text-sky hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
    >
      {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
      <span aria-live="polite">{copied ? 'Copied' : label}</span>
    </button>
  );
}
