import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import { Heart, Shield, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  description: "Compassionate veterinary care for dogs and cats in Denver, CO.",
};

export default function Home() {
  const services = [
    {
      title: "Wellness Exams",
      description: "Comprehensive nose-to-tail checkups to keep your pet healthy.",
      price: "$65",
      icon: Heart,
      color: "bg-red-50 text-red-500",
      hoverColor: "group-hover:bg-red-500 group-hover:text-white",
    },
    {
      title: "Vaccinations",
      description: "Core and lifestyle vaccines tailored to your pet's needs.",
      price: "From $25",
      icon: Shield,
      color: "bg-blue-50 text-blue-500",
      hoverColor: "group-hover:bg-blue-500 group-hover:text-white",
    },
    {
      title: "Dental Care",
      description: "Professional cleaning and oral health assessments.",
      price: "$280",
      icon: Star,
      color: "bg-purple-50 text-purple-500",
      hoverColor: "group-hover:bg-purple-500 group-hover:text-white",
    },
  ];

  const testimonials = [
    {
      quote: "Dr. Sato saved our dog's life when he ate something he shouldn't have. We trust them completely.",
      author: "The Garcias",
    },
    {
      quote: "Most gentle vet we've ever been to. Our anxious cat was actually calm here.",
      author: "Nina P.",
    },
    {
      quote: "They take the time to explain everything. You can tell they genuinely love animals.",
      author: "Chris & Amanda B.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Accepting New Patients
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-secondary leading-tight mb-6">
              Compassionate Care for Your <span className="text-primary">Best Friends</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              We combine advanced medical technology with a gentle touch to ensure your pet feels safe, loved, and healthy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={siteConfig.links.contact}>
                <Button variant="primary" size="lg" className="rounded-full">
                  Book Appointment
                </Button>
              </Link>
              <Link href={siteConfig.links.services}>
                <Button variant="secondary" size="lg" className="rounded-full">
                  Our Services
                </Button>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-square lg:aspect-[4/3]">
              <Image
                src={images["hero"].src}
                alt={images["hero"].alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 border-y border-slate-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="font-bold text-lg tracking-wider">AAHA Accredited</span>
          <span className="font-bold text-lg tracking-wider">Fear Free Certified</span>
          <span className="font-bold text-lg tracking-wider">Top Rated 2023</span>
          <span className="font-bold text-lg tracking-wider">Denver Vet Choice</span>
        </div>
      </section>

      {/* Services Preview (Bento) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
                Comprehensive Veterinary Services
              </h2>
              <p className="text-lg text-slate-600">
                From preventative care to advanced surgery, we offer a full range of services under one roof.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group bg-slate-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                  <div className={`w-14 h-14 rounded-2xl ${service.color} ${service.hoverColor} flex items-center justify-center mb-6 transition-colors duration-300`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-primary font-semibold">{service.price}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href={siteConfig.links.services}>
              <Button variant="ghost" size="lg">
                View All Services &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-[#f0fdf4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
           <Image src={images["testimonial-bg"].src} alt="" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
                What Pet Parents Say
              </h2>
              <p className="text-lg text-slate-600">
                Don't just take our word for it. Here is what our community has to say.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-3xl shadow-card hover:shadow-lg transition-shadow relative">
                  <div className="text-4xl text-primary/20 font-serif absolute top-6 left-6">"</div>
                  <p className="text-slate-600 mb-6 relative z-10 leading-relaxed">{t.quote}</p>
                  <div className="font-bold text-secondary">— {t.author}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Ready to Visit?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Whether it's time for a routine checkup or you have a concern, we're here to help your pet live a long, happy life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={siteConfig.links.contact}>
                <Button variant="primary" size="lg" className="rounded-full bg-white text-secondary hover:bg-slate-100 border-none">
                  Book Appointment
                </Button>
              </Link>
              <Link href={siteConfig.links["new-patients"]}>
                <Button variant="secondary" size="lg" className="rounded-full text-white border-white hover:bg-white/10">
                  New Patient Form
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}