import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import TeamGrid from "@/components/sections/team-grid";

export default function Team() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <h1 className="text-4xl font-bold text-center mb-8">Meet Our Team</h1>
        <p className="text-lg text-center mb-12">
          Dedicated professionals committed to your pet's health.
        </p>
        <TeamGrid />
      </main>
      <Footer />
    </>
  );
}