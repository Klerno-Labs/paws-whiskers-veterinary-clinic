import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, ArrowRight, Shield, Clock, Heart } from 'lucide-react'
import { images } from '@/config/images'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  }

  const services = [
    { title: "Wellness Exams", desc: "Comprehensive nose-to-tail checkups to keep your pet healthy.", price: "$65", icon: Shield, image: images["service-1"] },
    { title: "Dental Cleaning", desc: "Professional cleaning to prevent disease and freshen breath.", price: "$280", icon: Heart, image: images["service-2"] },
    { title: "Surgery", desc: "Safe, advanced surgical procedures with compassionate aftercare.", price: "From $250", icon: Star, image: images["service-3"] },
    { title: "Vaccinations", desc: "Core and lifestyle vaccines tailored to your pet&apos;s needs.", price: "From $25", icon: Shield, image: images["service-1"] },
  ]

  const testimonials = [
    { name: "The Garcias", text: "Dr. Sato saved our dog's life when he ate something he shouldn't have. We trust them completely." },
    { name: "Nina P.", text: "Most gentle vet we've ever been to. Our anxious cat was actually calm here." },
    { name: "Chris & Amanda B.", text: "They take the time to explain everything. You can tell they genuinely love animals." }
  ]

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            "name": "Paws & Whiskers Veterinary Clinic",
            "image": images["hero"].src,
            "telephone": "(555) 987-6543",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3400 Pet Care Lane",
              "addressLocality": "Denver",
              "addressRegion": "CO",
              "postalCode": "80202",
              "addressCountry": "US"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "07:30",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "13:00"
              }
            ],
            "priceRange": "$$"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-[80px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Now Accepting New Patients
            </div>
            
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-secondary tracking-tight leading-tight">
              Compassionate Care for Your <span className="text-primary">Best Friends</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Experience Fear-Free certified veterinary care in a warm, modern environment. We treat your pets like family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link href="/contact#book">Book Appointment</Link>
              </Button>
              <Button variant="secondary" size="lg" className="text-base" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                 {[1,2,3,4].map((i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                     <Image src={`https://i.pravatar.cc/150?u=${i}`} alt={`Pet owner ${i}`} width={40} height={40} />
                   </div>
                 ))}
              </div>
              <div>
                <div className="flex text-yellow-400 gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm font-medium text-slate-600">5-Star Rated by Denver Locals</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.4}
            className="relative lg:h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[32px] rotate-6"></div>
            <div className="relative h-full w-full rounded-[32px] overflow-hidden shadow-2xl">
              <Image 
                src={images["hero"].src} 
                alt={images["hero"].alt} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-secondary mb-4">Comprehensive Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From routine check-ups to emergency surgery, we provide top-tier medical care tailored to your pet&apos;s specific needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link href="/services" key={index} className="group block">
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-hover transition-all duration-300 h-full flex flex-col"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-primary">{service.price}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading font-bold text-4xl text-secondary mb-4">Meet Our Experts</h2>
              <p className="text-muted-foreground text-lg">Our team of board-certified veterinarians and experienced technicians are dedicated to the health and happiness of your pets.</p>
            </div>
            <Button variant="secondary" asChild>
              <Link href="/team">View All Team Members</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[images["team-1"], images["team-2"], images["team-3"]].map((img, idx) => (
              <div key={idx} className="group relative rounded-3xl overflow-hidden cursor-pointer">
                <div className="aspect-[3/4] w-full">
                  <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-heading font-bold text-xl">Dr. {idx === 0 ? "Emily Sato" : idx === 1 ? "James Okafor" : "Sarah Liu"}</h3>
                    <p className="text-accent text-sm mb-2">{idx === 2 ? "Veterinary Technician" : "Lead Veterinarian"}</p>
                    <p className="text-slate-300 text-sm line-clamp-2">
                      {idx === 0 ? "Fear Free Certified with 11 years of experience." : idx === 1 ? "Exotic animal specialist." : "Cat behavior specialist."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <Image src={images["testimonial-bg"].src} alt="" fill className="object-cover opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl mb-4">Happy Pets, Happy Owners</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">Don&apos;t just take our word for it. Here is what our community has to say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <div className="flex text-yellow-400 gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-200 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="font-bold text-white">— {t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">Ready to Visit Us?</h2>
          <p className="text-green-100 text-xl mb-10 max-w-2xl mx-auto">Join the Paws & Whiskers family today. Book your pet&apos;s first appointment and experience the difference of compassionate care.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-slate-50 border-none" asChild>
              <Link href="/contact#book">Book Appointment Online</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link href="tel:5559876543">Call (555) 987-6543</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}