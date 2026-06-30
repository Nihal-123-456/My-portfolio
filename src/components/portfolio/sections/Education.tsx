"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "../shared";
import { EDUCATION } from "@/data/portfolio";

export function Education() {
  const Icon = EDUCATION.icon;

  return (
    <Section id="education" className="relative bg-paper-soft/50">
      <div className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-40" />

      <SectionHeading
        eyebrow="Education"
        title={
          <>
            A foundation built on <span className="text-gradient">analytical thinking</span>
          </>
        }
        description="Academic roots in textile engineering now fuel a deliberate, self-directed practice in software development."
        accent="blue"
      />

      <div className="mx-auto mt-14 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-3xl border border-line bg-card p-8 sm:p-10 shadow-xl shadow-ink/5"
        >
          {/* Decorative gradient corner */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue/10 blur-2xl transition-opacity duration-500 group-hover:opacity-150" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-orange/10 blur-2xl transition-opacity duration-500 group-hover:opacity-150" />

          <div className="relative flex flex-col sm:flex-row sm:items-start gap-6">
            {/* Icon block */}
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue to-teal text-white shadow-lg shadow-blue/30">
              <Icon className="h-7 w-7" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink leading-tight">
                  {EDUCATION.degree}
                </h3>
              </div>
              <p className="mt-1 text-sm font-medium text-blue">{EDUCATION.institution}</p>

              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-line bg-paper-soft px-3 py-1 text-xs font-medium text-ink-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-green" />
                Graduated · {EDUCATION.graduated}
              </div>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-ink-soft">
                {EDUCATION.description}
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {EDUCATION.highlights.map((h, i) => (
                  <motion.li
                    key={h}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="flex items-start gap-2 rounded-xl border border-line bg-background/60 px-3 py-2.5"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                    <span className="text-xs leading-relaxed text-ink-soft">{h}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
