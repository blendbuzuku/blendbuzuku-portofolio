import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="py-32">
      <h2 className="text-4xl font-bold mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {portfolio.skills.map((skill) => (
          <div
            key={skill}
            className="px-5 py-3 rounded-full border border-zinc-700"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}