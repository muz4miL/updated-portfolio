# Deployment Guide: Deploy to muzamilshiraz.me via Vercel

**Status:** Ready for Deployment  
**Repository:** Already committed & pushed to GitHub  
**Domain Target:** https://www.muzamilshiraz.me/  
**Current Date:** December 5, 2025

---

## QUICK START (5 Minutes)

### Step 1: Verify Git Status ✅ (Already Done)
```bash
# Your code is already committed and pushed
git status  # Should show "nothing to commit"
```

### Step 2: Deploy to Vercel (Choose ONE method)

#### METHOD A: Using Vercel Dashboard (RECOMMENDED - Fastest)

**If you want to replace the old site on the SAME Vercel project:**

1. Go to: https://vercel.com/dashboard
2. Select your existing "muzamil-portfolio" or "updated-portfolio" project
3. The new deployment will automatically occur when you push to main/master
4. Navigate to Settings → Domains
5. Verify **www.muzamilshiraz.me** is linked
6. Done! New site is live within 2-5 minutes

**If you created a NEW Vercel project:**

1. Go to: https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Select repository: `muz4miL/updated-portfolio`
4. Click "Import"
5. Vercel auto-configures Next.js settings
6. Click "Deploy"
7. Once deployed, go to Settings → Domains
8. Add domain: `muzamilshiraz.me`
9. Add domain: `www.muzamilshiraz.me`
10. Update DNS records if needed (usually automatic)

#### METHOD B: Using Vercel CLI (Command Line)

```bash
# 1. Install Vercel CLI (if not already installed)
npm install -g vercel

# 2. Navigate to your project
cd /workspaces/updated-portfolio

# 3. Deploy to production
vercel --prod

# 4. Follow prompts:
# - Link to existing project? YES (if this is a replacement)
# - Or create new project? YES (if this is first time)
```

### Step 3: Assign Your Custom Domain ✅

**If using existing Vercel project:**
- Domain already linked → No action needed
- New deployment automatically goes live on your domain
- DNS propagates in 2-5 minutes

**If using new Vercel project:**
1. Go to Vercel Dashboard
2. Select your project
3. Settings → Domains
4. Remove domain from OLD project (if needed)
5. Add to NEW project:
   - `muzamilshiraz.me`
   - `www.muzamilshiraz.me`
6. Vercel handles DNS automatically
7. Live in 2-5 minutes

### Step 4: Verify Deployment ✅

```bash
# Check your site is live
curl https://www.muzamilshiraz.me/

# Or open in browser
https://www.muzamilshiraz.me/
```

---

## DETAILED DECISION TREE

### Q1: Did you use the SAME Vercel project for this new code?

**YES** → Go to Deployment Method A (Same Project)
**NO** → Go to Deployment Method B (New Project)

### Deployment Method A: Same Vercel Project

**Situation:** Your old portfolio and new portfolio are in the SAME Vercel project

**Steps:**
1. Push code to GitHub (✅ Already done)
2. Vercel automatically detects the push
3. New build starts automatically
4. Old deployment is replaced with new one
5. Site updates live on https://www.muzamilshiraz.me/ within 2-5 minutes
6. No domain changes needed

**Verification:**
```
1. Go to Vercel Dashboard
2. Select project
3. Look for "Production" → should show latest commit hash
4. Wait for build status to show "Ready"
5. Visit https://www.muzamilshiraz.me/
```

### Deployment Method B: New Vercel Project

**Situation:** This is a completely new Vercel project

**Steps:**

#### Step B1: Create New Vercel Project
1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Select your GitHub repository: `muz4miL/updated-portfolio`
4. Click "Import"
5. Framework detected: Next.js ✅
6. Click "Deploy"
7. Wait for build to complete (2-5 minutes)

#### Step B2: Link Custom Domain
1. In Vercel Dashboard, go to project Settings
2. Click "Domains" tab
3. Click "Add Domain"
4. Enter: `muzamilshiraz.me`
5. Choose "www" prefix configuration:
   - **Recommended:** Redirect www to non-www OR vice versa
   - Choose one canonical version
6. Vercel auto-configures DNS
7. Live within 2-5 minutes

#### Step B3: Remove Old Domain from Old Project
1. Go to old portfolio project in Vercel
2. Settings → Domains
3. Find `muzamilshiraz.me`
4. Click "X" to remove it
5. Confirm removal

---

## ENVIRONMENT VARIABLES (If Needed)

Check if your project needs environment variables:

```bash
# Check for .env files
ls -la | grep .env

# If needed, add to Vercel:
# 1. Go to Vercel Dashboard
# 2. Select project
# 3. Settings → Environment Variables
# 4. Add each variable
# 5. Redeploy
```

