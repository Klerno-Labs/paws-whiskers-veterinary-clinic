"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    _gotcha: "" // Honeypot
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData._gotcha) return // Bot detected

    setStatus("loading")
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", _gotcha: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
      {status === "success" ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Message Sent!</h3>
          <p className="text-slate-600">We&apos;ll be in touch within 24 hours.</p>
          <Button onClick={() => setStatus("idle")} variant="outline" className="mt-6">Send another</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="John Doe" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="john@example.com" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
            <Input 
              id="phone" 
              name="phone" 
              type="tel" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
              placeholder="(555) 123-4567" 
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
            <Input 
              id="subject" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
              placeholder="How can we help?" 
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:border-green-500 focus-visible:ring-2 focus-visible:ring-green-500/20 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
              placeholder="Tell us more about your pet..."
            />
          </div>

          {/* Honeypot */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" onChange={handleChange} />

          {status === "error" && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Something went wrong. Please try again.</span>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full h-12 text-base" 
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      )}
    </div>
  )
}