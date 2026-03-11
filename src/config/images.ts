// ── Image Configuration ──────────────────────────────────────────────
// All components import from this file.

export const images = {
  // Homepage hero banner — Vet holding a happy pet
  "hero": {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=800&fit=crop",
    alt: "Veterinarian holding a happy golden retriever",
    width: 1200,
    height: 800,
  },

  "hero-alt": {
    src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=1200&h=800&fit=crop",
    alt: "Veterinarian listening to a cat's heartbeat",
    width: 1200,
    height: 800,
  },

  "about": {
    src: "https://images.unsplash.com/photo-1607513765270-fc68d2aed7bc?w=1200&h=800&fit=crop",
    alt: "Veterinary team meeting in a modern clinic",
    width: 1200,
    height: 800,
  },

  "service-1": { // Wellness/Vaccination
    src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200&h=800&fit=crop",
    alt: "Veterinarian examining a dog",
    width: 1200,
    height: 800,
  },

  "service-2": { // Dental
    src: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1200&h=800&fit=crop",
    alt: "Dental care instruments",
    width: 1200,
    height: 800,
  },

  "service-3": { // Surgery/Tech
    src: "https://images.unsplash.com/photo-1583947581924-8602c813e3eb?w=1200&h=800&fit=crop",
    alt: "Advanced veterinary surgery",
    width: 1200,
    height: 800,
  },

  "gallery-1": {
    src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&h=800&fit=crop",
    alt: "Happy dog running in grass",
    width: 1200,
    height: 800,
  },

  "gallery-2": {
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&h=800&fit=crop",
    alt: "Relaxed cat looking out window",
    width: 1200,
    height: 800,
  },

  "team-1": { // Dr. Emily Sato
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&h=1000&fit=crop",
    alt: "Dr. Emily Sato",
    width: 800,
    height: 1000,
  },

  "team-2": { // Dr. James Okafor
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=1000&fit=crop",
    alt: "Dr. James Okafor",
    width: 800,
    height: 1000,
  },

  "team-3": { // Sarah Liu
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=1000&fit=crop",
    alt: "Sarah Liu",
    width: 800,
    height: 1000,
  },

  "cta": {
    src: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=1200&h=800&fit=crop",
    alt: "Compassionate veterinary care",
    width: 1200,
    height: 800,
  },

  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1600&h=900&fit=crop",
    alt: "Background of veterinary clinic",
    width: 1600,
    height: 900,
  },
} as const;

export type ImageSlot = keyof typeof images;