import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Droplets,
  FileCheck2,
  Recycle,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { processSteps, services } from "../data/site";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading } from "./ui";

const EASE = [0.22, 1, 0.36, 1] as const;

const icons = {
  droplets: Droplets,
  recycle: Recycle,
  fileCheck: FileCheck2,
  wrench: Wrench,
};

function ServiceRow({
  service,
  open,
  onToggle,
}: {
  service: (typeof services)[number];
  open: boolean;
  onToggle: () => void;
}) {
  const Icon = icons[service.icon];
  return (
    <Reveal>
      <div
        className={cn(
          "overflow-hidden rounded-[1.6rem] border transition-all duration-500",
          open
            ? "border-lime/40 bg-pine/70 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)]"
            : "border-mint/12 bg-forest/40 hover:border-mint/30 hover:bg-pine/40"
        )}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center gap-4 px-6 py-6 text-left md:gap-8 md:px-9 md:py-7"
        >
          <span
            className={cn(
              "font-display text-2xl italic transition-colors md:text-3xl",
              open ? "text-lime" : "text-mint/40"
            )}
          >
            {service.index}
          </span>
          <span
            className={cn(
              "hidden h-12 w-12 shrink-0 place-items-center rounded-2xl transition-all duration-500 sm:grid",
              open ? "bg-lime text-forest" : "bg-mint/10 text-mint"
            )}
          >
            <Icon size={22} strokeWidth={1.8} />
          </span>
          <span className="flex-1">
            <span className="font-display block text-xl font-medium text-cream md:text-[1.7rem]">
              {service.title}
            </span>
            <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.2em] text-mint/60">
              {service.tagline}
            </span>
          </span>
          <span
            className={cn(
              "grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-500",
              open
                ? "rotate-90 border-lime bg-lime text-forest"
                : "border-mint/25 text-mint"
            )}
          >
            <ArrowRight size={17} />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="border-t border-mint/12 px-6 pb-8 pt-6 md:px-9">
                <p className="max-w-2xl text-[14.5px] leading-relaxed text-mint/80">
                  {service.description}
                </p>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {service.items.map((item) => (
                    <div
                      key={item.name}
                      className="group/item rounded-2xl border border-mint/10 bg-forest/60 p-5 transition-colors duration-300 hover:border-lime/40"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-display text-[16px] font-semibold leading-snug text-cream">
                          {item.name}
                        </h4>
                        <ArrowUpRight
                          size={15}
                          className="mt-1 shrink-0 text-mint/40 transition-all duration-300 group-hover/item:text-lime"
                        />
                      </div>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-mint/65">
                        {item.detail}
                      </p>
                      {item.chips && (
                        <div className="mt-3.5 flex flex-wrap gap-1.5">
                          {item.chips.map((chip) => (
                            <span
                              key={chip}
                              className="rounded-full bg-lime/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-lime"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function Services() {
  const [openId, setOpenId] = useState<string>("water");

  return (
    <section
      id="services"
      className="noise relative overflow-hidden bg-ink py-24 md:py-32"
    >
      <div className="dot-grid absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-moss/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-lime/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            dark
            tag="What we do"
            title={
              <>
                Four verticals.{" "}
                <em className="text-lime">One standard</em> — clean.
              </>
            }
            copy="From effluent recovery to vermicomposting, every 3R practice is designed, manufactured, improved & consulted in-house."
          />
          <Reveal delay={0.2}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-mint/25 px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] text-cream transition-all hover:border-lime hover:text-lime"
            >
              Discuss your project
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-4">
          {services.map((s) => (
            <ServiceRow
              key={s.id}
              service={s}
              open={openId === s.id}
              onToggle={() => setOpenId(openId === s.id ? "" : s.id)}
            />
          ))}
        </div>

        {/* statement banner */}
        <Reveal delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-[2rem] bg-lime px-8 py-10 text-center md:px-14 md:py-14">
            <p className="font-display mx-auto max-w-3xl text-[clamp(1.5rem,3.4vw,2.6rem)] font-medium leading-snug text-forest">
              “We <em className="font-semibold">Design, Manufacture, Improve &amp; Consult</em>{" "}
              for all of the above practices.”
            </p>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-forest/60">
              — The 3R credo, since day one
            </p>
          </div>
        </Reveal>

        {/* ── Turnkey pipeline ── */}
        <div id="process" className="mt-24 md:mt-28">
          <SectionHeading
            dark
            align="center"
            tag="Turnkey delivery"
            title={
              <>
                From first drawing to{" "}
                <em className="text-lime">daily operation</em>
              </>
            }
            copy="Every plant travels one accountable pipeline — no hand-offs lost between agencies."
          />

          <div className="relative mt-16">
            <div className="absolute left-6 top-0 h-full w-px bg-mint/15 md:left-0 md:top-6 md:h-px md:w-full" />
            <div className="grid gap-10 md:grid-cols-7 md:gap-3">
              {processSteps.map((p, i) => (
                <Reveal key={p.step} delay={0.08 * i}>
                  <div className="group relative flex items-start gap-5 pl-0 md:block">
                    <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-mint/25 bg-ink font-display text-sm italic text-lime transition-all duration-500 group-hover:border-lime group-hover:bg-lime group-hover:text-forest">
                      {p.step}
                    </div>
                    <div className="md:mt-5">
                      <h4 className="font-display text-lg font-semibold text-cream md:text-[15px]">
                        {p.title}
                      </h4>
                      <p className="mt-1 text-[12px] leading-relaxed text-mint/60">
                        {p.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
