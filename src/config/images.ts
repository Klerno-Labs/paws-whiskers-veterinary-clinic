// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically

export const images = {
  // Homepage hero banner — Vet holding a happy dog
  "hero": {
    src: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=1600&auto=format&fit=crop",
    alt: "Veterinarian holding a happy Golden Retriever",
    width: 1600,
    height: 900,
  },

  // About section or About page — Professional doctor portrait
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?q=80&w=1600&auto=format&fit=crop",
    alt: "Female veterinarian in clinic",
    width: 1600,
    height: 900,
  },

  // About/Team section — Team working together
  "about": {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop",
    alt: "Veterinary team reviewing x-rays",
    width: 1200,
    height: 800,
  },

  // Service: Wellness/Checkup
  "service-1": {
    src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop",
    alt: "Veterinarian examining a cat",
    width: 800,
    height: 600,
  },

  // Service: Dental
  "service-2": {
    src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop",
    alt: "Close up of a happy dog",
    width: 800,
    height: 600,
  },

  // Service: Surgery/Technology
  "service-3": {
    src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop",
    alt: "Modern veterinary surgical equipment",
    width: 800,
    height: 600,
  },

  // Emergency/Urgency
  "emergency": {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1600&auto=format&fit=crop",
    alt: "Veterinarian caring for a patient urgently",
    width: 1600,
    height: 900,
  },

  // Team Member Headshot (Dr. Sato placeholder)
  "team-1": {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    alt: "Dr. Emily Sato",
    width: 600,
    height: 800,
  },
  
  // Team Member Headshot (Dr. Okafor placeholder)
  "team-2": {
    src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    alt: "Dr. James Okafor",
    width: 600,
    height: 800,
  },

  // Team Member Headshot (Sarah Liu placeholder)
  "team-3": {
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
    alt: "Sarah Liu",
    width: 600,
    height: 800,
  },

  // New Patient / Registration
  "new-patient": {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1600&auto=format&fit=crop",
    alt: "New patient registration with dog",
    width: 1600,
    height: 900,
  },

  // Contact / Building
  "contact": {
    src: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=1600&auto=format&fit=crop",
    alt: "Paws and Whiskers Veterinary Clinic Building",
    width: 1600,
    height: 900,
  },

  // CTA Section
  "cta": {
    src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1600&auto=format&fit=crop",
    alt: "Cute dog looking up",
    width: 1600,
    height: 900,
  },

  // Testimonial Background
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1600&auto=format&fit=crop",
    alt: "Happy pet owner",
    width: 1600,
    height: 900,
  },
} as const;

export type ImageSlot = keyof typeof images;