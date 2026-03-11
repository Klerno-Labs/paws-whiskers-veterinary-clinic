"use client"

import React from 'react'
import Link from 'next/link'
import { PawPrint, Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary/20 p-2 rounded-full text-primary">
              <PawPrint className="w-6 h-6" />
            </div>
            <span className="font-heading font-bold text-xl">Paws & Whiskers</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Compassionate, Fear-Free certified veterinary care for your furry family members in Denver.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Visit our Facebook page" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Visit our Instagram page" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Visit our Twitter page" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-6">Services</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/services" className="hover:text-white transition-colors">Wellness Exams</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Vaccinations</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Dental Care</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Surgery</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Emergency Care</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
            <li><Link href="/new-patients" className="hover:text-white transition-colors">New Patients</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Pet Resources</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-6">Contact</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>3400 Pet Care Lane<br />Denver, CO 80202</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href="tel:5559876543" className="hover:text-white transition-colors">(555) 987-6543</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a href="mailto:care@pawsandwhiskers.vet" className="hover:text-white transition-colors">care@pawsandwhiskers.vet</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto px-6">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Paws & Whiskers Veterinary Clinic. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="bg-slate-800 hover:bg-primary text-white p-2 rounded-full transition-colors"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  )
}