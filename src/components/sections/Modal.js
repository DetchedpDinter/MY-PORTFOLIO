import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// components/Modal.tsx
import { useEffect } from "react";
export default function Modal({ images, currentIndex, onClose, onNext, onPrev, }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "ArrowRight")
                onNext();
            if (e.key === "ArrowLeft")
                onPrev();
            if (e.key === "Escape")
                onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onNext, onPrev, onClose]);
    return (_jsxs("div", { className: "fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4", children: [_jsx("button", { onClick: onClose, className: "absolute top-5 right-6 text-white text-3xl hover:text-red-500 transition", children: "\u2715" }), _jsxs("div", { className: "flex items-center gap-6", children: [_jsx("button", { onClick: onPrev, className: "text-white text-4xl hover:text-yellow-400 transition", children: "\u2039" }), _jsx("img", { src: images[currentIndex], alt: "Screenshot", className: "max-w-[80vw] max-h-[80vh] rounded-lg shadow-2xl" }), _jsx("button", { onClick: onNext, className: "text-white text-4xl hover:text-yellow-400 transition", children: "\u203A" })] })] }));
}
