export const siteConfig = {
  name: "Paws & Whiskers Veterinary Clinic",
  tagline: "Compassionate Care for Your Best Friends",
  description: "Full-service veterinary clinic offering wellness exams, vaccinations, dental care, surgery, emergency care, and boarding. Fear-free certified practice.",
  url: "https://pawsandwhiskers.vet",
  links: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  contact: {
    address: "3400 Pet Care Lane, Denver, CO 80202",
    phone: "(555) 987-6543",
    email: "care@pawsandwhiskers.vet",
    hours: "Mon-Fri 7:30am-6pm, Sat 8am-1pm, Sun Emergency Only",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Our Team", href: "/team" },
    { title: "New Patients", href: "/new-patients" },
    { title: "Emergency", href: "/emergency" },
  ],
};

export type SiteConfig = typeof siteConfig;