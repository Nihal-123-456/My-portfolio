"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { FOOTER_LINKS, PERSONAL, SOCIAL_LINKS } from "@/data/portfolio";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line bg-paper-soft/60">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-20 left-1/2 h-40 w-[40rem] -translate-x-1/2 rounded-full bg-blue/8 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-ink text-paper font-display font-semibold shadow-sm transition-transform duration-300 group-hover:-rotate-6">
                {PERSONAL.monogram}
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-orange" />
              </span>
              <span className="font-display text-base font-semibold text-ink">
                {PERSONAL.name}
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              {PERSONAL.role} · {PERSONAL.tagline}. Currently building production software at
              Recentriq LLC. Open to freelance and full-time opportunities.
            </p>
            <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-ink-soft">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
              </span>
              {PERSONAL.availability}
            </div>
          </div>

          {/* Quick nav */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-ink-soft">Navigate</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-ink-soft">Connect</h4>
            <ul className="mt-4 space-y-2">
              {SOCIAL_LINKS.map((s) => {
                const Icon = iconMap[s.label as keyof typeof iconMap] ?? s.icon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-card transition-colors group-hover:border-ink/20 group-hover:bg-paper-soft">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs">{s.label}</span>
                        <span className="block text-xs text-ink-soft/70">{s.handle}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-soft">
            © {year} {PERSONAL.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-green" />
              Built with Next.js
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              TypeScript
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Tailwind CSS
            </span>
          </div>

          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
