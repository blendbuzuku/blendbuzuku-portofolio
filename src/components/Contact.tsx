import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./icons/Brand";
import CopyEmail from "./CopyEmail";
import SectionHeading from "./SectionHeading";

const card =
  "group flex h-full items-start gap-4 rounded-2xl border border-line bg-deep/60 p-5 transition-colors hover:border-line-strong hover:bg-deep";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-panel text-signal">
      {children}
    </span>
  );
}

/*
 * Every way to reach me as an equal card, each showing the actual address or
 * number so it can be read and noted without clicking.
 */
export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-20">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch"
        intro="Reach me whichever way suits you — email is the quickest."
      />

      <ul className="grid gap-4 sm:grid-cols-2">
        <li>
          <div className={card}>
            <Badge>
              <Mail size={20} />
            </Badge>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-muted">Email</p>
              <a
                href={`mailto:${portfolio.email}`}
                className="mt-0.5 block truncate font-medium text-text hover:text-signal"
              >
                {portfolio.email}
              </a>
              <div className="mt-3">
                <CopyEmail email={portfolio.email} />
              </div>
            </div>
          </div>
        </li>

        <li>
          <a href={portfolio.phone.href} className={card}>
            <Badge>
              <Phone size={20} />
            </Badge>
            <div className="flex-1">
              <p className="text-sm text-muted">Phone</p>
              <p className="mt-0.5 font-medium text-text group-hover:text-signal">{portfolio.phone.display}</p>
              <p className="mt-3 text-xs text-faint">Call me</p>
            </div>
          </a>
        </li>

        <li>
          <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" className={card}>
            <Badge>
              <LinkedInIcon size={20} />
            </Badge>
            <div className="flex-1">
              <p className="text-sm text-muted">LinkedIn</p>
              <p className="mt-0.5 font-medium text-text group-hover:text-signal">Blend Buzuku</p>
            </div>
            <ArrowUpRight size={18} className="text-faint group-hover:text-signal" aria-hidden="true" />
          </a>
        </li>

        <li>
          <a href={portfolio.github} target="_blank" rel="noopener noreferrer" className={card}>
            <Badge>
              <GitHubIcon size={20} />
            </Badge>
            <div className="flex-1">
              <p className="text-sm text-muted">GitHub</p>
              <p className="mt-0.5 font-medium text-text group-hover:text-signal">blendbuzuku</p>
            </div>
            <ArrowUpRight size={18} className="text-faint group-hover:text-signal" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </section>
  );
}
