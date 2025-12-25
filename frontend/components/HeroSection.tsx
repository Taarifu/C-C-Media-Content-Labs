"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b-[5px] border-foreground bg-background py-12 md:py-20">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Issue Tag */}
          <div className="mb-6 flex items-center gap-4">
            <span className="brutal-card-sm bg-accent px-4 py-2 font-display text-sm uppercase text-accent-foreground">
              Issue No. 001
            </span>
            <span className="font-serif text-muted-foreground">
              December 2024 — Nairobi, Kenya
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="headline-overflow font-display uppercase text-foreground">
            THE GOLDEN ERA
            <br />
            <span className="text-primary">OF KENYAN</span>
            <br />
            DESIGN
          </h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 max-w-2xl"
          >
            <p className="text-xl leading-relaxed text-foreground md:text-2xl">
              Where <span className="font-bold text-secondary">Matatu Chrome</span> meets digital innovation.
              A celebration of creativity, culture, and civic consciousness
              from the heart of East Africa.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="brutal-button">
              Explore the Culture
            </button>
            <button className="brutal-button-outline">
              Read the Manifesto
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="absolute -right-20 top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <div className="brutal-card rotate-12 bg-secondary p-8">
            <span className="font-display text-6xl">🇰🇪</span>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
