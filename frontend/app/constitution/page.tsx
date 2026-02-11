"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Scale,
  Users,
  Shield,
  Heart,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { constitutionArticles } from "@/lib/constitution";

const constitutionStats = [
  {
    icon: <Scale className="h-6 w-6" />,
    value: "264",
    label: "Articles in the Constitution",
    color: "bg-primary",
  },
  {
    icon: <Users className="h-6 w-6" />,
    label: "Citizens Engaged Daily",
    value: "~2.5K",
    color: "bg-secondary",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    label: "Rights Protected",
    value: "50+",
    color: "bg-accent",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    label: "Years Since Promulgation",
    value: "16",
    color: "bg-primary",
  },
];

export default function ConstitutionPage() {
  // Feature Article 27 as article of the day
  const articleOfDay = constitutionArticles.find(
    (a) => a.number === "Article 27",
  );

  return (
    <main className="min-h-screen bg-foreground text-background">
      <section className="border-b-[5px] border-background py-16 md:py-24">
        <div className="container">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4">
              <span className="brutal-card-sm border-background bg-accent px-4 py-2 font-display text-sm uppercase text-accent-foreground shadow-[4px_4px_0px_hsl(60_7%_95%)]">
                Civic Challenge
              </span>
              <div className="h-[3px] flex-1 bg-background" />
              <span className="text-4xl">🇰🇪</span>
            </div>
            <h1 className="mt-6 font-display text-6xl uppercase md:text-8xl">
              THE KATIBA
            </h1>
            <p className="mt-4 max-w-2xl font-serif text-lg text-background/70">
              Know your rights. Understand your constitution. Build a better
              Kenya, one article at a time.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {constitutionStats.map((stat, index) => (
              <div
                key={index}
                className={`border-[3px] border-background ${stat.color} p-6 shadow-[4px_4px_0px_hsl(60_7%_95%)]`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border-[3px] border-background bg-background text-foreground">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-display text-2xl">{stat.value}</div>
                    <div className="font-serif text-sm opacity-80">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Article of the Day */}
          {articleOfDay && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="mb-6 font-display text-3xl uppercase">
                📅 Article of the Day
              </h2>
              <Link href={`/constitution/${articleOfDay.slug}`}>
                <div className="brutal-card group cursor-pointer border-background bg-background text-foreground transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                  <div className="grid gap-8 lg:grid-cols-2">
                    {/* Left: Article Info */}
                    <div className="border-b-[3px] border-foreground p-8 lg:border-b-0 lg:border-r-[3px]">
                      <span className="brutal-card-sm bg-accent px-4 py-2 font-display text-lg uppercase text-accent-foreground">
                        {articleOfDay.number}
                      </span>
                      <h3 className="mt-6 font-display text-3xl uppercase leading-tight group-hover:text-primary">
                        {articleOfDay.title}
                      </h3>
                      <p className="mt-4 font-serif text-lg leading-relaxed text-muted-foreground">
                        {articleOfDay.summary}
                      </p>
                    </div>

                    {/* Right: Key Points */}
                    <div className="p-8">
                      <h4 className="mb-4 font-display text-lg uppercase">
                        Key Points
                      </h4>
                      <ul className="space-y-3">
                        {articleOfDay.keyPoints.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 font-serif"
                          >
                            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center border-[2px] border-foreground bg-primary text-xs text-primary-foreground">
                              ✓
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <span className="brutal-button inline-block text-sm">
                          Read Full Article
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Constitution Articles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="mb-6 font-display text-3xl uppercase">
              Browse All Articles
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {constitutionArticles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                >
                  <Link href={`/constitution/${article.slug}`}>
                    <div className="brutal-card group h-full cursor-pointer border-background bg-background text-foreground transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                      <div className="p-6">
                        <span className="brutal-card-sm bg-primary px-3 py-1 font-display text-xs uppercase text-primary-foreground">
                          {article.number}
                        </span>
                        <h3 className="mt-4 font-display text-xl uppercase leading-tight group-hover:text-primary">
                          {article.title}
                        </h3>
                        <p className="mt-3 line-clamp-3 font-serif text-sm text-muted-foreground">
                          {article.summary}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="font-display text-xs uppercase text-primary">
                            {article.keyPoints.length} Key Points
                          </span>
                          <ArrowRight className="opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
