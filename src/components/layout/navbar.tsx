"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div className="container-custom">
          <nav className={cn(
            "glass-nav rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300",
            isScrolled ? "shadow-md" : "shadow-sm"
          )}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary-600 text-white p-1.5 rounded-lg group-hover:bg-primary-700 transition-colors">
                <div className="w-6 h-6 bg-current rounded-md flex items-center justify-center">
                  <div className="w-3 h-3 bg-white/80 rounded-full mb-1 ml-0.5"></div>
                  <div className="flex gap-0.5 -mt-1 ml-1">
                    <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                  </div>
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-slate-800 hidden sm:block">
                Paws & Whiskers
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium hover:text-primary-600 transition-colors",
                    pathname === link.href ? "text-primary-600" : "text-slate-600"
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <Link 
                href="/emergency" 
                className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-red-600 bg-red-50 px-3 py-1.5 rounded-full hover:bg-red-100 transition-colors"
              >
                <Phone size={14} className="animate-pulse" />
                Emergency
              </Link>
              
              <Button asChild size="sm" className="hidden md:inline-flex">
                <Link href="/contact">Book Now</Link>
              </Button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              >
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="font-heading font-bold text-xl text-slate-800">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium",
                  pathname === link.href ? "text-primary-600" : "text-slate-700"
                )}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-4">
            <Link href="/emergency" className="flex items-center justify-center gap-2 text-red-600 font-semibold py-3 rounded-xl bg-red-50 hover:bg-red-100 transition-colors">
              <Phone size={18} className="animate-pulse" />
              Emergency Contact
            </Link>
            <Button asChild className="w-full">
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}