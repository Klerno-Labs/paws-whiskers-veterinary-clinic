"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

export default function RegistrationWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    petName: "",
    petType: "",
    petBreed: "",
    petAge: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("In a real app, this would submit the registration data!");
    setStep(4); // Success state
  };

  if (step === 4) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center max-w-xl mx-auto">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Registration Received!</h3>
        <p className="text-green-700 mb-6">We have received your information. We look forward to meeting your pet soon!</p>
        <Button onClick={() => setStep(1)}>Register Another Pet</Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors ${
                step >= s ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-400"
              }`}
            >
              {step > s ? <CheckCircle size={16} /> : s}
            </div>
          ))}
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary-600 transition-all duration-300" 
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-slate-900">Owner Information</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ownerName">Full Name</Label>
                <Input id="ownerName" name="ownerName" value={formData.ownerName} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ownerEmail">Email Address</Label>
                <Input id="ownerEmail" name="ownerEmail" type="email" value={formData.ownerEmail} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ownerPhone">Phone Number</Label>
                <Input id="ownerPhone" name="ownerPhone" type="tel" value={formData.ownerPhone} onChange={handleChange} required />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-slate-900">Pet Details</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="petName">Pet Name</Label>
                <Input id="petName" name="petName" value={formData.petName} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="petType">Type</Label>
                  <Input id="petType" name="petType" value={formData.petType} onChange={handleChange} placeholder="Dog/Cat" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="petBreed">Breed</Label>
                  <Input id="petBreed" name="petBreed" value={formData.petBreed} onChange={handleChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="petAge">Age</Label>
                <Input id="petAge" name="petAge" value={formData.petAge} onChange={handleChange} placeholder="e.g., 3 years" />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-slate-900">Review & Submit</h3>
            <div className="bg-slate-50 p-6 rounded-xl space-y-2">
              <p><strong>Owner:</strong> {formData.ownerName}</p>
              <p><strong>Email:</strong> {formData.ownerEmail}</p>
              <p><strong>Phone:</strong> {formData.ownerPhone}</p>
              <hr className="my-2 border-slate-200" />
              <p><strong>Pet:</strong> {formData.petName} ({formData.petType})</p>
              <p><strong>Breed:</strong> {formData.petBreed}</p>
              <p><strong>Age:</strong> {formData.petAge}</p>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <Button 
            type="button" 
            variant="ghost" 
            onClick={prevStep} 
            disabled={step === 1}
            className={step === 1 ? "invisible" : ""}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button type="submit" className="min-w-[120px]">
            {step === 3 ? "Submit" : "Next"} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}