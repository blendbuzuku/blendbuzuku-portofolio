export default function Stats() {
  const stats = [
    { label: "Emails/min", value: "500+" },
    { label: "Delivery reliability", value: "99.98%" },
    { label: "Failure reduction", value: "82%" },
    { label: "TIPS processing", value: "< 10s" },
  ];

  return (
    <section className="py-32">
      <div className="grid md:grid-cols-4 gap-6">

        {stats.map((s) => (
          <div
            key={s.label}
            className="border border-zinc-800 rounded-2xl p-6"
          >
            <div className="text-3xl font-bold text-blue-400">
              {s.value}
            </div>
            <div className="text-zinc-400 mt-2">
              {s.label}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}