export function Footer() {
  return (
    <footer className="bg-primary text-cream/80 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-accent" />
            <span className="font-serif text-xl text-cream">MRC Agro</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/65">
            MRC Agrotech Ltd — economical, sustainable, profitable, and scalable
            aromatic crop farming. Debt-free since 2015.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-cream text-sm tracking-[0.2em] uppercase mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-cream/65">
            <li>contact@mrcagro.com</li>
            <li>+91 00000 00000</li>
            <li>India</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-cream text-sm tracking-[0.2em] uppercase mb-4">
            Follow
          </h4>
          <ul className="space-y-2 text-sm text-cream/65">
            <li><a href="#" className="hover:text-accent">LinkedIn</a></li>
            <li><a href="#" className="hover:text-accent">Instagram</a></li>
            <li><a href="https://mrcagro.com" className="hover:text-accent">mrcagro.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} MRC Agrotech Ltd. All rights reserved.
      </div>
    </footer>
  );
}
