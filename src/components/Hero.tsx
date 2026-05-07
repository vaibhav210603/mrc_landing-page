import hero from "@/assets/hero-field.jpg";
import logo from "@/assets/MRC.png";

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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-end">
          <div className="max-w-3xl flex-1">
            <p className="text-cream/80 text-xs tracking-[0.25em] uppercase mb-6">
              Est. 2015 — Regenerative Agriculture
            </p>
            <h1 className="font-serif text-cream text-6xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
              Future of <br />
              <span className="italic text-accent">Agriculture.</span>
            </h1>
            <div className="space-y-6 max-w-2xl">
              <p className="text-cream/85 text-xl leading-relaxed">
                We produce high-quality agricultural products and natural essential oils through sustainable practices that prioritize soil conservation and biodiversity.
              </p>
              <p className="text-accent font-serif italic text-2xl border-l-2 border-accent pl-6 py-1">
                "Get the best of India from the best."
              </p>
            </div>
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
          
          <div className="flex justify-center lg:justify-start -translate-y-60 lg:-ml-80">
            <img 
              src={logo} 
              alt="MRC Logo Signature" 
              className="h-48 lg:h-72 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
