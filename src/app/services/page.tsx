import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ServicesBento from "@/components/sections/services-bento";

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <p className="text-lg text-center mb-12">
          Comprehensive care for your beloved pets.
        </p>
        <ServicesBento />
      </main>
      <Footer />
    </>
  );
}