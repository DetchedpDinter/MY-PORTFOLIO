import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Testimonials() {
    const sectionRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".lamp-beam", { opacity: 0, y: -20 }, {
                opacity: 1,
                y: 0,
                duration: 1.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
            gsap.fromTo(".testimonial-card", { opacity: 0, y: 40 }, {
                opacity: 1,
                y: 0,
                duration: 1.4,
                delay: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);
    return (_jsxs("section", { ref: sectionRef, className: "relative py-32 px-6 bg-black text-white overflow-hidden min-h-screen flex flex-col items-center justify-center", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-16 text-center", children: "What People Say" }), _jsx("div", { className: "relative h-36 flex justify-center items-end -mb-20", children: _jsxs("div", { className: "relative w-1 h-24 bg-white/30 rounded-sm", children: [_jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-5 bg-white/70 rounded-full shadow-inner" }), _jsx("div", { className: "absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-2 bg-white/30 rounded-sm" }), _jsx("div", { className: "lamp-beam absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-yellow-100/20 via-yellow-200/10 to-transparent blur-3xl opacity-80 rounded-full pointer-events-none z-0" })] }) }), _jsxs("div", { className: "testimonial-card relative z-10 mt-10 w-full max-w-xl p-8 border border-white/20 rounded-xl bg-white/5 backdrop-blur-md shadow-lg text-center", children: [_jsx("p", { className: "italic text-lg md:text-xl", children: "\u201CIt was an amazing experience with him. He is indeed good at what he does.\u201D" }), _jsx("p", { className: "text-sm mt-4 text-yellow-400", children: "\u2014 Matteo A., Digital Creator, Germany" })] })] }));
}