**Your portfolio likely needs:**
```env
# If using email (resend)
CONTACT_EMAIL=your-email@example.com
RESEND_API_KEY=your-key-here (if you have it)
```

---

## DNS CONFIGURATION (Usually Automatic)

**If Vercel doesn't auto-configure DNS:**

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS settings for muzamilshiraz.me
3. Look for Vercel's provided CNAME records
4. Update DNS records as shown in Vercel Dashboard
5. Wait for propagation (can take 24-48 hours, usually 5 minutes)

**Vercel will guide you if needed.**

---

## PERFORMANCE & CACHING

After deployment:
- ✅ Next.js automatically optimizes builds
- ✅ Images optimized via Next.js Image component
- ✅ CSS minified & bundled
- ✅ JavaScript code-split & minified
- ✅ Vercel edge caching enabled by default
- ✅ HTTPS/SSL automatic
- ✅ CDN distribution automatic

---

## TROUBLESHOOTING

### Build Fails on Vercel

**Check:**
1. Vercel Dashboard → Deployments tab
2. Click failed deployment
3. Look at build logs
4. Common issues:
   - Missing environment variables
   - Node version mismatch (should be 18+)
   - Build script error

**Fix:**
```bash
# Test build locally first
npm run build

# If errors, fix them locally
# Then push to GitHub
# Then redeploy on Vercel
```

### Domain Not Resolving

**Check:**
1. Vercel Dashboard → Domains
2. Is domain showing "Connected"?
3. Wait 2-5 minutes for DNS propagation
4. Try: `nslookup www.muzamilshiraz.me`
5. Should show Vercel's IP address

### Site Shows Old Portfolio

**Cause:** Old deployment still active

**Fix:**
1. Vercel Dashboard → Deployments
2. Set new deployment as "Production"
3. Or remove old project's domain first

---

## DEPLOYMENT CHECKLIST

Before clicking Deploy:

- ✅ Code committed and pushed to GitHub
- ✅ `npm run build` succeeds locally
- ✅ No TypeScript/ESLint errors
- ✅ All pages load in dev server
- ✅ Images load correctly
- ✅ Links work (internal and external)
- ✅ Forms functional (contact form)
- ✅ Responsive design tested on mobile
- ✅ Environment variables ready (if needed)

**Status:** ✅ ALL CHECKS PASSED

---

## FINAL STEPS

### Option 1: Auto-Deploy (Recommended)

If your Vercel project is already linked to your GitHub repo:
1. You're done! Just pushed code → Vercel auto-deploys
2. Check Vercel Dashboard in 2-5 minutes
3. Your site is live on https://www.muzamilshiraz.me/

### Option 2: Manual Deploy via CLI

```bash
# Navigate to project
cd /workspaces/updated-portfolio

# Deploy to production
vercel --prod

# Follow prompts
```

### Option 3: Manual Deploy via Dashboard

1. Go to https://vercel.com/dashboard
2. Select your project
3. Click "Deploy" (if needed)
4. Or wait for automatic deployment

---

## VERIFICATION

Once deployed, verify everything:

```bash
# 1. Visit your domain
https://www.muzamilshiraz.me/

# 2. Check all pages load
https://www.muzamilshiraz.me/about
https://www.muzamilshiraz.me/projects
https://www.muzamilshiraz.me/experience
https://www.muzamilshiraz.me/contact
https://www.muzamilshiraz.me/book

# 3. Test interactions
- Click navigation links
- Test contact form
- Test social links
- Check animations play
- Test responsive design on mobile
- Check 3D backgrounds render

# 4. Performance check
- PageSpeed Insights: https://pagespeed.web.dev/
- WebVitals should be Green
```

---

## ROLLBACK (If Needed)

If something goes wrong:

```bash
# Vercel Dashboard → Deployments
# Click any previous deployment
# Click "Promote to Production"
# Live immediately

# Or redeploy previous version:
git revert HEAD
git push
# Vercel auto-deploys old code
```

---

## WHAT'S LIVE NOW

**After deployment:**
- ✅ All pages optimized and fast
- ✅ All SEO metadata in place
- ✅ Structured data (Schema.org) included
- ✅ Sitemap & robots.txt live
- ✅ Security headers enabled
- ✅ 3D backgrounds optimized
- ✅ Animations smooth & performant
- ✅ Contact form ready
- ✅ Mobile responsive
- ✅ 100% refactored & dead-code-free

---

## SUPPORT

If you need help:
1. Check Vercel docs: https://vercel.com/docs
2. View build logs in Vercel Dashboard
3. Check your GitHub Actions (if using)

---

**Ready to go live?** Let me know which deployment method you want to use, and I'll help you through it! 🚀

