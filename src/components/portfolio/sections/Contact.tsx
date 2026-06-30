"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ArrowUpRight, Send, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Section, SectionHeading } from "../shared";
import { CONTACT_INFO, PERSONAL } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast({ title: "Copied to clipboard", description: value });
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast({ title: "Couldn't copy", description: "Please copy manually.", variant: "destructive" });
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy to clipboard"
      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-background/60 text-ink-soft transition-all duration-300 hover:bg-paper-soft hover:text-ink"
    >
      {copied ? <Check className="h-4 w-4 text-green" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

export function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate a submit + open mailto fallback
    const body = `Hi Nihal,%0D%0A%0D%0A${encodeURIComponent(form.message)}%0D%0A%0D%0A— ${encodeURIComponent(form.name)} (${encodeURIComponent(form.email)})`;
    window.location.href = `mailto:${PERSONAL.email}?subject=${encodeURIComponent(form.subject || "Portfolio enquiry")}&body=${body}`;

    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Opening your email client…",
        description: "Or reach out directly at knasn1526@gmail.com.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <Section id="contact" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-orange/8 blur-3xl" />
      </div>

      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something <span className="text-gradient">worth shipping</span>
          </>
        }
        description="Have a project in mind, a role to fill, or just want to talk shop? I'm currently available for freelance work and full-time opportunities."
        accent="orange"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-12">
        {/* Left — contact info cards */}
        <div className="lg:col-span-5 space-y-4">
          {CONTACT_INFO.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <a
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-card p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-paper-soft text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-paper">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-ink-soft">{info.label}</p>
                    <p className="mt-0.5 truncate text-sm font-medium text-ink">{info.value}</p>
                  </div>
                  {info.copyable ? (
                    <span onClick={(e) => e.preventDefault()}>
                      <CopyButton value={info.value} />
                    </span>
                  ) : (
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-soft transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </a>
              </motion.div>
            );
          })}

          {/* Quick email CTA */}
          <motion.a
            href={`mailto:${PERSONAL.email}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="group flex items-center justify-between gap-3 rounded-2xl bg-ink p-5 text-paper shadow-lg shadow-ink/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/15"
          >
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-orange" />
              <div>
                <p className="text-xs text-paper/60">Prefer email?</p>
                <p className="text-sm font-medium">Send a message</p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        {/* Right — contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-line bg-card p-6 sm:p-8 shadow-xl shadow-ink/5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Your name">
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Kazi Nihal Ahmed"
                  className="w-full rounded-xl border border-line bg-background/60 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-ink/30 focus:outline-none focus:ring-2 focus:ring-ink/10"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-line bg-background/60 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-ink/30 focus:outline-none focus:ring-2 focus:ring-ink/10"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Subject">
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Let's work together"
                  className="w-full rounded-xl border border-line bg-background/60 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-ink/30 focus:outline-none focus:ring-2 focus:ring-ink/10"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, role, or idea…"
                  className="w-full resize-none rounded-xl border border-line bg-background/60 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-ink/30 focus:outline-none focus:ring-2 focus:ring-ink/10"
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-ink-soft">
                By submitting, you&apos;ll open your email client with the message pre-filled.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper shadow-lg shadow-ink/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/15 disabled:opacity-70"
                )}
              >
                {submitting ? "Preparing…" : "Send message"}
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-soft">
        {label}
      </span>
      {children}
    </label>
  );
}
