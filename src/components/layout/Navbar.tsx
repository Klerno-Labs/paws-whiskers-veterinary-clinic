"use client"

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, PawPrint } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Our Team', href: '/team' },
    { label: 'New Patients', href: '/new-patients' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4",
          scrolled && "top-2"
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between w-full max-w-7xl px-6 py-4 rounded-full border transition-all duration-300",
            scrolled
              ? "bg-white/90 backdrop-blur-xl border-slate-200 shadow-card py-2"
              : "bg-white/60 backdrop-blur-md border-transparent shadow-sm"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10 group">
            <div className="bg-primary p-2 rounded-full text-white group-hover:scale-110 transition-transform">
              <PawPrint className="w-5 h-5" />
            </div>
            <span className="font-heading font-bold text-xl text-secondary">
              Paws & Whiskers
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary font-semibold" : "text-slate-600"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/emergency"
              className="flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              Emergency
            </Link>
            <Link href="/contact#book">
              <Button variant="default" size="sm">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 text-secondary relative z-50"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-2xl font-heading font-medium text-secondary",
                    pathname === link.href && "text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-4"></div>
              <Link href="/emergency" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-red-600 font-semibold text-lg">
                <Phone className="w-5 h-5" />
                Emergency: (555) 987-6543
              </Link>
              <Link href="/contact#book" onClick={() => setIsOpen(false)}>
                <Button variant="default" size="lg" className="w-full">Book Appointment</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}