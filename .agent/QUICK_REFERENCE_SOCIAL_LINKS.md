# 🔗 Quick Reference: Updating Social Media Links

## How to Update Links in the Future

### Step 1: Open the Config File
```
File: config/socialLinks.js
```

### Step 2: Update the Desired URL
```javascript
export const SOCIAL_LINKS = {
  instagram: "YOUR_NEW_INSTAGRAM_URL",
  linkedin: "YOUR_NEW_LINKEDIN_URL",
  twitter: "YOUR_NEW_TWITTER_URL",
  github: "YOUR_NEW_GITHUB_URL",
  email: "YOUR_NEW_EMAIL_ADDRESS",
};
```

### Step 3: Save and Test
Changes automatically propagate to all these locations:
- ✅ Homepage social sidebar (left side)
- ✅ Homepage contact section
- ✅ Contact page (/contact)
- ✅ Modeling portfolio footer (/book)
- ✅ Mobile bottom social bar

## Where the Links Appear

| Component | Location | Link Types |
|-----------|----------|------------|
| Socials.jsx | Left sidebar (desktop) | All 5 links |
| Socials.jsx | Bottom bar (mobile) | All 5 links |
| Contact.jsx | Homepage contact section | GitHub, LinkedIn, Twitter |
| Contact page | Dedicated contact page | GitHub, LinkedIn, Twitter |
| Book page | Modeling portfolio footer | Instagram, Twitter, LinkedIn, GitHub |

## Important Notes

⚠️ **Do NOT edit URLs directly in components anymore!**
- Always update `config/socialLinks.js` instead
- This ensures consistency across your entire site

✅ **Security is built-in**
- All external links include `target="_blank"`
- All external links include `rel="noopener noreferrer"`
- These attributes prevent security vulnerabilities

📧 **Email Behavior**
- Uses `mailto:` protocol
- Opens in user's default email client
- Email address pre-filled as recipient

## Current Links (as of update)

- **Instagram**: https://www.instagram.com/muz4mil9/
- **LinkedIn**: https://www.linkedin.com/in/muz4mil9/
- **Twitter/X**: https://x.com/muzamil_sh74488
- **GitHub**: https://github.com/muz4miL
- **Email**: shirazmuzamil2@gmail.com
