import { portfolio } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <ol className="space-y-4">
        {portfolio.experience.map((job) => (
          <li key={job.company} className="rounded-2xl border border-line bg-deep/60 p-6 md:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-xl font-semibold text-text">{job.role}</h3>
              <p className="flex items-center gap-2 text-sm text-muted">
                {job.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-settle/10 px-2 py-0.5 text-xs font-medium text-settle">
                    <span className="h-1.5 w-1.5 rounded-full bg-settle" />
                    Current
                  </span>
                )}
                {job.period}
              </p>
            </div>
            <p className="mt-1 font-medium text-signal">{job.company}</p>
            {job.points.length > 0 && (
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-soft marker:text-faint">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
