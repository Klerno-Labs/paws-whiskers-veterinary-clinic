// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — the first image visitors see — Vet with happy dog
  "hero": {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2070&auto=format&fit=crop",
    alt: "Veterinarian holding a happy dog in a modern clinic",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback) — Cat looking curious
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1527699668804-853d7eebce3c?q=80&w=2070&auto=format&fit=crop",
    alt: "Curious cat looking at camera in a bright room",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage — Team meeting
  "about": {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop",
    alt: "Veterinary team collaborating in a modern office",
    width: 1200,
    height: 800,
  },

  // First service card image — Wellness Exam (Stethoscope)
  "service-1": {
    src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop",
    alt: "Veterinarian using stethoscope on a dog",
    width: 1200,
    height: 800,
  },

  // Second service card image — Dental Care
  "service-2": {
    src: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2069&auto=format&fit=crop",
    alt: "Dental care tools and equipment",
    width: 1200,
    height: 800,
  },

  // Third service card image — Surgery
  "service-3": {
    src: "https://images.unsplash.com/photo-1583912267550-d974311a5a65?q=80&w=2070&auto=format&fit=crop",
    alt: "Veterinary surgery preparation",
    width: 1200,
    height: 800,
  },

  // Gallery image 1 — Dog running
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2069&auto=format&fit=crop",
    alt: "Happy dog running in a field",
    width: 1200,
    height: 800,
  },

  // Gallery image 2 — Cat sleeping
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=2070&auto=format&fit=crop",
    alt: "Cat sleeping peacefully",
    width: 1200,
    height: 800,
  },

  // Team member photo — Dr. Emily Sato
  "team-1": {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    alt: "Portrait of Dr. Emily Sato",
    width: 800,
    height: 1000,
  },

  // Team member photo — Dr. James Okafor
  "team-2": {
    src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
    alt: "Portrait of Dr. James Okafor",
    width: 800,
    height: 1000,
  },

  // Team member photo — Sarah Liu
  "team-3": {
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1887&auto=format&fit=crop",
    alt: "Portrait of Sarah Liu",
    width: 800,
    height: 1000,
  },

  // Gallery image 3 — Waiting Room
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=1974&auto=format&fit=crop",
    alt: "Modern veterinary clinic waiting room",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background — Dog with owner
  "cta": {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop",
    alt: "Owner hugging their dog outdoors",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration — Subtle texture
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2072&auto=format&fit=crop",
    alt: "Abstract blurred clinic background",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;