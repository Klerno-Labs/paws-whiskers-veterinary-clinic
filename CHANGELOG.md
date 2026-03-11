# Changelog

All notable changes to the Paws & Whiskers Veterinary Clinic website will be documented in this file.

## [1.0.0] - 2023-10-27

### Added
- **Project Structure**
    - Initialized Next.js 14 project with TypeScript and Tailwind CSS.
    - Configured Framer Motion for scroll and interaction animations.
    - Integrated Google Fonts (Plus Jakarta Sans, Inter, Comfortaa).

- **Global Components**
    - **Floating Island Navbar**: Glassmorphism effect, sticky on scroll, mobile responsive with slide-out menu.
    - **Footer**: 4-column grid with brand info, service links, and contact details.
    - **Button System**: Variants for Primary, Secondary, Ghost, and Danger actions.
    - **Form Inputs**: Floating label style with real-time validation UI.

- **Pages**
    - **Home Page**:
        - Split-screen Hero with ambient background blobs.
        - Trust Bar (Marquee) for AAHA accreditation.
        - Bento Grid layout for Services Preview.
        - Team Snapshot horizontal scroll.
        - Testimonials Section with star ratings.
        - CTA Section.
    - **Services Page**:
        - Centered Hero with background graphic.
        - Sticky Sub-navigation for categories.
        - Categorized Grid (Preventative, Dental, Surgery, Emergency).
        - Pricing Transparency Accordion.
    - **Our Team Page**:
        - Full-width Hero with team photo overlay.
        - Doctor Bio Cards with hover-reveal content.
        - Support Staff Grid section.
    - **New Patients Page**:
        - Process Timeline (Book -> Forms -> Arrival).
        - Multi-step Registration Form Wizard.
        - "What to Expect" Checklist with icons.
    - **Emergency Page**:
        - High-urgency Dark Mode Hero.
        - Large clickable phone number with pulsing indicator.
        - Triage Guide cards (Life-threatening vs Urgent).
        - Directions/Map section.
    - **Contact Page**:
        - Split layout (Form left, Info right).
        - Contact Form with honeypot spam protection.
        - FAQ Accordion section.

- **Features**
    - **Image Management**: Centralized image configuration via `src/config/images.ts`.
    - **Booking System**: Interactive "Book Appointment" modal wizard.
    - **Contact Form**: Functional submission handler with loading/error states.
    - **Animations**: Intersection Observer-based fade-ins, hover lifts, and micro-interactions.
    - **Responsive Design**: Fully adaptive layouts for Mobile, Tablet, Desktop, and Wide screens.

### Security
- Implemented honeypot fields on all public forms to prevent bot submissions.
- External links include `rel="noopener noreferrer"`.
- Input sanitization for form data.

### Performance
- Optimized font loading strategy (`display: swap`).
- Lazy loading for images below the fold.
- Prioritized loading for Hero images.
- Tailwind CSS purging for minimal bundle size.

### Known Limitations
- Email delivery requires configuring a third-party API (e.g., Resend, SendGrid) via environment variables.
- Map embeds on the Emergency/Contact pages use generic Google Maps placeholders and will require specific API keys for advanced styling.
- The "Online Booking" currently simulates the backend appointment saving; API integration requires a practice management system connection.