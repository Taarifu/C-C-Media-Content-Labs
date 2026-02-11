"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { memes as allMemes, Meme } from "@/lib/memes";

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

const MemeBentoGrid = ({
  limit,
  showViewAll = true,
}: {
  limit?: number;
  showViewAll?: boolean;
}) => {
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const memes = limit ? allMemes.slice(0, limit) : allMemes;

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
              onClick={() => setSelectedMeme(meme)}
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
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link href="/memes" className="brutal-button-accent inline-block">
              {limit ? "View All Memes" : "Load More Memes"}
            </Link>
          </motion.div>
        )}
      </div>

      {/* Meme Preview Dialog */}
      <Dialog open={!!selectedMeme} onOpenChange={() => setSelectedMeme(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] sm:max-w-4xl p-0 overflow-hidden border-[3px] border-foreground">
          {selectedMeme && (
            <>
              <DialogHeader className="p-4 sm:p-6 pb-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="brutal-card-sm bg-accent px-3 py-1 font-display text-xs uppercase tracking-wider text-background">
                    {selectedMeme.category}
                  </span>
                  <DialogTitle className="font-display text-xl sm:text-2xl uppercase leading-tight">
                    {selectedMeme.title}
                  </DialogTitle>
                </div>
              </DialogHeader>
              <div className="relative w-full aspect-square sm:aspect-video max-h-[70vh] bg-muted">
                <Image
                  src={selectedMeme.image}
                  alt={selectedMeme.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 95vw, 896px"
                  priority
                />
              </div>
              <div className="p-4 sm:p-6 pt-0">
                <button
                  onClick={() => setSelectedMeme(null)}
                  className="brutal-button-accent w-full sm:w-auto"
                >
                  Close Preview
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MemeBentoGrid;
