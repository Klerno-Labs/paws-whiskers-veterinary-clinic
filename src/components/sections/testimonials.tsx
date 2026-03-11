"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "The Garcias",
    text: "Dr. Sato saved our dog's life when he ate something he shouldn't have. We trust them completely with all our pets.",
    rating: 5,
  },
  {
    name: "Nina P.",
    text: "Most gentle vet we've ever been to. Our anxious cat was actually calm here. The Fear Free approach really works!",
    rating: 5,
  },
  {
    name: "Chris & Amanda B.",
    text: "They take the time to explain everything. You can tell they genuinely love animals and care about their well-being.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-4">
            What Pet Parents Say
          </h2>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Here is what our community has to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-4 text-amber-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 flex-grow italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-xs text-slate-500">Verified Client</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}