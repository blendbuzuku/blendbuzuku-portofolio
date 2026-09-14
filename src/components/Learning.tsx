import { portfolio } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

/*
 * What I'm learning now, kept out of the skills list on purpose — it reads as
 * work in progress, not as something I already claim to know.
 */
export default function Learning() {
  const { topic, intro, items } = portfolio.learning;

  return (
    <section id="learning" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <SectionHeading eyebrow="Currently learning" title={topic} intro={intro} />

      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.name} className="rounded-xl border border-dashed border-line-strong p-5">
            <p className="font-medium text-text">{item.name}</p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-soft">{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
