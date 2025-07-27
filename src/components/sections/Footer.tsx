import { motion } from "framer-motion";
import { MailIcon, GithubIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Left – Personal Message */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">
            Crafted with Purpose
          </h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            I design and build digital experiences that solve real-world
            frustrations.
          </p>
        </div>

        {/* Center – Navigation */}
        <div className="space-y-2 text-center md:text-left">
          <h4 className="text-lg font-medium text-white">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#work" className="hover:text-yellow-400 transition">
                Work
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-yellow-400 transition">
                Process
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-yellow-400 transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right – Social + Contact */}
        <div className="space-y-2 text-center md:text-right">
          <h4 className="text-lg font-medium text-white">Connect</h4>
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="mailto:sandipmishra777@gmail.com"
              className="hover:text-yellow-400 transition"
            >
              <MailIcon size={18} />
            </a>
            <a
              href="https://github.com/DetchedpDinter"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <GithubIcon size={18} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom – Copyright */}
      <div className="mt-10 text-center text-sm text-muted-foreground border-t border-white/10 pt-6">
        © 2025 <span className="text-yellow-400">Sandip Mishra</span>. All
        rights reserved.
      </div>
    </footer>
  );
}
