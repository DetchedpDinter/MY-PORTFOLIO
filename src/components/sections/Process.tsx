import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const steps = [
  {
    title: "Discovery",
    description:
      "We kick off with a detailed discussion about your business, goals, audience, and current challenges. This ensures we're solving the right problem.",
  },
  {
    title: "Proposal & Planning",
    description:
      "I craft a clear plan: scope, deliverables, timeline, and tools. You get a transparent roadmap before any work begins.",
  },
  {
    title: "Wireframing & Design",
    description:
      "Initial wireframes and UI concepts are shared for feedback. Design iterations are collaborative and user-focused.",
  },
  {
    title: "Development",
    description:
      "Your project is built in a modular way with regular demos. Bugs are fixed early, and code is optimized for performance.",
  },
  {
    title: "Review & Launch",
    description:
      "Final QA, optimization, deployment. I assist with post-launch support so your product runs smoothly from day one.",
  },
];

export default function Process() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight * 0.4;
      const current = sectionsRef.current.findIndex((el) => {
        if (!el) return false;
        const top = el.getBoundingClientRect().top;
        const bottom = el.getBoundingClientRect().bottom;
        return top <= offset && bottom > offset;
      });

      if (current !== -1) {
        setActiveStep(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const items = sectionsRef.current;
    if (items.length > 0) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative bg-black text-white py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24" ref={containerRef}>
        {/* SECTION TITLE */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We’ll Work Together
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A streamlined, transparent, and client-first approach to deliver
            results.
          </p>
        </div>

        {/* CONTENT + TIMELINE */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-12">
          {/* LEFT: PROCESS CONTENT */}
          <div className="space-y-48">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => {
                  sectionsRef.current[i] = el;
                }}
                className="scroll-mt-40"
              >
                <h3 className="text-3xl font-semibold text-yellow-400 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT: TIMELINE */}
          <div className="hidden md:flex flex-col sticky top-40 h-fit pr-4">
            <div className="relative flex flex-col items-start">
              {/* Vertical line */}
              <div className="absolute left-[8px] top-[12px] bottom-[12px] w-px bg-cyan-500 z-0" />

              {steps.map((step, i) => (
                <div
                  key={i}
                  className="relative flex items-center mb-16 last:mb-0"
                >
                  {/* Dot */}
                  <div
                    className={`w-4 h-4 rounded-full z-10 flex-shrink-0 ${
                      i === activeStep
                        ? "bg-cyan-400 shadow-md"
                        : "bg-black border-2 border-cyan-400"
                    }`}
                  />
                  {/* Label */}
                  <span
                    className={`ml-4 text-sm font-medium ${
                      i === activeStep ? "text-white" : "text-white/50"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
