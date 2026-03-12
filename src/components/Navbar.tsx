"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { Menu, X, Phone, Activity } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener(&quot;scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300",
          isScrolled ? "top-2 py-2" : "py-3"
        )}
      >
        <nav
          className={cn(
            "bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-card rounded-full flex items-center justify-between px-6 transition-all duration-300",
            isScrolled ? "py-2 shadow-lg" : "py-3"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-heading font-bold text-xl text-secondary hover:opacity-80 transition-opacity"
          >
            <div className="bg-primary/10 p-1.5 rounded-full">
              <Activity className="text-primary h-5 w-5" />
            </div>
            <span className="hidden sm:inline-block">
              Paws & Whiskers
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {Object.entries(siteConfig.links).slice(0, 4).map(([key, href]) => (
              <Link
                key={key}
                href={href}
                className={cn(
                  "text-sm font-medium text-slate-600 hover:text-primary transition-colors relative",
                  pathname === href && "text-primary font-semibold"
                )}
              >
                {key.charAt(0).toUpperCase() + key.slice(1).replace(&quot;-", " ")}
                {pathname === href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link href={siteConfig.links.emergency} className="hidden md:flex">
              <span className="relative group">
                <span className="flex items-center gap-1 text-sm font-semibold text-danger">
                  Emergency
                  <span className="w-2 h-2 bg-danger rounded-full animate-pulse" />
                </span>
              </span>
            </Link>
            <Link href={siteConfig.links.contact}>
              <Button variant="primary" size="sm" className="rounded-full">
                Book Now
              </Button>
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? &quot;Close menu" : "Open menu"}
              className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 right-0 w-full bg-white shadow-xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <span className="font-heading font-bold text-xl text-secondary">
                Menu
              </span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu&quot;
                className="p-2 text-slate-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {Object.entries(siteConfig.links).map(([key, href]) => (
                <Link
                  key={key}
                  href={href}
                  className={cn(
                    "text-lg font-medium text-slate-700 hover:text-primary transition-colors",
                    pathname === href && "text-primary font-bold"
                  )}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(&quot;-", " ")}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-8 border-t border-slate-100">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 text-slate-600 mb-2"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-medium">{siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}