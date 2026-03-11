"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { images } from "@/config/images"
import { Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Dr. Emily Sato",
    role: "Lead Veterinarian",
    credentials: "DVM, Fear Free Certified",
    bio: "With 11 years of experience and a special love for Golden Retrievers, Dr. Sato leads our clinic with compassion and expertise.",
    image: "team-1",
  },
  {
    name: "Dr. James Okafor",
    role: "Associate Veterinarian",
    credentials: "DVM, Exotic Specialist",
    bio: "Dr. Okafor is our go-to for complex cases and has a passion for reptiles and avian medicine.",
    image: "team-2",
  },
  {
    name: "Sarah Liu",
    role: "Veterinary Technician",
    credentials: "CVT, 7 Years Experience",
    bio: "Sarah is our cat behavior specialist. She has a magical touch with even the most anxious felines.",
    image: "team-3",
  },
]

export function TeamGrid() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-4">
            Meet Your Neighbors
          </h2>
          <p className="text-lg text-slate-600">
            Our team isn&apos;t just staff—we're pet lovers, advocates, and members of the Denver community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group border-none shadow-xl overflow-hidden h-full">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={images[member.image as keyof typeof images].src}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex gap-3">
                      <Link href="#" className="text-white/80 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </Link>
                      <Link href="#" className="text-white/80 hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-slate-900">{member.name}</h3>
                  <p className="text-green-600 font-medium text-sm mb-1">{member.role}</p>
                  <p className="text-slate-500 text-sm">{member.credentials}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/team" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
            View the full team <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}