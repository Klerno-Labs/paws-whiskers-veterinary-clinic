# Client Handoff Guide
**Project:** Paws & Whiskers Veterinary Clinic Website

Congratulations! Your new website is live. This guide will help you manage and update your content easily.

---

## 📋 What Was Built

Your new site is a custom, high-performance "Tier 1" application designed to convert visitors into appointments.

**Pages Included:**
1.  **Home:** A welcoming introduction with your services, team preview, and client testimonials.
2.  **Services:** A detailed breakdown of your offerings (Wellness, Dental, Surgery, etc.) with pricing transparency.
3.  **Our Team:** Professional bios for Dr. Emily Sato, Dr. James Okafor, and Sarah Liu.
4.  **New Patients:** A step-by-step guide for first-time visitors, including a registration form.
5.  **Emergency:** A high-contrast, easy-to-use page for urgent situations with your phone number and map.
6.  **Contact:** A contact form, your address, hours, and a FAQ section.

---

## 🖼 Changing Images

We have made updating photos incredibly simple. You do **not** need to edit code on every page. All images are controlled from **ONE central file**.

### How to update an image:

1.  **Locate the file:**
    Open the file named `images.ts` located in: `src/config/images.ts`

2.  **Find the image slot:**
    Inside this file, you will see a list of slots with comments explaining where they appear. For example:
    ```javascript
    // Homepage hero banner — the first image visitors see
    "hero": {
      src: "https://images.unsplash.com/photo-...",
      alt: "Modern office workspace...",
      ...
    },
    ```

3.  **Swap the URL:**
    *   Copy the URL of your new photo (it must be hosted online, e.g., on Dropbox, Google Drive direct link, or your file manager).
    *   Paste it inside the quote marks for `src: "..."`.

4.  **Update the Description:**
    *   Change the text inside `alt: "..."` to describe your new photo. This is important for blind visitors using screen readers.

5.  **Save:**
    *   Save the file. The website will update automatically.

### Common Image Slots:
*   `hero`: The big photo on the homepage.
*   `team-1`: The main photo used for team members.
*   `service-1`, `service-2`, etc.: Photos used in the services grid.
*   `cta`: The background photo for the "Book Appointment" section at the bottom of pages.

---

## 🖊 Changing Text Content

If you need to update your phone number, address, or hours, these are usually found in specific files.

### **Phone Number & Address**
These are typically located in the **Footer** component.
*   **File:** `src/components/layout/Footer.tsx`
*   Look for the text "(555) 987-6543" or "3400 Pet Care Lane" and type your new details.

### **Hours of Operation**
Located in the **Footer** and the **Emergency** page.
*   **Files:**
    *   `src/components/layout/Footer.tsx`
    *   `src/app/emergency/page.tsx`

### **Team Bios**
To update Dr. Sato's bio or add a new vet:
*   **File:** `src/app/team/page.tsx` (or `src/components/sections/TeamSection.tsx`)
*   You will see a list of names and text. Simply edit the text inside the quotation marks.

### **Service Prices**
To update your pricing:
*   **File:** `src/app/services/page.tsx`
*   Look for the section labeled `Services Pricing` and update the dollar amounts.

---

## 🎨 Changing Colors (Brand)

Your site currently uses a **Green (#16a34a)** and **Slate** color palette. To change this to a different color (e.g., Blue or Red):

1.  Open `tailwind.config.ts` in the main project folder.
2.  Find the section `theme: { extend: { colors: { ... } } }`.
3.  Change the hex code next to `primary`.
    *   *Note: It is best to keep the text color dark (Slate) for readability, but you can experiment.*

---

## 📧 Contact Form Settings

Your contact form currently sends email, but it requires a setup key to actually deliver messages to your inbox.

*   **Currently:** The form simulates sending a message (for demonstration).
*   **To Activate:** You (or your developer) need to add an API Key from an email service (like Resend or SendGrid) into the Vercel deployment settings.

---

## 🚀 How to Request Changes

If you need complex changes—like adding a brand new page, changing the layout, or fixing a bug—please contact the Pegrio development team.

**Contact:** Pegrio Support
**Lead Time:** Please allow 3-5 business days for standard updates.

---

## 📌 Hosting & Maintenance

*   **Platform:** Your site is hosted on **Vercel**.
*   **Domain:** If we purchased your domain for you, we manage the renewal. If you own it, ensure your credit card is updated with your registrar (GoDaddy, Namecheap, etc.).
*   **Backups:** The site code is backed up in a private Git repository.
*   **Updates:** We will update the underlying software (Next.js, Security patches) quarterly to ensure your site stays fast and secure.

Thank you for choosing Paws & Whiskers!