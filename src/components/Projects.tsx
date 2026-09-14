import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="What I've built at work"
        intro="Built across different teams and domains — from monitoring and messaging services to desktop tools and analytics."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="flex flex-col rounded-2xl border border-line bg-deep/60 p-6">
            <h3 className="text-lg font-semibold text-text">{project.title}</h3>
            <p className="mt-0.5 text-sm text-muted">{project.company}</p>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-soft">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {project.tech.map((item) => (
                <li key={item} className="rounded-md bg-panel px-2 py-0.5 font-mono text-xs text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
