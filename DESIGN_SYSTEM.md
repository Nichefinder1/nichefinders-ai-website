# NicheFinders AI - Design System
## World-Class Website Design Foundation

**Version**: 1.0
**Created**: December 27, 2025
**Status**: Production-Ready
**Purpose**: Design system for 10/10 premium website + reusable template for all future client projects

---

## 🎨 Brand Identity

### Logo
**Primary Mark**: AI neural network + human profile
**Color**: Cyan `#3BBADD`
**Style**: Tech-forward, human-centric, premium
**Usage**: Clean for header/footer, animated SVG for hero sections

**File Formats**:
- SVG (scalable, animation-ready)
- PNG transparent (social media, email)
- Favicon (icon only, 32x32, 64x64, 192x192)

### Brand Essence
- **Intelligence**: AI-powered sophistication
- **Humanity**: Human-centric automation
- **Premium**: Enterprise-grade quality
- **Accessible**: Not complex, empowering
- **Results**: ROI-obsessed, operator mindset

---

## 🌈 Color System

### Primary Colors
```css
--cyan-primary: #3BBADD;          /* Brand color, CTAs, accents */
--navy-deep: #0A1929;             /* Dark backgrounds, contrast */
--white: #FFFFFF;                 /* Clean sections, text on dark */
--gray-light: #F8FAFC;            /* Subtle backgrounds, cards */
```

### Accent Colors
```css
--green-success: #10B981;         /* ROI metrics, positive stats */
--coral-alert: #FF6B6B;           /* Problem statements, urgency */
```

### Gradients
```css
--gradient-primary: linear-gradient(135deg, #3BBADD 0%, #0A1929 100%);
--gradient-hero: linear-gradient(180deg, #0A1929 0%, #1a2742 50%, #0A1929 100%);
--gradient-card: linear-gradient(135deg, rgba(59, 186, 221, 0.1) 0%, rgba(10, 25, 41, 0.05) 100%);
```

### Semantic Colors
```css
--text-primary: #0A1929;          /* Dark mode: #FFFFFF */
--text-secondary: #64748b;        /* Dark mode: #94a3b8 */
--text-tertiary: #94a3b8;         /* Dark mode: #64748b */
--border-light: #e2e8f0;          /* Subtle dividers */
--border-strong: #cbd5e1;         /* Prominent borders */
```

### Usage Guidelines
- **Cyan primary**: Logo, CTAs, interactive elements, brand moments
- **Navy deep**: Hero backgrounds, section dividers, premium sections
- **White**: Default text on dark, clean section backgrounds
- **Gray light**: Alternating section backgrounds, card surfaces
- **Green success**: ROI numbers, conversion metrics, positive outcomes
- **Coral alert**: Pain points, urgency drivers, problem agitation

---

## 📝 Typography

### Font Families
```css
--font-header: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'Space Mono', 'Courier New', monospace;
```

### Type Scale (Desktop)
```css
--text-xs: 0.75rem;      /* 12px - Fine print, labels */
--text-sm: 0.875rem;     /* 14px - Secondary text */
--text-base: 1rem;       /* 16px - Body text */
--text-lg: 1.125rem;     /* 18px - Large body, subheadings */
--text-xl: 1.25rem;      /* 20px - Section subheads */
--text-2xl: 1.5rem;      /* 24px - Card titles */
--text-3xl: 1.875rem;    /* 30px - H3 */
--text-4xl: 2.25rem;     /* 36px - H2 */
--text-5xl: 3rem;        /* 48px - H1 */
--text-6xl: 3.75rem;     /* 60px - Hero headlines */
--text-7xl: 4.5rem;      /* 72px - Large hero statements */
```

### Type Scale (Mobile)
```css
/* Scale down 15-20% for mobile */
--text-6xl-mobile: 2.5rem;   /* 40px */
--text-7xl-mobile: 3rem;     /* 48px */
```

### Font Weights
```css
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
--font-black: 900;
```

