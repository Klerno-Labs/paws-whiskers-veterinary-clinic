"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        setIsSuccess(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="border rounded-md w-full p-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="border rounded-md w-full p-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleChange} required className="border rounded-md w-full p-2" />
      </div>
      <button type="submit" disabled={isSubmitting} className="bg-green-600 text-white px-6 py-2 rounded-lg">
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {isSuccess && <p className="text-green-600 mt-4">Thank you! We'll be in touch within 24 hours.</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
    </form>
  );
}