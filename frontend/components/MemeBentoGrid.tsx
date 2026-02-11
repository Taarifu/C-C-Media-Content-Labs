"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const memes = [
  {
    id: 1,
    title: "Street Culture Chronicles",
    category: "Daily Dose",
    size: "large",
    image: "/memes/G_-FzeAbEAYxFbl.jpg",
  },
  {
    id: 2,
    title: "The Vibe Check",
    category: "Mood Board",
    size: "medium",
    image: "/memes/G_7wjlyXMAIxLIB.jpg",
  },
  {
    id: 3,
    title: "Real Talk",
    category: "Hot Takes",
    size: "small",
    image: "/memes/HAAGkHJXsAEjg84.jpg",
  },
  {
    id: 4,
    title: "Internet Gold",
    category: "Viral Moments",
    size: "small",
    image: "/memes/2997jtrjb8ig1.png",
  },
  {
    id: 5,
    title: "That's The Energy",
    category: "Mood",
    size: "large",
    image: "/memes/8ba6x29yccig1.png",
  },
  {
    id: 6,
    title: "Peak Content",
    category: "Fresh Takes",
    size: "medium",
    image: "/memes/vk85jl3x7pig1.jpeg",
  },
  {
    id: 7,
    title: "No Cap",
    category: "Real Ones",
    size: "small",
    image: "/memes/vpv5q0fqldig1.jpeg",
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
            Fresh from the streets of Nairobi. The internet's finest, served
            daily.
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
              className={`meme-card relative ${
                meme.size === "large"
                  ? "sm:col-span-2 sm:row-span-2"
                  : meme.size === "medium"
                    ? "sm:row-span-2"
                    : ""
              }`}
            >
              {/* Meme Image */}
              <Image
                src={meme.image}
                alt={meme.title}
                fill
                className="object-cover"
                sizes={
                  meme.size === "large"
                    ? "(max-width: 640px) 100vw, 50vw"
                    : "(max-width: 640px) 100vw, 25vw"
                }
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Text Content */}
              <div className="relative flex h-full flex-col justify-between p-6">
                <span className="brutal-card-sm w-fit bg-accent px-3 py-1 font-display text-xs uppercase tracking-wider text-background">
                  {meme.category}
                </span>
                <div>
                  <h3 className="font-display text-lg uppercase leading-tight text-background md:text-xl">
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
          <button className="brutal-button-accent">Load More Memes</button>
        </motion.div>
      </div>
    </section>
  );
};

export default MemeBentoGrid;
