# ✅ Testing Checklist: Social Media Links Update

## Manual Testing Guide

### 1. Homepage Tests

#### Desktop View
- [ ] **Left Sidebar Social Icons**
  - [ ] All 5 icons visible (GitHub, LinkedIn, Twitter/X, Instagram, Email)
  - [ ] Hover over each icon shows tooltip with correct label
  - [ ] Click GitHub icon → Opens https://github.com/muz4miL in new tab
  - [ ] Click LinkedIn icon → Opens https://www.linkedin.com/in/muz4mil9/ in new tab
  - [ ] Click Twitter/X icon → Opens https://x.com/muzamil_sh74488 in new tab
  - [ ] Click Instagram icon → Opens https://www.instagram.com/muz4mil9/ in new tab
  - [ ] Click Email icon → Opens default email client with shirazmuzamil2@gmail.com

#### Mobile View (< 768px)
- [ ] **Social Icons appear at bottom when scrolling to contact section**
  - [ ] All 5 icons visible in bottom bar
  - [ ] Touch targets are adequate (minimum 44px recommended)
  - [ ] Icons work correctly on touch

#### Contact Section (Homepage)
- [ ] **Email display shows**: shirazmuzamil2@gmail.com
- [ ] **Click email card → Copies email to clipboard**
- [ ] **Social icons (Desktop only)**
  - [ ] GitHub link works
  - [ ] LinkedIn link works
  - [ ] Twitter/X link works

### 2. Contact Page (/contact) Tests

#### Desktop & Mobile
- [ ] **Email card displays**: shirazmuzamil2@gmail.com
- [ ] **Click email card → Copies to clipboard**
- [ ] **Success message appears**: "Email copied!"
- [ ] **Social icons at bottom (mobile)**
  - [ ] GitHub link → https://github.com/muz4miL
  - [ ] LinkedIn link → https://www.linkedin.com/in/muz4mil9/
  - [ ] Twitter/X link → https://x.com/muzamil_sh74488

### 3. Modeling Portfolio (/book) Tests

#### Footer Section
- [ ] **Email CTA (Large text)**
  - Desktop: Shows SHIRAZMUZAMIL2@GMAIL.COM
  - Mobile: Shows email split over 3 lines
  - [ ] Click email → Opens mailto:shirazmuzamil2@gmail.com

- [ ] **Social Icons Row**
  - [ ] Instagram → https://www.instagram.com/muz4mil9/
  - [ ] Twitter/X → https://x.com/muzamil_sh74488
  - [ ] LinkedIn → https://www.linkedin.com/in/muz4mil9/
  - [ ] GitHub → https://github.com/muz4miL
  - [ ] Hover shows correct brand colors
  - [ ] Opens in new tab

### 4. Security Tests

For ALL social media links (GitHub, LinkedIn, Twitter, Instagram):
- [ ] Links open in **new tab** (target="_blank")
- [ ] Inspect element → Verify `rel="noopener noreferrer"` is present
- [ ] No referrer data is leaked (check Network tab)

### 5. Responsiveness Tests

#### Desktop (> 1024px)
- [ ] Social sidebar visible on left
- [ ] Hover effects work smoothly
- [ ] Icons are properly sized
- [ ] Tooltips appear correctly

#### Tablet (768px - 1024px)
- [ ] Social sidebar visible (if applicable)
- [ ] Touch interactions work
- [ ] Icons are large enough

#### Mobile (< 768px)
- [ ] Social icons appear in bottom bar (when needed)
- [ ] Touch targets are at least 44px
- [ ] No layout shifts
- [ ] Icons don't overlap text

### 6. Functional Tests

#### Email Functionality
- [ ] Click email icon → Opens default email app
- [ ] Email address is pre-filled in "To:" field
- [ ] Email address text is selected (ready to copy)

#### Link Accuracy
- [ ] All Instagram links point to: /muz4mil9/
- [ ] All LinkedIn links point to: /in/muz4mil9/
- [ ] All Twitter links point to: /muzamil_sh74488
- [ ] All GitHub links point to: /muz4miL
- [ ] Email is: shirazmuzamil2@gmail.com

### 7. Visual/UI Tests

- [ ] Icons render correctly (no broken images)
- [ ] Brand colors appear on hover
- [ ] Animations are smooth (no jank)
- [ ] Loading states work (if any)
- [ ] Dark mode compatibility (if applicable)

### 8. Cross-Browser Tests

Test on:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Common Issues to Watch For

⚠️ **Issue**: Links don't open in new tab
- **Fix**: Check that target="_blank" is present

⚠️ **Issue**: Email doesn't open email client
- **Fix**: Verify mailto: protocol is used

⚠️ **Issue**: Wrong social media profile opens
- **Fix**: Check config/socialLinks.js for typos

⚠️ **Issue**: Icons too small on mobile
- **Fix**: Verify touch target size (min 44px)

⚠️ **Issue**: Sidebar doesn't hide on contact page
- **Fix**: Check usePathname hook and shouldHide logic

## Test Report Template

```
Date: _____________
Tester: ___________
Browser: __________
Device: ___________

Homepage Desktop: ☐ Pass ☐ Fail
Homepage Mobile: ☐ Pass ☐ Fail
Contact Page: ☐ Pass ☐ Fail
Modeling Page: ☐ Pass ☐ Fail
Security: ☐ Pass ☐ Fail
Responsiveness: ☐ Pass ☐ Fail

Notes:
_________________________________
_________________________________
_________________________________
```

## Automated Testing (Future)

Consider adding these automated tests:
- Link href validation
- Email format validation
- Security attributes check
- Accessibility (ARIA labels)
- Visual regression tests
