import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { images } from "@/config/images"
import { Stethoscope, Syringe, Tooth, HeartPulse, ShieldCheck, Bone, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Wellness Exams",
    description: "Comprehensive nose-to-tail checkups to keep your pet healthy year-round.",
    icon: Stethoscope,
    color: "bg-green-100 text-green-600",
    size: "large",
    link: "/services",
  },
  {
    title: "Vaccinations",
    description: "Core and lifestyle vaccines to protect against disease.",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600",
    size: "small",
    link: "/services",
  },
  {
    title: "Dental Care",
    description: "Professional cleanings and oral health assessments.",
    icon: Tooth,
    color: "bg-purple-100 text-purple-600",
    size: "small",
    link: "/services",
  },
  {
    title: "Surgery",
    description: "Spay/neuter, soft tissue, and orthopedic procedures.",
    icon: Syringe,
    color: "bg-red-100 text-red-600",
    size: "large",
    link: "/services",
  },
  {
    title: "Emergency Care",
    description: "Urgent care available during business hours.",
    icon: HeartPulse,
    color: "bg-orange-100 text-orange-600",
    size: "small",
    link: "/emergency",
  },
  {
    title: "Pet Boarding",
    description: "Safe, comfortable, and supervised overnight stays.",
    icon: Bone,
    color: "bg-amber-100 text-amber-600",
    size: "small",
    link: "/services",
  },
]

export function ServicesBento() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-4">
            Complete Care for Every Stage of Life
          </h2>
          <p className="text-lg text-slate-600">
            From puppy kisses to senior cuddles, we offer a full range of medical services tailored to your pet&apos;s needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {services.map((service, index) => {
            const Icon = service.icon
            const isLarge = service.size === "large"
            
            return (
              <Card
                key={index}
                className={`
                  group relative overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-300
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                `}
              >
                <Link href={service.link} className="absolute inset-0 z-10">
                  <span className="sr-only">View {service.title}</span>
                </Link>
                <CardHeader className={isLarge ? "p-8" : "p-6"}>
                  <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className={isLarge ? "text-base" : ""}>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 mt-auto">
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
                
                {/* Decorative background pattern */}
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-slate-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}