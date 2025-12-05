// ============================================
// PROJECTS DATA - Single Source of Truth
// ============================================

export const allProjects = [
    {
        title: "Pyramids",
        description:
            "Building The Future. A high-end portfolio for Architecture, Landscape Design, and Engineering Excellence. Features smooth scroll animations and immersive UI.",
        tech: ["React", "Next.js", "Framer Motion", "GSAP"],
        link: "https://pyramids-website.vercel.app/",
        github: null,
        image: "/images/pyramids-preview.png",
        category: "Client Work",
        featured: true,
        year: "2025",
        color: "#14B8A6",
    },
    {
        title: "Damosa",
        description:
            "Authentic Flavours & Premium Brand Experience. A luxury showcase featuring a custom global cart system with seamless WhatsApp checkout integration for instant ordering.",
        tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
        link: "https://damosa-premium.vercel.app/",
        github: null,
        image: "/images/damosa-preview.png",
        category: "Client Work",
        featured: true,
        year: "2025",
        color: "#F97316",
    },
    {
        title: "Portfolio v2",
        description:
            "You're looking at it. A premium developer portfolio with 3D elements, glassmorphism, aurora backgrounds, and micro-interactions throughout.",
        tech: ["Next.js 16", "React 19", "Tailwind v4", "Framer Motion"],
        link: "/",
        github: "https://github.com/muz4miL/updated-portfolio",
        image: "/images/portfolio-v2-preview.png",
        category: "Personal",
        featured: true,
        year: "2025",
        color: "#64FFDA",
    },
    {
        title: "Portfolio v1",
        description:
            "My first portfolio website. Built from scratch with vanilla technologies to understand the fundamentals before moving to frameworks. Clean, minimal design with smooth animations.",
        tech: ["HTML", "CSS", "JavaScript", "GSAP"],
        link: "https://muzamilshiraz.me",
        github: null,
        image: "/images/portfolio-v1-preview.png",
        category: "Personal",
        featured: true,
        year: "2025",
        color: "#8B5CF6",
    },
    {
        title: "Premium Landing Page",
        description:
            "Premium music store landing page with modern UI patterns. Designed in Figma, built with React and Tailwind CSS.",
        tech: ["React", "Tailwind CSS", "Figma"],
        link: "https://landingpage-premium-ui.vercel.app/",
        github: null,
        image: "/images/landing-page-preview.png",
        category: "Personal",
        featured: false,
        year: "2023",
        color: "#A855F7",
    },
    {
        title: "Pizza Ordering Website",
        description:
            "Full-stack pizza ordering platform with Firebase authentication. Real-time order tracking and seamless checkout.",
        tech: ["React", "Tailwind CSS", "Firebase", "Auth"],
        link: "https://pizza-ordering-app-react-tanstack-c.vercel.app/",
        github: null,
        image: "/images/pizza-app-preview.png",
        category: "Personal",
        featured: false,
        year: "2025",
        color: "#EF4444",
    },
    {
        title: "Todo App",
        description:
            "Clean task manager with drag-and-drop functionality. Local storage persistence ensures your todos are never lost.",
        tech: ["React", "Tailwind CSS", "LocalStorage"],
        link: "https://todo-app-react-tailwind-nu.vercel.app/",
        github: null,
        image: "/images/todo-app-preview.png",
        category: "Personal",
        featured: false,
        year: "2025",
        color: "#3B82F6",
    },
    {
        title: "Travel List App",
        description:
            "Travel packing organizer with drag-and-drop interface. Plan and track everything you need for your next trip.",
        tech: ["React", "Tailwind CSS"],
        link: "https://muz4mil.github.io/Travel-List/",
        github: null,
        image: "/images/travel-list-preview.png",
        category: "Personal",
        featured: false,
        year: "2025",
        color: "#F59E0B",
    },
];

export const categories = ["All", "Client Work", "Personal"];

/**
 * Filter projects by category
 * @param {string} category - The category to filter by
 * @returns {Array} Filtered projects array
 */
export const getProjectsByCategory = (category) => {
    if (category === "All") return allProjects;
    return allProjects.filter((p) => p.category === category);
};

/**
 * Get featured projects only
 * @returns {Array} Featured projects
 */
export const getFeaturedProjects = () => {
    return allProjects.filter((p) => p.featured);
};
