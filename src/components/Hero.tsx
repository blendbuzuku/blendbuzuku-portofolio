import fs from "node:fs";
import path from "node:path";
import { Download, Mail, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./icons/Brand";

const secondary =
  "inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-soft";

/*
 * Who, what, and how to reach them — on the first screen, once each. The
 * facts someone would otherwise scroll for sit beside it.
 */
export default function Hero() {
  const current = portfolio.experience.find((e) => e.current);

  /*
   * The CV button appears only when the file is really there — a download
   * that 404s is worse than no button. Checked on render rather than once at
   * import, so dropping the PDF into public/ shows the button without a restart.
   */
  const hasCv = fs.existsSync(path.join(process.cwd(), "public", portfolio.cvPath));

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-10 pt-28 md:pt-36">
      <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-center">
        <div>
          <p className="text-sm text-muted">
            <span className="font-medium text-signal">{portfolio.role}</span>
            <span className="mx-2 text-faint">·</span>
            {portfolio.location}
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] text-text md:text-[4rem]">
            {portfolio.name}
          </h1>

          <p className="mt-5 max-w-xl text-xl leading-snug text-text md:text-2xl">{portfolio.tagline}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-[17px]">{portfolio.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-signal px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-signal-strong"
            >
              <Mail size={16} />
              Email me
            </a>
            <a href={portfolio.phone.href} className={secondary}>
              <Phone size={16} />
              Call me
            </a>
            {hasCv && (
              <a href={portfolio.cvPath} download className={secondary}>
                <Download size={16} />
                Download CV
              </a>
            )}
            {/* The two icons wrap as a pair, so neither ends up alone on a line. */}
            <div className="flex items-center gap-3">
              <span className="mx-1 hidden h-6 w-px bg-line sm:block" aria-hidden="true" />
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-lg border border-line-strong text-soft transition-colors hover:border-soft hover:text-text"
              >
                <LinkedInIcon size={17} />
              </a>
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="grid h-10 w-10 place-items-center rounded-lg border border-line-strong text-soft transition-colors hover:border-soft hover:text-text"
              >
                <GitHubIcon size={17} />
              </a>
            </div>
          </div>
        </div>

        <dl className="rounded-2xl border border-line bg-deep p-6">
          {current && (
            <div className="border-b border-line pb-4">
              <dt className="text-xs uppercase tracking-wider text-faint">Currently</dt>
              <dd className="mt-1 font-medium text-text">{current.role}</dd>
              <dd className="text-sm text-muted">{current.company}</dd>
            </div>
          )}
          {portfolio.facts.map((f) => (
            <div key={f.label} className="flex justify-between gap-4 border-b border-line py-3 text-sm last:border-b-0 last:pb-0">
              <dt className="text-muted">{f.label}</dt>
              <dd className="text-right text-text">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
