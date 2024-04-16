export const fadeInDelayed = {
    initial: { opacity: 0, filter: "blur(4px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    transition: { delay: 1, duration: 1.25, ease: "easeInOut" }
}

export const fadeIn = {
    initial: { opacity: 0, filter: "blur(4px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    transition: { delay: .25, duration: 1.25, ease: "easeInOut" }
}

export const slideLeft = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: .25, duration: 1.25, ease: "easeOut" }
}

export const blurIn = {
    initial: { opacity: 0, filter: "blur(8px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    transition: { delay: .25, duration: 1.25, ease: "easeOut" }
}

export const customAnimation = ({ delay = 1, duration = 1.25, ease = "easeOut" } = {}) => ({
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { delay, duration, ease }
});

export const slideAndRotate = {
    initial: { opacity: 0, x: -100, rotateZ: -45 },
    animate: { opacity: 1, x: 0, rotateZ: 0 },
    transition: { delay: .25, duration: 1.25, ease: "easeOut" }
}
