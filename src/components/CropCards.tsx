import { useState } from "react";
import lemongrassImg from "@/assets/lemongrass.png";
import palmarosaImg from "@/assets/palmarosa.png";
import peppermintImg from "@/assets/peppermint.png";
import ajwainImg from "@/assets/ajwain.png";
import cinnamonImg from "@/assets/cinnamon.png";
import guarGumImg from "@/assets/guar_gum_products.png";
import nano1Img from "@/assets/Nano-1.jpg";
import nano2Img from "@/assets/Nano-2.jpg";
import nano3Img from "@/assets/Nano-3.jpg";
import nano4Img from "@/assets/Nano-4.jpg";
import nano5Img from "@/assets/Nano-5.jpg";
import nanoFertilizerImg from "@/assets/nano_fertilizer.png";
import cottonImg from "@/assets/cotton.jpg";
import maizeImg from "@/assets/maize.jpg";
import mustardImg from "@/assets/mustard.jpg";
import paddyImg from "@/assets/paddy.jpg";
import wheatImg from "@/assets/wheat.jpg";

const categories = [
  {
    name: "Essential Oils",
    description: "Pure, high-potency aromatic extracts for global markets.",
    image: palmarosaImg,
    externalUrl: "https://www.mrcagro.com/offering/essential-oils",
    products: [
      { name: "Palmarosa", note: "Sweet-rose aromatic, prized in perfumery.", image: palmarosaImg },
      { name: "Peppermint", note: "Refreshing and versatile aromatic oil.", image: peppermintImg },
      { name: "Ajwain", note: "Traditional medicinal and aromatic properties.", image: ajwainImg },
      { name: "Cinnamon", note: "Warm, spicy aroma for high-end markets.", image: cinnamonImg },
    ],
  },
  {
    name: "Lemongrass",
    description: "Premium lemongrass products cultivated for diverse industrial use.",
    image: lemongrassImg,
    externalUrl: "https://www.mrcagro.com/offering/lemongrass",
    products: [
      { name: "Lemongrass Cuts", note: "Carefully harvested and processed dried cuts.", image: lemongrassImg },
      { name: "Lemongrass Oil", note: "Steam-distilled pure essential oil.", image: lemongrassImg },
    ],
  },
  {
    name: "Seeds",
    description: "High-yield, climate-resilient seeds for sustainable farming.",
    image: paddyImg,
    externalUrl: "https://www.mrcagro.com/offering/seeds",
    products: [
      { name: "Cotton", note: "Superior lint quality and pest resistance.", image: cottonImg },
      { name: "Maize", note: "High-energy yield for food and industrial use.", image: maizeImg },
      { name: "Mustard", note: "Oil-rich seeds with high disease tolerance.", image: mustardImg },
      { name: "Paddy", note: "Short-grain and aromatic rice varieties.", image: paddyImg },
      { name: "Wheat", note: "Protein-rich, high-performance cereal grain.", image: wheatImg },
    ],
  },
  {
    name: "Fertilizers",
    description: "Sustainable nano-technology solutions for modern agriculture.",
    image: nanoFertilizerImg,
    externalUrl: "https://www.mrcagro.com/offering/fertilizers",
    products: [
      { name: "Nano Manganese Liquid", note: "20000 PPM - Corrects manganese deficiency.", image: nano1Img },
      { name: "Nano Potash Liquid", note: "Upgrades soil fertility and crop quality.", image: nano2Img },
      { name: "Nano Copper Liquid", note: "4000 PPM - Systemic protection and growth.", image: nano3Img },
      { name: "Nano Urea Liquid", note: "Efficient nitrogen for plant productivity.", image: nano4Img },
      { name: "Nano Zinc Liquid", note: "50000 PPM - Efficiency and deficiency correction.", image: nano5Img },
    ],
  },
  {
    name: "Guar Gum",
    description: "High-quality natural thickeners and stabilizers.",
    image: guarGumImg,
    externalUrl: "https://www.mrcagro.com/offering",
    products: [
      { name: "Guar Gum Powder", note: "Premium grade industrial thickener.", image: guarGumImg },
      { name: "Guar Gum Splits", note: "High-purity raw material for processing.", image: guarGumImg },
    ],
  },
];

export function CropCards() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <section id="crops" className="py-16 lg:py-24 bg-secondary/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="flex-1 min-w-[300px]">
            <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">
              What We Grow
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-primary max-w-xl leading-tight">
              A portfolio of <span className="italic">aromatic crops.</span>
            </h2>
          </div>
          <p className="max-w-sm text-foreground/65 leading-relaxed">
            Organized into core sectors to meet global agricultural and industrial needs
            with sustainable, high-yield solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(cat.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a 
                href={cat.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5 lg:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-serif text-xl text-primary">{cat.name}</h3>
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`transition-transform duration-300 ${activeDropdown === cat.name ? "rotate-180" : ""}`}
                        >
                          <path
                            d="M2 5L8 11L14 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-[12px] text-foreground/65 leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </a>

              {activeDropdown === cat.name && (
                <div className="absolute top-full left-0 right-0 z-20 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-background border border-border shadow-2xl rounded-2xl overflow-hidden p-2 pointer-events-auto">
                    <div className="flex flex-col gap-1">
                      {cat.products.map((prod) => (
                        <a
                          key={prod.name}
                          href={cat.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-secondary transition-colors group/item block"
                        >
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-secondary/30 flex-shrink-0">
                            <img
                              src={prod.image}
                              alt={prod.name}
                              className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-[11px] font-bold text-primary truncate">{prod.name}</h4>
                            <p className="text-[9px] text-foreground/50 truncate">{prod.note}</p>
                          </div>
                        </a>
                      ))}
                      <a
                        href={cat.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 mt-1 rounded-xl bg-primary/5 hover:bg-primary text-primary hover:text-primary-foreground transition-all group/all"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider">Explore All {cat.name}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/all:translate-x-1 transition-transform">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
