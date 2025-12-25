"use client";

import { motion } from "framer-motion";

const memes = [
  {
    id: 1,
    title: "When the WiFi hits different in Westlands",
    category: "Tech Life",
    size: "large",
    color: "bg-primary",
    emoji: "📶",
  },
  {
    id: 2,
    title: "Matatu conductor doing mental math",
    category: "Daily Hustle",
    size: "small",
    color: "bg-secondary",
    emoji: "🧮",
  },
  {
    id: 3,
    title: "Gen Z discovering ugali slaps",
    category: "Food Wars",
    size: "small",
    color: "bg-accent",
    emoji: "🍽️",
  },
  {
    id: 4,
    title: "Nairobi traffic giving meditation time",
    category: "Commuter Tales",
    size: "medium",
    color: "bg-primary",
    emoji: "🚗",
  },
  {
    id: 5,
    title: "When mom calls you by your full name",
    category: "Family Life",
    size: "small",
    color: "bg-secondary",
    emoji: "😱",
  },
  {
    id: 6,
    title: "M-Pesa transaction went through",
    category: "Money Moves",
    size: "medium",
    color: "bg-accent",
    emoji: "💸",
  },
  {
    id: 7,
    title: "Friday vibes in Kilimani",
    category: "Weekend Mode",
    size: "large",
    color: "bg-secondary",
    emoji: "🎉",
  },
  {
    id: 8,
    title: "Safari ants vs. bare feet",
    category: "Nature Wars",
    size: "small",
    color: "bg-primary",
    emoji: "🐜",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const MemeBentoGrid = () => {
  return (
    <section className="border-b-[5px] border-foreground bg-muted py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4">
            <span className="brutal-card-sm bg-foreground px-4 py-2 font-display text-sm uppercase text-background">
              Daily Dose
            </span>
            <div className="h-[3px] flex-1 bg-foreground" />
          </div>
          <h2 className="mt-6 font-display text-5xl uppercase md:text-7xl">
            THE MEME BENTO
          </h2>
          <p className="mt-4 max-w-xl font-serif text-lg text-muted-foreground">
            Fresh from the streets of Nairobi. The internet's finest, served daily.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {memes.map((meme) => (
            <motion.div
              key={meme.id}
              variants={item}
              className={`meme-card ${meme.color} ${meme.size === "large"
                  ? "sm:col-span-2 sm:row-span-2"
                  : meme.size === "medium"
                    ? "sm:row-span-2"
                    : ""
                }`}
            >
              <div className="flex h-full flex-col justify-between p-6">
                <span className="font-display text-xs uppercase tracking-wider opacity-80">
                  {meme.category}
                </span>
                <div>
                  <span className="text-4xl md:text-5xl">{meme.emoji}</span>
                  <h3 className="mt-3 font-display text-lg uppercase leading-tight md:text-xl">
                    {meme.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <button className="brutal-button-accent">
            Load More Memes
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MemeBentoGrid;
