import { ServicesBento } from "@/components/sections/services-bento";
import { CtaSection } from "@/components/sections/cta-section";

export default function Services() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-16">Our Services</h1>
      <ServicesBento />
      <CtaSection />
    </>
  );
}