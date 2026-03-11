import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import RegistrationWizard from "@/components/forms/registration-wizard";

export default function NewPatients() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <h1 className="text-4xl font-bold text-center mb-8">Your First Visit</h1>
        <p className="text-lg text-center mb-12">
          We're excited to welcome you and your pet!
        </p>
        <RegistrationWizard />
      </main>
      <Footer />
    </>
  );
}