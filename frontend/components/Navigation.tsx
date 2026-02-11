"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Memes", href: "/memes" },
  { label: "Editorial", href: "/editorial" },
  { label: "Constitution", href: "/constitution" },
  { label: "Work With Us", href: "/work-with-us" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b-[3px] border-foreground bg-background">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <NavLink
            to="/"
            className="font-display text-xl uppercase md:text-2xl"
          >
            CULTURA<span className="text-primary">.KE</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className="brutal-card-sm bg-background px-4 py-2 font-display text-sm uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
                activeClassName="bg-primary text-primary-foreground"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="brutal-card-sm bg-foreground p-2 text-background md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t-[3px] border-foreground py-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className="brutal-card-sm bg-muted px-4 py-3 font-display text-sm uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
                      activeClassName="bg-primary text-primary-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
