"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Section, SectionHeading, StaggerGroup, StaggerItem } from "../shared";
import { SERVICES } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const accentMap = {
  blue: { icon: "bg-blue-soft text-blue", arrow: "text-blue", dot: "bg-blue", glow: "from-blue/15" },
  teal: { icon: "bg-teal-soft text-teal", arrow: "text-teal", dot: "bg-teal", glow: "from-teal/15" },
  green: { icon: "bg-green-soft text-green", arrow: "text-green", dot: "bg-green", glow: "from-green/15" },
  orange: { icon: "bg-orange-soft text-orange", arrow: "text-orange", dot: "bg-orange", glow: "from-orange/15" },
} as const;

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title={
          <>
            How I can <span className="text-gradient">help you ship</span>
          </>
        }
        description="From backend architecture to full-stack delivery — services designed for startups, small businesses, and enterprise teams that need reliable, well-engineered software."
        accent="orange"
      />

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          const a = accentMap[service.color];
          return (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-line bg-card p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5"
              >
                {/* Hover gradient */}
                <div
                  className={cn(
                    "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
                    a.glow
                  )}
                />

                {/* Number badge */}
                <div className="absolute right-6 top-6 font-mono text-xs text-ink-soft/40">
                  0{SERVICES.indexOf(service) + 1}
                </div>

                {/* Icon */}
                <div
                  className={cn(
                    "relative grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6",
                    a.icon
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="relative mt-6 font-display text-lg font-semibold text-ink leading-snug">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>

                {/* Deliverables */}
                <ul className="relative mt-5 space-y-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Check className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", a.arrow)} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom CTA appears on hover */}
                <div className="relative mt-6 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-xs font-medium text-ink-soft">Available now</span>
                  <a
                    href="#contact"
                    className={cn(
                      "inline-flex items-center gap-1 text-sm font-medium transition-all duration-300",
                      a.arrow,
                      "translate-x-0 group-hover:translate-x-1"
                    )}
                  >
                    Enquire
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
