import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

/* ── Scroll reveal wrapper ─────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Section eyebrow tag ───────────────────────────────────── */

export function Tag({
  children,
  dark = false,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em]",
        dark
          ? "border-mint/25 text-mint"
          : "border-moss/30 text-moss",
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-lime" : "bg-leaf")} />
      {children}
    </span>
  );
}

/* ── Section heading block ─────────────────────────────────── */

export function SectionHeading({
  tag,
  title,
  copy,
  dark = false,
  align = "left",
  className,
}: {
  tag: string;
  title: ReactNode;
  copy?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <Tag dark={dark} className={align === "center" ? "mx-auto" : ""}>
          {tag}
        </Tag>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display mt-6 text-[clamp(2.1rem,4.6vw,3.7rem)] leading-[1.04] font-medium tracking-tight",
            dark ? "text-cream" : "text-forest"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {copy && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 max-w-xl text-[15px] leading-relaxed md:text-base",
              dark ? "text-mint/75" : "text-clay",
              align === "center" && "mx-auto"
            )}
          >
            {copy}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ── Marquee row ───────────────────────────────────────────── */

export function Marquee({
  items,
  dark = false,
  fast = false,
  separator,
  className,
}: {
  items: string[];
  dark?: boolean;
  fast?: boolean;
  separator?: ReactNode;
  className?: string;
}) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span
            className={cn(
              "px-6 font-display text-lg italic md:text-xl",
              dark ? "text-cream/85" : "text-forest/80"
            )}
          >
            {item}
          </span>
          <span className={dark ? "text-lime" : "text-leaf"}>
            {separator ?? (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0l1.4 4.6L12 6 7.4 7.4 6 12 4.6 7.4 0 6l4.6-1.4z" />
              </svg>
            )}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max",
          fast ? "animate-marquee-fast" : "animate-marquee"
        )}
      >
        {row}
        {row}
      </div>
    </div>
  );
}
