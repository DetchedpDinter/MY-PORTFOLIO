import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const services = [
    {
        title: "WordPress Plugins",
        description: "Custom plugins built for scalability and performance.",
    },
    {
        title: "WooCommerce",
        description: "Advanced stores and checkout flows with WooCommerce.",
    },
    {
        title: "Automation",
        description: "Automate workflows and save hours of manual work.",
    },
    {
        title: "UI/UX Design",
        description: "Pixel-perfect, user-focused web design for results.",
    },
    {
        title: "React Apps",
        description: "Fast, responsive SPAs with React and modern stacks.",
    },
    {
        title: "CRM Integration",
        description: "Seamless integration with tools like HubSpot and Zoho.",
    },
];
export default function Services() {
    const containerRef = useRef(null);
    useEffect(() => {
        const cards = containerRef.current?.querySelectorAll(".service-card");
        if (cards) {
            gsap.fromTo(cards, { opacity: 0, y: 30 }, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.15,
            });
        }
    }, []);
    return (_jsx("section", { className: "py-24 px-6 bg-muted/5", children: _jsxs("div", { ref: containerRef, className: "max-w-6xl mx-auto text-center space-y-12", children: [_jsx("h2", { className: "text-4xl font-bold tracking-tight text-foreground", children: "Services I Offer" }), _jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left", children: services.map((service, index) => (_jsxs("div", { className: "service-card group relative p-6 rounded-xl border-2", style: { borderColor: "#00f0ff" }, children: [_jsx("h3", { className: "text-lg font-semibold mb-2 text-yellow-400", children: service.title }), _jsx("p", { className: "text-muted-foreground transition-opacity duration-300 opacity-70 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2", children: service.description }), _jsx("div", { className: "absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left", style: { backgroundColor: "#00f0ff" } })] }, index))) })] }) }));
}
