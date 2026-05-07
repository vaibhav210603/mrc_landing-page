export function CTASection() {
  return (
    <section id="contact" className="py-28 lg:py-40 bg-[var(--forest-deep)] text-cream relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-accent mb-6">
          Let's Build
        </p>
        <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05]">
          Ready to build a greener future
          <span className="italic"> together?</span>
        </h2>
        <p className="mt-6 text-cream/75 max-w-xl mx-auto leading-relaxed">
          We partner with investors, agri-collaborators, and conscious buyers
          who share our long view.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:contact@mrcagro.com"
            className="px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-medium hover:translate-y-[-1px] transition-transform"
          >
            Contact Us
          </a>
          <a
            href="https://mrcagro.com"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 rounded-full border border-cream/30 hover:bg-cream/10 transition-colors text-sm"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}
