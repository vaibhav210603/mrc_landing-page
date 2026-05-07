import mission from "@/assets/mission-hands.jpg";

export function Mission() {
  return (
    <section id="mission" className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-accent mb-6">
            Our Mission
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl leading-[1.1] text-primary">
            Building agriculture that pays its respects —
            <span className="italic"> to soil, to capital, and to the century ahead.</span>
          </h2>
          <p className="mt-8 text-foreground/75 leading-relaxed text-lg">
            We believe Indian farming deserves a model that is economical,
            sustainable, profitable, and scalable — without compromise. No
            chemicals. No debt. No shortcuts. Just patient, regenerative work
            that compounds over time.
          </p>
          <div className="mt-10 flex items-center gap-4 text-sm text-foreground/60">
            <span className="h-px w-12 bg-foreground/30" />
            MRC Agrotech Ltd
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
          <img
            src={mission}
            alt="Hands holding aromatic herbs and rich soil"
            width={1024}
            height={1024}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur p-5 border-l-2 border-accent">
            <p className="font-serif italic text-primary text-lg leading-snug">
              "Soil is not a resource. It is an inheritance."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
