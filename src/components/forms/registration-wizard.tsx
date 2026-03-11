"use client";
import { useState } from "react";

export default function RegistrationWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ ownerName: "", petName: "", allergies: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-md mx-auto">
      {step === 1 && (
        <form onSubmit={handleNext}>
          <h2 className="text-2xl font-bold mb-4">Step 1: Owner Information</h2>
          <div className="mb-4">
            <label htmlFor="ownerName" className="block text-sm font-medium">Owner Name</label>
            <input type="text" name="ownerName" id="ownerName" value={formData.ownerName} onChange={handleChange} required className="border rounded-md w-full p-2" />
          </div>
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg">Next</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleNext}>
          <h2 className="text-2xl font-bold mb-4">Step 2: Pet Information</h2>
          <div className="mb-4">
            <label htmlFor="petName" className="block text-sm font-medium">Pet Name</label>
            <input type="text" name="petName" id="petName" value={formData.petName} onChange={handleChange} required className="border rounded-md w-full p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="allergies" className="block text-sm font-medium">Does your pet have allergies?</label>
            <input type="text" name="allergies" id="allergies" value={formData.allergies} onChange={handleChange} className="border rounded-md w-full p-2" />
          </div>
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg">Next</button>
        </form>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Thank you for registering!</h2>
          <p>We will contact you soon to confirm your appointment.</p>
        </div>
      )}
    </div>
  );
}