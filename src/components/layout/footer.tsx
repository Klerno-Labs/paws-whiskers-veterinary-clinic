import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary-900 text-slate-300 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-bold text-xl flex items-center gap-2">
              <div className="bg-primary-600 text-white p-1 rounded-lg">
                <div className="w-4 h-4 bg-current rounded-md"></div>
              </div>
              Paws & Whiskers
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Fear-free certified veterinary care in Denver. We treat your pets like family.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href={siteConfig.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={siteConfig.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={siteConfig.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/new-patients" className="text-sm hover:text-primary-400 transition-colors">
                  New Patient Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-sm hover:text-primary-400 transition-colors">Wellness Exams</Link></li>
              <li><Link href="/services" className="text-sm hover:text-primary-400 transition-colors">Vaccinations</Link></li>
              <li><Link href="/services" className="text-sm hover:text-primary-400 transition-colors">Dental Care</Link></li>
              <li><Link href="/services" className="text-sm hover:text-primary-400 transition-colors">Surgery</Link></li>
              <li><Link href="/emergency" className="text-sm hover:text-primary-400 transition-colors text-red-400">Emergency Care</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-primary-500 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-sm hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-500 mb-2">{siteConfig.hours.weekdays}</p>
              <p className="text-xs text-slate-500 mb-2">{siteConfig.hours.saturday}</p>
              <p className="text-xs text-red-400 font-medium">{siteConfig.hours.sunday}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 bg-slate-800 hover:bg-primary-600 rounded-full transition-colors text-white"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}