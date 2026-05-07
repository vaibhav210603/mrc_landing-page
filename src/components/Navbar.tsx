import { useEffect, useState } from "react";

const links = [
  { label: "Mission", href: "#mission" },
  { label: "Crops", href: "#crops" },
  { label: "Approach", href: "#approach" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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
          ? "bg-background/85 backdrop-blur-md border-b hairline"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          <span className="font-serif text-xl tracking-tight text-primary">
            MRC <span className="italic font-medium">Agro</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-[var(--forest-deep)] transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </nav>
    </header>
  );
}
