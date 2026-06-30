"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_LINKS.forEach((link) => {
      const id = link.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-blue via-teal via-green to-orange"
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full max-w-[100vw] overflow-x-clip transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-line/60 py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#home");
            }}
            className="group flex items-center gap-3"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-ink text-paper font-display font-semibold text-sm shadow-sm transition-transform duration-300 group-hover:-rotate-6">
              {PERSONAL.monogram}
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-orange animate-pulse" />
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 rounded-full border border-line/80 bg-white/40 backdrop-blur-md p-1.5">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const active = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300",
                    active ? "text-ink" : "text-ink-soft hover:text-ink"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white shadow-sm border border-line"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#contact");
              }}
              className="group inline-flex items-center gap-0 rounded-2xl bg-ink px-4 py-2.5 text-sm font-medium text-paper shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-white/60 backdrop-blur lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-y-0 left-0 z-40 w-screen max-w-[100vw] overflow-x-hidden lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-4 right-4 top-20 max-w-[calc(100vw-2rem)] rounded-2xl border border-line bg-background p-3 shadow-2xl"
            >
              <div className="flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                      activeSection === link.href.replace("#", "")
                        ? "bg-paper-soft text-ink"
                        : "text-ink-soft hover:bg-paper-soft hover:text-ink"
                    )}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("#contact");
                  }}
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-ink px-5 py-3 text-sm font-medium text-paper"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
