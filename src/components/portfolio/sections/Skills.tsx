"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeading } from "../shared";
import { SKILL_CATEGORIES, type SkillCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const accentText = {
  blue: "text-blue",
  teal: "text-teal",
  green: "text-green",
  orange: "text-orange",
};

const accentBg = {
  blue: "bg-blue",
  teal: "bg-teal",
  green: "bg-green",
  orange: "bg-orange",
};

const accentSoftBg = {
  blue: "bg-blue-soft",
  teal: "bg-teal-soft",
  green: "bg-green-soft",
  orange: "bg-orange-soft",
};

const accentBorder = {
  blue: "border-blue/30",
  teal: "border-teal/30",
  green: "border-green/30",
  orange: "border-orange/30",
};

function SkillBar({ skill, color }: { skill: { name: string; level: number }; color: SkillCategory["color"] }) {
  return (
    <div className="group">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-ink">{skill.name}</span>
        <span className={cn("font-mono text-xs", accentText[color])}>{skill.level}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-paper-soft">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className={cn("h-full rounded-full", accentBg[color])}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const [active, setActive] = useState(0);
  const current = SKILL_CATEGORIES[active];
  const Icon = current.icon;

  return (
    <Section id="skills" className="relative bg-paper-soft/50">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-green/8 blur-3xl" />
        <div className="absolute left-0 bottom-20 h-72 w-72 rounded-full bg-blue/8 blur-3xl" />
      </div>

      <SectionHeading
        eyebrow="Skills"
        title={
          <>
            A <span className="text-gradient">full-stack toolkit</span>, with backend depth
          </>
        }
        description="From low-level C to high-level Next.js — pick a category to explore proficiency across languages, frameworks, databases, and tooling."
        accent="green"
      />

      {/* Category tabs */}
      <div className="mt-12 flex flex-wrap justify-center gap-2.5">
        {SKILL_CATEGORIES.map((cat, i) => {
          const CatIcon = cat.icon;
          const isActive = i === active;
          return (
            <button
              key={cat.title}
              onClick={() => setActive(i)}
              className={cn(
                "group relative inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300",
                isActive
                  ? cn(accentSoftBg[cat.color], accentText[cat.color], accentBorder[cat.color], "shadow-sm")
                  : "border-line bg-card text-ink-soft hover:text-ink hover:border-ink/20"
              )}
            >
              <CatIcon className="h-4 w-4" />
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Active category panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-line bg-card p-7 sm:p-10 shadow-xl shadow-ink/5">
            {/* Accent gradient glow */}
            <div
              className={cn(
                "pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-30 blur-3xl",
                accentBg[current.color]
              )}
            />

            <div className="relative flex items-start gap-4">
              <div
                className={cn(
                  "grid h-12 w-12 shrink-0 place-items-center rounded-xl",
                  accentSoftBg[current.color],
                  accentText[current.color]
                )}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">{current.title}</h3>
                <p className="mt-0.5 text-sm text-ink-soft">{current.description}</p>
              </div>
            </div>

            <div className="relative mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {current.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} color={current.color} />
              ))}
            </div>
          </div>

          {/* Quick chips below */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {current.skills.map((s) => (
              <span
                key={s.name}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
                  accentSoftBg[current.color],
                  accentText[current.color],
                  accentBorder[current.color]
                )}
              >
                <span className={cn("h-1.5 w-1.5 rounded-full", accentBg[current.color])} />
                {s.name}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
