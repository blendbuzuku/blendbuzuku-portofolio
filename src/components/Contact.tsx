import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <h2 className="text-4xl font-bold mb-12">
        Contact
      </h2>

      <div className="space-y-6">

        <div className="flex items-center gap-4">

          <Mail size={20} />

          <a
            href="mailto:blend.buzuku@outlook.com"
            className="text-zinc-300"
          >
            blend.buzuku@outlook.com
          </a>

        </div>

        <div className="flex items-center gap-4">

          <Phone size={20} />

          <a
            href="tel:+38348113344"
            className="text-zinc-300"
          >
            +383 48 113 344
          </a>

        </div>

      </div>

      <div className="flex gap-4 mt-8">

  <a
    href="https://github.com/blendbuzuku"
    target="_blank"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/blend-buzuku-8a24393a7/"
    target="_blank"
  >
    LinkedIn
  </a>

</div>

    </section>
  );
}