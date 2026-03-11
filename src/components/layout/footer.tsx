import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={cn("bg-gray-900 text-white py-10")}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <h5 className="font-bold text-lg">About Us</h5>
          <p className="text-sm">{siteConfig.description}</p>
        </div>
        <div>
          <h5 className="font-bold text-lg">Quick Links</h5>
          <ul className="space-y-2">
            {siteConfig.links.menu.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg">Contact Us</h5>
          <p className="text-sm">{siteConfig.address}</p>
          <p className="text-sm">{siteConfig.phone}</p>
          <p className="text-sm">{siteConfig.email}</p>
        </div>
        <div>
          <h5 className="font-bold text-lg">Follow Us</h5>
          <ul className="space-y-2">
            <li>
              <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                Twitter
              </Link>
            </li>
            <li>
              <Link href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                Facebook
              </Link>
            </li>
            <li>
              <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-6">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}