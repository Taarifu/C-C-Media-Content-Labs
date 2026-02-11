"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const AgencyPortal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-foreground py-16 text-background md:py-24">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="border-[3px] border-background bg-primary px-4 py-2 font-display text-sm uppercase text-primary-foreground shadow-[4px_4px_0px_hsl(60_7%_95%)]">
            The Agency Portal
          </span>
          <h2 className="mt-8 font-display text-5xl uppercase md:text-7xl">
            WORK WITH US
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-lg text-background/70">
            We build digital experiences that celebrate African creativity. From
            brand identities to spotlighting emerging platforms.
          </p>
        </motion.div>

        {/* Business Card Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Vintage Business Card */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="border-[5px] border-background bg-background p-8 text-foreground shadow-[8px_8px_0px_hsl(174_100%_35%)] md:p-12">
              {/* Card Header */}
              <div className="border-b-[3px] border-foreground pb-6">
                <h3 className="font-display text-4xl uppercase md:text-5xl">
                  C&C
                </h3>
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
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
  );
};

export default AgencyPortal;
