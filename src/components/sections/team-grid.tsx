"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/config/images";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dr. Emily Sato",
    role: "Lead Veterinarian",
    credentials: "DVM, Fear Free Certified",
    experience: "11 years",
    image: images["team-1"],
  },
  {
    name: "Dr. James Okafor",
    role: "Associate Vet",
    credentials: "DVM",
    experience: "8 years",
    image: images["hero-alt"], // Reusing generic vet image
  },
  {
    name: "Sarah Liu",
    role: "Veterinary Technician",
    credentials: "CVT",
    experience: "7 years",
    image: images["gallery-2"], // Reusing generic image
  },
];

export function TeamGrid() {
  return (
    <section className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary-900 mb-4">Meet Our Experts</h2>
            <p className="text-secondary-600">Our team of dedicated professionals combines years of experience with a genuine love for animals.</p>
          </div>
          <a href="/team" className="text-primary-600 font-semibold hover:underline">View All Team Members &rarr;</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group border-none shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image.src}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">
                      Specializes in compassionate care and building trust with anxious pets.
                    </p>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-heading font-bold text-secondary-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium text-sm mb-1">{member.role}</p>
                  <p className="text-slate-500 text-xs">{member.credentials} • {member.experience}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}