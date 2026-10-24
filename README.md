# Take A Trip — free-first website starter

A responsive static travel-business website for Take A Trip, designed around Himachal Pradesh, Manali, custom packages, and WhatsApp enquiries.

## What's included
- Responsive adventure-themed homepage
- Package cards and category filters
- WhatsApp links with pre-filled messages for packages, trip planning, hotels, cabs and customer feedback
- Photo gallery
- Review section that does not invent testimonials
- Basic SEO metadata
- No build tools or paid libraries required

## WhatsApp setup
The starter is configured for `+91 98169 29669` in `script.js` as `919816929669`.
The `wa.me` link format is country code + number, digits only. Test it from a phone with WhatsApp installed before launch.

## Run locally
Open `index.html` in a modern browser. For best testing, use a local static server (for example, VS Code Live Server).

## Publish free
One option is GitHub Pages:
1. Create/sign into GitHub.
2. Create a public repository (for example, `take-a-trip-website`).
3. Upload `index.html`, `styles.css`, `script.js`, and this README.
4. In repository Settings → Pages, choose deploy from the main branch and root folder.
5. Wait for the published URL and test all WhatsApp buttons on mobile.
GitHub's free hosting options and policies can change; check current plan terms before publishing.

## Before publishing
- Replace the starter package copy with accurate itineraries, prices, inclusions/exclusions, cancellation/refund terms and availability.
- Replace the sample stock-photo URLs with photos you own or have permission to use. Remote Unsplash images require internet access and can change.
- Add your business email, service area, and any required legal/business details.
- Collect real reviews only and obtain explicit permission before publishing them.
- Add a privacy policy if collecting personal information; don't ask customers to send sensitive payment details through WhatsApp.
- Test all buttons, layout, contrast, mobile navigation and accessibility.

## Admin panel plan
This version is a static site; it does NOT include an admin login or database.
Recommended incremental route:
1. Start with package data in a content file or CMS.
2. For secure editing, use a managed CMS or backend with authenticated users and role-based access.
3. Store enquiries in a protected database only if needed; collect the minimum personal data and set retention rules.
4. Never place secret API keys, admin passwords, payment keys or database service-role keys in browser JavaScript or public GitHub.
5. Keep admin endpoints server-side, enable MFA where available, and restrict permissions.

## Future online payments
- Keep WhatsApp as the primary enquiry/confirmation flow initially.
- When ready, select a payment provider available to your business in India (for example, Razorpay or Cashfree) and review their eligibility, fees, KYC, settlement, refund and dispute policies.
- Create payment orders on a secure server/backend; verify payment signatures/webhooks server-side before marking a booking paid.
- Do not collect or store card details yourself. Display clear cancellation, refund, package terms and privacy information before payment.
- Never treat a client-side “success” screen alone as proof of payment.

## Current limitations
No automated availability, confirmed reservation, online payment processing, user accounts, or admin panel is implemented in this starter. WhatsApp buttons open a chat with prefilled text; the customer still needs to send the message and you must confirm the booking.
