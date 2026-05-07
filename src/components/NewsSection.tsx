import { ExternalLink, Quote } from "lucide-react";
import newsImg from "@/assets/news_partnership.png";

export function NewsSection() {
  return (
    <section className="py-16 lg:py-20 bg-background relative overflow-hidden border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent font-bold">
                Press & Media
              </p>
              <h2 className="font-serif text-4xl lg:text-6xl text-primary tracking-tight">
                In the News
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[11px] text-foreground/40 font-medium">
                <span className="text-primary font-bold">Business Standard</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>May 30, 2025</span>
              </div>
              
              <h2 className="font-serif text-2xl lg:text-3xl text-primary leading-tight hover:text-accent transition-colors">
                <a 
                  href="https://www.business-standard.com/content/press-releases-ani/precision-farming-and-sustainable-development-is-here-for-the-farmers-125053001183_1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Precision Farming & Sustainable Development is Here for the Farmers
                </a>
              </h2>
              
              <p className="text-sm text-foreground/60 leading-relaxed max-w-2xl">
                MRC Agrotech Ltd. has entered into a strategic partnership with Vizexec Transformation Pvt. Ltd. 
                to bring cutting-edge satellite-based crop monitoring technology to India's agriculture sector.
              </p>
            </div>

            <div className="bg-secondary/15 p-6 rounded-2xl relative border-l-2 border-accent/30">
              <p className="text-sm lg:text-base font-serif italic text-primary/80 leading-relaxed italic">
                "Committed in carrying the company's vision in bringing cost effective solutions right in the hands of the farmers."
              </p>
              
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif text-sm">
                  A
                </div>
                <div className="text-[11px]">
                  <h4 className="font-bold text-primary">Mr. Ashokk Singh</h4>
                  <p className="text-foreground/40 uppercase tracking-wider">Chairman, MRC Agrotech Ltd.</p>
                </div>
              </div>
            </div>

            <div>
              <a 
                href="https://www.business-standard.com/content/press-releases-ani/precision-farming-and-sustainable-development-is-here-for-the-farmers-125053001183_1.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors group"
              >
                <span>Read Full Coverage</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[450px] flex-shrink-0">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-border shadow-xl relative group">
              <img 
                src={newsImg} 
                alt="MRC Strategic Partnership News" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
