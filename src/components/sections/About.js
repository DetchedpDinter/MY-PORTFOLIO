import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// components/About.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function About() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                opacity: 0,
                x: -100,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
            gsap.from(textRef.current, {
                opacity: 0,
                x: 100,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);
    return (_jsxs("section", { ref: sectionRef, className: "min-h-screen px-6 py-24 bg-background text-foreground flex flex-col md:flex-row items-center justify-center gap-12", children: [_jsx("div", { ref: imageRef, className: "w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-white", children: _jsx("img", { src: "/profile.png", alt: "Sandip Mishra", className: "w-full h-full object-cover" }) }), _jsxs("div", { ref: textRef, className: "max-w-xl text-center md:text-left space-y-6", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold", children: "A Problem-Solver, Not Just a Developer" }), _jsxs("p", { className: "text-lg text-muted-foreground", children: ["I'm Sandip Mishra \u2014 a developer who helps overwhelmed businesses", _jsx("strong", { children: " automate, simplify, and breathe again " }), " using WordPress.", _jsx("br", {}), _jsx("br", {}), "I specialize in building", " ", _jsx("strong", { children: "custom plugins, WooCommerce extensions," }), "and small automation tools tailored to your unique headaches \u2014 not one-size-fits-all themes or bloated setups.", _jsx("br", {}), _jsx("br", {}), "If you\u2019re tired of duct-tape fixes and chasing freelancers, I\u2019m here to offer ", _jsx("strong", { children: "calm, clear solutions" }), " \u2014 one plugin at a time."] })] })] }));
}
