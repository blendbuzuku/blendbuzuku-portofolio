"use client";

import Image from "next/image";
import { useState } from "react";

type Shot = { src: string; label: string; caption: string; alt: string };

/*
 * One screenshot at a readable size in a browser frame, with the others
 * picked from labelled thumbnails underneath and a line saying what each
 * one shows.
 */
export default function BankflowScreens({ shots, host }: { shots: Shot[]; host: string }) {
  const [index, setIndex] = useState(0);
  const shot = shots[index];

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-line-strong bg-ink shadow-[0_24px_60px_-28px_rgb(0_0_0/0.85)]">
        <div className="flex items-center gap-1.5 border-b border-line bg-panel px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="ml-2 truncate rounded bg-deep px-2.5 py-0.5 font-mono text-[11px] text-faint">{host}</span>
        </div>
        <Image
          key={shot.src}
          src={shot.src}
          alt={shot.alt}
          width={1280}
          height={800}
          sizes="(min-width: 1024px) 900px, 100vw"
          className="block h-auto w-full"
        />
      </div>

      <p className="mt-3 text-sm text-soft" aria-live="polite">
        <span className="font-medium text-text">{shot.label}.</span> {shot.caption}
      </p>

      <div
        role="tablist"
        aria-label="BankFlow screenshots"
        className="mt-4 grid grid-cols-3 gap-2.5 sm:grid-cols-5"
      >
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            onClick={() => setIndex(i)}
            className={`group overflow-hidden rounded-lg border text-left transition-colors ${
              i === index ? "border-signal bg-signal/[0.06]" : "border-line hover:border-line-strong"
            }`}
          >
            <Image
              src={s.src}
              alt=""
              width={320}
              height={200}
              sizes="170px"
              className={`block h-auto w-full transition-opacity ${i === index ? "opacity-100" : "opacity-55 group-hover:opacity-90"}`}
            />
            <span className={`block px-2.5 py-1.5 text-xs font-medium ${i === index ? "text-signal" : "text-muted"}`}>
              {s.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
