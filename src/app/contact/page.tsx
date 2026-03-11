import { ContactForm } from "@/components/forms/contact-form";
import { CtaSection } from "@/components/sections/cta-section";

export default function Contact() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-16">Contact Us</h1>
      <ContactForm />
      <CtaSection />
    </>
  );
}