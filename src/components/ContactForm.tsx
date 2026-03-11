"use client";

```typescript
import React, { useState } from 'react';

import { useState } from "react";
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', _gotcha: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; // Bot detected
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      if (res.ok) {
        setIsSuccess(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
      </div>
      <button type="submit" disabled={isSubmitting} className="bg-green-600 text-white px-6 py-2.5 rounded-full text-lg font-semibold hover:bg-green-700">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {isSuccess && <p className="text-green-600">Thank you! We'll be in touch within 24 hours.</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default ContactForm;
```