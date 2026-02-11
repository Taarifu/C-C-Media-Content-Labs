"use client";

import { motion } from "framer-motion";
import { Scale, Users, Shield, Heart, BookOpen, Landmark } from "lucide-react";
import Link from "next/link";

const articleOfDay = {
  number: "Article 27",
  title: "Equality and Freedom from Discrimination",
  summary:
    "Every person is equal before the law and has the right to equal protection and equal benefit of the law. Women and men have the right to equal treatment, including the right to equal opportunities in political, economic, cultural and social spheres.",
  keyPoints: [
    "Equality before the law",
    "Protection from discrimination",
    "Equal opportunities for all genders",
    "State obligation to address inequalities",
  ],
  impact: "43%",
  impactLabel: "of constitutional cases cite this article",
};

const constitutionStats = [
  { icon: BookOpen, label: "Chapters", value: "18" },
  { icon: Scale, label: "Articles", value: "264" },
  { icon: Users, label: "Public Views", value: "5M+" },
  { icon: Shield, label: "Rights Protected", value: "47" },
];

const ConstitutionSection = () => {
  return (
    <section className="border-b-[5px] border-foreground bg-foreground py-16 text-background md:py-24">
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
            <span className="border-[3px] border-background bg-accent px-4 py-2 font-display text-sm uppercase text-accent-foreground shadow-[4px_4px_0px_hsl(60_7%_95%)]">
              Civic Challenge
            </span>
            <div className="h-[3px] flex-1 bg-background" />
          </div>
          <h2 className="mt-6 font-display text-5xl uppercase md:text-7xl">
            THE CONSTITUTION
          </h2>
          <p className="mt-4 max-w-xl font-serif text-lg text-background/70">
            Know your rights. Understand your power. The Katiba in plain
            language.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {constitutionStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-[3px] border-background bg-foreground p-4 text-center shadow-[4px_4px_0px_hsl(60_7%_95%)]"
            >
              <stat.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
              <div className="font-display text-3xl text-background">
                {stat.value}
              </div>
              <div className="font-serif text-sm text-background/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Article of the Day Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {/* Main Article Card */}
          <div className="lg:col-span-2">
            <div className="border-[3px] border-background bg-background shadow-[6px_6px_0px_hsl(174_100%_35%)]">
              <div className="border-b-[3px] border-foreground bg-primary p-4">
                <div className="flex items-center justify-between">
                  <span className="font-display uppercase text-primary-foreground">
                    Article of the Day
                  </span>
                  <Landmark className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="p-6 text-foreground md:p-8">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-6xl text-primary md:text-8xl">
                    {articleOfDay.number.split(" ")[1]}
                  </span>
                  <div>
                    <span className="font-display text-sm uppercase text-muted-foreground">
                      {articleOfDay.number.split(" ")[0]}
                    </span>
                    <h3 className="font-display text-2xl uppercase md:text-3xl">
                      {articleOfDay.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-6 font-serif text-lg leading-relaxed">
                  {articleOfDay.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {articleOfDay.keyPoints.map((point, index) => (
                    <span
                      key={index}
                      className="border-[2px] border-foreground bg-muted px-3 py-1 font-display text-xs uppercase"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Impact Sidebar */}
          <div className="space-y-4">
            <div className="border-[3px] border-background bg-secondary p-6 text-secondary-foreground shadow-[4px_4px_0px_hsl(60_7%_95%)]">
              <Heart className="mb-4 h-8 w-8" />
              <div className="font-display text-5xl">{articleOfDay.impact}</div>
              <p className="mt-2 font-serif text-sm">
                {articleOfDay.impactLabel}
              </p>
            </div>

            <div className="border-[3px] border-background bg-background p-6 text-foreground shadow-[4px_4px_0px_hsl(60_7%_95%)]">
              <h4 className="font-display text-lg uppercase">
                Test Your Knowledge
              </h4>
              <p className="mt-2 font-serif text-sm text-muted-foreground">
                Take our weekly Katiba quiz and earn your civic badge.
              </p>
              <button className="brutal-button mt-4 w-full text-sm">
                Start Quiz
              </button>
            </div>

            <div className="border-[3px] border-background bg-accent p-6 text-accent-foreground shadow-[4px_4px_0px_hsl(60_7%_95%)]">
              <h4 className="font-display text-lg uppercase">
                Full Constitution
              </h4>
              <p className="mt-2 font-serif text-sm opacity-80">
                Read the complete Katiba 2010 with our annotated guide.
              </p>
              <Link
                href="/constitution"
                className="brutal-button-outline mt-4 block w-full border-accent-foreground text-center text-sm text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              >
                Explore Constitution
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConstitutionSection;
