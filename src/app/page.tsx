```typescript
import { images } from "@/config/images";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Home | General Business",
  description: "Welcome to our General Business website, where we provide top-notch services to help you succeed.",
  openGraph: {
    title: "Home | General Business",
    description: "Welcome to our General Business website, where we provide top-notch services to help you succeed.",
    url: "https://example.com",
    siteName: "General Business",
    images: [
      images.hero.src,
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
```