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
  // Homepage hero banner — the first image visitors see — Vet holding a happy dog
  "hero": {
    src: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1200&auto=format&fit=crop",
    alt: "Veterinarian holding a happy golden retriever puppy",
    width: 1200,
    height: 800,
  },

  // Alternative hero image — Vet examining a cat
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
    alt: "Veterinarian examining a cat gently",
    width: 1200,
    height: 800,
  },

  // About/Team page header — Group of vets
  "about": {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea816232?q=80&w=1200&auto=format&fit=crop",
    alt: "Group of veterinary staff smiling together",
    width: 1200,
    height: 800,
  },

  // Service 1: Wellness Exam
  "service-1": {
    src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1200&auto=format&fit=crop",
    alt: "Veterinarian listening to a dog's heart with a stethoscope",
    width: 1200,
    height: 800,
  },

  // Service 2: Dental Care
  "service-2": {
    src: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?q=80&w=1200&auto=format&fit=crop",
    alt: "Veterinary dental tools and clean teeth model",
    width: 1200,
    height: 800,
  },

  // Service 3: Surgery
  "service-3": {
    src: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern veterinary surgery room",
    width: 1200,
    height: 800,
  },

  // Gallery 1: Waiting Room
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern veterinary clinic waiting room",
    width: 1200,
    height: 800,
  },

  // Gallery 2: Interior
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1200&auto=format&fit=crop",
    alt: "Bright and clean veterinary clinic interior",
    width: 1200,
    height: 800,
  },

  // Team/Doctor 1
  "team-1": {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea816232?q=80&w=1200&auto=format&fit=crop",
    alt: "Dr. Emily Sato with a patient",
    width: 1200,
    height: 800,
  },

  // Gallery 3: Boarding/ kennel
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200&auto=format&fit=crop",
    alt: "Comfortable pet boarding area",
    width: 1200,
    height: 800,
  },

  // CTA Section
  "cta": {
    src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1200&auto=format&fit=crop",
    alt: "Friendly dog looking at camera",
    width: 1200,
    height: 800,
  },

  // Testimonials Background
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1200&auto=format&fit=crop",
    alt: "Cat resting comfortably",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;