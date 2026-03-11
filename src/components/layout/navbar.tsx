"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Navbar() {
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 transition-all duration-300 rounded-[9999px]",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-card py-3 border border-slate-200/60"
            : "bg-white/80 backdrop-blur-lg py-4"
        )}
      >
        <div className="flex items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-secondary-900 hover:text-primary-600 transition-colors">
            <PawPrint className="w-6 h-6 text-primary-600" />
            <span className="hidden sm:inline">Paws & Whiskers</span>
            <span className="sm:hidden">P&W</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600",
                  pathname === item.href
                    ? "text-primary-700 font-semibold"
                    : "text-secondary-600"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/emergency"
              className="hidden md:flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              Emergency
            </Link>
            <Link href="/contact">
              <Button size="sm" className="hidden sm:inline-flex rounded-full">
                Book Appointment
              </Button>
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-secondary-600 hover:bg-slate-100 rounded-full"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white z-50 transform shadow-2xl md:hidden transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="font-heading font-bold text-xl text-secondary-900">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-slate-100 rounded-full"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex-1 flex flex-col gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === item.href ? "text-primary-600" : "text-secondary-700"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4">
            <Link href="/emergency" className="flex items-center gap-3 text-red-600 font-bold p-4 bg-red-50 rounded-xl">
              <Phone className="w-5 h-5" />
              Emergency Care
            </Link>
            <Link href="/contact">
              <Button className="w-full rounded-full">Book Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}