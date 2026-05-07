const pillars = [
  {
    n: "01",
    title: "Economical",
    body: "A unit-economic model that respects capital — designed to outperform conventional farming on cost.",
  },
  {
    n: "02",
    title: "Sustainable",
    body: "Chemical-free, regenerative practices that improve soil health season after season.",
  },
  {
    n: "03",
    title: "Profitable",
    body: "Premium aromatic crops with steady demand, distilled into oils with high margin and global reach.",
  },
  {
    n: "04",
    title: "Scalable",
    body: "100+ acres operated debt-free — a blueprint engineered to expand without compromising principles.",
  },
];

export function Pillars() {
  return (
    <section className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">
            Why MRC
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-primary leading-tight">
            Four pillars. <span className="italic">One discipline.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {pillars.map((p) => (
            <div key={p.n} className="bg-background p-10 lg:p-14">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-serif text-accent text-sm">{p.n}</span>
                <h3 className="font-serif text-3xl text-primary">{p.title}</h3>
              </div>
              <p className="text-foreground/70 leading-relaxed max-w-md">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
