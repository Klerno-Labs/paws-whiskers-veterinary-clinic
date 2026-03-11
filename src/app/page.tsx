import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import HeroSplit from "@/components/sections/hero-split";
import TrustBar from "@/components/sections/trust-bar";
import ServicesBento from "@/components/sections/services-bento";
import TeamGrid from "@/components/sections/team-grid";
import Testimonials from "@/components/sections/testimonials";
import CTASection from "@/components/sections/cta-section";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSplit
          badge="New Patient Offer"
          title="Compassionate Care for Your Best Friend"
          description="We provide a wide range of veterinary services to keep your pets healthy and happy."
          primaryCta={{ label: "Book Appointment", onClick: () => {} }}
          secondaryCta={{ label: "Virtual Tour", onClick: () => {} }}
          imageUrl={images.hero.src}
        />
        <TrustBar />
        <ServicesBento />
        <TeamGrid />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}