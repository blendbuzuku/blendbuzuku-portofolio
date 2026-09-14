type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

/** The label and title every section opens with. */
export default function SectionHeading({ eyebrow, title, intro }: Props) {
  return (
    <header className="mb-8">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-signal">{eyebrow}</p>
      <h2 className="text-2xl font-semibold text-text md:text-3xl">{title}</h2>
      {intro && <p className="mt-2 text-[15px] text-muted">{intro}</p>}
    </header>
  );
}
