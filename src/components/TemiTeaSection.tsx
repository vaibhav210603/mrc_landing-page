import { CheckCircle2 } from "lucide-react";
import { BulkEnquiryModal } from "./BulkEnquiryModal";
import temiTeaImg1 from "@/assets/temi_tea.jpeg";
import temiTeaImg2 from "@/assets/temi_tea.png";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TemiTeaSection() {
  return (
    <section id="temi-tea" className="py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs tracking-[0.25em] uppercase text-accent mb-6 font-semibold">
              Exclusive Partnership
            </p>
            <h2 className="font-serif text-4xl lg:text-6xl text-primary leading-tight mb-8">
              Grab Sikkim's <span className="italic">authentic Temi Tea</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              {[
                "Government Owned Tea Garden",
                "Exclusive and Premium Himalayan Tea",
                "100% Genuine",
                "Geo Tagged",
                "Global Recognition"
              ].map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              <a 
                href="https://temiteaestate.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              >
                Quick Buy Now
              </a>
              <BulkEnquiryModal>
                <button className="px-8 py-4 rounded-full border border-primary/20 text-primary font-medium hover:bg-primary/5 transition-colors">
                  Enquire for Bulk
                </button>
              </BulkEnquiryModal>
            </div>
          </div>

          <div className="order-1 lg:order-2 px-12 lg:px-0">
            <Carousel 
              className="w-full max-w-xl mx-auto"
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
            >
              <CarouselContent>
                {[temiTeaImg1, temiTeaImg2].map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl relative group">
                      <img 
                        src={img} 
                        alt={`Premium Temi Tea Packaging ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious className="-left-12 border-primary/10 text-primary hover:bg-primary/5" />
                <CarouselNext className="-right-12 border-primary/10 text-primary hover:bg-primary/5" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
