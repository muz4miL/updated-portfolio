// ============================================
// ANIMATION VARIANTS - Reusable Motion Config
// ============================================

/**
 * Container animation for staggered children
 */
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

/**
 * Individual item animation - fade in + move up
 */
export const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
        },
    },
};

/**
 * Fade in up animation
 */
export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.2, 0.8, 0.4, 1],
        },
    },
};

/**
 * Grid item variants for gallery
 */
export const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.3,
        },
    },
};

/**
 * Page transition animation
 */
export const pageTransition = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
};