### Line Heights
```css
--leading-tight: 1.25;       /* Headlines */
--leading-snug: 1.375;       /* Subheadings */
--leading-normal: 1.5;       /* Body text */
--leading-relaxed: 1.625;    /* Large body text */
--leading-loose: 2;          /* Spacious text */
```

### Usage Guidelines
- **Poppins Bold (700-900)**: All headlines (H1-H3), CTA buttons
- **Inter Regular (400-500)**: Body copy, descriptions, lists
- **Space Mono**: Data points, metrics, code references, technical elements

---

## 📐 Spacing System

### Base Unit: 4px
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Section Spacing
```css
--section-padding-y: 5rem;        /* Desktop: 80px top/bottom */
--section-padding-y-mobile: 3rem; /* Mobile: 48px top/bottom */
--section-gap: 3rem;              /* Between section elements */
```

### Container Widths
```css
--container-xs: 640px;    /* Narrow content */
--container-sm: 768px;    /* Forms, narrow pages */
--container-md: 1024px;   /* Standard content */
--container-lg: 1280px;   /* Wide content, default */
--container-xl: 1536px;   /* Full-width sections */
```

---

## 🎬 Animation System

### Timing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-custom: cubic-bezier(0.65, 0, 0.35, 1);      /* Premium feel */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Duration Standards
```css
--duration-fast: 150ms;       /* Micro-interactions, hovers */
--duration-normal: 300ms;     /* Standard transitions */
--duration-slow: 500ms;       /* Emphasis animations */
--duration-slower: 750ms;     /* Scroll-triggered reveals */
--duration-slowest: 1000ms;   /* Hero animations, sequences */
```

### Animation Principles (Jesko Jets / Drip Style)
1. **Balance**: Max 3 simultaneous animations per section
2. **Clarity**: Purpose immediately understood (enhance, not decorate)
3. **Context**: Natural integration with scroll flow
4. **Responsiveness**: Simplified on mobile, maintain premium feel

### Core Animation Types

#### 1. Text Reveals (Word-by-Word)
```javascript
// GSAP SplitText implementation
gsap.from(words, {
  y: 20,
  opacity: 0,
  stagger: 0.05,      // 50ms between words
  duration: 0.5,
  ease: "power2.out"
});
```

#### 2. Parallax Layers
```javascript
// Background slower, foreground faster
gsap.to(background, {
  y: '-50%',
  scrollTrigger: { scrub: 1 }
});
gsap.to(foreground, {
  y: '50%',
  scrollTrigger: { scrub: 1 }
});
```

#### 3. Scroll-Snap Sections
```css
scroll-snap-type: y mandatory;
scroll-behavior: smooth;

.section {
  scroll-snap-align: start;
  min-height: 100vh;
}
```

#### 4. Image Sequences (Canvas)
```javascript
// Drip-style frame animation
const frameCount = 80;
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

ScrollTrigger.create({
  trigger: canvas,
  scrub: 1,
  onUpdate: (self) => {
    const frame = Math.floor(self.progress * frameCount);
    renderFrame(frame);
  }
});
```

#### 5. Fade-Scale Reveals
```javascript
gsap.from(element, {
  opacity: 0,
  scale: 0.95,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: element,
    start: "top 80%"
  }
});
```

#### 6. Stagger Grids
```javascript
gsap.from(gridItems, {
  y: 30,
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
  ease: "power2.out"
});
```

#### 7. Counter Animations
```javascript
gsap.to(counter, {
  innerText: targetNumber,
  duration: 1.5,
  ease: "power2.out",
  snap: { innerText: 1 },
  scrollTrigger: {
    trigger: counter,
    start: "top 75%"
  }
});
```

### Mobile Animation Considerations
- Reduce complexity (disable parallax)
- Increase duration by 20% (easier to perceive)
- Simplify image sequences (40 frames vs. 80)
- Disable heavy GPU animations if performance suffers
- Use `prefers-reduced-motion` media query

---

## 🧩 Component Library

### Buttons

#### Primary CTA
```jsx
<button className="btn-primary">
  Book Discovery Call
</button>
```

