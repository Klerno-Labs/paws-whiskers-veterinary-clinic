export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  price: string;
  details: string;
  category: string;
  icon: string; // Lucide icon name
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  funFact: string;
  image: string;
}