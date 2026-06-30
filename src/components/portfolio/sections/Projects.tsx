"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Sparkles, ListChecks, Wrench, Tag } from "lucide-react";
import { Section, SectionHeading } from "../shared";
import { PROJECTS, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const accentMap = {
  blue: { text: "text-blue", bg: "bg-blue", soft: "bg-blue-soft", border: "border-blue/30" },
  teal: { text: "text-teal", bg: "bg-teal", soft: "bg-teal-soft", border: "border-teal/30" },
  green: { text: "text-green", bg: "bg-green", soft: "bg-green-soft", border: "border-green/30" },
  orange: { text: "text-orange", bg: "bg-orange", soft: "bg-orange-soft", border: "border-orange/30" },
} as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const a = accentMap[project.color];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-3xl border border-line bg-card shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-ink/10"
    >
      {/* Header band with gradient & year */}
      <div className="relative overflow-hidden h-44 sm:h-52">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            project.accentGradient
          )}
        />
        <div className="absolute inset-0 dot-bg opacity-50" />
        <div
          className={cn(
            "absolute -bottom-12 -left-12 h-44 w-44 rounded-full opacity-30 blur-2xl transition-transform duration-700 group-hover:scale-150",
            a.bg
          )}
        />

        {/* Floating index number */}
        <div className="absolute right-6 top-5 font-display text-7xl font-bold text-white/15 transition-transform duration-500 group-hover:scale-110 group-hover:text-white/25">
          0{index + 1}
        </div>

        {/* Category pill */}
        <div className="absolute left-6 top-5">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border bg-white/80 px-3 py-1 text-xs font-medium backdrop-blur",
              a.border,
              a.text
            )}
          >
            <Tag className="h-3 w-3" />
            {project.category}
          </span>
        </div>

        {/* Project title at bottom of header */}
        <div className="absolute bottom-5 left-6 right-6">
          <div className="flex items-end justify-between gap-3">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-ink-soft">{project.year}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-7">
        <p className="text-sm sm:text-base leading-relaxed text-ink-soft">
          {project.description}
        </p>

        {/* Features */}
        <div className="mt-6">
          <h4 className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-ink-soft">
            <ListChecks className={cn("h-3.5 w-3.5", a.text)} />
            Key Features
          </h4>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.features.map((f) => (
              <span
                key={f}
                className="rounded-md border border-line bg-paper-soft px-2.5 py-1 text-xs text-ink-soft"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Contributions */}
        <div className="mt-6">
          <h4 className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-ink-soft">
            <Wrench className={cn("h-3.5 w-3.5", a.text)} />
            My Contributions
          </h4>
          <ul className="mt-3 space-y-1.5">
            {project.contributions.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-ink-soft">
                <span className={cn("mt-1.5 h-1 w-1 shrink-0 rounded-full", a.bg)} />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-6">
          <h4 className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-ink-soft">
            <Sparkles className={cn("h-3.5 w-3.5", a.text)} />
            Tech Stack
          </h4>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-xs font-medium",
                  a.soft,
                  a.border,
                  a.text
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-line pt-5">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5",
                link.primary
                  ? cn("text-white shadow-sm", a.bg)
                  : "border border-line text-ink-soft hover:text-ink hover:bg-paper-soft"
              )}
            >
              {link.label === "GitHub" ? (
                <Github className="h-4 w-4" />
              ) : (
                <ExternalLink className="h-4 w-4" />
              )}
              {link.label}
              <ArrowUpRight className={cn("h-3.5 w-3.5 transition-transform", hovered && "translate-x-0.5 -translate-y-0.5")} />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="relative bg-paper-soft/50">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-blue/8 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-orange/8 blur-3xl" />
      </div>

      <SectionHeading
        eyebrow="Featured Projects"
        title={
          <>
            Real products, <span className="text-gradient">shipped to real users</span>
          </>
        }
        description="Each project below is a production-grade application used by real customers — not a tutorial clone. Explore the architecture, features, and my direct contributions."
        accent="teal"
      />

      <div className="mt-14 space-y-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
