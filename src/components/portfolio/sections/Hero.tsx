"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Download,
  MapPin,
  Sparkles,
  Code2,
  Server,
  Database,
  Layers,
} from "lucide-react";
import { PERSONAL, HERO_TECH_BADGES, HERO_FLOATING_CARDS } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const colorClasses = {
  blue: { chip: "bg-blue-soft text-blue border-blue/30", dot: "bg-blue", glow: "glow-blue" },
  teal: { chip: "bg-teal-soft text-teal border-teal/30", dot: "bg-teal", glow: "glow-teal" },
  green: { chip: "bg-green-soft text-green border-green/30", dot: "bg-green", glow: "glow-green" },
  orange: { chip: "bg-orange-soft text-orange border-orange/30", dot: "bg-orange", glow: "glow-orange" },
} as const;

const positions = {
  "top-left": "left-0 top-8 sm:-left-4 sm:top-12",
  "top-right": "right-0 top-20 sm:-right-4 sm:top-24",
  "bottom-left": "left-2 bottom-24 sm:-left-6 sm:bottom-32",
  "bottom-right": "right-2 bottom-12 sm:-right-4 sm:bottom-20",
} as const;

const cardIcons: Record<string, typeof Code2> = {
  Django: Server,
  "REST APIs": Layers,
  PostgreSQL: Database,
  "Next.js": Code2,
};

export function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-paper-soft via-background to-background" />
        <div className="absolute inset-0 dot-bg opacity-60" />
        {/* Floating gradient blobs */}
        <div className="absolute -top-20 -left-20 h-[28rem] w-[28rem] rounded-full bg-blue/10 blur-3xl animate-drift" />
        <div
          className="absolute top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-orange/10 blur-3xl animate-drift"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-teal/10 blur-3xl animate-drift"
          style={{ animationDelay: "-12s" }}
        />
        {/* Soft top vignette */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      </div>

      <div
        ref={ref}
        className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12"
      >
        {/* Left column — copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3.5 py-1.5 text-xs font-medium text-ink-soft backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            {PERSONAL.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05] text-ink"
          >
            Kazi Nihal <span className="text-gradient">Ahmed</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-lg sm:text-xl font-medium text-ink"
          >
            {PERSONAL.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-soft"
          >
            {PERSONAL.subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-ink-soft/90 border-l-2 border-orange/60 pl-4"
          >
            {PERSONAL.shortIntro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper shadow-lg shadow-ink/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/15"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue-soft/60 px-6 py-3 text-sm font-medium text-blue backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-soft"
            >
              Contact Me
            </a>
            <a
              href={PERSONAL.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-6 py-3 text-sm font-medium text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Resume
            </a>
          </motion.div>

          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-soft"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-orange" />
              {PERSONAL.location}
            </span>
            <span className="hidden sm:block h-3 w-px bg-line" />
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-teal" />
              Open to freelance & full-time
            </span>
          </motion.div>
        </div>

        {/* Right column — profile card with floating chips */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            {/* Decorative gradient ring */}
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-blue/30 via-teal/20 to-orange/30 blur-2xl" />
            <div className="absolute -inset-1 -z-10 rounded-[2rem] bg-gradient-to-br from-blue via-teal to-orange opacity-30 blur-sm" />

            {/* Developer card — terminal + stack signature */}
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-ink shadow-2xl shadow-ink/20">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                <span className="h-2.5 w-2.5 rounded-full bg-orange/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-teal/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green/80" />
                <span className="ml-2 font-mono text-[11px] text-paper/50">
                  nihal@portfolio: ~/dev
                </span>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-green/15 px-2.5 py-0.5 font-mono text-[10px] font-medium text-green">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
                  </span>
                  online
                </span>
              </div>

              {/* Code body */}
              <div className="relative px-5 py-6 font-mono text-[12px] leading-relaxed sm:text-[13px]">
                {/* Subtle grid background */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

                <pre className="relative whitespace-pre-wrap break-words text-paper/85">
<span className="text-paper/40"># whoami</span>{"\n"}
<span className="text-teal">const</span> <span className="text-blue">developer</span> = {"{"}{"\n"}
{"  "}name: <span className="text-orange">&apos;Kazi Nihal Ahmed&apos;</span>,{"\n"}
{"  "}role: <span className="text-orange">&apos;Backend Web Developer&apos;</span>,{"\n"}
{"  "}stack: [<span className="text-orange">&apos;Django&apos;</span>, <span className="text-orange">&apos;DRF&apos;</span>,{"\n"}
{"           "}<span className="text-orange">&apos;Node.js&apos;</span>, <span className="text-orange">&apos;Next.js&apos;</span>],{"\n"}
{"  "}db: [<span className="text-orange">&apos;PostgreSQL&apos;</span>, <span className="text-orange">&apos;MySQL&apos;</span>],{"\n"}
{"  "}focus: <span className="text-orange">&apos;scalable systems&apos;</span>,{"\n"}
{"  "}shipping: <span className="text-green">true</span>,{"\n"}
{"}"};
                </pre>

                {/* Live status line */}
                <div className="relative mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-[11px] text-paper/55">
                  <span className="text-green">›</span>
                  <span>currently @ Recentriq LLC — building ERP & analytics</span>
                  <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-paper/60" />
                </div>
              </div>

              {/* Card footer */}
              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.03] px-5 py-3.5 backdrop-blur">
                <div>
                  <p className="font-display text-sm font-semibold text-paper">{PERSONAL.name}</p>
                  <p className="text-xs text-paper/50">{PERSONAL.role}</p>
                </div>
                <a
                  href="#contact"
                  className="grid h-9 w-9 place-items-center rounded-full bg-paper text-ink transition-transform duration-300 hover:scale-110 hover:rotate-12"
                  aria-label="Contact"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Floating skill chips */}
            {HERO_FLOATING_CARDS.map((card, i) => {
              const c = colorClasses[card.color];
              const Icon = cardIcons[card.label] ?? Code2;
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    "absolute z-10 hidden sm:block",
                    positions[card.position]
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center gap-2 rounded-2xl border bg-white/85 px-3.5 py-2.5 shadow-xl backdrop-blur-md",
                      "animate-float-slow",
                      c.chip,
                      i % 2 === 0 ? "" : "animate-float-medium"
                    )}
                    style={{ animationDelay: `${i * 0.6}s` }}
                  >
                    <span className={cn("grid h-6 w-6 place-items-center rounded-md", c.dot)}>
                      <Icon className="h-3.5 w-3.5 text-white" />
                    </span>
                    <span className="text-xs font-semibold">{card.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Marquee of tech badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative mt-12 sm:mt-16"
      >
        <div className="marquee-mask overflow-hidden border-y border-line/70 py-5">
          <div className="flex w-max animate-marquee items-center gap-10">
            {[...HERO_TECH_BADGES, ...HERO_TECH_BADGES].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft/80"
              >
                <span className="h-1 w-1 rounded-full bg-orange/60" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
