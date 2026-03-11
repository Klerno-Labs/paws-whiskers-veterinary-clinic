import { TeamGrid } from "@/components/sections/team-grid";
import { CtaSection } from "@/components/sections/cta-section";

export default function Team() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-16">Meet Our Team</h1>
      <TeamGrid />
      <CtaSection />
    </>
  );
}