import { Metadata } from "next";
import HeroSplit from "@/components/sections/hero-split";
import TrustBar from "@/components/sections/trust-bar";
import ServicesBento from "@/components/sections/services-bento";
import TeamGrid from "@/components/sections/team-grid";
import Testimonials from "@/components/sections/testimonials";
import CTASection from "@/components/sections/cta-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  openGraph: {
    images: ["https://images.unsplash.com/photo-1548199973-03cce0bbc87b"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSplit />
      <TrustBar />
      <ServicesBento />
      <TeamGrid />
      <Testimonials />
      <CTASection 
        title="Your Pet Deserves the Best" 
        subtitle="Join our family of happy pets and their owners. Schedule your visit today."
      />
    </>
  );
}