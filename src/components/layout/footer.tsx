import { Link } from "next/link";
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-heading font-bold text-white flex items-center gap-2">
            Paws & Whiskers
          </Link>
          <p className="text-sm leading-relaxed">
            {siteConfig.tagline}. Fear-free certified practice focused on compassionate, low-stress animal care.
          </p>
          <div className="flex gap-4 pt-2">
            <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-primary-400 transition-colors">Wellness Exams</Link></li>
            <li><Link href="/services" className="hover:text-primary-400 transition-colors">Vaccinations</Link></li>
            <li><Link href="/services" className="hover:text-primary-400 transition-colors">Dental Care</Link></li>
            <li><Link href="/services" className="hover:text-primary-400 transition-colors">Surgery</Link></li>
            <li><Link href="/services" className="hover:text-primary-400 transition-colors">Emergency Care</Link></li>
            <li><Link href="/services" className="hover:text-primary-400 transition-colors">Pet Boarding</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/new-patients" className="hover:text-primary-400 transition-colors">New Patients</Link></li>
            <li><Link href="/team" className="hover:text-primary-400 transition-colors">Our Team</Link></li>
            <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary-400 transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary-500 shrink-0" />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-500 shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
          <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-white transition-colors" aria-label="Back to top">
            Back to top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}