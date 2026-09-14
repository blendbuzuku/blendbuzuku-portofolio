"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

/** Copies the address, because a mailto link does nothing without a mail app. */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be refused (insecure context, permissions); the address is still on screen.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:border-line-strong hover:text-text"
    >
      {copied ? <Check size={13} className="text-settle" /> : <Copy size={13} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
