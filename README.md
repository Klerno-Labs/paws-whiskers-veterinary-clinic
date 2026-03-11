# Paws & Whiskers Veterinary Clinic

A modern, high-performance veterinary clinic website built with Next.js 14, Tailwind CSS, and Framer Motion. Designed for Tier 1 visual quality, accessibility, and conversion.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Utility-first, custom design system)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Plus Jakarta Sans (Headings), Inter (Body), Comfortaa (Accent) via `next/font`
- **Images:** Optimized via `next/image` with centralized configuration

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ installed
- Git installed

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd paws-and-whiskers
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
paws-and-whiskers/
├── public/
│   ├── favicon.ico
│   └── ... # Static assets
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── api/              # API Routes (e.g., contact form submission)
│   │   ├── emergency/        # Emergency page
│   │   ├── services/         # Services listing page
│   │   ├── team/             # Team page
│   │   ├── new-patients/     # New patient registration & info
│   │   ├── contact/          # Contact page & form
│   │   ├── layout.tsx        # Root layout (fonts, metadata)
│   │   └── page.tsx          # Homepage
│   ├── components/
│   │   ├── ui/               # Reusable UI components (Buttons, Inputs)
│   │   ├── layout/           # Navbar, Footer
│   │   ├── sections/         # Specific page sections (Hero, Features)
│   │   └── forms/            # Contact, Booking, Registration forms
│   ├── config/
│   │   └── images.ts         # 🖼 CENTRALIZED IMAGE CONFIGURATION
│   └── lib/
│       └── utils.ts          # Helper functions (e.g., cn() class merger)
├── tailwind.config.ts        # Tailwind customization
├── tsconfig.json             # TypeScript configuration
└── next.config.mjs           # Next.js configuration
```

## 🎨 Customization Guide

### 1. Image Customization

All images across the site are managed from a **single configuration file** to ensure consistency and easy updates.

**File:** `src/config/images.ts`

**How to change an image:**
1.  Open `src/config/images.ts`.
2.  Find the slot you want to change (e.g., `hero`, `service-1`).
3.  Replace the `src` URL with your new image URL.
4.  Update the `alt` text for accessibility.
5.  Save the file. The change will propagate automatically to all components using that image slot.

**Supported Slots:**
- `hero`: Homepage hero banner.
- `hero-alt`: Secondary hero (inner pages).
- `about`: About section background.
- `service-1`, `service-2`, `service-3`: Service card visuals.
- `team-1`: Team member placeholder.
- `gallery-1`, `gallery-2`, `gallery-3`: Gallery grid images.
- `testimonial-bg`: Testimonial section background.
- `cta`: Call-to-action section background.

### 2. Brand Customization

**Colors:**
The design system uses specific CSS variables defined in `tailwind.config.ts`.
- **Primary Green:** `#16a34a` (CTAs, accents)
- **Secondary Slate:** `#1e293b` (Headings, text)
- **Background:** `#f0fdf4` (Light green tint)

To change the brand color:
1.  Open `tailwind.config.ts`.
2.  Locate the `theme.extend.colors` section.
3.  Update the hex codes for `primary`, `secondary`, etc.

**Fonts:**
1.  Open `src/app/layout.tsx`.
2.  Modify the `GoogleFont` imports (e.g., change `Plus_Jakarta_Sans` to another font).
3.  Update the CSS variable assignments in the `body` className if necessary.

**Logo:**
1.  If you have an image logo, place it in `public/logo.png`.
2.  Update the `Logo` component in `src/components/layout/Navbar.tsx` to render the image instead of text.

## 📝 Environment Variables

Create a `.env.local` file in the root directory. See `.env.example` for required keys (e.g., email service API keys for the contact form).

## 🚀 Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2.  Import the project into [Vercel](https://vercel.com).
3.  Add environment variables in the Vercel dashboard settings.
4.  Deploy.

## 🌐 SEO Features

- Fully semantic HTML structure.
- Dynamic `metadata` generation in every page.
- `sitemap.xml` and `robots.txt` generation.
- LocalBusiness JSON-LD structured data.
- Optimized images and font loading for Core Web Vitals.

## 📄 License

Proprietary - All rights reserved to Paws & Whiskers Veterinary Clinic.