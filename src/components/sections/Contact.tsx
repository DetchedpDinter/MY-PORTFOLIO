import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mvgqrokk", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 3000); // Hide after 3s
    }
  };

  return (
    <section className="relative py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: Signal + Message */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col justify-center items-start space-y-6"
        >
          {/* Beacon Glow */}
          <div className="relative mb-4">
            <div className="w-5 h-5 bg-cyan-400 rounded-full animate-ping absolute top-0 left-0 opacity-75"></div>
            <div className="w-5 h-5 bg-cyan-500 rounded-full relative z-10 shadow-[0_0_20px_4px_#22d3ee]"></div>
          </div>

          <h2 className="text-3xl font-bold leading-snug">
            Let’s fix what’s broken.
            <br />
            Or build what’s missing.
          </h2>
          <p className="text-muted-foreground text-base max-w-md">
            If you’re overwhelmed, burned out, or just need something done right
            — let’s turn your problem into peace. Reach out, I’ll handle the
            rest.
          </p>
        </motion.div>

        {/* RIGHT: CTA & Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <textarea
              name="message"
              placeholder="What's your project or pain point?"
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <Button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all duration-200"
            >
              Start the Conversation
            </Button>
          </form>

          {/* Thank You Popup */}
          {submitted && (
            <div className="text-center text-green-400 font-medium animate-fadeIn">
              ✅ Thank you! I’ll get back to you shortly.
            </div>
          )}

          {/* Secondary CTA (for accepted clients) */}
          <div className="text-sm text-muted-foreground text-center">
            Already confirmed a project?{" "}
            <a
              href="https://wa.me/your-whatsapp-number"
              className="text-cyan-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message me on WhatsApp →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
