"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("_gotcha");

    if (honeypot) {
      setIsSubmitting(false);
      return; // Silent fail for bots
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 p-8 rounded-large text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700">Thank you for reaching out. We'll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-secondary-900">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-semibold text-secondary-900">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            placeholder="(555) 000-0000"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-secondary-900">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
          placeholder="you@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-semibold text-secondary-900">Subject</label>
        <select
          id="subject"
          name="subject"
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Appointment Request">Appointment Request</option>
          <option value="Billing">Billing</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-secondary-900">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
          placeholder="How can we help you and your pet?"
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-full">
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}