**Styles**:
```css
.btn-primary {
  background: var(--cyan-primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-family: var(--font-header);
  font-weight: 700;
  font-size: 1rem;
  transition: all 300ms var(--ease-custom);
  box-shadow: 0 4px 14px rgba(59, 186, 221, 0.25);
}

.btn-primary:hover {
  background: #2da3c7;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 186, 221, 0.35);
}
```

#### Secondary CTA
```css
.btn-secondary {
  background: transparent;
  color: var(--cyan-primary);
  border: 2px solid var(--cyan-primary);
  padding: 0.875rem 1.75rem;
  /* hover: filled cyan */
}
```

#### Ghost Button
```css
.btn-ghost {
  background: transparent;
  color: var(--text-primary);
  border: none;
  text-decoration: underline;
  text-underline-offset: 4px;
}
```

### Cards

#### Glassmorphism Card
```css
.card-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

#### Elevated Card
```css
.card-elevated {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.05),
    0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 300ms var(--ease-custom);
}

.card-elevated:hover {
  transform: translateY(-4px);
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.07),
    0 20px 50px rgba(0, 0, 0, 0.12);
}
```

#### Gradient Border Card
```css
.card-gradient-border {
  position: relative;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
}

.card-gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  padding: 2px;
  background: var(--gradient-primary);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
```

### Forms

#### Input Field
```css
.input-field {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--border-light);
  border-radius: 0.5rem;
  font-family: var(--font-body);
  font-size: 1rem;
  transition: border-color 200ms;
}

.input-field:focus {
  outline: none;
  border-color: var(--cyan-primary);
  box-shadow: 0 0 0 3px rgba(59, 186, 221, 0.1);
}
```

#### Floating Label
```css
.input-floating {
  position: relative;
}

.input-floating label {
  position: absolute;
  left: 1rem;
  top: 0.75rem;
  transition: all 200ms;
  pointer-events: none;
  color: var(--text-secondary);
}

.input-floating input:focus ~ label,
.input-floating input:not(:placeholder-shown) ~ label {
  top: -0.5rem;
  left: 0.75rem;
  font-size: 0.75rem;
  color: var(--cyan-primary);
  background: white;
  padding: 0 0.25rem;
}
```

### Navigation

#### Sticky Header
```css
.header-sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-light);
  transition: all 300ms var(--ease-custom);
}

.header-sticky.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}
```

#### Mega Menu
```css
.mega-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid var(--border-light);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 300ms var(--ease-custom);
}

.nav-item:hover .mega-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
--screen-sm: 640px;   /* Mobile landscape */
--screen-md: 768px;   /* Tablet portrait */
--screen-lg: 1024px;  /* Tablet landscape */
--screen-xl: 1280px;  /* Desktop */
--screen-2xl: 1536px; /* Large desktop */
```

### Mobile-First Approach
```css
/* Mobile by default */
.hero-title {
  font-size: 2.5rem;
}

/* Desktop enhancement */
@media (min-width: 1024px) {
  .hero-title {
    font-size: 4.5rem;
  }
}
```

### Grid System
```css
.grid-responsive {
  display: grid;
  grid-template-columns: 1fr;           /* Mobile: 1 column */
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
  }
}

@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(4, 1fr); /* Desktop: 4 columns */
  }
}
```

---

## ♿ Accessibility

### Focus States
```css
*:focus-visible {
  outline: 2px solid var(--cyan-primary);
  outline-offset: 2px;
}

button:focus-visible {
  outline: 3px solid var(--cyan-primary);
  outline-offset: 3px;
}
```

### Skip to Content
```jsx
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
```

```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  background: var(--cyan-primary);
  color: white;
  padding: 1rem 2rem;
  z-index: 10000;
}

.skip-link:focus {
  top: 0;
}
```

### Color Contrast
- Text on white background: Minimum 4.5:1 (AA)
- Large text (24px+): Minimum 3:1 (AA)
- All interactive elements: Minimum 4.5:1

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 🚀 Performance

### Image Optimization
```jsx
// Next.js Image component
import Image from 'next/image';

