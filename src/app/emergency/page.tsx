import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Care | Paws & Whiskers Veterinary Clinic",
  description: "Emergency care information and contact details.",
  openGraph: {
    title: "Emergency Care | Paws & Whiskers Veterinary Clinic",
    description: "Emergency care information and contact details.",
    url: "https://example.com/emergency",
  },
};

export default function Emergency() {
  return (
    <main className="pt-20">
      <h1 className="text-4xl font-bold text-center">We Are Here for You</h1>
      <div className="max-w-7xl mx-auto mt-10">
        <p className="text-lg">If your pet is experiencing a medical emergency, please call us immediately at {siteConfig.phone}.</p>
        <h2 className="text-2xl font-semibold mt-6">Hours of Operation</h2>
        <p>Emergency services are available during business hours.</p>
      </div>
    </main>
  );
}