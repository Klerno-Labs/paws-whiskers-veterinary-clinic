import { RegistrationWizard } from "@/components/forms/registration-wizard";
import { CtaSection } from "@/components/sections/cta-section";

export default function NewPatients() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-16">Your First Visit</h1>
      <RegistrationWizard />
      <CtaSection />
    </>
  );
}