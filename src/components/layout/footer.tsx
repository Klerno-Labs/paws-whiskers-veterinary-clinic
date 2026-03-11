import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold">About Us</h5>
            <p>{siteConfig.description}</p>
          </div>
          <div>
            <h5 className="font-bold">Quick Links</h5>
            <ul>
              {siteConfig.links.menu.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:underline">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold">Contact Info</h5>
            <p>{siteConfig.address}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </div>
          <div>
            <h5 className="font-bold">Follow Us</h5>
            <ul>
              {siteConfig.links.social.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}