"use client";

import { useEffect, useState } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./icons/Brand";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#side-project", label: "Side project" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /*
   * The link for the section being read is marked, so the bar says where you
   * are on a page this long rather than only where you could go.
   */
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((s): s is Element => s !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /*
   * While the mobile menu is open the page behind it stays put, and Escape
   * closes it, as any overlay should.
   */
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // A menu left open would cover the page after jumping to a section.
  const close = () => setOpen(false);

  return (
    <nav
      aria-label="Main"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5" onClick={close}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-signal font-display text-sm font-bold text-ink">
            BB
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-text">
            {portfolio.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.slice(0, -1).map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "true" : undefined}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                active === l.href ? "text-text" : "text-muted hover:text-text"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 rounded-lg border border-line-strong px-4 py-2 text-sm font-medium text-text transition-colors hover:border-signal hover:text-signal"
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <a
            href={portfolio.phone.href}
            aria-label={`Call ${portfolio.phone.display}`}
            className="grid h-10 w-10 place-items-center rounded-lg text-soft"
          >
            <Phone size={20} />
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg text-soft"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto border-t border-line bg-ink px-6 pb-8 pt-4 md:hidden"
        >
          <ul className="flex-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  aria-current={active === l.href ? "true" : undefined}
                  className={`flex items-center justify-between border-b border-line py-4 text-lg ${
                    active === l.href ? "font-medium text-text" : "text-soft"
                  }`}
                >
                  {l.label}
                  {active === l.href && <span className="h-1.5 w-1.5 rounded-full bg-signal" />}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <a
              href={portfolio.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-signal py-3.5 text-base font-semibold text-ink"
            >
              <Phone size={18} />
              Call me
            </a>
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-line-strong py-3.5 text-base font-medium text-text"
            >
              <Mail size={18} />
              Email me
            </a>
          </div>

          <p className="mt-4 text-center text-sm text-muted">{portfolio.phone.display}</p>

          <div className="mt-5 flex justify-center gap-3">
            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-lg border border-line text-soft"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-lg border border-line text-soft"
            >
              <GitHubIcon size={18} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
