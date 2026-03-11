import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Patients | Paws & Whiskers Veterinary Clinic",
  description: "Information for new patients and registration process.",
  openGraph: {
    title: "New Patients | Paws & Whiskers Veterinary Clinic",
    description: "Information for new patients and registration process.",
    url: "https://example.com/new-patients",
  },
};

export default function NewPatients() {
  return (
    <main className="pt-20">
      <h1 className="text-4xl font-bold text-center">Your First Visit</h1>
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold">Step-by-Step Guide</h2>
        <ol className="list-decimal list-inside">
          <li>Book your appointment online.</li>
          <li>Fill out the registration forms.</li>
          <li>Arrive at the clinic with your pet.</li>
        </ol>
        <h2 className="text-2xl font-semibold mt-6">What to Expect</h2>
        <ul className="list-disc list-inside">
          <li>Bring your pet's leash or carrier.</li>
          <li>Have vaccination records ready.</li>
          <li>Be prepared to discuss your pet's health history.</li>
        </ul>
      </div>
    </main>
  );
}