<Image
  src="/hero-bg.jpg"
  alt="AI automation visualization"
  width={1920}
  height={1080}
  priority={true}              // Above fold
  quality={85}                 // Balance quality/size
  placeholder="blur"           // Blur-up effect
/>
```

### Lazy Loading
```jsx
// Below-fold images
<Image
  src="/case-study.jpg"
  alt="Case study visual"
  width={800}
  height={600}
  loading="lazy"               // Lazy load
  quality={80}
/>
```

### Code Splitting
```jsx
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const ROICalculator = dynamic(() => import('@/components/ROICalculator'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});
```

### Font Loading
```jsx
// next.config.js
import { Poppins, Inter, Space_Mono } from 'next/font/google';

const poppins = Poppins({
  weight: ['700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
});

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap'
});
```

---

## 🎯 SEO Standards

### Metadata Template
```jsx
export const metadata = {
  title: 'AI Automation for Home Service Businesses | NicheFinders AI',
  description: 'Proven AI automation infrastructure for home service companies, automotive, nonprofits. 3-5x ROI in 90 days. 15+ years experience.',
  keywords: ['AI automation', 'home service automation', 'business automation Florida'],

  openGraph: {
    title: 'AI Systems That Scale Your Business | NicheFinders AI',
    description: 'Without adding headcount. Proven automation infrastructure.',
    images: ['/og-image.jpg'],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Systems That Scale Your Business',
    description: 'Without adding headcount. Proven automation infrastructure.',
    images: ['/twitter-image.jpg'],
  },
};
```

### Structured Data (JSON-LD)
```jsx
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NicheFinders AI",
  "url": "https://nichefinders.ai",
  "logo": "https://nichefinders.ai/logo.png",
  "description": "AI automation infrastructure for home service companies",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tampa",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "areaServed": [
    "Tampa, FL",
    "Jacksonville, FL",
    "Miami, FL",
    "Orlando, FL",
    // ... all 10 cities
  ]
}
```

---

## 📊 Analytics & Tracking

### Event Tracking Structure
```javascript
// GTM dataLayer events
dataLayer.push({
  event: 'cta_click',
  cta_location: 'hero',
  cta_text: 'Book Discovery Call',
  page_section: 'homepage_hero'
});

dataLayer.push({
  event: 'roi_calculator_used',
  calculator_type: 'home_service',
  estimated_savings: 25000
});

dataLayer.push({
  event: 'case_study_view',
  industry: 'home_service',
  company_name: 'Fox Valley Plumbing'
});
```

---

## 🔐 Security

### Content Security Policy
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];
```

---

## 📝 Design System Usage

### Component Naming Convention
```
PascalCase for components: HeroSection, ROICalculator, TestimonialCard
kebab-case for CSS classes: .hero-section, .roi-calculator, .testimonial-card
camelCase for JavaScript: heroSection, calculateROI, testimonialData
```

### File Structure
```
/components
  /ui              # Base components (Button, Card, Input)
  /sections        # Page sections (Hero, Features, CTA)
  /layout          # Layout components (Header, Footer, Container)
  /interactive     # Interactive elements (Calculator, Quiz, Filter)

/styles
  /globals.css     # Global styles, CSS variables
  /animations.css  # Animation utilities

/lib
  /animations.ts   # GSAP animation helpers
  /utils.ts        # Utility functions
```

---

## ✅ Quality Checklist

Before shipping any component, verify:

- [ ] Responsive on mobile (375px), tablet (768px), desktop (1280px+)
- [ ] Focus states visible and accessible
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Images optimized (WebP/AVIF)
- [ ] Lazy loading implemented below fold
- [ ] Semantic HTML used (`<header>`, `<main>`, `<article>`)
- [ ] ARIA labels on interactive elements
- [ ] Alt text on all images
- [ ] Keyboard navigation works
- [ ] Performance: 60fps animations
- [ ] SEO: Meta tags, structured data
- [ ] Analytics: Events tracked

---

**This design system is the foundation for a 10/10 website and the template for all future client projects.**

**Version**: 1.0
**Last Updated**: December 27, 2025
**Maintained By**: NicheFinders AI Development Team
