import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 🔹 Text Content */}
      <div className="absolute top-1/2 left-[5vw] transform -translate-y-1/2 z-20 max-w-3xl space-y-6">
        <h1 className="text-white text-[clamp(1.5rem,4vw,2.75rem)] font-bold leading-snug">
          Tired of WordPress chaos?
        </h1>
        <h2 className="text-white text-[clamp(1.5rem,4vw,2.75rem)] font-bold leading-snug">
          Let plugins do the heavy work.
        </h2>
        <h3 className="text-[clamp(1.25rem,3.5vw,2.25rem)] font-bold">
          <span className="inline-block bg-cyan-400 text-black px-2 py-1 rounded shadow-[0_0_15px_cyan]">
            <Typewriter
              options={{
                strings: [
                  "Built for you, not all.",
                  "Turn problems into peace.",
                  "Stress-free WordPress, finally.",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </span>
        </h3>
      </div>

      {/* 🔹 CTA Button - Aligned Right and Lowered */}
      <div className="absolute right-[5vw] bottom-[12vh] z-20">
        <a
          href="https://wa.me/919327517290"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-yellow-400 text-black font-semibold text-base px-6 py-3 rounded-lg shadow-lg -rotate-6 hover:bg-yellow-300 transition-transform duration-300">
            Talk to Me Now
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
