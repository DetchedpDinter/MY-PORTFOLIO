import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const FloatingTag = ({ text }) => {
    const tagRef = useRef(null);
    useEffect(() => {
        const el = tagRef.current;
        if (!el)
            return;
        const x = gsap.utils.random(-150, 150);
        const y = gsap.utils.random(-300, -600);
        const rotate = gsap.utils.random(-15, 15);
        gsap.fromTo(el, {
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0.8,
        }, {
            x,
            y,
            opacity: 1,
            scale: 1,
            rotate,
            duration: 5,
            ease: "power3.out",
            onComplete: () => {
                gsap.to(el, {
                    opacity: 0,
                    duration: 1,
                    onComplete: () => el.remove(),
                });
            },
        });
    }, []);
    return (_jsx("div", { ref: tagRef, className: "absolute px-3 py-1 bg-white text-black rounded-full text-sm font-medium pointer-events-none shadow-lg", style: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
        }, children: text }));
};
export default FloatingTag;
