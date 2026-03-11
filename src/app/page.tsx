import { HeroSplit } from "@/components/sections/hero-split"
import { ServicesBento } from "@/components/sections/services-bento"
import { TeamGrid } from "@/components/sections/team-grid"
import { Testimonials } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: "Compassionate Care for Your Best Friends. Full-service veterinary clinic in Denver.",
}

export default function Home() {
  return (
    <>
      <HeroSplit />
      <ServicesBento />
      <TeamGrid />
      <Testimonials />
      <CTASection />
    </>
  )
}