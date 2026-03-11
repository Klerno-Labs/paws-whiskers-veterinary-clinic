import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Home | Paws & Whiskers Veterinary Clinic",
  description: "Compassionate care for your best friends.",
  openGraph: {
    title: "Home | Paws & Whiskers Veterinary Clinic",
    description: "Compassionate care for your best friends.",
    url: "https://example.com",
    images: [images.hero.src],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSplit />
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