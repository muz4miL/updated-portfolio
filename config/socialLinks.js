/**
 * Centralized Social Media Links Configuration
 * 
 * This file contains all social media URLs and contact information
 * used throughout the application. Update URLs here to reflect across
 * all components automatically.
 * 
 * Security: All external links include target="_blank" and rel="noopener noreferrer"
 * to prevent tabnabbing and security vulnerabilities.
 */

export const SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/muz4mil9/",
    linkedin: "https://www.linkedin.com/in/muz4mil9/",
    twitter: "https://x.com/muzamil_sh74488",
    github: "https://github.com/muz4miL",
    email: "shirazmuzamil2@gmail.com",
};

/**
 * Get the mailto link with proper formatting
 * This keeps the email as selected text in the user's email client
 */
export const getEmailLink = () => {
    return `mailto:${SOCIAL_LINKS.email}`;
};

/**
 * Brand colors for social media platforms
 * Used for hover effects and icon styling
 */
export const SOCIAL_BRAND_COLORS = {
    instagram: "#E4405F",
    linkedin: "#0A66C2",
    twitter: "#FFFFFF",
    github: "#FFFFFF",
    email: "#64ffda", // Teal from design system
};

/**
 * Security attributes for external links
 * Always use these when creating external links
 */
export const EXTERNAL_LINK_ATTRS = {
    target: "_blank",
    rel: "noopener noreferrer",
};
