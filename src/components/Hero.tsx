import hero from "@/assets/hero-field.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      <img
        src={hero}
        alt="Aromatic herb fields at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)]/95 via-[var(--forest)]/40 to-transparent" />
      <div className="absolute inset-0 grain" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28 pt-32 w-full">
        <div className="max-w-3xl">
          <p className="text-cream/80 text-xs tracking-[0.25em] uppercase mb-6">
            Est. 2015 — Regenerative Agriculture, India
          </p>
          <h1 className="font-serif text-cream text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Farming the Future,{" "}
            <span className="italic text-[color:color-mix(in_oklab,var(--amber-earth)_85%,white)]">
              Naturally.
            </span>
          </h1>
          <p className="mt-6 text-cream/85 text-lg max-w-xl leading-relaxed">
            Chemical-free, commercial-scale aromatic crop farming — built debt-free
            across 100+ acres. An economical, sustainable model for the next
            century of Indian agriculture.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-medium hover:translate-y-[-1px] transition-transform"
            >
              Partner With Us
            </a>
            <a
              href="#mission"
              className="px-7 py-3.5 rounded-full border border-cream/30 text-cream hover:bg-cream/10 transition-colors text-sm"
            >
              Our Philosophy →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
