# NicheFinders AI Website - Deployment Guide (GitHub + Vercel)

## 🚀 Quick Deploy (5 Minutes)

Your website is ready to deploy! Follow these steps to get it live on Vercel.

---

## Step 1: Push to GitHub

### 1.1 Initialize Git Repository (if not already done)
```bash
cd "/Users/nichefinder/Desktop/Nichefinder AI Agency/company/nichefinders-ai-website"
git init
git add .
git commit -m "Initial commit: NicheFinders AI premium website"
```

### 1.2 Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `nichefinders-ai-website` (or your choice)
3. Keep it **Private** (recommended) or Public
4. Don't initialize with README (we already have one)
5. Click **Create repository**

### 1.3 Push to GitHub
```bash
# Replace YOUR_USERNAME with your GitHub username
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nichefinders-ai-website.git
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### 2.1 Connect GitHub to Vercel
1. Go to https://vercel.com/signup
2. Sign up with GitHub (or log in if you have an account)
3. Click **Add New** → **Project**
4. Import your `nichefinders-ai-website` repository

### 2.2 Configure Project Settings
Vercel will auto-detect Next.js. Use these settings:

**Framework Preset:** Next.js
**Root Directory:** `./` (leave as default)
**Build Command:** `npm run build` (auto-detected)
**Output Directory:** `.next` (auto-detected)
**Install Command:** `npm install` (auto-detected)

### 2.3 Environment Variables (Optional)
You don't need any environment variables for the basic site.

If you want to add analytics or other services later:
- Click **Environment Variables**
- Add key-value pairs (e.g., `NEXT_PUBLIC_GA_ID`)

### 2.4 Deploy!
1. Click **Deploy**
2. Wait 2-3 minutes for build to complete
3. Your site is live! 🎉

Vercel will give you a URL like: `https://nichefinders-ai-website.vercel.app`

---

## Step 3: Add Custom Domain (Optional)

### 3.1 Add Domain in Vercel
1. Go to your project in Vercel
2. Click **Settings** → **Domains**
3. Add your domain (e.g., `nichefinders.ai`)

### 3.2 Configure DNS
Vercel will provide DNS records. Add them to your domain registrar:

**For Apex Domain (nichefinders.ai):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For WWW Subdomain (www.nichefinders.ai):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

### 3.3 Wait for Propagation
DNS changes take 1-24 hours. Vercel will automatically provision SSL certificates.

---

## Step 4: Add Your Logo & Assets

### 4.1 Prepare Your Assets
Create these files:

1. **Logo** - `/public/logo.png`
   - Transparent PNG recommended
   - Recommended size: 200x200px or larger
   - Will be used in header/footer

2. **Favicon** - `/public/favicon.ico`
   - 32x32 or 16x16 pixels
   - ICO format
   - Shows in browser tab

3. **OG Image** - `/public/og-image.png`
   - 1200x630 pixels (exact)
   - JPG or PNG
   - Shows when sharing on social media

4. **Apple Touch Icon** - `/public/apple-touch-icon.png`
   - 180x180 pixels
   - PNG format
   - Shows when users add to iOS home screen

### 4.2 Upload Assets
```bash
# Add your assets to the public folder
cp /path/to/your/logo.png public/logo.png
cp /path/to/your/favicon.ico public/favicon.ico
cp /path/to/your/og-image.png public/og-image.png
cp /path/to/your/apple-touch-icon.png public/apple-touch-icon.png

# Commit and push
git add public/*
git commit -m "Add brand assets (logo, favicon, og-image)"
git push
```

Vercel will automatically redeploy when you push to GitHub.

---

## Step 5: Test Your Live Site

### 5.1 Test Checklist
Visit your live site and test:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] "Book Discovery Call" buttons open your calendar
- [ ] Calendar opens in new tab
- [ ] Mobile responsive (test on phone)
- [ ] Hero animations play smoothly
- [ ] All 24 pages load (Solutions, Industries, Cities)
- [ ] Images display (once you upload logo)
- [ ] Forms/CTAs work

### 5.2 Test Calendar Booking
1. Click any "Book Discovery Call" button
2. Verify your calendar link opens: `https://nichefinder.coreyreeder.com/widget/booking/3SsTl1rDYbbKP6kHXeRM`
3. Test booking flow end-to-end
4. Make a test booking to confirm

---

## Automatic Deployments

### How It Works
Every time you push to GitHub, Vercel automatically:
1. Detects the change
2. Builds your site
3. Deploys the new version
4. Updates your live URL

### Deployment Workflow
```bash
# Make changes to your code
# Example: Update calendar link in constants.ts

git add .
git commit -m "Update calendar link"
git push

# Vercel automatically deploys in 2-3 minutes
```

---

## Update Your Calendar Link (Future)

If you ever need to change your calendar link:

