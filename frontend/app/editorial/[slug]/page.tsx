"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  User,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { articles } from "@/lib/articles";

export default function ArticlePage() {
  const params = useParams();
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container py-24 text-center">
          <h1 className="font-display text-4xl uppercase">Article Not Found</h1>
          <Link href="/editorial" className="brutal-button mt-8 inline-block">
            Back to Editorial
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <article className="border-b-[5px] border-foreground py-16 md:py-24">
        <div className="container max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/editorial"
              className="group flex w-fit items-center gap-2 font-display text-sm uppercase text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft
                className="transition-transform group-hover:-translate-x-1"
                size={16}
              />
              Back to Editorial
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="brutal-card-sm bg-primary px-4 py-2 font-display text-xs uppercase text-primary-foreground">
              {article.category}
            </span>
            <h1 className="headline-overflow mt-6 font-display uppercase leading-[0.85]">
              {article.title}
            </h1>
            <p className="mt-6 font-serif text-xl leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User size={16} />
                <span className="font-serif">{article.author}</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                <span className="font-serif">{article.readTime}</span>
              </span>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="brutal-card bg-muted p-8 md:p-12">
              <div className="space-y-6 font-serif text-lg leading-relaxed">
                {article.content?.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 border-t-[3px] border-foreground pt-12"
          >
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h3 className="font-display text-xl uppercase">
                  Share This Article
                </h3>
                <p className="mt-2 font-serif text-sm text-muted-foreground">
                  Spread the word about this story
                </p>
              </div>
              <div className="flex gap-3">
                <button className="brutal-card-sm flex h-12 w-12 items-center justify-center bg-foreground text-background transition-colors hover:bg-primary">
                  <Twitter size={18} />
                </button>
                <button className="brutal-card-sm flex h-12 w-12 items-center justify-center bg-foreground text-background transition-colors hover:bg-primary">
                  <Facebook size={18} />
                </button>
                <button className="brutal-card-sm flex h-12 w-12 items-center justify-center bg-foreground text-background transition-colors hover:bg-primary">
                  <Linkedin size={18} />
                </button>
                <button className="brutal-card-sm flex h-12 w-12 items-center justify-center bg-foreground text-background transition-colors hover:bg-primary">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="mb-6 font-display text-2xl uppercase">
              More Stories
            </h3>
            <Link
              href="/editorial"
              className="brutal-button-accent inline-block"
            >
              View All Articles
            </Link>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
