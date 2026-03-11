export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  imageKey: string;
}

export interface Service {
  title: string;
  description: string;
  price: string;
  imageKey: string;
  category: 'preventative' | 'dental' | 'surgery' | 'emergency';
}

export interface Testimonial {
  quote: string;
  author: string;
  imageKey?: string;
}