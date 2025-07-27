// components/sections/Work.tsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Custom Dog Tag Engraver",
    color: "text-yellow-400",
    desc: "Interactive dog tag preview tool with ME550 printer automation. WooCommerce-integrated & CSV export-ready.",
    folder: "dogtag",
    images: [
      "dogtag_preview.png",
      "dogtag_conditional_popup_window.png",
      "dogtag_checkout_woocommerce.png",
      "dogtag_order_placed.png",
      "dogtag_csv_generated_after_placing_order.png",
    ],
  },
  {
    title: "Drag & Drop Form Builder",
    color: "text-yellow-400",
    desc: "Gutenberg block-based form builder with submission tracking in WordPress admin.",
    folder: "plugin 1",
    images: [
      "portfolio form plugin image 1.png",
      "react-based-form-block-gutenberg-editor-screenshot.png",
      "wordpress-form-plugin-gutenberg-block-ui.png",
      "wordpress-admin-form-submission-dashboard.png",
    ],
  },
  {
    title: "Testimonial Carousel",
    color: "text-yellow-400",
    desc: "Sleek testimonial carousel supporting multiple SVG layouts and responsive sliding.",
    folder: "plugin 2",
    images: [
      "portfolio testimony 1.svg",
      "portfolio testimony 2.svg",
      "portfolio testimony 3.svg",
      "portfolio testimony 4.svg",
      "portfolio testimony 5.svg",
      "portfolio testimony 6.svg",
    ],
  },
  {
    title: "Site Speed Pro",
    color: "text-yellow-400",
    desc: "Performance booster plugin that enhances page load speeds and Core Web Vitals.",
    folder: "site-speed-pro",
    images: ["Pasted image.png"],
  },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".horizontal-panel") as HTMLElement[];

      if (scrollRef.current) {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: scrollRef.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + scrollRef.current!.offsetWidth,
            snap: 1 / (sections.length - 1),
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleOpen = (index: number) => {
    setActiveProject(index);
    setActiveImageIndex(0);
  };

  const handleClose = () => {
    setActiveProject(null);
    setActiveImageIndex(0);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) =>
      prev > 0 ? prev - 1 : projects[activeProject!].images.length - 1
    );
  };

  const handleNext = () => {
    setActiveImageIndex((prev) =>
      prev < projects[activeProject!].images.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-background text-white"
    >
      <h2 className="text-center text-4xl md:text-5xl font-bold py-20">
        Work That Solves Real Problems
      </h2>

      <div
        ref={scrollRef}
        className="flex w-max h-[80vh] will-change-transform"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="horizontal-panel w-screen flex-shrink-0 flex flex-col items-center justify-center px-10"
          >
            <img
              src={`/` + project.folder + `/` + project.images[0]}
              alt={project.title}
              onClick={() => handleOpen(i)}
              className="w-[320px] h-auto rounded-xl shadow-xl mb-6 hover:scale-105 transition duration-500 cursor-pointer"
            />
            <h3 className={`text-2xl font-semibold mb-2 text-center ${project.color}`}>
              {project.title}
            </h3>
            <p className="text-muted-foreground max-w-md text-center text-base md:text-lg">
              {project.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Modal Viewer */}
      {activeProject !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-4 text-white text-3xl hover:text-yellow-400"
            >
              <FaArrowLeft />
            </button>
            <img
              src={`/${projects[activeProject].folder}/${projects[activeProject].images[activeImageIndex]}`}
              alt="project detail"
              className="max-w-full max-h-[80vh] rounded-xl object-contain"
            />
            <button
              onClick={handleNext}
              className="absolute right-4 text-white text-3xl hover:text-yellow-400"
            >
              <FaArrowRight />
            </button>
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white text-3xl hover:text-red-500"
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
