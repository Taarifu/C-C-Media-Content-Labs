"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export default function WorkWithUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your brand, your audience, and your goals. Every great project begins with listening.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Armed with insights, we craft a roadmap. Whether it's content, design, or tech—we build a plan that works.",
    },
    {
      number: "03",
      title: "Creation",
      description:
        "This is where magic happens. Our team brings ideas to life with creativity, precision, and African soul.",
    },
    {
      number: "04",
      title: "Launch & Grow",
      description:
        "We don't just deliver and disappear. We help you launch, measure, and iterate for lasting impact.",
    },
  ];

  return (
    <main className="min-h-screen bg-foreground text-background">
      {/* Hero Section */}
      <section className="border-b-[5px] border-background py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="brutal-card-sm inline-block border-background bg-primary px-4 py-2 font-display text-sm uppercase text-primary-foreground shadow-[4px_4px_0px_hsl(60_7%_95%)]">
              The Agency Portal
            </span>
            <h1 className="mt-8 font-display text-6xl uppercase leading-tight md:text-8xl lg:text-9xl">
              LET'S CREATE
              <br />
              <span className="text-primary">TOGETHER</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-serif text-xl text-background/70">
              We build digital experiences that celebrate African creativity.
              From brand identities to spotlighting emerging platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content: Business Card + Form */}
      <section className="border-b-[5px] border-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: Vintage Business Card */}
            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -3 }}
              animate={{ opacity: 1, x: 0, rotate: -2 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="border-[5px] border-background bg-background p-8 text-foreground shadow-[8px_8px_0px_hsl(174_100%_35%)] md:p-12">
                {/* Card Header */}
                <div className="border-b-[3px] border-foreground pb-6">
                  <h2 className="font-display text-4xl uppercase md:text-5xl">
                    C&C
                  </h2>
                  <span className="font-display text-xl uppercase text-primary">
                    CREATIVE STUDIO
                  </span>
                </div>

                {/* Card Body */}
                <div className="mt-8 space-y-6">
                  <p className="font-serif text-lg italic">
                    Crafting digital experiences with African soul since 2026.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center border-[3px] border-foreground bg-primary">
                        <MapPin className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="font-display text-sm uppercase text-muted-foreground">
                          Location
                        </span>
                        <p className="font-serif">Westlands, Nairobi, Kenya</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center border-[3px] border-foreground bg-secondary">
                        <Mail className="h-5 w-5 text-secondary-foreground" />
                      </div>
                      <div>
                        <span className="font-display text-sm uppercase text-muted-foreground">
                          Email
                        </span>
                        <p className="font-serif">hello@cultura.ke</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center border-[3px] border-foreground bg-accent">
                        <Phone className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <span className="font-display text-sm uppercase text-muted-foreground">
                          Phone
                        </span>
                        <p className="font-serif">+254 700 CULTURA</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-8 flex flex-wrap gap-4 border-t-[3px] border-foreground pt-6">
                  {["Brand Design", "SEO", "Digital Strategy", "Content"].map(
                    (service) => (
                      <span
                        key={service}
                        className="border-[2px] border-foreground px-3 py-1 font-display text-xs uppercase"
                      >
                        {service}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Decorative Stamp */}
              <div className="absolute -right-4 -top-4 rotate-12 border-[3px] border-background bg-accent p-4 font-display text-xs uppercase text-accent-foreground shadow-[4px_4px_0px_hsl(60_7%_95%)]">
                Est. 2024
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form
                onSubmit={handleSubmit}
                className="border-[3px] border-background bg-background p-8 text-foreground shadow-[6px_6px_0px_hsl(35_90%_50%)]"
              >
                <h3 className="mb-6 font-display text-2xl uppercase">
                  Start a Project
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block font-display text-sm uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border-[3px] border-foreground bg-background px-4 py-3 font-serif outline-none focus:border-primary"
                      placeholder="Wanjiku Kamau"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-display text-sm uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border-[3px] border-foreground bg-background px-4 py-3 font-serif outline-none focus:border-primary"
                      placeholder="wanjiku@example.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-display text-sm uppercase">
                      Project Type
                    </label>
                    <select
                      value={formData.project}
                      onChange={(e) =>
                        setFormData({ ...formData, project: e.target.value })
                      }
                      className="w-full border-[3px] border-foreground bg-background px-4 py-3 font-serif outline-none focus:border-primary"
                    >
                      <option value="">Select a project type</option>
                      <option value="brand">Brand Identity</option>
                      <option value="web">Web Content Writing</option>
                      <option value="social">SEO Optimization</option>
                      <option value="strategy">Digital Strategy</option>
                      <option value="content">Content Creation</option>
                      <option value="narrative management">
                        Brand perception Management
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block font-display text-sm uppercase">
                      Tell Us More
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full resize-none border-[3px] border-foreground bg-background px-4 py-3 font-serif outline-none focus:border-primary"
                      placeholder="Describe your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="brutal-button flex w-full items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="border-b-[5px] border-background py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="brutal-card-sm inline-block border-background bg-secondary px-4 py-2 font-display text-sm uppercase text-secondary-foreground shadow-[4px_4px_0px_hsl(60_7%_95%)]">
              How We Work
            </span>
            <h2 className="mt-6 font-display text-5xl uppercase md:text-7xl">
              OUR PROCESS
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="brutal-card group h-full border-background bg-background p-6 text-foreground transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-display text-5xl text-primary">
                      {step.number}
                    </span>
                    <Sparkles className="text-primary" size={24} />
                  </div>
                  <h3 className="mb-3 font-display text-2xl uppercase group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="font-serif leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
