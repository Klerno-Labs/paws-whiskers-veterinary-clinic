import { HeroSplit } from "@/components/sections/hero-split";
import { ServicesBento } from "@/components/sections/services-bento";
import { TeamGrid } from "@/components/sections/team-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta-section";
import { metadata } from "@/app/layout"; // Reuse or customize

export default function Home() {
  return (
    <>
      <HeroSplit />
      <ServicesBento />
      <TeamGrid />
      <Testimonials />
      <CTASection />
    </>
  );
}