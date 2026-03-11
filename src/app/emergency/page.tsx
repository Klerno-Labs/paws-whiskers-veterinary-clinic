import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Emergency() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <h1 className="text-4xl font-bold text-center mb-8">Emergency Care</h1>
        <p className="text-lg text-center mb-12">
          We are here for you and your pet in urgent situations.
        </p>
        <p className="text-lg text-center mb-12">
          Call us immediately at {siteConfig.phone} for assistance.
        </p>
      </main>
      <Footer />
    </>
  );
}