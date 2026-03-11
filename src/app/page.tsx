import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesBento } from "@/components/sections/services-bento";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta-section";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/config/images";

export const metadata = {
  title: "Home",
  description: "Compassionate Care for Your Best Friends in Denver, CO.",
  openGraph: {
    images: [images["hero"].src]
  }
};

export default function Home() {
  return (
    <>
      <Hero 
        variant="split"
        badge="New Patients Welcome"
        title="Compassionate Care for Your Best Friend"
        subtitle="We provide fear-free, high-quality veterinary care for dogs and cats in a warm, welcoming environment."
        primaryCta={{ label: "Book Appointment", href: "/contact" }}
        secondaryCta={{ label: "Meet the Team", href: "/team" }}
        imageKey="hero"
      />
      
      <TrustBar />
      
      <ServicesBento />

      {/* Team Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">Meet Our Experts</h2>
              <p className="text-lg text-slate-600 max-w-xl">Our team of experienced veterinarians and staff are dedicated to the health and happiness of your pets.</p>
            </div>
            <Link href="/team" className="text-[#16a34a] font-semibold hover:underline mt-4 md:mt-0">
              View All Doctors
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[images["team-1"], images["team-2"], images["team-3"]].map((img, idx) => (
              <div key={idx} className="group relative rounded-[24px] overflow-hidden aspect-[3/4] shadow-card cursor-pointer">
                <Image 
                  src={img.src} 
                  alt="Doctor" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-semibold text-lg">View Bio</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      
      <CTASection 
        title="Ready to Visit?"
        subtitle="Book your appointment today and experience the difference of compassionate, fear-free care."
        buttonText="Book Appointment"
        buttonLink="/contact"
      />
    </>
  );
}