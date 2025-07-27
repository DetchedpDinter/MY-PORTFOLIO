import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background text-foreground">
      {/* Cinematic backdrop gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-background z-0" />

      {/* Overlay text content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-center px-6"
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight text-white">
          Your Digital Story Begins
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
          I turn visions into immersive, fast, handcrafted experiences using
          code, creativity, and storytelling.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button className="text-white bg-primary hover:bg-primary/80 px-8 py-4 text-lg rounded-xl">
            Start a Project
          </Button>
          <a
            href="https://github.com/YOURNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline text-sm flex items-center gap-2"
          >
            <Github className="w-5 h-5" /> View Code
          </a>
        </div>
      </motion.div>

      {/* Optional cinematic visual layer */}
      <motion.div
        className="absolute w-full h-full bg-noise z-0 opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
    </section>
  );
}
