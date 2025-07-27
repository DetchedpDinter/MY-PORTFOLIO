import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";
const Hero = () => {
    return (_jsxs("section", { className: "relative h-screen w-full overflow-hidden", children: [_jsxs("video", { className: "absolute inset-0 w-full h-full object-cover z-0", autoPlay: true, muted: true, loop: true, playsInline: true, children: [_jsx("source", { src: "/background.webm", type: "video/webm" }), "Your browser does not support the video tag."] }), _jsx("div", { className: "absolute inset-0 bg-black/60 z-10" }), _jsxs("div", { className: "absolute top-1/2 left-[5vw] transform -translate-y-1/2 z-20 max-w-3xl space-y-6", children: [_jsx("h1", { className: "text-white text-[clamp(1.5rem,4vw,2.75rem)] font-bold leading-snug", children: "Tired of WordPress chaos?" }), _jsx("h2", { className: "text-white text-[clamp(1.5rem,4vw,2.75rem)] font-bold leading-snug", children: "Let plugins do the heavy work." }), _jsx("h3", { className: "text-[clamp(1.25rem,3.5vw,2.25rem)] font-bold", children: _jsx("span", { className: "inline-block bg-cyan-400 text-black px-2 py-1 rounded shadow-[0_0_15px_cyan]", children: _jsx(Typewriter, { options: {
                                    strings: [
                                        "Built for you, not all.",
                                        "Turn problems into peace.",
                                        "Stress-free WordPress, finally.",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 60,
                                    deleteSpeed: 30,
                                } }) }) })] }), _jsx("div", { className: "absolute right-[5vw] bottom-[12vh] z-20", children: _jsx("a", { href: "https://wa.me/919327517290", target: "_blank", rel: "noopener noreferrer", children: _jsx(Button, { className: "bg-yellow-400 text-black font-semibold text-base px-6 py-3 rounded-lg shadow-lg -rotate-6 hover:bg-yellow-300 transition-transform duration-300", children: "Talk to Me Now" }) }) })] }));
};
export default Hero;
