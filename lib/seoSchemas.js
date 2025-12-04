/**
 * Schema.org Structured Data Generators
 * For enhanced SEO and rich search results
 * 
 * Usage: Import and use in components or layout files
 */

export const generatePersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://muzamilshiraz.com",
  name: "Muzamil Shiraz",
  url: "https://muzamilshiraz.com",
  image: "https://muzamilshiraz.com/profile-image.png",
  jobTitle: "Full-Stack Developer & Front-End Engineer",
  description: "Full-Stack Developer specializing in React, Next.js, and modern web technologies",
  email: "contact@muzamilshiraz.com",
  sameAs: [
    "https://github.com/muz4miL",
    "https://linkedin.com/in/muzamil-shiraz",
    "https://twitter.com/muz4miL",
    "https://instagram.com/muz4mil",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Full-Stack Development",
    "Web Performance Optimization",
    "UI/UX Design",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "JavaScript",
    "Framer Motion",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
    addressLocality: "Peshawar",
    addressRegion: "Khyber Pakhtunkhwa",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Institute of Management Sciences (IMSciences)",
    url: "https://imsciences.edu.pk",
  },
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Website",
  url: "https://muzamilshiraz.com",
  name: "Muzamil Shiraz | Full-Stack Developer",
  description: "High-end portfolio showcasing full-stack development expertise and modern web technologies",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://muzamilshiraz.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
});

export const generateBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://muzamilshiraz.com${item.url}`,
  })),
});

export const generateProjectSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.title,
  description: project.description,
  url: project.link,
  image: project.image,
  author: {
    "@type": "Person",
    name: "Muzamil Shiraz",
    url: "https://muzamilshiraz.com",
  },
  dateCreated: project.year,
  keywords: project.tech?.join(", "),
});

export const generateContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  telephone: "+92",
  contactType: "Customer Support",
  areaServed: ["PK", "US", "GB"],
  availableLanguageId: ["en"],
});

export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Muzamil Shiraz",
  url: "https://muzamilshiraz.com",
  logo: "https://muzamilshiraz.com/logo.png",
  description: "Full-Stack Developer offering premium web development services",
  sameAs: [
    "https://github.com/muz4miL",
    "https://linkedin.com/in/muzamil-shiraz",
    "https://twitter.com/muz4miL",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92",
    contactType: "Technical Support",
  },
});

// Meta tags helper for easy generation
export const generateMetaTags = (config) => ({
  title: config.title,
  description: config.description,
  keywords: config.keywords,
  robots: config.robots || "index, follow",
  alternates: {
    canonical: config.canonical || "https://muzamilshiraz.com",
  },
  openGraph: {
    type: config.ogType || "website",
    url: config.url || "https://muzamilshiraz.com",
    title: config.ogTitle || config.title,
    description: config.ogDescription || config.description,
    siteName: "Muzamil Shiraz",
    images: [
      {
        url: config.ogImage || "https://muzamilshiraz.com/og-image.png",
        width: 1200,
        height: 630,
        alt: config.ogImageAlt || "Muzamil Shiraz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.twitterTitle || config.title,
    description: config.twitterDescription || config.description,
    image: config.twitterImage || "https://muzamilshiraz.com/twitter-image.png",
    creator: "@muz4miL",
  },
});
