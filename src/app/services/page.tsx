import { Metadata } from "next";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Services | Paws & Whiskers Veterinary Clinic",
  description: "Explore our veterinary services and pricing.",
  openGraph: {
    title: "Services | Paws & Whiskers Veterinary Clinic",
    description: "Explore our veterinary services and pricing.",
    url: "https://example.com/services",
    images: [images.hero.src],
  },
};

export default function Services() {
  return (
    <main className="pt-20">
      <h1 className="text-4xl font-bold text-center">Our Services</h1>
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold">Wellness Exam</h2>
        <p>Comprehensive nose-to-tail checkup - $65</p>
        <h2 className="text-2xl font-semibold">Vaccinations</h2>
        <p>Core and lifestyle vaccines - From $25</p>
        <h2 className="text-2xl font-semibold">Dental Cleaning</h2>
        <p>Full cleaning under anesthesia - $280</p>
        <h2 className="text-2xl font-semibold">Spay/Neuter</h2>
        <p>Safe, routine surgery - From $250</p>
        <h2 className="text-2xl font-semibold">Emergency Care</h2>
        <p>Available during business hours - Varies</p>
        <h2 className="text-2xl font-semibold">Pet Boarding</h2>
        <p>Climate-controlled, supervised stays - $45/night</p>
      </div>
    </main>
  );
}