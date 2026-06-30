"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, BadgeCheck } from "lucide-react";
import { Section, SectionHeading, StaggerGroup, StaggerItem } from "../shared";
import { CERTIFICATIONS } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const accentMap = {
  blue: {
    icon: "bg-blue-soft text-blue",
    border: "border-blue/30",
    chip: "bg-blue-soft text-blue",
    glow: "from-blue/15",
    bar: "bg-blue",
  },
  teal: {
    icon: "bg-teal-soft text-teal",
    border: "border-teal/30",
    chip: "bg-teal-soft text-teal",
    glow: "from-teal/15",
    bar: "bg-teal",
  },
  green: {
    icon: "bg-green-soft text-green",
    border: "border-green/30",
    chip: "bg-green-soft text-green",
    glow: "from-green/15",
    bar: "bg-green",
  },
  orange: {
    icon: "bg-orange-soft text-orange",
    border: "border-orange/30",
    chip: "bg-orange-soft text-orange",
    glow: "from-orange/15",
    bar: "bg-orange",
  },
} as const;

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title={
          <>
            Continuous learning, <span className="text-gradient">verified</span>
          </>
        }
        description="A track record of structured, course-based learning alongside self-directed practice — from CS50's rigorous intro to applied web programming and modern responsive design."
        accent="green"
      />

      <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {CERTIFICATIONS.map((cert) => {
          const a = accentMap[cert.color];
          const Icon = cert.icon;
          return (
            <StaggerItem key={cert.title}>
              <motion.a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5"
              >
                {/* Hover gradient glow */}
                <div
                  className={cn(
                    "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
                    a.glow
                  )}
                />

                {/* Top row: icon + verified badge */}
                <div className="relative flex items-start justify-between">
                  <div
                    className={cn(
                      "grid h-11 w-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6",
                      a.icon
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <BadgeCheck className={cn("h-5 w-5 opacity-70 transition-opacity duration-300 group-hover:opacity-100", a.chip)} />
                </div>

                {/* Issuer */}
                <p className={cn("relative mt-4 text-xs font-medium uppercase tracking-wide", a.chip)}>
                  {cert.issuer}
                </p>

                {/* Title */}
                <h3 className="relative mt-1.5 font-display text-sm font-semibold leading-snug text-ink">
                  {cert.title}
                </h3>

                {/* Issued date */}
                <div className="relative mt-3 flex items-center gap-1.5 text-xs text-ink-soft">
                  <Calendar className="h-3.5 w-3.5" />
                  Issued {cert.issued}
                </div>

                {/* Spacer pushes CTA to bottom */}
                <div className="flex-1" />

                {/* View certificate link */}
                <div className="relative mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-xs font-medium text-ink-soft">View certificate</span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 text-xs font-medium transition-all duration-300 group-hover:translate-x-0.5",
                      a.chip
                    )}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* Bottom accent bar — animates in on hover */}
                <div
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
                    a.bar
                  )}
                />
              </motion.a>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
