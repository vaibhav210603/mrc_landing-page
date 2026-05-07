const stats = [
  { k: "2015", v: "Established" },
   { k: "BSE", v: "Listed" },
  { k: "8+", v: "Years Legacy" },
  { k: "100%", v: "Sustainability" },
  { k: "0%", v: "Chemicals" },
 
];

export function StatsBar() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6">
        {stats.map((s, i) => (
          <div
            key={s.v}
            className={`text-center md:text-left ${
              i !== 0 ? "md:border-l md:border-cream/15 md:pl-8" : ""
            }`}
          >
            <div className="font-serif text-4xl md:text-5xl tracking-tight">{s.k}</div>
            <div className="mt-2 text-xs tracking-[0.2em] uppercase text-cream/65">
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
