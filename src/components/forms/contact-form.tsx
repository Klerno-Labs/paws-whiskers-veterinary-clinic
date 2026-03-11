"use client";
import { useState } from "react";

export function ContactForm() {
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
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="border rounded-lg w-full p-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="border rounded-lg w-full p-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-1">Message</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleChange} required className="border rounded-lg w-full p-2" />
      </div>
      <button type="submit" disabled={isSubmitting} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {isSuccess && <p className="mt-4 text-green-600">Thank you! We'll be in touch within 24 hours.</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </form>
  );
}