import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactForm from "@/components/forms/contact-form";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-lg text-center mb-12">
          We would love to hear from you!
        </p>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}