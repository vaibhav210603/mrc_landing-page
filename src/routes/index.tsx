import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Mission } from "@/components/Mission";
import { CropCards } from "@/components/CropCards";
import { Pillars } from "@/components/Pillars";
import { Process } from "@/components/Process";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MRC Agro — Farming the Future, Naturally" },
      {
        name: "description",
        content:
          "MRC Agrotech Ltd: chemical-free, debt-free, regenerative aromatic crop farming across 100+ acres. Economical, sustainable, profitable, scalable.",
      },
      { property: "og:title", content: "MRC Agro — Farming the Future, Naturally" },
      {
        property: "og:description",
        content:
          "Regenerative, chemical-free aromatic crop farming at commercial scale. Debt-free since 2015.",
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
      <CropCards />
      <Pillars />
      <Process />
      <CTASection />
      <Footer />
    </main>
  );
}
