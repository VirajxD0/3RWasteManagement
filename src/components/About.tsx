import {
  BadgeCheck,
  Briefcase,
  CalendarCheck2,
  CheckCircle2,
  MapPin,
  Recycle,
  RefreshCw,
  TrendingDown,
} from "lucide-react";
import { aboutImages, features } from "../data/site";
import { Reveal, SectionHeading, Tag } from "./ui";

const infoCards = [
  {
    icon: MapPin,
    title: "Registered Office",
    lines: [
      "Office No. 24, ‘C’ Wing, 5th Floor,",
      "K.K. Market, Bibwewadi,",
      "Pune 411 037, Maharashtra",
    ],
  },
  {
    icon: CalendarCheck2,
    title: "Establishment",
    lines: ["December 2006 — nineteen plus", "years of continuous service in", "environmental management."],
  },
  {
    icon: Briefcase,
    title: "Field of Activity",
    lines: [
      "Environmental Management —",
      "Water & Waste Water Management,",
      "Solid Waste Management.",
    ],
  },
];

const pillars = [
  {
    icon: TrendingDown,
    word: "Reduce",
    copy: "Engineering that cuts the volume and toxicity of waste at its very source — smaller footprints, smarter processes.",
  },
  {
    icon: Recycle,
    word: "Recycle",
    copy: "Treatment trains that convert sewage, effluent and organic waste back into usable water, compost and biogas.",
  },
  {
    icon: RefreshCw,
    word: "Reuse",
    copy: "Closing the loop — reclaimed water for flushing & landscaping, fuel from biomass, nutrients back to soil.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="dot-grid-dark absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-6">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Left — heading + image collage */}
          <div className="lg:col-span-5">
            <SectionHeading
              tag="Company Profile"
              title={
                <>
                  Environmental engineers for a{" "}
                  <em className="text-leaf">cleaner tomorrow</em>
                </>
              }
              copy="Established in December 2006 at Pune, 3R Waste Management is a Government-registered environmental management organisation — working across water & waste water and solid waste management. We design, manufacture, improve & consult for every practice we build for."
            />
            <Reveal delay={0.2} className="mt-10">
              <div className="relative">
                <div className="overflow-hidden rounded-[1.8rem] shadow-[var(--shadow-soft)]">
                  <img
                    src={aboutImages.tertiary}
                    alt="Segregating organic waste for recycling"
                    className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute -right-4 -top-5 rounded-2xl bg-forest px-5 py-4 text-cream shadow-xl md:-right-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime">
                    Since
                  </p>
                  <p className="font-display text-2xl font-semibold italic">2006</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — info cards */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {infoCards.map((card, i) => (
                <Reveal key={card.title} delay={0.08 * i} className="h-full">
                  <div className="group flex h-full flex-col rounded-3xl border border-forest/10 bg-white/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-moss/40 hover:shadow-[var(--shadow-card)]">
                    <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-forest text-lime transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                      <card.icon size={21} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-forest">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-clay">
                      {card.lines.map((l, j) => (
                        <span key={j} className="block">
                          {l}
                        </span>
                      ))}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.35}>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-3xl border border-dashed border-moss/40 bg-mint/15 px-7 py-5">
                <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-moss">
                  <BadgeCheck size={16} className="text-leaf" />
                  Govt. Registered Organisation
                </span>
                <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-moss">
                  <BadgeCheck size={16} className="text-leaf" />
                  Empanelled on PMC Panel
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Three pillars ── */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <Tag className="mb-8">The philosophy behind the name</Tag>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.word} delay={0.1 * i} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-[1.8rem] bg-forest p-8 transition-all duration-500 hover:shadow-[0_30px_60px_-25px_rgba(10,31,22,0.55)] md:p-9">
                  <div className="absolute -right-6 -top-6 font-display text-[7rem] font-bold leading-none text-mint/10 transition-all duration-500 group-hover:text-lime/20">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative">
                    <div className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-lime/15 text-lime">
                      <p.icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-display mt-6 text-3xl font-medium italic text-cream">
                      {p.word}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-mint/75">
                      {p.copy}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime transition-all duration-700 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Salient features ── */}
        <div id="why" className="mt-24 md:mt-32">
          <SectionHeading
            tag="Salient Features"
            align="center"
            title={
              <>
                Why clients stay with <em className="text-leaf">3R</em>
              </>
            }
            copy="Six commitments that have kept plants — and partnerships — running for nearly two decades."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.06 * i} className="h-full">
                <div className="group flex h-full gap-4 rounded-3xl border border-forest/10 bg-white/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-leaf/50 hover:bg-white hover:shadow-[var(--shadow-card)]">
                  <CheckCircle2
                    size={22}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0 text-leaf transition-transform duration-500 group-hover:scale-110"
                  />
                  <div>
                    <h4 className="font-display text-lg font-semibold text-forest">
                      {f.title}
                    </h4>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-clay">
                      {f.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
