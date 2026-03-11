import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold">About Us</h2>
          <p>{siteConfig.description}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>
          {siteConfig.links.menu.map((link) => (
            <Link key={link.href} href={link.href} className="block text-gray-300 hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <h2 className="text-lg font-bold">Contact Info</h2>
          <p>{siteConfig.address}</p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Follow Us</h2>
          <Link href={siteConfig.links.twitter} className="block text-gray-300 hover:underline">Twitter</Link>
          <Link href={siteConfig.links.facebook} className="block text-gray-300 hover:underline">Facebook</Link>
          <Link href={siteConfig.links.instagram} className="block text-gray-300 hover:underline">Instagram</Link>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}