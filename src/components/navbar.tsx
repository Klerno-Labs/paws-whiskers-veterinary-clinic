"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, PawPrint } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => setIsOpen(false), [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 transition-all duration-300 rounded-[9999px]",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-sm py-3"
            : "bg-white/80 backdrop-blur-md border border-transparent py-4"
        )}
      >
        <div className="flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#16a34a] text-white p-2 rounded-full group-hover:scale-110 transition-transform">
              <PawPrint className="w-5 h-5 fill-current" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight font-heading">
              Paws & Whiskers
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#16a34a]",
                  pathname === link.href ? "text-[#16a34a]" : "text-slate-600"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:5559876543" 
              className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#16a34a] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (555) 987-6543
            </a>
            
            <div className="hidden md:block">
              <Button href="/contact" size="sm">Book Now</Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-6 animate-in fade-in slide-in-from-right-10">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-2xl font-semibold text-slate-900 border-b border-slate-100 pb-2",
                  pathname === link.href && "text-[#16a34a]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/new-patients" className="text-2xl font-semibold text-slate-900 border-b border-slate-100 pb-2">
              New Patients
            </Link>
            <Link href="/emergency" className="text-2xl font-semibold text-red-600 border-b border-slate-100 pb-2">
              Emergency
            </Link>
          </nav>
          <div className="mt-auto">
            <Button href="/contact" className="w-full" size="lg">Book Appointment</Button>
          </div>
        </div>
      )}
    </>
  );
}