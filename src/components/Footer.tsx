"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { siteConfig } from "@/config/site";
import { ArrowUp, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-slate-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white font-heading font-bold text-xl">
              <div className="bg-primary/20 p-1.5 rounded-full">
                <Phone className="text-primary h-5 w-5" />
              </div>
              Paws & Whiskers
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Compassionate Care for Your Best Friends. We are dedicated to providing the highest quality veterinary care in a fear-free environment.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="hover:text-primary transition-colors">Wellness Exams</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Vaccinations</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Dental Care</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Surgery</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Emergency</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/new-patients" className="hover:text-primary transition-colors">New Patients</Link></li>
              <li><Link href="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors text-sm">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-slate-400 hover:text-white"
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
}