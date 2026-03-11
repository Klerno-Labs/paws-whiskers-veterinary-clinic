import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Stethoscope, Syringe, HeartPulse, Scissors } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export default function ServicesBento() {
  const services = [
    {
      title: "Wellness Exams",
      description: "Comprehensive nose-to-tail checkups to keep your pet healthy year-round.",
      price: "$65",
      icon: Stethoscope,
      image: images["service-1"],
      size: "large",
      link: "/services",
    },
    {
      title: "Vaccinations",
      description: "Core and lifestyle vaccines tailored to your pet's needs.",
      price: "From $25",
      icon: Syringe,
      image: images["service-3"],
      size: "small",
      link: "/services",
    },
    {
      title: "Dental Care",
      description: "Professional cleaning to prevent disease and keep smiles bright.",
      price: "$280",
      icon: HeartPulse,
      image: images["service-2"],
      size: "small",
      link: "/services",
    },
    {
      title: "Surgery",
      description: "Safe, state-of-the-art surgical procedures from spays to complex repairs.",
      price: "From $250",
      icon: Scissors,
      image: images["service-3"],
      size: "wide",
      link: "/services",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Veterinary Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From preventative care to emergency surgery, we offer a full range of medical services for your furry family members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {services.map((service, idx) => {
            const sizeClasses = {
              small: "md:col-span-1",
              large: "md:col-span-1 md:row-span-2",
              wide: "md:col-span-2",
            };

            return (
              <Link
                key={idx}
                href={service.link}
                className={cn(
                  "group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300",
                  sizeClasses[service.size as keyof typeof sizeClasses]
                )}
              >
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors z-10" />
                <Image
                  src={service.image.src}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg w-fit mb-3 text-white">
                        <service.icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                      <p className="text-white/90 text-sm font-medium mb-2">{service.price}</p>
                    </div>
                    <div className="bg-white text-slate-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}