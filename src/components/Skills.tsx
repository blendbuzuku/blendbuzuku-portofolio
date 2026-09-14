import { portfolio } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <SectionHeading eyebrow="Skills" title="What I work with" />

      <dl className="divide-y divide-line rounded-2xl border border-line bg-deep/60">
        {portfolio.skills.map((group) => (
          <div key={group.group} className="grid gap-2 px-6 py-4 md:grid-cols-[200px_1fr] md:items-center">
            <dt className="text-sm font-medium text-muted">{group.group}</dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-md border border-line px-2.5 py-1 text-sm text-soft">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
