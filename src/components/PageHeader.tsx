import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "../router";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PageHeader({
  eyebrow,
  title,
  highlight,
  copy,
  breadcrumbs,
  stats,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  copy: string;
  breadcrumbs?: { label: string; href: string }[];
  stats?: { value: string; label: string }[];
}) {
  return (
    <section className="hero-fade noise relative overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-moss/30 blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-lime/10 blur-[120px]" />

      {/* subtle large outline word behind */}
      <div className="pointer-events-none absolute right-6 top-32 hidden select-none opacity-10 lg:block">
        <p className="text-outline font-display text-[9rem] font-bold leading-none tracking-tight">3R</p>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-6 md:pb-20 md:pt-44">
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-mint/60"
          >
            {breadcrumbs.map((b, i) => (
              <span key={b.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-mint/30">/</span>}
                {b.href ? (
                  <Link to={b.href} className="transition-colors hover:text-lime">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-lime">{b.label}</span>
                )}
              </span>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-mint/25 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-mint"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          {eyebrow}
        </motion.div>

        <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.6rem,6.5vw,5.2rem)] font-medium leading-[0.96] tracking-tight text-cream">
          {title}{" "}
          {highlight && <em className="italic text-lime">{highlight}</em>}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="mt-6 max-w-2xl text-[15px] leading-relaxed text-mint/80 md:text-[17px]"
        >
          {copy}
        </motion.p>

        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: EASE }}
            className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-mint/10 bg-mint/10 md:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-forest/60 px-5 py-5 backdrop-blur-sm">
                <p className="font-display text-2xl font-medium text-cream md:text-3xl">{s.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-mint/60">{s.label}</p>
              </div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-forest transition-all hover:shadow-[0_16px_40px_-12px_rgba(201,241,88,0.5)]"
          >
            Start your project <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-mint/30 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-cream transition-colors hover:border-lime hover:text-lime"
          >
            View gallery
          </Link>
        </motion.div>
      </div>

      {/* slanted lime strip teaser */}
      <div className="relative -mt-2 h-2 w-full bg-lime" />
    </section>
  );
}
