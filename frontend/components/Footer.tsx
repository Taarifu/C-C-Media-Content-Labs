"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-[5px] border-foreground bg-foreground py-8 text-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
            {/* Brand */}
            <div className="font-display text-2xl uppercase">
              CULTURA<span className="text-primary">.KE</span>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Twitter", url: "https://twitter.com" },
                { name: "Instagram", url: "https://instagram.com" },
                { name: "LinkedIn", url: "https://linkedin.com" },
                { name: "TikTok", url: "https://tiktok.com" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 font-display text-sm uppercase text-background/70 transition-colors hover:text-primary"
                >
                  {social.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="font-serif text-sm text-background/50">
              © {new Date().getFullYear()} Cultura Creative Studio. Made with ❤️
              in Nairobi.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
