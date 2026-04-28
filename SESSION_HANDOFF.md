# Session Handoff — 2026-04-28

## Git Status
- Branch: main
- Pushed to GitHub: Nichefinder1/nichefinders-ai-website
- Deployed: Vercel production (nichefinders.ai) — LIVE

## What Was Done This Session

### Booking Widget — Fixed (was broken on production)
- Root cause: Google Calendar env vars were corrupted on Vercel (added via interactive prompt, special chars mangled)
- Fix: Re-added all 4 Google vars via pipe (`printf | vercel env add`) — clean values
- Redeployed — API now returns 4 available days with real slots
- Confirmed live: `curl https://nichefinders.ai/api/booking/availability` → 4 dates

### Contact Page — Rebuilt
- Removed old GoHighLevel iframe (3rd-party calendar, had no availability)
- Replaced with booking CTA card: "Pick a Time →" → /book-a-call + 3-step flow description
- Fixed bottom CTA button (was pointing to old GHL URL)
- Fixed "30-Minute Call" → "45-Minute Call" in hero badges
- Added "Find Us" section with Google Maps embed + GBP link button

### Social Links — Removed / Replaced
- Removed LinkedIn, Twitter, Facebook from footer icon row
- Removed all 3 from JSON-LD `sameAs` in layout.tsx
- Replaced with single "View on Google" button (Google logo + GBP link)
- Updated `SOCIAL_LINKS` constant → `GOOGLE_BUSINESS_URL` in constants.ts
- GBP URL: https://share.google/rcgpdActs5kj47xjC

### Google Maps Embed
- Placed on Contact page BELOW FAQ (above final CTA)
- Dark-mode inversion filter (matches navy theme)
- Exact embed URL from user's Google Maps share
- Place: Nichefinders Ai, Miami FL (25.7978971, -80.1884291)
- Page order: Booking → FAQ → Find Us → CTA

## Commits This Session
```
bf874f4 Use exact Google Maps embed URL for NicheFinders AI location
22b06dd Replace social links with Google Business Profile, add Maps embed to contact page
0c1d31c Fix booking availability and replace old GHL iframe on contact page
```

## Pending / Next Session
1. **3-email post-opt-in sequence** — content for n8n wiring (not started)
2. **og-image.png** — replace with professionally designed graphic (carried over)
3. **Imagen 4 images** — enable Pay As You Go billing at aistudio.google.com/plan (~$0.24 for 8 images)

## Key Files
- Footer: `src/components/layout/Footer.tsx`
- Contact: `src/app/contact/page.tsx`
- Constants: `src/lib/constants.ts` — GOOGLE_BUSINESS_URL
- Booking API: `src/app/api/booking/availability/route.ts`
- Google Calendar lib: `src/lib/google-calendar.ts`
