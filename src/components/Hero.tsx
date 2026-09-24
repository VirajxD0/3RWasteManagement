import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { useRef } from "react";
import { aboutImages, heroStats, techStrip } from "../data/site";
import { Link } from "../router";

const EASE = [0.22, 1, 0.36, 1] as const;

function RotatingBadge() {
  return (
    <div className="relative h-28 w-28">
      <svg viewBox="0 0 100 100" className="animate-spin-slower h-full w-full">
        <defs>
          <path
            id="circlePath"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="fill-lime text-[10.5px] font-bold uppercase tracking-[2.6px]">
          <textPath href="#circlePath">
            Reduce · Recycle · Reuse · Since 2006 ·
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <svg width="26" height="26" viewBox="0 0 12 12" className="fill-lime">
          <path d="M6 0l1.4 4.6L12 6 7.4 7.4 6 12 4.6 7.4 0 6l4.6-1.4z" />
        </svg>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <section
        id="top"
        ref={ref}
        className="hero-fade noise relative overflow-hidden"
      >
        <div className="dot-grid absolute inset-0 opacity-60" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-6 md:pt-44 lg:pb-24">
          {/* ghost outline word — kept inside container so viewport never clips the "6" */}
          <div className="pointer-events-none absolute right-0 top-20 hidden select-none overflow-hidden pr-2 xl:block xl:right-2 2xl:right-4">
            <p className="text-outline font-display text-[clamp(7rem,8.5vw,10.5rem)] 2xl:text-[11rem] font-bold leading-none tracking-tight">
              2006
            </p>
          </div>
          <div className="grid items-center gap-14 lg:grid-cols-12">
            {/* Copy */}
            <motion.div style={{ y: textY }} className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="flex flex-wrap items-center gap-3"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-mint/25 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-mint">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                  </span>
                  Environmental Management · Est. December 2006
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/60 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-mint/80">
                  <MapPin size={12} className="text-lime" /> Pune, India
                </span>
              </motion.div>

              <h1 className="font-display mt-8 text-[clamp(3rem,8.4vw,7.2rem)] font-medium leading-[0.98] tracking-tight text-cream">
                {["Reduce.", "Recycle.", "Reuse."].map((word, i) => (
                  <span key={word} className="block overflow-hidden">
                    <motion.span
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 1,
                        delay: 0.15 + i * 0.12,
                        ease: EASE,
                      }}
                      className={`block ${i === 2 ? "italic text-lime" : ""}`}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
                className="mt-7 max-w-xl text-[15px] leading-relaxed text-mint/85 md:text-[17px]"
              >
                <span className="font-semibold text-cream">
                  3R Waste Management
                </span>{" "}
                engineers, builds and operates water, wastewater &amp; solid
                waste treatment plants — turnkey environmental infrastructure
                for hotels, hospitals, industries and institutions since 2006.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.68, ease: EASE }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-forest transition-all duration-300 hover:shadow-[0_16px_40px_-12px_rgba(201,241,88,0.5)]"
                >
                  Explore Services
                  <ArrowDown
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-mint/30 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-cream transition-all duration-300 hover:border-lime hover:text-lime"
                >
                  Request a Proposal
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="mt-10 text-[11px] font-bold uppercase tracking-[0.24em] text-mint/50"
              >
                Trusted by — Taj Group · Hyatt · J W Marriott · HSBC · Cummins ·
                HPCL
              </motion.p>
            </motion.div>

            {/* Imagery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
              className="relative lg:col-span-5"
            >
              <motion.div
                style={{ y: imgY }}
                className="relative overflow-hidden rounded-[2rem] border border-mint/15 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]"
              >
                <img
                  src={aboutImages.primary}
                  alt="Aerial view of a sewage treatment plant built and operated by 3R"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-lime">
                      Delivered turnkey
                    </p>
                    <p className="font-display mt-1 text-lg italic text-cream">
                      STP — built &amp; operated by 3R
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* floating secondary card */}
              <motion.div
                className="animate-float absolute -left-6 -top-8 hidden w-44 overflow-hidden rounded-2xl border border-mint/15 shadow-2xl md:block lg:-left-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: EASE }}
              >
                <img
                  src={aboutImages.secondary}
                  alt="Organic compost produced from waste"
                  className="h-28 w-full object-cover"
                />
                <p className="bg-pine px-3.5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-mint">
                  Solid waste → resource
                </p>
              </motion.div>

              {/* rotating badge */}
              <motion.div
                initial={{ opacity: 0, rotate: -30 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.85, ease: EASE }}
                className="absolute -bottom-9 -left-4 hidden md:block lg:-left-14"
              >
                <RotatingBadge />
              </motion.div>

              {/* stat chip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
                className="absolute -right-3 top-8 rounded-2xl bg-lime px-5 py-4 text-forest shadow-xl md:-right-6"
              >
                <p className="font-display text-3xl font-bold leading-none">19+</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em]">
                  Years in the field
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05, ease: EASE }}
            className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-mint/12 bg-mint/10 md:grid-cols-4"
          >
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="group bg-forest/50 px-6 py-7 backdrop-blur-sm transition-colors duration-500 hover:bg-pine"
              >
                <p className="font-display text-4xl font-medium text-cream transition-colors group-hover:text-lime md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-mint/60">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* lime tech marquee band */}
      <div className="relative z-10 -mt-6 -rotate-1 scale-[1.02] border-y-4 border-forest bg-lime py-4 shadow-[0_20px_50px_-20px_rgba(10,31,22,0.4)]">
        <div className="animate-marquee-fast flex w-max">
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0 items-center">
              {techStrip.map((t) => (
                <span
                  key={`${n}-${t}`}
                  className="flex items-center whitespace-nowrap"
                >
                  <span className="px-5 font-display text-lg font-semibold italic text-forest md:text-xl">
                    {t}
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    className="fill-forest/60"
                  >
                    <path d="M6 0l1.4 4.6L12 6 7.4 7.4 6 12 4.6 7.4 0 6l4.6-1.4z" />
                  </svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
