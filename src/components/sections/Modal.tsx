// components/Modal.tsx
import { useEffect } from "react";

interface ModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Modal({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: ModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onNext, onPrev, onClose]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4">
      <button
        onClick={onClose}
        className="absolute top-5 right-6 text-white text-3xl hover:text-red-500 transition"
      >
        ✕
      </button>
      <div className="flex items-center gap-6">
        <button
          onClick={onPrev}
          className="text-white text-4xl hover:text-yellow-400 transition"
        >
          ‹
        </button>
        <img
          src={images[currentIndex]}
          alt="Screenshot"
          className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-2xl"
        />
        <button
          onClick={onNext}
          className="text-white text-4xl hover:text-yellow-400 transition"
        >
          ›
        </button>
      </div>
    </div>
  );
}
