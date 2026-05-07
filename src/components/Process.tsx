const steps = [
  { n: "01", title: "Seed", body: "Climate-matched cultivars, sourced for resilience and oil yield." },
  { n: "02", title: "Grow", body: "Regenerative practices — cover crops, compost, no synthetic inputs." },
  { n: "03", title: "Harvest", body: "Hand-timed cuts at peak aromatic concentration." },
  { n: "04", title: "Deliver", body: "Steam-distilled oils, traceable from field to flacon." },
];

export function Process() {
  return (
    <section id="approach" className="py-28 lg:py-36 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-20">
          <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">
            Our Approach
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
            From a single seed <span className="italic">to a finished oil.</span>
          </h2>
        </div>

        <ol className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
          <div className="hidden md:block absolute top-3 left-0 right-0 h-px bg-cream/20" />
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent ring-4 ring-primary relative z-10" />
                <span className="text-xs tracking-[0.2em] text-cream/60">{s.n}</span>
              </div>
              <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
              <p className="text-cream/75 text-sm leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
