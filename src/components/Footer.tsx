import logo from "@/assets/MRC_LOGO.png";
import { Linkedin, Facebook, Instagram, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-primary/80 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex flex-col gap-6 mb-8">
            <img src={logo} alt="MRC Logo" className="h-24 w-auto object-contain opacity-100 self-start" />
            <div className="flex flex-col">
              <span className="font-serif text-3xl text-primary tracking-tight leading-none">
                MRC Agrotech Ltd
              </span>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary/65">
                Economical, sustainable, profitable, and scalable
                aromatic crop farming. Debt-free since 2015.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-primary text-sm tracking-[0.2em] uppercase mb-4">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-primary/65">
            <li>
              <p className="text-[10px] uppercase tracking-widest text-accent mb-1">Email</p>
              <a href="mailto:connect@mrcagro.com" className="hover:text-accent transition-colors">connect@mrcagro.com</a>
            </li>
            <li>
              <p className="text-[10px] uppercase tracking-widest text-accent mb-1">Call</p>
              <p>022 - 40156765</p>
            </li>
            <li>
              <p className="text-[10px] uppercase tracking-widest text-accent mb-1">Visit</p>
              <p className="leading-relaxed">
                Block 404, 4th floor,<br />
                Sagar Tech Plaza,<br />
                Mumbai, 400072
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-primary text-sm tracking-[0.2em] uppercase mb-4">
            Follow
          </h4>
          <ul className="space-y-3 text-sm text-primary/65">
            <li>
              <a 
                href="https://www.linkedin.com/company/mrcagrotech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.facebook.com/people/MRC-Agrotech-Ltd/61581326431597/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/mrcagrotech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a 
                href="https://mrcagro.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>mrcagro.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary/10 py-6 text-center text-xs text-primary/40">
        © {new Date().getFullYear()} MRC Agrotech Ltd. All rights reserved.
      </div>
    </footer>
  );
}
