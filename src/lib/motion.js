export const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};
export const slideUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};
export const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};
export const zoomIn = {
    hidden: { scale: 0.9, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};
