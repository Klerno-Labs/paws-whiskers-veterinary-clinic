"use client";
import { useEffect } from "react";
import { siteConfig } from "@/config/site";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-black/50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={() => setIsOpen(false)}
    >
      <div className={`absolute right-0 bg-white w-64 h-full p-4 transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setIsOpen(false)} aria-label="Close menu">✖</button>
        <ul className="flex flex-col space-y-4 mt-4">
          {siteConfig.links.menu.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-slate-900 hover:text-green-600" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}