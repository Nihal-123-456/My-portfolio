"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section, SectionHeading, StaggerGroup, StaggerItem } from "../shared";
import { ABOUT_PARAGRAPHS, ABOUT_HIGHLIGHTS, JOURNEY_TIMELINE, STATS } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const statAccents = [
  "border-blue/20 bg-blue-soft/45",
  "border-teal/20 bg-teal-soft/45",
  "border-green/20 bg-green-soft/45",
  "border-orange/20 bg-orange-soft/45",
];

const timelineDots = ["bg-blue", "bg-teal", "bg-green", "bg-orange"];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="about" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[12%] top-8 h-56 w-56 rounded-full bg-blue/5 blur-3xl" />
        <div className="absolute right-[10%] top-40 h-64 w-64 rounded-full bg-orange/5 blur-3xl" />
      </div>

      <SectionHeading
        eyebrow="About"
        title={
          <>
            Engineering discipline, shaped into{" "}
            <span className="text-gradient">production-ready software</span>
          </>
        }
        description="A backend-focused developer with a textile engineering foundation, now building reliable web products with Django, REST APIs, SQL, React, and Next.js."
        accent="teal"
      />

      <div ref={ref} className="mx-auto mt-8 grid max-w-6xl gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-lg border border-line bg-card p-5 shadow-sm shadow-ink/5 sm:p-7"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-ink px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
              Backend-focused
            </span>
            <span className="rounded-full border border-line bg-paper-soft px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-ink-soft">
              Django / REST APIs / SQL
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {ABOUT_PARAGRAPHS.map((para, i) => (
              <motion.p
                key={para}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.12 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "text-sm leading-7 text-ink-soft sm:text-base",
                  i === 0 && "font-medium text-ink"
                )}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <StaggerGroup className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          {STATS.map((stat, index) => (
            <StaggerItem key={stat.label}>
              <div
                className={cn(
                  "group h-full rounded-lg border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5",
                  statAccents[index % statAccents.length]
                )}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div className="font-display text-2xl font-semibold leading-none text-ink sm:text-3xl">
                    {stat.value}
                  </div>
                  <span className="h-2 w-2 rounded-full bg-ink/20 transition-colors duration-300 group-hover:bg-ink" />
                </div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-ink-soft">
                  {stat.description}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <StaggerGroup className="mx-auto mt-5 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {ABOUT_HIGHLIGHTS.map((highlight) => {
          const Icon = highlight.icon;

          return (
            <StaggerItem key={highlight.title}>
              <div className="group h-full rounded-lg border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-paper-soft text-teal transition-colors duration-300 group-hover:bg-teal-soft">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold text-ink">{highlight.title}</h3>
                <p className="mt-2 text-xs leading-6 text-ink-soft">{highlight.description}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>

      <div className="mx-auto mt-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-3 border-t border-line pt-6 sm:grid-cols-[0.8fr_1.2fr] sm:items-end"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-ink-soft">The journey</p>
            <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
              From engineering fundamentals to full-stack product work.
            </h3>
          </div>
          <p className="text-sm leading-7 text-ink-soft">
            A deliberate transition built through structured learning, hands-on projects, and production experience
            across backend systems, data models, APIs, and modern interfaces.
          </p>
        </motion.div>

        <div className="mt-5 grid gap-3 lg:grid-cols-4">
          {JOURNEY_TIMELINE.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-lg border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-paper-soft px-3 py-1 text-[11px] font-medium text-ink-soft">
                  {item.year}
                </span>
                <span className={cn("h-2.5 w-2.5 rounded-full", timelineDots[index % timelineDots.length])} />
              </div>
              <h4 className="mt-4 font-display text-base font-semibold leading-snug text-ink">{item.title}</h4>
              <p className="mt-1 text-xs font-medium text-teal">{item.org}</p>
              <p className="mt-3 text-xs leading-6 text-ink-soft">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
