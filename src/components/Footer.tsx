import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {portfolio.name}</p>
        <a href="#top" className="transition-colors hover:text-soft">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
