# Deployment Guide

This guide will walk you through deploying the **Paws & Whiskers Veterinary Clinic** website to Vercel.

## Prerequisites

1.  A [Vercel Account](https://vercel.com/signup).
2.  The project code pushed to a Git provider (GitHub, GitLab, or Bitbucket).
3.  Access to any API keys required for the contact form or booking system.

---

## Step 1: Prepare Environment Variables

Before deploying, ensure you have your API keys ready. You will need to configure these in Vercel.

1.  **Email Service** (Required for the contact form to work):
    *   We recommend using **Resend** or **SendGrid**.
    *   You will need an API Key.
    *   You will need a "From Email" address (e.g., `noreply@pawsandwhiskers.vet`).

2.  **Booking System** (Optional):
    *   If connecting to a real backend, have the API endpoint URL and keys ready.

3.  **Google Maps** (Optional):
    *   For the Emergency/Contact page maps, a Google Maps API Key is needed for styled maps, though standard embeds work without one.

---

## Step 2: Deploy to Vercel

1.  **Log in** to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  **Import Git Repository**:
    *   Find your `paws-and-whiskers` repository in the list and click **Import**.
4.  **Configure Project**:
    *   **Framework Preset**: Vercel should detect "Next.js" automatically.
    *   **Root Directory**: Leave as `./`.
    *   **Build Command**: Leave as `npm run build` (or `yarn build` / `pnpm build`).
    *   **Output Directory**: Leave as `.next`.
5.  **Environment Variables**:
    *   Scroll down to the "Environment Variables" section.
    *   Add the following variables (Key | Value):
        *   `NEXT_PUBLIC_SITE_URL` | Your future domain (e.g., `https://pawsandwhiskers.vet`)
        *   `CONTACT_API_KEY` | [Your Email Service API Key]
        *   `CONTACT_FROM_EMAIL` | `noreply@pawsandwhiskers.vet`
    *   *Note: Ensure you select the correct environments (Production, Preview, Development) for these variables.*
6.  Click **Deploy**.

Vercel will now build your project. This usually takes 1-2 minutes.

---

## Step 3: Domain Configuration

Once the deployment is complete (you will see a green "Congratulations" message):

1.  **Click on "Continue to Dashboard"**.
2.  Go to the **Settings** tab at the top.
3.  Click on **Domains** on the left sidebar.
4.  **Add Domain**:
    *   Enter your domain (e.g., `pawsandwhiskers.vet`).
    *   Click **Add**.
5.  **Choose Option**:
    *   If you bought the domain via Vercel, select the recommended option.
    *   If you bought it elsewhere (GoDaddy, Namecheap, etc.), Vercel will provide you with **DNS Records** (usually an A Record and a CNAME Record).
6.  **Update DNS**:
    *   Log in to your domain registrar.
    *   Paste the records provided by Vercel into your DNS settings.
    *   Wait for propagation (can take anywhere from a few minutes to 24 hours).

---

## Step 4: Post-Deployment Checklist

After your domain is live and the SSL certificate (padlock) has turned green:

1.  **Test Forms**:
    *   Go to the Contact page.
    *   Submit a test message.
    *   Check the recipient email inbox to ensure delivery.
2.  **Test Emergency Page**:
    *   Click the "Call Now" button on mobile to ensure it triggers the phone dialer.
    *   Verify the map loads correctly.
3.  **Check SEO**:
    *   View page source and check that the `<title>` and `<meta name="description">` tags are correct.
    *   Check the JSON-LD structured data.
4.  **Mobile Responsiveness**:
    *   Open the site on a physical mobile device.
    *   Test the hamburger menu.
    *   Test the "Book Now" floating bar.
5.  **Performance**:
    *   Run [Google PageSpeed Insights](https://pagespeed.web.dev/) on your new URL.
    *   Aim for a score of 90+ on both Mobile and Desktop.

---

## Troubleshooting

*   **Build Fails**: Check the "Build Logs" in Vercel. It is often a missing environment variable or a dependency installation error.
*   **Images not loading**: Ensure your image URLs in `src/config/images.ts` are publicly accessible (not behind a password-protected cloud bucket).
*   **Forms not sending**: Verify the API keys in Vercel settings match your service provider's dashboard exactly.

## Support

If you encounter any issues during deployment that are not covered here, please contact Pegrio support.