import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Mission } from "@/components/Mission";
import { TemiTeaSection } from "@/components/TemiTeaSection";
import { CropCards } from "@/components/CropCards";
import { CTASection } from "@/components/CTASection";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Future of Agriculture — MRC Agro" },
      {
        name: "description",
        content:
          "MRC Agrotech Ltd: chemical-free, sustainable, regenerative aromatic crop farming. 8+ years of legacy in economical and scalable agriculture.",
      },
      { property: "og:title", content: "Future of Agriculture — MRC Agro" },
      {
        property: "og:description",
        content:
          "Regenerative, chemical-free aromatic crop farming at commercial scale. 100% sustainable since 2015.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StatsBar />
      <Mission />
      <TemiTeaSection />
      <CropCards />
      <CTASection />
      <NewsSection />
      <Footer />
    </main>
  );
}
