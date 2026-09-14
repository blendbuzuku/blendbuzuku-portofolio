import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { BANKFLOW_LIVE_URL, BANKFLOW_SOURCE_URL, bankflow } from "@/data/projects";
import { GitHubIcon } from "./icons/Brand";
import SectionHeading from "./SectionHeading";
import BankflowScreens from "./BankflowScreens";

/*
 * The side project, shown properly: what it is, the screens, and how it works
 * underneath — placed after the work experience so it supports the story rather
 * than leading it. Its title links to the running app when
 * NEXT_PUBLIC_BANKFLOW_URL is set, otherwise to the source when that is set,
 * and is plain when neither is — never a link to nothing.
 */
export default function Bankflow() {
  const url = BANKFLOW_LIVE_URL ?? BANKFLOW_SOURCE_URL;
  const host = BANKFLOW_LIVE_URL ? new URL(BANKFLOW_LIVE_URL).host : "bankflow";

  return (
    <section id="side-project" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <SectionHeading eyebrow="Side project" title="Built in my own time" />

      <article className="rounded-2xl border border-line bg-deep/60 p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-semibold text-text">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-signal"
                >
                  {bankflow.title}
                  <ArrowUpRight size={24} className="text-faint" aria-hidden="true" />
                </a>
              ) : (
                bankflow.title
              )}
            </h3>
            <p className="mt-3 text-[17px] leading-relaxed text-soft">{bankflow.description}</p>
          </div>

          {(BANKFLOW_LIVE_URL || BANKFLOW_SOURCE_URL) && (
            <div className="flex flex-wrap gap-3">
              {BANKFLOW_LIVE_URL && (
                <a
                  href={BANKFLOW_LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-signal px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-signal-strong"
                >
                  Open live demo
                  <ArrowUpRight size={16} />
                </a>
              )}
              {BANKFLOW_SOURCE_URL && (
                <a
                  href={BANKFLOW_SOURCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-soft"
                >
                  <GitHubIcon size={16} />
                  Source
                </a>
              )}
            </div>
          )}
        </div>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {bankflow.stack.map((t) => (
            <li key={t} className="rounded-md bg-panel px-2.5 py-1 font-mono text-xs text-soft">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <BankflowScreens shots={bankflow.screenshots} host={host} />
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <h4 className="text-xl font-semibold text-text">How it works</h4>
          <p className="mt-2 text-sm text-muted">
            Three Spring Boot services behind one Angular front end, talking over REST.
          </p>

          <Architecture />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {bankflow.internals.map((item) => (
              <div key={item.title} className="rounded-xl border border-line bg-ink/40 p-5">
                <h5 className="font-medium text-text">{item.title}</h5>
                <p className="mt-2 text-[15px] leading-relaxed text-soft">{item.body}</p>
                {item.tags && (
                  <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Message types">
                    {item.tags.map((t) => (
                      <li key={t} className="rounded bg-panel px-2 py-0.5 font-mono text-xs text-signal">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

function Node({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="rounded-lg border border-line bg-panel/40 px-4 py-3">
      <p className="font-mono text-sm text-text">{name}</p>
      <p className="mt-0.5 text-xs text-muted">{detail}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center text-faint" aria-hidden="true">
      <ArrowDown size={18} className="md:hidden" />
      <ArrowRight size={18} className="hidden md:block" />
    </div>
  );
}

/*
 * The request path left to right — front end, services, stores — which
 * stacks top to bottom on a phone.
 */
function Architecture() {
  const { client, services, stores } = bankflow.architecture;

  return (
    <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_1.35fr_auto_1fr] md:items-center">
      <Node {...client} />
      <Arrow />
      <div className="grid gap-2">
        {services.map((s) => (
          <Node key={s.name} {...s} />
        ))}
      </div>
      <Arrow />
      <div className="grid gap-2">
        {stores.map((s) => (
          <Node key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}
