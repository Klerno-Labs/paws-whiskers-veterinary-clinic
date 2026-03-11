import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Dr. Sato saved our dog's life when he ate something he shouldn't have. We trust them completely.",
    author: "The Garcias",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=100&h=100&fit=crop&crop=face", // Generic user
  },
  {
    quote: "Most gentle vet we've ever been to. Our anxious cat was actually calm here.",
    author: "Nina P.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "They take the time to explain everything. You can tell they genuinely love animals.",
    author: "Chris & Amanda B.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 clip-path-polygon"></div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Quote className="w-12 h-12 text-primary-200 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-slate-600">Real stories from happy pets and their owners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className={cn(
                "bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300",
                idx === 1 && "md:-translate-y-4"
              )}
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-semibold text-slate-900 text-sm">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}