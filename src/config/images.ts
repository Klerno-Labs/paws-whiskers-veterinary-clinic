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
  // Homepage hero banner — the first image visitors see — Vet holding a happy pet
  "hero": {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=800&fit=crop&q=80",
    alt: "Veterinarian holding a happy cat",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback)
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=1200&h=800&fit=crop&q=80",
    alt: "Friendly dog looking up in a clinic",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage
  "about": {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&h=800&fit=crop&q=80",
    alt: "Veterinarian examining a dog with care",
    width: 1200,
    height: 800,
  },

  // First service card image — Wellness
  "service-1": {
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=800&fit=crop&q=80",
    alt: "Golden Retriever running in grass",
    width: 1200,
    height: 800,
  },

  // Second service card image — Surgery
  "service-2": {
    src: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1200&h=800&fit=crop&q=80",
    alt: "Veterinary surgery team in action",
    width: 1200,
    height: 800,
  },

  // Third service card image — Dental
  "service-3": {
    src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200&h=800&fit=crop&q=80",
    alt: "Dog with healthy teeth smiling",
    width: 1200,
    height: 800,
  },

  // Gallery image 1
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=800&fit=crop&q=80",
    alt: "Veterinary clinic interior waiting room",
    width: 1200,
    height: 800,
  },

  // Gallery image 2
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=1200&h=800&fit=crop&q=80",
    alt: "Veterinarian listening to dog's heart",
    width: 1200,
    height: 800,
  },

  // Team member photo — Dr. Sato
  "team-1": {
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1200&h=800&fit=crop&q=80",
    alt: "Dr. Emily Sato portrait",
    width: 1200,
    height: 800,
  },

  // Gallery image 3
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&h=800&fit=crop&q=80",
    alt: "Cat being examined gently",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background
  "cta": {
    src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&h=800&fit=crop&q=80",
    alt: "Happy group of pets together",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1200&h=800&fit=crop&q=80",
    alt: "Paw in hand showing trust",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;