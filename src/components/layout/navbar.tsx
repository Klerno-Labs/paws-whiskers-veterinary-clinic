"use client";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={cn("sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100")}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">{siteConfig.name}</Link>
        <div className="hidden md:flex space-x-4">
          {siteConfig.links.menu.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-green-600">
              {link.label}
            </Link>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Menu />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          {siteConfig.links.menu.map((link) => (
            <Link key={link.href} href={link.href} className="block p-4 text-gray-700 hover:bg-gray-100">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}