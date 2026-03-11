"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Paws & Whiskers Veterinary Clinic. Book an appointment or ask a question.",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSuccess(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Hero 
        variant="center"
        title="Get in Touch"
        subtitle="Have questions or ready to book? Reach out to our team."
        imageKey="cta"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-card border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-heading">Send a Message</h2>
            
            {isSuccess ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-xl text-center animate-in fade-in zoom-in duration-300">
                <p className="font-semibold text-lg">Message Sent!</p>
                <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  label="Full Name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    label="Email Address" 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                  <Input 
                    label="Phone Number" 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                </div>
                <Input 
                  label="Subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                />
                
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl p-4 text-slate-900 focus:outline-none focus:border-[#16a34a] focus:bg-white transition-all resize-none"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Honeypot */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full mt-4" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-heading">Clinic Info</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-[#f0fdf4] p-3 rounded-full text-[#16a34a]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Address</p>
                    <p className="text-slate-600">
                      3400 Pet Care Lane<br />
                      Denver, CO 80202
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-[#f0fdf4] p-3 rounded-full text-[#16a34a]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Phone</p>
                    <a href="tel:5559876543" className="text-slate-600 hover:text-[#16a34a]">(555) 987-6543</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-[#f0fdf4] p-3 rounded-full text-[#16a34a]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Email</p>
                    <a href="mailto:care@pawsandwhiskers.vet" className="text-slate-600 hover:text-[#16a34a]">care@pawsandwhiskers.vet</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-[#f0fdf4] p-3 rounded-full text-[#16a34a]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Hours</p>
                    <p className="text-slate-600 text-sm">
                      Mon-Fri: 7:30am - 6pm<br />
                      Saturday: 8am - 1pm<br />
                      Sunday: Emergency Only
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Embedded Map Placeholder - Using Image as per requirements for static export */}
            <div className="rounded-[32px] overflow-hidden shadow-lg h-64 bg-slate-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium bg-slate-100">
                Interactive Map Loading...
              </div>
              {/* Real implementation would use Google Maps Embed API */}
            </div>
            
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <h3 className="text-red-900 font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                Emergency?
              </h3>
              <p className="text-red-800 text-sm mb-4">If this is a life-threatening emergency, please call us immediately or go to the nearest emergency animal hospital.</p>
              <a href="tel:5559876543" className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors">
                Call (555) 987-6543
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}