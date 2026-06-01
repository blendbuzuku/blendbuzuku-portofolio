import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="py-32">
      <h2 className="text-4xl font-bold mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              border
              border-zinc-800
              bg-zinc-900
              rounded-2xl
              p-6
              hover:border-blue-500
              transition
            "
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-zinc-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="
                    text-sm
                    px-3
                    py-1
                    rounded-full
                    bg-zinc-800
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}