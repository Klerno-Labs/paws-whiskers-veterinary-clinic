// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically

export const images = {
  "hero": {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=800&fit=crop&q=80",
    alt: "Veterinarian holding a happy golden retriever puppy",
    width: 1200,
    height: 800,
  },

  "hero-alt": {
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&h=800&fit=crop&q=80",
    alt: "Cute gray cat looking up",
    width: 1200,
    height: 800,
  },

  "about": {
    src: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=1200&h=800&fit=crop&q=80",
    alt: "Team of veterinarians smiling together in clinic",
    width: 1200,
    height: 800,
  },

  "service-1": {
    src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=1200&h=800&fit=crop&q=80",
    alt: "Veterinarian examining a dog's heart with a stethoscope",
    width: 1200,
    height: 800,
  },

  "service-2": {
    src: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=1200&h=800&fit=crop&q=80",
    alt: "Veterinarian checking a cat's teeth",
    width: 1200,
    height: 800,
  },

  "service-3": {
    src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&h=800&fit=crop&q=80",
    alt: "Veterinary technician preparing surgical equipment",
    width: 1200,
    height: 800,
  },

  "gallery-1": {
    src: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=1200&h=800&fit=crop&q=80",
    alt: "Owner petting their dog at the vet clinic",
    width: 1200,
    height: 800,
  },

  "gallery-2": {
    src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200&h=800&fit=crop&q=80",
    alt: "Happy dog running in grass",
    width: 1200,
    height: 800,
  },

  "team-1": {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=1000&fit=crop&q=80",
    alt: "Dr. Emily Sato portrait",
    width: 800,
    height: 1000,
  },

  "gallery-3": {
    src: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=1200&h=800&fit=crop&q=80",
    alt: "Veterinarian holding a cat",
    width: 1200,
    height: 800,
  },

  "cta": {
    src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&h=800&fit=crop&q=80",
    alt: "Cute kitten looking at camera",
    width: 1200,
    height: 800,
  },

  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=1200&h=800&fit=crop&q=80",
    alt: "Dog and cat sitting together",
    width: 1200,
    height: 800,
  },
  
  "emergency": {
    src: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=1200&h=800&fit=crop&q=80",
    alt: "Veterinarian team in scrubs looking serious",
    width: 1200,
    height: 800,
  },

  "contact": {
    src: "https://images.unsplash.com/photo-1633603131724-6a4fbac63321?w=1200&h=800&fit=crop&q=80",
    alt: "Modern veterinary clinic building exterior",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;