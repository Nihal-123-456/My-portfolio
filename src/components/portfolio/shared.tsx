"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type AccentColor = "blue" | "teal" | "green" | "orange";

const accentMap: Record<AccentColor, { text: string; bg: string; border: string; dot: string }> = {
  blue: {
    text: "text-blue",
    bg: "bg-blue-soft",
    border: "border-blue/30",
    dot: "bg-blue",
  },
  teal: {
    text: "text-teal",
    bg: "bg-teal-soft",
    border: "border-teal/30",
    dot: "bg-teal",
  },
  green: {
    text: "text-green",
    bg: "bg-green-soft",
    border: "border-green/30",
    dot: "bg-green",
  },
  orange: {
    text: "text-orange",
    bg: "bg-orange-soft",
    border: "border-orange/30",
    dot: "bg-orange",
  },
};

export function accentClasses(color: AccentColor) {
  return accentMap[color];
}

/* ── Section heading: eyebrow + title + description ── */
type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  accent?: AccentColor;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  accent = "blue",
  className,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const a = accentClasses(accent);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase",
            a.bg,
            a.border,
            a.text
          )}
        >
          <span className={cn("h-1.5 w-1.5 rounded-full", a.dot)} />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
    </motion.div>
  );
}

/* ── Section wrapper with consistent spacing & id ── */
type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-6 sm:py-8 md:py-10", className)}
    >
      <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

/* ── Staggered container for child reveals ── */
const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={staggerVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Premium pill button (link) ── */
type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  accent?: AccentColor;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  accent = "blue",
  className,
  external,
}: ButtonLinkProps) {
  const a = accentClasses(accent);

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 will-change-transform";

  const variants: Record<string, string> = {
    primary: cn("text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5", `bg-${accent}`),
    outline: cn("border bg-white/70 backdrop-blur hover:bg-white hover:-translate-y-0.5", a.border, a.text),
    ghost: cn("text-ink hover:bg-black/[0.04] hover:-translate-y-0.5"),
  };

  // Use safe explicit class names so Tailwind JIT picks them up
  const primaryClass = {
    blue: "bg-blue text-white shadow-blue/30",
    teal: "bg-teal text-white shadow-teal/30",
    green: "bg-green text-white shadow-green/30",
    orange: "bg-orange text-white shadow-orange/30",
  }[accent];

  const outlineClass = {
    blue: "border-blue/30 text-blue bg-white/70",
    teal: "border-teal/30 text-teal bg-white/70",
    green: "border-green/30 text-green bg-white/70",
    orange: "border-orange/30 text-orange bg-white/70",
  }[accent];

  const finalClass =
    variant === "primary" ? primaryClass : variant === "outline" ? outlineClass : "text-ink hover:bg-black/[0.04]";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, finalClass, "shadow-lg hover:shadow-xl", className)}
    >
      {children}
    </a>
  );
}
