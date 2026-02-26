"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send, CheckCircle2, AlertCircle, Loader2,
  Mail, Linkedin, Copy, Check,
} from "lucide-react";
import Reveal from "./Reveal";

type Props = { animated?: boolean };

const directLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "chandrakanth.kakarla96@gmail.com",
    href: "mailto:chandrakanth.kakarla96@gmail.com",
    copyable: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/chandrakanth18",
    href: "https://www.linkedin.com/in/chandrakanth18",
    copyable: false,
  },
];

const subjects = [
  "Job Opportunity",
  "Freelance / Contract",
  "Collaboration",
  "General Inquiry",
];

export default function ContactSection({ animated = false }: Props) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [msgLen, setMsgLen] = useState(0);
  const [copied, setCopied] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    setLoading(true);
    setOk(null);
    setError(null);

    const payload = {
      name:    String(form.get("name")),
      email:   String(form.get("email")),
      subject: String(form.get("subject")),
      message: String(form.get("message")),
      website: String(form.get("website")),
    };

    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Failed");
      setOk(true);
      formEl.reset();
      setMsgLen(0);
    } catch (err: any) {
      setOk(false);
      setError(err.message ?? "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function copyEmail(value: string) {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const Content = (
    <section className="space-y-12">

      {/* ── Heading ── */}
      <div className="px-10">
        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Get in Touch
        </p>
        <h2 className="font-black leading-[0.9] tracking-tight">
          <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-black dark:text-white">
            CONTACT
          </span>
          <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-neutral-500/50">
            ME
          </span>
        </h2>
      </div>

      {/* ── Two-column layout ── */}
      <div className="px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">

          {/* ── LEFT PANEL ── */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-2">

            {/* CTA blurb */}
            <div className="rounded-2xl border border-zinc-100 bg-white/70 p-7
              dark:border-zinc-800/60 dark:bg-zinc-900/50">
              <h3 className="text-xl font-extrabold tracking-tight text-zinc-900
                dark:text-white">
                Let's work together
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                Open to full-time roles, contract work, and collaborations in
                networking, cloud infrastructure, and NOC operations.
                I typically respond within 24 hours.
              </p>

              {/* Response time badge */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full
                bg-green-500/10 px-3.5 py-1.5 ring-1 ring-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping
                    rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                  Usually responds within 24 hrs
                </span>
              </div>
            </div>

            {/* Direct contact links */}
            <div className="rounded-2xl border border-zinc-100 bg-white/70 p-7
              dark:border-zinc-800/60 dark:bg-zinc-900/50 space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400
                dark:text-zinc-500">
                Or reach me directly
              </p>

              {directLinks.map(({ icon: Icon, label, value, href, copyable }) => (
                <div key={label} className="flex items-center justify-between gap-3">
                  <a
                    href={href}
                    target={copyable ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex min-w-0 items-center gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-xl bg-zinc-100 text-zinc-500 transition-all
                      group-hover:bg-zinc-200 group-hover:text-zinc-900
                      dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-zinc-700
                      dark:group-hover:text-white">
                      <Icon size={15} strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wide
                        text-zinc-400 dark:text-zinc-500">
                        {label}
                      </p>
                      <p className="truncate text-sm font-medium text-zinc-700
                        transition-colors group-hover:text-orange-500
                        dark:text-zinc-300">
                        {value}
                      </p>
                    </div>
                  </a>

                  {copyable && (
                    <button
                      type="button"
                      onClick={() => copyEmail(value)}
                      aria-label="Copy email"
                      className="flex h-8 w-8 shrink-0 items-center justify-center
                        rounded-lg text-zinc-400 transition-all hover:bg-zinc-100
                        hover:text-zinc-700 dark:hover:bg-zinc-800
                        dark:hover:text-zinc-300"
                    >
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.span
                            key="check"
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.7, opacity: 0 }}
                          >
                            <Check size={14} className="text-green-500" />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="copy"
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.7, opacity: 0 }}
                          >
                            <Copy size={14} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT PANEL — Form ── */}
          <div className="lg:col-span-3">
            <div className="h-full rounded-2xl border border-zinc-100 bg-white/70 p-8
              dark:border-zinc-800/60 dark:bg-zinc-900/50">
              <form onSubmit={onSubmit} className="flex h-full flex-col gap-5">

                {/* Honeypot */}
                <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                {/* Name + Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name">
                    <input
                      name="name"
                      required
                      placeholder="Chandrakanth"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className={inputCls}
                    />
                  </Field>
                </div>

                {/* Subject dropdown */}
                <Field label="Subject">
                  <select
                    name="subject"
                    required
                    defaultValue=""
                    className={inputCls}
                  >
                    <option value="" disabled>
                      Select a topic…
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                {/* Message + char counter */}
                <Field label={`Message${msgLen > 0 ? ` (${msgLen}/500)` : ""}`}>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    maxLength={500}
                    onChange={(e) => setMsgLen(e.target.value.length)}
                    placeholder="Tell me about the role, project, or just say hi…"
                    className={`${inputCls} resize-none`}
                  />
                </Field>

                {/* Submit + feedback */}
                <div className="flex flex-wrap items-center gap-4">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.97 }}
                    className="flex items-center gap-2.5 rounded-xl bg-zinc-900
                      px-7 py-3.5 text-sm font-semibold text-white transition-all
                      hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-55
                      dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={14} strokeWidth={2.5} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {ok === true && (
                      <motion.p
                        key="ok"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-sm font-medium
                          text-green-600 dark:text-green-400"
                      >
                        <CheckCircle2 size={15} />
                        Sent! I'll reply soon.
                      </motion.p>
                    )}
                    {ok === false && (
                      <motion.p
                        key="err"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-sm font-medium
                          text-red-600 dark:text-red-400"
                      >
                        <AlertCircle size={15} />
                        {error ?? "Failed. Try again."}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>

    </section>
  );

  return animated ? (
    <Reveal amount={0.15} y={24}>{Content}</Reveal>
  ) : Content;
}

/* ── Shared input styles ── */
const inputCls = `
  w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm
  text-zinc-900 placeholder-zinc-400 outline-none transition-all duration-200
  focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200
  dark:border-zinc-700 dark:bg-zinc-800 dark:text-white
  dark:placeholder-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-700
`;

/* ── Field wrapper ── */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
        {label}
      </span>
      {children}
    </label>
  );
}
