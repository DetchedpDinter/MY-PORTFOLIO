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

  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-6 py-24 bg-background text-foreground flex flex-col md:flex-row items-center justify-center gap-12"
    >
      {/* 🟡 Profile Image */}
      <div
        ref={imageRef}
        className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-white"
      >
        <img
          src="/profile.png"
          alt="Sandip Mishra"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔹 Text */}
      <div
        ref={textRef}
        className="max-w-xl text-center md:text-left space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          A Problem-Solver, Not Just a Developer
        </h2>
        <p className="text-lg text-muted-foreground">
          I'm Sandip Mishra — a developer who helps overwhelmed businesses
          <strong> automate, simplify, and breathe again </strong> using
          WordPress.
          <br />
          <br />I specialize in building{" "}
          <strong>custom plugins, WooCommerce extensions,</strong>
          and small automation tools tailored to your unique headaches — not
          one-size-fits-all themes or bloated setups.
          <br />
          <br />
          If you’re tired of duct-tape fixes and chasing freelancers, I’m here
          to offer <strong>calm, clear solutions</strong> — one plugin at a
          time.
        </p>
      </div>
    </section>
  );
}
