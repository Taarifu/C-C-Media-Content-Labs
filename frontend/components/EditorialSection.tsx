"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import Link from "next/link";
import { articles as allArticles } from "@/lib/articles";

const EditorialSection = ({
  limit,
  showViewAll = true,
}: {
  limit?: number;
  showViewAll?: boolean;
}) => {
  const regularArticles = allArticles.filter((a) => !a.featured);
  const featuredArticle = allArticles.find((a) => a.featured);
  const displayArticles = limit
    ? regularArticles.slice(0, limit)
    : regularArticles;

  return (
    <section className="border-b-[5px] border-foreground bg-background py-16 md:py-24">
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
            <span className="brutal-card-sm bg-primary px-4 py-2 font-display text-sm uppercase text-primary-foreground">
              The Editorial Wing
            </span>
            <div className="h-[3px] flex-1 bg-foreground" />
          </div>
          <h2 className="mt-6 font-display text-5xl uppercase md:text-7xl">
            DEEP TECHNICAL
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Article List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-0"
          >
            {displayArticles.map((article, index) => (
              <Link key={article.id} href={`/editorial/${article.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer border-b-[3px] border-foreground py-6 transition-colors hover:bg-muted"
                >
                  <div className="flex items-start justify-between gap-4 px-4">
                    <div className="flex-1">
                      <span className="mb-2 inline-block font-display text-xs uppercase tracking-wider text-primary">
                        {article.category}
                      </span>
                      <h3 className="font-display text-xl uppercase leading-tight group-hover:text-primary md:text-2xl">
                        {article.title}
                      </h3>
                      <p className="mt-2 font-serif text-muted-foreground">
                        {article.excerpt}
                      </p>
                      <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="mt-2 opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100" />
                  </div>
                </motion.article>
              </Link>
            ))}

            {/* View All Button */}
            {showViewAll && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pt-6"
              >
                <Link
                  href="/editorial"
                  className="brutal-button-outline block w-full text-center"
                >
                  Read More Stories
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Featured Big Read */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {featuredArticle && (
              <Link href={`/editorial/${featuredArticle.slug}`}>
                <article className="brutal-card group h-full cursor-pointer bg-secondary transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                  <div className="relative h-64 overflow-hidden border-b-[3px] border-foreground bg-foreground">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-[8rem] text-secondary opacity-20">
                        KE
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="brutal-card-sm bg-accent px-3 py-1 font-display text-xs uppercase text-accent-foreground">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-3xl uppercase leading-tight group-hover:text-primary md:text-4xl">
                      {featuredArticle.title}
                    </h3>
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
                      <button className="brutal-button text-sm">
                        Read Now
                      </button>
                    </div>
                  </div>
                </article>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
