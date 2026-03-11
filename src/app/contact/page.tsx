import { Metadata } from "next";
import ContactForm from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Paws & Whiskers Veterinary Clinic",
  description: "Get in touch with us for inquiries and appointments.",
  openGraph: {
    title: "Contact Us | Paws & Whiskers Veterinary Clinic",
    description: "Get in touch with us for inquiries and appointments.",
    url: "https://example.com/contact",
  },
};

export default function Contact() {
  return (
    <main className="pt-20">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <div className="max-w-7xl mx-auto mt-10">
        <ContactForm />
      </div>
    </main>
  );
}