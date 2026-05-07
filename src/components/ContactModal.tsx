import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

interface ContactModalProps {
  children: React.ReactNode;
}

export function ContactModal({ children }: ContactModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-none shadow-2xl">
        <div className="grid md:grid-cols-2">
          <div className="p-8 lg:p-10 bg-background">
            <DialogHeader className="mb-8">
              <DialogTitle className="font-serif text-3xl text-primary">Get In Touch</DialogTitle>
              <p className="text-sm text-foreground/60">
                Fill out the form below and our team will get back to you shortly.
              </p>
            </DialogHeader>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-wider text-foreground/50">Full Name</Label>
                <Input id="name" placeholder="" className="bg-secondary/30 border-none focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-foreground/50">Phone Number</Label>
                <Input id="phone" placeholder="+91 ..." className="bg-secondary/30 border-none focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase tracking-wider text-foreground/50">Email Address</Label>
                <Input id="email" type="email" placeholder="" className="bg-secondary/30 border-none focus-visible:ring-primary" />
              </div>
              <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors mt-4">
                Send Message
              </button>
            </form>
          </div>
          <div className="p-8 lg:p-10 bg-primary text-primary-foreground flex flex-col justify-center space-y-8">
            <div>
              <h3 className="font-serif text-2xl mb-6">Or Reach Out Directly</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-1">Visit</p>
                    <p className="text-sm leading-relaxed">
                      Block 404, 4th floor, Sagar Tech Plaza,<br />
                      Mumbai, 400072
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-1">Call</p>
                    <p className="text-sm">022 - 40156765</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-1">Email</p>
                    <p className="text-sm underline text-primary-foreground">connect@mrcagro.com</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 flex gap-4 border-t border-primary-foreground/10">
                <a 
                  href="https://www.linkedin.com/company/mrcagrotech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/people/MRC-Agrotech-Ltd/61581326431597/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/mrcagrotech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="pt-8 border-t border-primary-foreground/10">
              <p className="text-xs text-primary-foreground/60 leading-relaxed italic">
                "Cultivating partnerships that drive sustainable agricultural innovation."
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
