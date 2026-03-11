import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Heart, ArrowUp } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <span className="text-3xl">🐾</span>
              <div>
                <h3 className="font-heading font-bold text-xl">Paws & Whiskers</h3>
                <p className="text-xs text-slate-400">Veterinary Clinic</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing compassionate, fear-free care for your furry family members in Denver.
            </p>
            <div className="flex gap-4">
              <Link
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="hover:text-green-400 transition-colors">Our Services</Link></li>
              <li><Link href="/team" className="hover:text-green-400 transition-colors">Meet the Team</Link></li>
              <li><Link href="/new-patients" className="hover:text-green-400 transition-colors">New Patients</Link></li>
              <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/emergency" className="text-red-400 hover:text-red-300 transition-colors">Emergency</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services#wellness" className="hover:text-green-400 transition-colors">Wellness Exams</Link></li>
              <li><Link href="/services#dental" className="hover:text-green-400 transition-colors">Dental Care</Link></li>
              <li><Link href="/services#surgery" className="hover:text-green-400 transition-colors">Surgery</Link></li>
              <li><Link href="/services#boarding" className="hover:text-green-400 transition-colors">Pet Boarding</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">{siteConfig.contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <Link href={`tel:${siteConfig.contact.phone}`} className="text-slate-400 hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </Link>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <Link href={`mailto:${siteConfig.contact.email}`} className="text-slate-400 hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={scrollToTop} className="text-slate-500 hover:text-white">
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}