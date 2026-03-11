"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">{siteConfig.name}</div>
        <div className="hidden md:flex space-x-8">
          {siteConfig.links.menu.map((link) => (
            <a key={link.label} href={link.href} className="text-slate-900 hover:text-green-600">
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}