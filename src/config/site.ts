import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Paws & Whiskers Veterinary Clinic",
  description: "Compassionate Care for Your Best Friends. Full-service veterinary clinic in Denver, CO.",
  url: "https://pawsandwhiskers.vet",
  ogImage: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=630&fit=crop&q=80",
  links: {
    home: "/",
    services: "/services",
    team: "/team",
    "new-patients": "/new-patients",
    emergency: "/emergency",
    contact: "/contact",
  },
  contact: {
    phone: "(555) 987-6543",
    email: "care@pawsandwhiskers.vet",
    address: "3400 Pet Care Lane, Denver, CO 80202",
  },
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: Record<string, string>;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
};