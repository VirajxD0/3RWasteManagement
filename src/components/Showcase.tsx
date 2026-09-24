import {
  ArrowUpRight,
  Building2,
  Factory,
  Hotel,
  Landmark,
  MapPin,
  Stethoscope,
} from "lucide-react";
import {
  clientGroups,
  clientMarquee,
  featuredProjects,
  moreProjects,
} from "../data/site";
import { Link } from "../router";
import { cn } from "../utils/cn";
import { Marquee, Reveal, SectionHeading } from "./ui";

const groupIcons: Record<string, typeof Hotel> = {
  hotel: Hotel,
  building: Building2,
  health: Stethoscope,
  factory: Factory,
  landmark: Landmark,
};

export default function Showcase() {
  return (
    <>
      {/* ─────────────────── PROJECTS ─────────────────── */}
      <section id="projects" className="relative overflow-hidden bg-cream py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-5 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              tag="Flagship projects"
              title={
                <>
                  STP · ETP · WTP · SWTP —{" "}
                  <em className="text-leaf">on the ground</em>
                </>
              }
              copy="Designed, drawn, supplied, erected, tested, commissioned and operated by 3R Waste Management — a selection from nearly two decades of plants across India and Bhutan."
            />
            <Reveal delay={0.15}>
              <p className="text-outline-dark hidden font-display text-[6.5rem] font-bold leading-none lg:block">
                13+
              </p>
            </Reveal>
          </div>

          {/* featured grid */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <Reveal
                key={p.title + p.location}
                delay={0.06 * i}
                className={cn(i === 0 && "sm:col-span-2 sm:row-span-2")}
              >
                <Link
                  to="/contact"
                  className={cn(
                    "group relative block h-full w-full overflow-hidden rounded-[1.6rem]",
                    i === 0 ? "min-h-[320px] sm:min-h-[560px]" : "min-h-[270px]"
                  )}
                >
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.location}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent transition-opacity duration-500" />
                  <span className="absolute left-5 top-5 rounded-full bg-lime px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-forest">
                    {p.type}
                  </span>
                  <span className="absolute right-5 top-5 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-cream/15 text-cream opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={17} />
                  </span>
                  <div className="absolute inset-x-5 bottom-5">
                    <p
                      className={cn(
                        "font-display font-medium leading-snug text-cream",
                        i === 0
                          ? "text-2xl md:text-[2rem]"
                          : "text-lg md:text-xl"
                      )}
                    >
                      {p.title}
                    </p>
                    <p className="mt-1.5 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-mint/85">
                      <MapPin size={12} className="text-lime" />
                      {p.location}
                    </p>
                    <p className="mt-1 text-[12px] text-cream/60">{p.note}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* more installations */}
          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-[1.6rem] border border-forest/10">
              <div className="flex items-center justify-between border-b border-forest/10 bg-forest px-6 py-4 md:px-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-mint">
                  More installations
                </p>
                <p className="hidden text-[11px] font-bold uppercase tracking-[0.24em] text-mint/50 sm:block">
                  Scope · Location
                </p>
              </div>
              <div className="divide-y divide-forest/8 bg-white/50">
                {moreProjects.map((p) => (
                  <div
                    key={p.title}
                    className="group flex flex-wrap items-center justify-between gap-x-8 gap-y-1 px-6 py-4 transition-colors duration-300 hover:bg-mint/15 md:px-8"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-12 rounded-md bg-forest/8 px-2 py-0.5 text-center text-[10px] font-extrabold uppercase tracking-[0.12em] text-moss transition-colors group-hover:bg-lime">
                        {p.type}
                      </span>
                      <p className="font-display text-[15px] font-semibold text-forest md:text-base">
                        {p.title}
                      </p>
                    </div>
                    <p className="pl-16 text-[12px] text-clay md:pl-0">
                      {p.note} —{" "}
                      <span className="font-semibold text-moss">
                        {p.location}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────── CLIENTS ─────────────────── */}
      <section
        id="clients"
        className="noise relative overflow-hidden bg-forest py-24 md:py-32"
      >
        <div className="dot-grid absolute inset-0 opacity-35" />
        <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-moss/30 blur-[140px]" />

        <div className="relative">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <SectionHeading
              dark
              align="center"
              tag="Our clients"
              title={
                <>
                  Trusted by names that{" "}
                  <em className="text-lime">don’t compromise</em>
                </>
              }
              copy="From five-star hotels to oil majors, hospitals to municipal corporations — plants built and run by 3R serve India’s most demanding institutions."
            />
          </div>

          {/* name marquee */}
          <div className="mt-12 border-y border-mint/12 py-5">
            <Marquee items={clientMarquee} dark />
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 md:grid-cols-2 md:px-6 lg:grid-cols-3">
            {clientGroups.map((g, gi) => {
              const Icon = groupIcons[g.icon] ?? Building2;
              return (
                <Reveal
                  key={g.category}
                  delay={0.07 * gi}
                  className={cn(gi === 0 && "lg:row-span-2")}
                >
                  <div className="flex h-full flex-col rounded-[1.6rem] border border-mint/12 bg-pine/50 p-7 transition-all duration-500 hover:border-lime/35 hover:bg-pine/70 md:p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-lime/12 text-lime">
                        <Icon size={20} strokeWidth={1.8} />
                      </span>
                      <h3 className="font-display text-xl font-semibold text-cream">
                        {g.category}
                      </h3>
                    </div>
                    <ul className="flex-1 space-y-1">
                      {g.clients.map((c) => (
                        <li
                          key={c.name}
                          className="group border-b border-mint/8 py-3 last:border-0"
                        >
                          <p className="text-[13.5px] font-semibold leading-snug text-cream/90 transition-colors group-hover:text-lime">
                            {c.name}
                          </p>
                          <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-mint/50">
                            {c.scope}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}

            {/* CTA card fills remaining grid slot on lg */}
            <Reveal delay={0.35}>
              <Link
                to="/contact"
                className="group flex h-full min-h-[220px] flex-col justify-between rounded-[1.6rem] bg-lime p-8 text-forest transition-transform duration-500 hover:-translate-y-1.5"
              >
                <p className="font-display text-2xl font-medium leading-snug md:text-[1.65rem]">
                  Your organisation could be next on this list.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.18em]">
                  Start the conversation
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-lime transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={17} />
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
