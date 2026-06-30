"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading, StaggerGroup, StaggerItem } from "../shared";
import { EXPERIENCES } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Building <span className="text-gradient">production software</span> that real businesses use
          </>
        }
        description="Hands-on contribution to a stock market analytics platform and a multi-tenant ERP system — across backend, frontend, and database layers."
        accent="orange"
      />

      <StaggerGroup className="mt-14 space-y-6">
        {EXPERIENCES.map((exp) => {
          const Icon = exp.icon;
          return (
            <StaggerItem key={exp.company}>
              <div className="group relative overflow-hidden rounded-3xl border border-line bg-card p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-ink/5">
                {/* Accent gradient strip */}
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-orange via-teal to-blue opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                  {/* Left — header */}
                  <div className="lg:col-span-5">
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-soft text-orange">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink">
                          {exp.position}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-orange">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-soft">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5 text-blue" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-teal" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="mt-5 text-sm sm:text-base leading-relaxed text-ink-soft">
                      {exp.description}
                    </p>
                  </div>

                  {/* Right — responsibilities + tech */}
                  <div className="lg:col-span-7">
                    <h4 className="text-xs uppercase tracking-widest text-ink-soft">
                      Key Responsibilities
                    </h4>
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {exp.responsibilities.map((r, i) => (
                        <motion.li
                          key={r}
                          initial={{ opacity: 0, x: 8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.05 + i * 0.04 }}
                          className="flex items-start gap-2 rounded-lg px-1 py-1"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                          <span className="text-sm leading-relaxed text-ink-soft">{r}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <h4 className="mt-7 text-xs uppercase tracking-widest text-ink-soft">
                      Technologies
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => {
                        const palette = [
                          "bg-blue-soft text-blue border-blue/30",
                          "bg-teal-soft text-teal border-teal/30",
                          "bg-green-soft text-green border-green/30",
                          "bg-orange-soft text-orange border-orange/30",
                        ];
                        const cls = palette[i % palette.length];
                        return (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.05 + i * 0.04 }}
                            className={`rounded-full border px-3 py-1 text-xs font-medium ${cls}`}
                          >
                            {tech}
                          </motion.span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
