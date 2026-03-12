"use client";

import Link from "next/link";
import { PawPrint, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#1e293b] text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <PawPrint className="w-6 h-6 fill-[#16a34a] text-[#16a34a]" />
            <span className="font-bold text-xl">Paws & Whiskers</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Compassionate, fear-free care for your furry family members. We treat your pets like our own.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" aria-label="Facebook" className="hover:text-[#16a34a] transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#16a34a] transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#16a34a] transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-6">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/services" className="hover:text-[#16a34a] transition-colors">Wellness Exams</Link></li>
            <li><Link href="/services" className="hover:text-[#16a34a] transition-colors">Vaccinations</Link></li>
            <li><Link href="/services" className="hover:text-[#16a34a] transition-colors">Dental Care</Link></li>
            <li><Link href="/services" className="hover:text-[#16a34a] transition-colors">Surgery</Link></li>
            <li><Link href="/services" className="hover:text-[#16a34a] transition-colors">Emergency Care</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/team" className="hover:text-[#16a34a] transition-colors">Our Team</Link></li>
            <li><Link href="/new-patients" className="hover:text-[#16a34a] transition-colors">New Patients</Link></li>
            <li><Link href="/contact" className="hover:text-[#16a34a] transition-colors">Contact Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#16a34a] transition-colors">Pet Resources</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#16a34a] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                3400 Pet Care Lane<br />
                Denver, CO 80202
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#16a34a] shrink-0" />
              <a href="tel:5559876543" className="hover:text-[#16a34a] transition-colors">(555) 987-6543</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#16a34a] shrink-0" />
              <a href="mailto:care@pawsandwhiskers.vet" className="hover:text-[#16a34a] transition-colors">care@pawsandwhiskers.vet</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Paws & Whiskers Veterinary Clinic. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>

      {/* Scroll To Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 bg-[#16a34a] text-white p-3 rounded-full shadow-lg hover:bg-green-700 hover:scale-110 transition-all z-40"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}