const crops = [
  { name: "Lemongrass", note: "Resilient, high-yield essential oil source.", glyph: "❋" },
  { name: "Palmarosa", note: "Sweet-rose aromatic, prized in perfumery.", glyph: "✿" },
  { name: "Vetiver", note: "Deep-rooted, soil-restoring, and grounding.", glyph: "❦" },
  { name: "Citronella", note: "Bright citrus notes with global demand.", glyph: "✤" },
];

export function CropCards() {
  return (
    <section id="crops" className="py-28 lg:py-36 bg-secondary/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">
              What We Grow
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-primary max-w-xl leading-tight">
              A portfolio of <span className="italic">aromatic crops.</span>
            </h2>
          </div>
          <p className="max-w-sm text-foreground/65 leading-relaxed">
            Selected for climate fit, market demand, and their natural ability
            to regenerate the land they grow on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
          {crops.map((c) => (
            <article
              key={c.name}
              className="bg-card p-8 lg:p-10 group hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
            >
              <div className="text-accent text-3xl mb-12 group-hover:text-cream transition-colors">
                {c.glyph}
              </div>
              <h3 className="font-serif text-2xl mb-3">{c.name}</h3>
              <p className="text-sm text-foreground/65 group-hover:text-cream/70 leading-relaxed transition-colors">
                {c.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
