export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <h2 className="text-4xl font-bold mb-16">
        Experience
      </h2>

      <div className="space-y-12">

        <div className="border-l-2 border-blue-500 pl-8">

          <h3 className="text-2xl font-semibold">
            Software Developer
          </h3>

          <p className="text-blue-500 mb-2">
            Best Vision Solutions & Services L.L.C.
          </p>

          <p className="text-zinc-400 mb-4">
            May 2026 — Present
          </p>

          {/* <ul className="space-y-2 text-zinc-300">

            <li>
            </li>

            <li>
            </li>

            <li>
            </li>

          </ul> */}

        </div>

        <div className="border-l-2 border-zinc-700 pl-8">

          <h3 className="text-2xl font-semibold">
            Software Developer | Product Specialist
          </h3>

          <p className="text-blue-500 mb-2">
            ASEE by Asseco
          </p>

          <p className="text-zinc-400 mb-4">
            Nov 2024 — May 2026
          </p>

          <ul className="space-y-2 text-zinc-300">

            <li>
              Building national payment systems and banking solutions.
            </li>

            <li>
              Working with TIPS, SWIFT, SEPA and ISO 20022.
            </li>

            <li>
              Developing secure financial APIs and automation systems.
            </li>

          </ul>

        </div>

        <div className="border-l-2 border-zinc-700 pl-8">

          <h3 className="text-2xl font-semibold">
            Software Developer
          </h3>

          <p className="text-blue-500 mb-2">
            KuBIT Solutions
          </p>

          <p className="text-zinc-400 mb-4">
            Oct 2022 — Nov 2024
          </p>

          <ul className="space-y-2 text-zinc-300">

            <li>
              Developed ERP, BI and POS solutions.
            </li>

            <li>
              Built APIs and reporting systems.
            </li>

            <li>
              Improved system performance and database efficiency.
            </li>

          </ul>

        </div>

      </div>
    </section>
  );
}