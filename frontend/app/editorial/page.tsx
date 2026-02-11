"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import Link from "next/link";
import { articles } from "@/lib/articles";

export default function EditorialPage() {
  const regularArticles = articles.filter((a) => !a.featured);
  const featuredArticle = articles.find((a) => a.featured);

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b-[5px] border-foreground py-16 md:py-24">
        <div className="container">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4">
              <span className="brutal-card-sm bg-primary px-4 py-2 font-display text-sm uppercase text-primary-foreground">
                The Editorial Wing
              </span>
              <div className="h-[3px] flex-1 bg-foreground" />
            </div>
            <h1 className="mt-6 font-display text-6xl uppercase md:text-8xl">
              DEEP TECHNICAL
            </h1>
            <p className="mt-4 max-w-2xl font-serif text-lg text-muted-foreground">
              Long-form explorations of culture, technology, and society in East
              Africa. Where Nairobi's stories get the depth they deserve.
            </p>
          </motion.div>

          {/* Featured Article */}
          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <Link href={`/editorial/${featuredArticle.slug}`}>
                <article className="brutal-card group cursor-pointer bg-secondary transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                  <div className="grid gap-8 lg:grid-cols-2">
                    {/* Image Placeholder */}
                    <div className="relative h-64 overflow-hidden border-b-[3px] border-foreground bg-foreground lg:border-b-0 lg:border-r-[3px]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-[10rem] text-secondary opacity-20">
                          KE
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="brutal-card-sm bg-accent px-3 py-1 font-display text-xs uppercase text-accent-foreground">
                          {featuredArticle.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h2 className="font-display text-3xl uppercase leading-tight group-hover:text-primary md:text-4xl">
                        {featuredArticle.title}
                      </h2>
                      <p className="mt-4 font-serif text-lg leading-relaxed text-foreground/80">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <User size={14} />
                            {featuredArticle.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {featuredArticle.readTime}
                          </span>
                        </div>
                        <span className="brutal-button text-sm">Read Now</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          )}

          {/* Articles Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {regularArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Link href={`/editorial/${article.slug}`}>
                  <article className="brutal-card group h-full cursor-pointer bg-muted transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-muted/80 hover:shadow-none">
                    <div className="p-6">
                      <span className="mb-3 inline-block font-display text-xs uppercase tracking-wider text-primary">
                        {article.category}
                      </span>
                      <h3 className="font-display text-2xl uppercase leading-tight group-hover:text-primary">
                        {article.title}
                      </h3>
                      <p className="mt-3 font-serif text-muted-foreground">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User size={14} />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {article.readTime}
                          </span>
                        </div>
                        <ArrowRight className="opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
