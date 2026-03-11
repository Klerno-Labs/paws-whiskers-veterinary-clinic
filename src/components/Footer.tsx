```typescript
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="mt-2 text-sm">We are dedicated to providing exceptional services to help your business thrive.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <p className="mt-2 text-sm">(512) 555-1234</p>
          <p className="mt-2 text-sm">4521 Westheimer Rd, Suite 200, Houston, TX 77027</p>
          <p className="mt-2 text-sm">info@generalbusiness.com</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Legal</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">© {new Date().getFullYear()} General Business. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
```