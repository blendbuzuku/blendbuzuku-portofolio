import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div>
        <p className="text-blue-500 font-semibold mb-4">
          {portfolio.role}
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          {portfolio.name}
        </h1>

        <p className="text-xl text-zinc-400 max-w-3xl">
          {portfolio.summary}
        </p>

        <div className="flex gap-4 mt-10">
          <a
            href="/Blend_Buzuku_CV.pdf"
            download
            className="bg-white text-black px-6 py-3 rounded-lg font-medium"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="border border-zinc-700 px-6 py-3 rounded-lg"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}