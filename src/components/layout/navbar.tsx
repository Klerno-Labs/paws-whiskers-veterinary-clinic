"use client";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className={cn("sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100")}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-slate-900">
          Paws & Whiskers
        </Link>
        <div className="hidden md:flex space-x-8">
          {siteConfig.links.menu.map((link) => (
            <Link key={link.label} href={link.href} className="text-slate-600 hover:text-green-600">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link href={`tel:${siteConfig.phone}`} className="flex items-center text-slate-600 hover:text-green-600">
            <Phone className="w-5 h-5" />
            <span>{siteConfig.phone}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}