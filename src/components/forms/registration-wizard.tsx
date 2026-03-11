"use client";
import { useState } from "react";

export function RegistrationWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ ownerName: "", petName: "", allergies: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="max-w-md mx-auto">
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 1: Owner Information</h2>
          <label htmlFor="ownerName" className="block mb-1">Owner Name</label>
          <input type="text" name="ownerName" id="ownerName" value={formData.ownerName} onChange={handleChange} required className="border rounded-lg w-full p-2" />
          <button onClick={nextStep} className="bg-green-600 text-white px-4 py-2 rounded-lg mt-4">Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 2: Pet Information</h2>
          <label htmlFor="petName" className="block mb-1">Pet Name</label>
          <input type="text" name="petName" id="petName" value={formData.petName} onChange={handleChange} required className="border rounded-lg w-full p-2" />
          <label htmlFor="allergies" className="block mb-1">Allergies (if any)</label>
          <input type="text" name="allergies" id="allergies" value={formData.allergies} onChange={handleChange} className="border rounded-lg w-full p-2" />
          <button onClick={prevStep} className="bg-gray-300 text-black px-4 py-2 rounded-lg mt-4">Back</button>
          <button onClick={nextStep} className="bg-green-600 text-white px-4 py-2 rounded-lg mt-4">Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 3: Review</h2>
          <p>Owner Name: {formData.ownerName}</p>
          <p>Pet Name: {formData.petName}</p>
          <p>Allergies: {formData.allergies}</p>
          <button onClick={prevStep} className="bg-gray-300 text-black px-4 py-2 rounded-lg mt-4">Back</button>
          <button onClick={() => alert("Registration Complete!")} className="bg-green-600 text-white px-4 py-2 rounded-lg mt-4">Submit</button>
        </div>
      )}
    </div>
  );
}