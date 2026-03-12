"use client"

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [honeypot, setHoneypot] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot) return // Bot detected

    setStatus('loading')
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="pt-10">
      {/* Split Section */}
      <section className="py-20 bg-white" id="book">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* Form */}
          <div>
            <h1 className="font-heading font-bold text-4xl text-secondary mb-6">Get In Touch</h1>
            <p className="text-muted-foreground mb-8">Book an appointment, ask a question, or just say hello.</p>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-700">We&apos;ll be in touch within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="mt-4 text-sm text-green-800 underline&quot;>Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Your Name</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                  <select 
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                  >
                    <option value="">Select a topic...</option>
                    <option value="booking">Book Appointment</option>
                    <option value="billing">Billing Question</option>
                    <option value="medical">Medical Question</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  ></textarea>
                </div>

                <input 
                  type="text" 
                  name="_gotcha" 
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden&quot; 
                  tabIndex={-1} 
                  autoComplete="off" 
                />

                {status === 'error' && (
                  <div className="text-red-600 text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Please try again.
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                  {status !== 'loading' && <Send className="ml-2 w-4 h-4" />}
                </Button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-12">
            <div className="bg-background p-8 rounded-2xl">
              <h3 className="font-heading font-bold text-xl text-secondary mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:5559876543" className="text-lg font-semibold text-secondary hover:text-primary transition-colors">(555) 987-6543</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:care@pawsandwhiskers.vet" className="text-lg font-semibold text-secondary hover:text-primary transition-colors">care@pawsandwhiskers.vet</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="text-lg font-semibold text-secondary">3400 Pet Care Lane<br />Denver, CO 80202</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-secondary text-white p-8 rounded-2xl">
               <h3 className="font-heading font-bold text-xl mb-4">Opening Hours</h3>
               <ul className="space-y-3">
                 <li className="flex justify-between border-b border-white/10 pb-2">
                   <span>Mon - Fri</span>
                   <span className="font-medium">7:30am - 6:00pm</span>
                 </li>
                 <li className="flex justify-between border-b border-white/10 pb-2">
                   <span>Saturday</span>
                   <span className="font-medium">8:00am - 1:00pm</span>
                 </li>
                 <li className="flex justify-between">
                   <span>Sunday</span>
                   <span className="text-accent font-medium">Emergency Only</span>
                 </li>
               </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}