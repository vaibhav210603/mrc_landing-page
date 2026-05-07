import { useEffect, useState } from "react";
import logo from "@/assets/MRC_LOGO.png";
import nano1 from "@/assets/Nano-1.jpg";
import nano2 from "@/assets/Nano-2.jpg";
import nano3 from "@/assets/Nano-3.jpg";
import nano4 from "@/assets/Nano-4.jpg";
import nano5 from "@/assets/Nano-5.jpg";
import lemongrass from "@/assets/lemongrass.png";
import palmarosa from "@/assets/palmarosa.png";
import peppermint from "@/assets/peppermint.png";
import ajwain from "@/assets/ajwain.png";
import cinnamon from "@/assets/cinnamon.png";
import guarGum from "@/assets/guar_gum_products.png";
import { ContactModal } from "./ContactModal";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const links = [
  { label: "Mission", href: "#mission" },
  { label: "Products", href: "#crops", hasDropdown: true },
  { label: "Approach", href: "#approach" },
];

const categories = [
  {
    title: "Fertilizers",
    items: [
      { name: "Nano Fertilizer 1", image: nano1 },
      { name: "Nano Fertilizer 2", image: nano2 },
      { name: "Nano Fertilizer 3", image: nano3 },
      { name: "Nano Fertilizer 4", image: nano4 },
      { name: "Nano Fertilizer 5", image: nano5 },
    ],
  },
  {
    title: "Essential Oils",
    items: [
      { name: "Lemongrass", image: lemongrass },
      { name: "Palmarosa", image: palmarosa },
      { name: "Peppermint", image: peppermint },
      { name: "Ajwain", image: ajwain },
      { name: "Cinnamon", image: cinnamon },
      { name: "Guar Gum", image: guarGum },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b hairline shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img src={logo} alt="MRC Logo" className="h-10 w-auto object-contain" />
          <span className="font-serif text-xl tracking-tight text-primary">
            MRC <span className="italic font-medium">Agrotech Ltd</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10 h-full">
          {links.map((l) => (
            <div
              key={l.label}
              className="relative h-full flex items-center"
              onMouseEnter={() => l.hasDropdown && setShowDropdown(true)}
              onMouseLeave={() => l.hasDropdown && setShowDropdown(false)}
            >
              <a
                href={l.href}
                className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-1"
              >
                {l.label}
                {l.hasDropdown && (
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>

              {l.hasDropdown && showDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-background border border-border shadow-xl rounded-b-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="grid grid-cols-2 p-6 gap-8">
                    {categories.map((cat) => (
                      <div key={cat.title}>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                          {cat.title}
                        </h4>
                        <div className="space-y-3">
                          {cat.items.map((item) => (
                            <a
                              key={item.name}
                              href="#crops"
                              className="flex items-center gap-3 group/item p-2 rounded-md hover:bg-secondary/50 transition-colors"
                            >
                              <div className="w-12 h-12 rounded bg-secondary/30 overflow-hidden flex-shrink-0">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                />
                              </div>
                              <span className="text-sm font-medium text-foreground/80 group-hover/item:text-primary">
                                {item.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-secondary/30 p-4 text-center">
                    <a
                      href="#crops"
                      className="text-xs font-medium text-accent hover:underline"
                    >
                      View All Products
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center gap-4 ml-4">
            <a 
              href="https://www.linkedin.com/company/mrcagrotech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://www.facebook.com/people/MRC-Agrotech-Ltd/61581326431597/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-primary transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/mrcagrotech/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          <div className="w-px h-6 bg-border mx-2" />
          <ContactModal>
            <button className="text-sm font-medium px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Partner With Us
            </button>
          </ContactModal>
        </div>
      </nav>
    </header>
  );
}
