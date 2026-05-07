import mission from "@/assets/mission-hands.jpg";
import { ExternalLink, ShieldCheck } from "lucide-react";

export function Mission() {
  return (
    <section id="mission" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xs tracking-[0.25em] uppercase text-accent font-semibold">
              Our Mission
            </p>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary text-primary text-[10px] font-bold tracking-wider uppercase border border-primary/10">
              <ShieldCheck className="w-3 h-3 text-accent" />
              BSE Listed: 540809
            </div>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-5xl leading-[1.1] text-primary">
           Cultivating a
<span className="italic">  Sustainable Future</span>           
          </h2>

          <div className="mt-8 space-y-6">
            <p className="text-foreground/75 leading-relaxed text-lg">
              We believe Indian farming deserves a model that is economical,
              sustainable, profitable, and scalable — without compromise. No
              chemicals. No shortcuts. Just patient, regenerative work
              that compounds over time.
            </p>
          <div className="mt-10 flex items-center gap-4 text-sm text-foreground/60">
            <span className="h-px w-12 bg-foreground/30" />
              MRC Agrotech Ltd
            </div>
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
            <p className="font-serif  text-primary text-lg leading-snug">
              "Pioneers in Aromatic Agriculture"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
