import { HeroSplit } from "@/components/sections/hero-split";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesBento } from "@/components/sections/services-bento";
import { TeamGrid } from "@/components/sections/team-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSplit />
      <TrustBar />
      <ServicesBento />
      <TeamGrid />
      <Testimonials />
      <CtaSection />
    </>
  );
}