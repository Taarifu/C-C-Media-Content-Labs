"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { constitutionArticles } from "@/lib/constitution";

export default function ConstitutionArticlePage() {
  const params = useParams();
  const article = constitutionArticles.find((a) => a.slug === params.section);

  if (!article) {
    return (
      <main className="min-h-screen bg-foreground text-background">
        <div className="container py-24 text-center">
          <h1 className="font-display text-4xl uppercase">Article Not Found</h1>
          <Link
            href="/constitution"
            className="brutal-button-outline mt-8 inline-block border-background text-background hover:bg-background hover:text-foreground"
          >
            Back to Constitution
          </Link>
        </div>
      </main>
    );
  }

  // Get previous and next articles for navigation
  const currentIndex = constitutionArticles.findIndex(
    (a) => a.slug === params.section,
  );
  const previousArticle =
    currentIndex > 0 ? constitutionArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < constitutionArticles.length - 1
      ? constitutionArticles[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-foreground text-background">
      <article className="border-b-[5px] border-background py-16 md:py-24">
        <div className="container max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/constitution"
              className="group flex w-fit items-center gap-2 font-display text-sm uppercase text-background/70 transition-colors hover:text-primary"
            >
              <ArrowLeft
                className="transition-transform group-hover:-translate-x-1"
                size={16}
              />
              Back to Constitution
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="brutal-card-sm border-background bg-accent px-4 py-2 font-display text-sm uppercase text-accent-foreground shadow-[4px_4px_0px_hsl(60_7%_95%)]">
              {article.number}
            </span>
            <h1 className="headline-overflow mt-6 font-display uppercase leading-[0.85]">
              {article.title}
            </h1>
            <p className="mt-6 font-serif text-xl leading-relaxed text-background/80">
              {article.summary}
            </p>
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="brutal-card border-background bg-background p-8 text-foreground md:p-12">
              <h2 className="mb-6 flex items-center gap-3 font-display text-2xl uppercase">
                <CheckCircle2 className="text-primary" />
                Key Points
              </h2>
              <ul className="space-y-4">
                {article.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border-[3px] border-foreground bg-primary font-display text-sm text-primary-foreground">
                      {index + 1}
                    </span>
                    <span className="font-serif text-lg leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Full Content */}
          {article.fullContent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <div className="brutal-card border-background bg-background p-8 text-foreground md:p-12">
                <h2 className="mb-6 flex items-center gap-3 font-display text-2xl uppercase">
                  <BookOpen className="text-primary" />
                  Full Article
                </h2>
                <div className="space-y-6 font-serif text-lg leading-relaxed">
                  {article.fullContent.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Impact Meter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="brutal-card border-background bg-secondary p-8 text-secondary-foreground md:p-12">
              <h3 className="mb-4 font-display text-2xl uppercase">
                Impact Meter
              </h3>
              <div className="mb-2 font-display text-6xl">{article.impact}</div>
              <p className="font-serif text-lg">{article.impactLabel}</p>
            </div>
          </motion.div>

          {/* Quiz CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12 border-y-[3px] border-background py-8"
          >
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h3 className="font-display text-xl uppercase">
                  Test Your Knowledge
                </h3>
                <p className="mt-2 font-serif text-background/70">
                  Take our quiz on {article.number} and earn your civic badge
                </p>
              </div>
              <button className="brutal-button-outline border-background text-background hover:bg-background hover:text-foreground">
                Start Quiz
              </button>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-between"
          >
            {previousArticle ? (
              <Link
                href={`/constitution/${previousArticle.slug}`}
                className="group flex items-center gap-2 font-display text-sm uppercase text-background/70 transition-colors hover:text-primary"
              >
                <ArrowLeft
                  className="transition-transform group-hover:-translate-x-1"
                  size={16}
                />
                <div className="text-left">
                  <div className="text-xs opacity-70">Previous</div>
                  <div className="text-background">
                    {previousArticle.number}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/constitution"
              className="brutal-button-outline border-background text-center text-background hover:bg-background hover:text-foreground"
            >
              View All Articles
            </Link>

            {nextArticle ? (
              <Link
                href={`/constitution/${nextArticle.slug}`}
                className="group flex items-center gap-2 font-display text-sm uppercase text-background/70 transition-colors hover:text-primary"
              >
                <div className="text-right">
                  <div className="text-xs opacity-70">Next</div>
                  <div className="text-background">{nextArticle.number}</div>
                </div>
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={16}
                />
              </Link>
            ) : (
              <div />
            )}
          </motion.div>
        </div>
      </article>
    </main>
  );
}