### Method 1: Via Code (Recommended)
```bash
# 1. Open constants.ts
nano src/lib/constants.ts

# 2. Update CALENDAR_LINK
export const CALENDAR_LINK = 'YOUR_NEW_CALENDAR_LINK';

# 3. Save, commit, and push
git add src/lib/constants.ts
git commit -m "Update calendar link"
git push

# Vercel auto-deploys in 2-3 minutes
```

### Method 2: Via GitHub Web Interface
1. Go to your repo on GitHub
2. Navigate to `src/lib/constants.ts`
3. Click **Edit** (pencil icon)
4. Change `CALENDAR_LINK` value
5. Commit directly to main branch
6. Vercel auto-deploys

---

## Troubleshooting

### Build Fails on Vercel
**Issue:** Build fails with errors
**Solution:**
1. Check Vercel build logs
2. Make sure `package.json` dependencies are correct
3. Run `npm install && npm run build` locally first
4. Fix any TypeScript errors

### Calendar Links Don't Work
**Issue:** Buttons don't open calendar
**Solution:**
1. Check `src/lib/constants.ts` has correct `CALENDAR_LINK`
2. Verify link works when pasted in browser
3. Clear browser cache and test again

### Images Not Showing
**Issue:** Logo/images show broken image icon
**Solution:**
1. Ensure files are in `/public/` folder
2. Check file names match exactly (`logo.png`, not `Logo.PNG`)
3. Push to GitHub and wait for Vercel to redeploy

### Fonts Not Loading
**Issue:** Fonts look different than expected
**Solution:**
- Google Fonts automatically load on deployment
- If fonts fail locally, they'll work on Vercel (network access)

---

## Performance Optimization (Post-Launch)

### Run Lighthouse Audit
```bash
# In Chrome DevTools
1. Open your live site
2. F12 → Lighthouse tab
3. Click "Generate report"
4. Target: 95+ score
```

### Optimization Tips
- ✅ Images already optimized (Next.js automatic)
- ✅ Fonts already optimized (next/font)
- ✅ Code splitting already enabled (Next.js automatic)
- ✅ CSS optimized (Tailwind production build)

---

## Monitoring & Analytics (Optional)

### Add Google Analytics
1. Get your GA4 tracking ID
2. Add to Vercel environment variables:
   - Key: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX`
3. Add tracking code to `layout.tsx`

### Vercel Analytics
1. Go to your project in Vercel
2. Click **Analytics** tab
3. Enable Vercel Analytics (paid feature)
4. Get real-time visitor stats

---

## Project URLs

After deployment, you'll have:

**Vercel Preview:** `https://nichefinders-ai-website.vercel.app`
**Custom Domain:** `https://nichefinders.ai` (when DNS configured)
**GitHub Repo:** `https://github.com/YOUR_USERNAME/nichefinders-ai-website`

---

## Quick Reference Commands

### Deploy New Changes
```bash
git add .
git commit -m "Your change description"
git push
```

### Roll Back to Previous Version
1. Go to Vercel project → **Deployments**
2. Find working deployment
3. Click **⋯** → **Promote to Production**

### View Deployment Logs
1. Vercel project → **Deployments**
2. Click on deployment
3. View build logs

---

## Support Resources

### Vercel Documentation
- https://vercel.com/docs
- https://vercel.com/docs/frameworks/nextjs

### Next.js Documentation
- https://nextjs.org/docs

### Your Project Docs
- `README.md` - Project overview
- `QUICK_START.md` - Quick reference guide
- `CALENDAR_INTEGRATION.md` - Calendar setup details
- `PROGRESS.md` - Build progress and features

---

## ✅ Deployment Checklist

Before going live:

**Code:**
- [ ] All pages tested locally
- [ ] Calendar links working
- [ ] No console errors
- [ ] TypeScript builds without errors

**Assets:**
- [ ] Logo added to `/public/logo.png`
- [ ] Favicon created
- [ ] OG image created (1200x630)
- [ ] Apple touch icon created

**GitHub:**
- [ ] Code pushed to GitHub
- [ ] Repository is private/public as desired
- [ ] README.md updated with project info

**Vercel:**
- [ ] Project connected to GitHub
- [ ] First deployment successful
- [ ] Live URL working
- [ ] All pages loading correctly
- [ ] Calendar booking tested

**Domain (Optional):**
- [ ] Domain added in Vercel
- [ ] DNS records configured
- [ ] SSL certificate active (automatic)

---

## 🎉 You're Live!

Your premium NicheFinders AI website is now live with:
- 24 SEO-optimized pages
- 150+ conversion touchpoints
- Premium GSAP animations
- Direct calendar booking
- Mobile-first responsive design
- Automatic deployments on every push

**Start converting visitors into booked calls!** 🚀

---

**Questions or Issues?**
Check the docs or review build logs in Vercel dashboard.
