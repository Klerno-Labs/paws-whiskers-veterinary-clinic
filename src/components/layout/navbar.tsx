"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/new-patients", label: "New Patients" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "top-4" : "top-6"
        )}
      >
        <nav
          className={cn(
            "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-full border border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-sm transition-all duration-300",
            scrolled ? "py-2" : "py-3"
          )}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0 group">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <span className="text-xl text-green-700">🐾</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading font-bold text-slate-900 leading-tight text-sm sm:text-base">
                  Paws & Whiskers
                </h1>
                <p className="text-xs text-slate-500 font-medium">Veterinary Clinic</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-green-600 relative",
                    pathname === link.href
                      ? "text-green-700"
                      : "text-slate-600"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Link href="/contact" className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-green-700 transition-colors">
                <Phone className="w-4 h-4" />
                <span>(555) 987-6543</span>
              </Link>
              <Button size="sm" className="hidden sm:inline-flex gap-2" asChild>
                <Link href="/contact">
                  <Calendar className="w-4 h-4" />
                  Book Now
                </Link>
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-xl md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <span className="font-heading font-bold text-lg text-slate-900">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2 text-slate-500 hover:text-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors",
                      pathname === link.href ? "text-green-700" : "text-slate-600"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-slate-100 my-2" />
                <Link
                  href="/emergency"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-red-600 flex items-center gap-2"
                >
                  Emergency?
                </Link>
              </nav>
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50">
              <Button className="w-full" size="lg" asChild>
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}