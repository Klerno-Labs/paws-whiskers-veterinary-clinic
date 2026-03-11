"use client";

import React, { useState } from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <ScrollReveal>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-card border border-slate-100">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">
                Get in Touch
              </h1>
              <p className="text-slate-600 mb-8">We usually respond within 24 hours.</p>

              {status === "success" ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-2xl text-center">
                  <CheckCircle2 className="h-12 w-12 mx-auto mb-3 text-green-600" />
                  <h3 className="font-bold text-xl">Message Sent!</h3>
                  <p>We'll get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm underline text-green-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Input label="Name" name="name" value={formData.name} onChange={handleChange} required />
                  <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                  <Input label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                  <Input label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
                  
                  <div className="mt-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl p-4 focus:outline-none focus:border-primary focus:bg-white transition-all"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {errorMsg && <p className="text-danger text-sm mt-2">{errorMsg}</p>}

                  <div className="mt-8">
                    <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto rounded-full" isLoading={status === "loading"}>
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-6">Clinic Info</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-green-50 p-3 rounded-full text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Address</h3>
                      <p className="text-slate-600">{siteConfig.contact.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-green-50 p-3 rounded-full text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Phone</h3>
                      <a href={`tel:${siteConfig.contact.phone}`} className="text-slate-600 hover:text-primary transition-colors">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-green-50 p-3 rounded-full text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-600 hover:text-primary transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-green-50 p-3 rounded-full text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Hours</h3>
                      <p className="text-slate-600">
                        Mon-Fri: 7:30am - 6:00pm<br />
                        Sat: 8:00am - 1:00pm<br />
                        Sun: Emergency Only
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Image Placeholder */}
              <div className="rounded-3xl overflow-hidden shadow-lg h-64 md:h-80 relative">
                 <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-400 font-medium">Clinic Exterior Photo</span>
                 </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f0fdf4]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-secondary mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Do you accept walk-ins?", a: "Yes, we accept walk-ins based on availability, but we strongly recommend booking an appointment to minimize wait times." },
              { q: "What payment methods do you accept?", a: "We accept Cash, Credit Cards (Visa, Mastercard, Amex), Scratchpay, and CareCredit." },
              { q: "Do you board exotic pets?", a: "We primarily board dogs and cats. Please contact us for exotic pet boarding availability." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                 <details className="group">
                  <summary className="p-6 cursor-pointer font-semibold text-lg text-secondary hover:bg-slate-50 flex justify-between items-center">
                    {item.q}
                    <span className="transform group-open:rotate-180 transition-transform text-primary">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600">
                    {item.a}
                  </div>
                 </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}