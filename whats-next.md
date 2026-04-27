<original_task>
Continue nichefinders.ai homepage visual redesign — converting all sections to dark navy design system (navy-deepest #001A3A) matching the AI OS Partner Program page, with orange accents, bottom section glow, and custom-build agency positioning.
</original_task>

<work_completed>

## ProblemAgitation.tsx — Full Dark Rebuild
- Replaced light `bg-white` section + red-50/cyan-50 boxes with full dark navy design
- `background="navy-deepest"` with `glow`
- Left box: dark card `bg-white/[0.03]`, red accent border `border-red-500/20`, red top bar gradient, red X icons (custom SVG), items as `bg-red-500/[0.06]` rows
- Right box: orange accent border `border-orange-cta/20`, orange top bar gradient, orange check icons (custom SVG), items as `bg-orange-cta/[0.06]` rows
- Removed empty emoji icon divs entirely
- Extracted `problems` and `solutions` arrays to module level
- File: `src/components/sections/ProblemAgitation.tsx`

## TechStack.tsx — Two Changes
1. **Removed bottom CTA box** ("Custom Tech Stack for Every Client" card) — kept only the "See How We Choose the Right Tools" link
2. **Swapped 4 SaaS tools for custom dev stack tools** (12 slots maintained):
   - Removed: Make, Zapier, HubSpot, Salesforce
   - Added: Supabase (`#3ecf8e`), LangChain (`#1C3A47`), Docker (`#2496ed`), Pinecone (`#1a1a2e`)
   - All with custom SVG brand logos
   - Kept: OpenAI, Claude, Google Gemini, n8n, Airtable, Twilio, SendGrid, Stripe
- File: `src/components/sections/TechStack.tsx`

## globals.css — Section Glow Direction Change
- Removed top `::before` glow entirely
- Added bottom `::after` glow with 3 radial sources (left edge, center, right edge) matching Evervault-style bottom bloom (reference: `/Users/nichefinder/Desktop/highlight.png`)
```css
.section-glow::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 320px;
  background:
    radial-gradient(ellipse 60% 100% at 0% 100%, var(--blue-glow-strong) 0%, transparent 70%),
    radial-gradient(ellipse 60% 100% at 50% 100%, var(--blue-glow-strong) 0%, transparent 70%),
    radial-gradient(ellipse 60% 100% at 100% 100%, var(--blue-glow-strong) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}
```
- File: `src/styles/globals.css`

## All Sections → navy-deepest
Bulk swap of `background="navy"` → `background="navy-deepest"` across:
- `ProblemAgitation.tsx`, `FeaturedCaseStudy.tsx`, `SixStageTeaser.tsx`, `TechStack.tsx`, `WhoWeServe.tsx`

## Git Commits (pushed to GitHub, NOT deployed)
- `e2d5431` — Homepage visual redesign — dark navy system, section glow, component overhaul (10 files)
- `8da064c` — TechStack: replace SaaS tools with custom dev stack
Both on `main`, pushed to `Nichefinder1/nichefinders-ai-website`.

## Previous Session Work (committed in b7e4110)
- SixStageTeaser: scroll-triggered per-row highlight, sticky left header, GSAP ScrollTrigger
- FinalCTA: eyebrow removed, value props removed, trust signals as inline divider, dark blue bottom border
- ROICalculator: CTA card fixed from transparent to `#CC5500`
- Hero: bottom padding added for scroll ticker spacing
- WhoWeServe: eyebrow pill → plain text
- SocialProof: removed from page.tsx
</work_completed>

<work_remaining>

## Priority Order for Next Session

### 1. WhoWeServe — Card Redesign
- File: `src/components/sections/WhoWeServe.tsx`
- Problem: emoji icons (`text-6xl`), generic `text-alert` X icons for challenges
- Fix: replace emoji with per-industry SVG icons, refine challenge/solution list styling
- Industries pulled from `INDUSTRIES` constant in `src/lib/constants.ts`

### 2. FeaturedCaseStudy — Full Dark Rebuild
- File: `src/components/sections/FeaturedCaseStudy.tsx`
- Old colors still present:
  - Line 32: `<Card variant="elevated" className="bg-white overflow-hidden">`
  - Line 158: `bg-cyan-50 rounded-lg`
  - Line 159: `text-cyan-primary`
  - Line 177: `from-success/10 to-cyan-50 ... border-success`
  - Line 190: `border-cyan-primary`
- Fix: dark card, orange accents replace cyan, stats use orange/white not green

### 3. Footer — Not Reviewed
- Unknown state, needs dark treatment check

### 4. Deploy When Ready
- `npm run build` → direct deploy (never cloud build)
- Only when user explicitly says deploy
</work_remaining>

<attempted_approaches>

## Section Glow Iterations
- Single center radial at bottom → too concentrated in middle, rejected
- Left + right only → gap visible in center, rejected
- Left + center + right → approved

## Glow Direction
- Started session with top `::before` glow
- User referenced `/Users/nichefinder/Desktop/highlight.png` (Evervault screenshot) showing bottom bloom
- Switched entirely to bottom `::after` — no top glow on any section now
</attempted_approaches>

<critical_context>

## Color System
| Token | Hex | Usage |
|-------|-----|-------|
| `navy-deepest` | `#001A3A` | All homepage section backgrounds |
| `navy-deep` | `#002855` | Text, borders |
| `orange-cta` | `#CC5500` | Primary accent, CTAs |
| `blue-glow-strong` | `rgba(56,152,255,0.28)` | Section glow radials |

## Section Component Background Mapping
- `background="navy"` → `bg-navy-deep` (#002855) — DO NOT USE on homepage
- `background="navy-deepest"` → `bg-navy-deepest` (#001A3A) — CORRECT for homepage

## Positioning Rule (Critical)
NicheFinders = **custom build agency**. No third-party SaaS promotion (no Zapier, Make, HubSpot, Salesforce). Tech stack must reflect: AI models, custom automation (n8n self-hosted), databases, infrastructure, frameworks.

## Git SOP
- Never `git push` unless explicitly asked
- Never deploy unless explicitly asked
- Deploy SOP: local `npm run build` → direct deploy, never cloud build trigger

## Section Glow CSS
- Class `.section-glow` applied via `glow` prop on `<Section>`
- `::after` pseudo-element, `position: absolute`, `bottom: 0`, `height: 320px`
- 3 radials at 0%, 50%, 100% horizontal — fills full bottom edge
- `z-index: 0` — content needs `relative z-10` if it must sit above glow

## SocialProof
- File exists at `src/components/sections/SocialProof.tsx` but NOT imported in `page.tsx`
- Ignore unless specifically asked to bring back
</critical_context>

<current_state>

## Section Status
| Section | Status |
|---------|--------|
| Hero | ✅ Complete |
| ProblemAgitation | ✅ Complete — dark rebuild done |
| FourPillars | ✅ Complete (prior session) |
| SixStageTeaser | ✅ Complete (prior session) |
| WhoWeServe | ⚠️ Background updated, emoji icons still present |
| TechStack | ✅ Complete — tools swapped, bottom box removed |
| FeaturedCaseStudy | ❌ Background updated, cyan colors + white card still present |
| ROICalculator | ✅ CTA fixed |
| FinalCTA | ✅ Complete |
| Footer | ❌ Not reviewed |

## Git State
- Branch: `main`
- Latest commit: `8da064c` pushed to `Nichefinder1/nichefinders-ai-website`
- NOT deployed — production site unchanged
- Working directory clean (one irrelevant unstaged change in SocialProof.tsx)

## Next Session Start
1. `cd "/Users/nichefinder/Desktop/Nichefinder AI Agency/company/nichefinders-ai-website"`
2. `npm run dev` → open `http://localhost:3000`
3. Start with WhoWeServe (emoji → SVG icons)
4. Then FeaturedCaseStudy full dark rebuild
</current_state>
