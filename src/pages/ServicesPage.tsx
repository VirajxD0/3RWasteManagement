import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Droplets,
  FileCheck2,
  FlaskConical,
  Recycle,
  Settings2,
  Wrench,
} from "lucide-react";
import { Link } from "../router";
import PageHeader from "../components/PageHeader";
import { processSteps, services } from "../data/site";
import { Reveal, SectionHeading, Tag } from "../components/ui";

const EASE = [0.22, 1, 0.36, 1] as const;

const iconMap = {
  droplets: Droplets,
  recycle: Recycle,
  fileCheck: FileCheck2,
  wrench: Wrench,
};

const servicePhotos: Record<string, string> = {
  water: "/images/photos/WTP_THIMPU_BHUTAN.jpeg",
  solid: "/images/photos/page_06_image_03.jpeg",
  eia: "/images/photos/MONROVIA_AGRO_FOODS.jpeg",
  om: "/images/photos/ETP_LAUNDRY_HOTEL_RADISSON.jpeg",
};

const extended = {
  water: {
    headline: "Water & waste water — engineered to reuse, not just discharge",
    bullets: [
      "Design flows from 5 KLD to 1 MLD, with turnkey civil, mechanical and automation",
      "Process train selected after lab analysis: ASP, MBBR, MBR, RBC, UAHSB or Root Zone",
      "Treated output fit for flushing, HVAC cooling and landscaping — closing the loop",
    ],
    capacities: ["5 KLD — Boutique hotels", "50–100 KLD — Hospitals & IT parks", "500 KLD+ — Industrial & township scale"],
    technologies: [
      { name: "ASP", use: "Conventional, economical for large continuous flows" },
      { name: "MBBR", use: "Compact footprint, high shock-load tolerance" },
      { name: "MBR", use: "Premium reuse quality, membranes included" },
      { name: "RBC", use: "Low energy, elegant for hill/space-constrained sites" },
      { name: "UAHSB", use: "Anaerobic pre-treatment for high-COD effluent" },
      { name: "Root Zone", use: "Natural polishing, minimal power" },
    ],
  },
  solid: {
    headline: "Solid waste — from liability to compost, biogas & fuel",
    bullets: [
      "MSW and organic industrial waste handled at 50 kg/day to 5 TPD and beyond",
      "Right decomposition path chosen: aerobic, anaerobic, vermi or densification",
      "Outputs audited for quality — C:N ratio, calorific value, moisture control",
    ],
    capacities: ["OWC 50–500 kg — Societies & kitchens", "1–2 TPD — Hotels & hospitals", "5 TPD+ — Municipal & canteen scale"],
    technologies: [
      { name: "Aerobic Composting", use: "Fast, mechanised, premium compost" },
      { name: "Anaerobic Biogas", use: "Wet waste → clean fuel + slurry manure" },
      { name: "Vermicomposting", use: "Earthworm-driven humus, richest NPK" },
      { name: "Bio-Fuel Pelleting", use: "Garden/agri waste → boiler-grade pellets" },
    ],
  },
  eia: {
    headline: "Statutory clearance — without the chase",
    bullets: [
      "EIA, EC, EMP, Environmental Statement and annual audit reports as per MPCB/CPCB/MoEF",
      "Lab-grade monitoring, testing and analysis — air, water, noise and soil",
      "Single window liaison for consent to establish, operate and renew",
    ],
    capacities: ["Building & township projects", "Industrial expansion & greenfield", "Hospitality & healthcare"],
    technologies: [
      { name: "EIA Report", use: "Baseline, impact prediction, mitigation plan" },
      { name: "EC Liaison", use: "SEAC/SEIAA submission to clearance" },
      { name: "EMP", use: "Site-specific operational management blueprint" },
      { name: "Monitoring", use: "NABL-aligned sampling & analysis" },
    ],
  },
  om: {
    headline: "Operation & maintenance — plants that stay compliant, daily",
    bullets: [
      "Annual contracts with deployed operators, chemists and electricians",
      "Preventive SOPs, log books and monthly performance reports",
      "Spare & chemical management that keeps cost per kilolitre predictable",
    ],
    capacities: ["STP — residential, hospitality, IT", "ETP — laundry, hospital, food processing", "OWC — societies, hospitals, institutions"],
    technologies: [
      { name: "24×7 Manning", use: "Shift operators, daily checks" },
      { name: "Compliance Ready", use: "MPCB logbooks & audit support" },
      { name: "AMC Spares", use: "Pumps, blowers, membranes, media" },
      { name: "Training", use: "Your staff trained before handover" },
    ],
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-cream">
      <PageHeader
        eyebrow="Services — four verticals"
        title="Four verticals."
        highlight="One standard — clean."
        copy="Every 3R practice is designed, manufactured, improved and consulted in-house. No subcontracted hand-offs, no design-build disconnect — one accountable team from drawing to daily operation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "" },
        ]}
        stats={[
          { value: "19+", label: "Years delivering turnkey" },
          { value: "01–07", label: "Design → O&M pipeline" },
          { value: "5 KLD+", label: "Smallest to 0.5 MLD largest" },
          { value: "4", label: "Verticals, one team" },
        ]}
      />

      {/* quick jump */}
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className=" -mt-6 flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-forest/15 bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-forest transition-colors hover:border-forest hover:bg-forest hover:text-lime"
            >
              {s.index} · {s.title.split("—")[0].trim() || s.title}
            </a>
          ))}
        </div>
      </div>

      {/* detailed verticals */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-20">
        <div className="flex flex-col gap-16 md:gap-24">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            const ext = extended[s.id as keyof typeof extended];
            const isDark = s.id === "eia" || s.id === "om" ? false : true;
            return (
              <section
                key={s.id}
                id={s.id}
                className={`overflow-hidden rounded-[2rem] border ${isDark ? "border-forest/20 bg-ink text-cream" : "border-forest/10 bg-white text-forest"} shadow-[var(--shadow-soft)]`}
              >
                {isDark ? <div className="dot-grid absolute inset-0 opacity-20" /> : null}
                <div className="relative grid gap-0 lg:grid-cols-12">
                  {/* left sticky header */}
                  <div className={`p-8 md:p-10 lg:col-span-5 ${isDark ? "bg-forest/40" : "bg-parchment/60"} border-b lg:border-b-0 lg:border-r ${isDark ? "border-mint/10" : "border-forest/10"}`}>
                    <div className="flex items-center gap-4">
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${isDark ? "bg-lime text-forest" : "bg-forest text-lime"}`}>
                        <Icon size={22} />
                      </span>
                      <span className={`font-display text-3xl italic ${isDark ? "text-lime" : "text-leaf"}`}>{s.index}</span>
                    </div>
                    <h2 className={`font-display mt-6 text-[1.7rem] font-medium leading-tight md:text-[2rem] ${isDark ? "text-cream" : "text-forest"}`}>{s.title}</h2>
                    <p className={`mt-2 text-[11px] font-bold uppercase tracking-[0.2em] ${isDark ? "text-mint/60" : "text-clay"}`}>{s.tagline}</p>
                    <p className={`mt-5 text-[14px] leading-relaxed ${isDark ? "text-mint/80" : "text-clay"}`}>{s.description}</p>
                    <div className="mt-6 overflow-hidden rounded-2xl border border-forest/10 shadow-sm">
                      <img
                        src={servicePhotos[s.id]}
                        alt={`${s.title} — real 3R project site`}
                        className="h-48 w-full object-cover"
                        loading="lazy"
                      />
                      <div className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] ${isDark ? "bg-lime text-forest" : "bg-forest text-lime"}`}>
                        Real site photo — {s.title.split("—")[0].trim() || s.title}
                      </div>
                    </div>
                    <p className={`font-display mt-8 text-lg font-medium italic ${isDark ? "text-cream" : "text-forest"}`}>{ext.headline}</p>
                    <ul className="mt-4 space-y-3">
                      {ext.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-[13.5px] leading-relaxed">
                          <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${isDark ? "text-lime" : "text-leaf"}`} />
                          <span className={isDark ? "text-mint/85" : "text-forest/80"}>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {ext.capacities.map((c) => (
                        <span key={c} className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] ${isDark ? "bg-lime/15 text-lime" : "bg-forest text-lime"}`}>
                          {c}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className={`mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[12px] font-bold uppercase tracking-[0.14em] transition-all ${isDark ? "bg-lime text-forest hover:brightness-105" : "bg-forest text-lime hover:bg-pine"}`}
                    >
                      Discuss this vertical <ArrowUpRight size={15} />
                    </Link>
                  </div>

                  {/* right - items + tech */}
                  <div className="p-8 md:p-10 lg:col-span-7">
                    <Tag dark={isDark}>What we deliver</Tag>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {s.items.map((item) => (
                        <div key={item.name} className={`group rounded-2xl border p-5 transition-colors ${isDark ? "border-mint/10 bg-forest/60 hover:border-lime/40" : "border-forest/10 bg-cream/60 hover:border-leaf/40"}`}>
                          <div className="flex items-start justify-between gap-3">
                            <h4 className={`font-display text-[15px] font-semibold leading-snug ${isDark ? "text-cream" : "text-forest"}`}>{item.name}</h4>
                            <ArrowUpRight size={14} className={`${isDark ? "text-mint/40 group-hover:text-lime" : "text-clay group-hover:text-leaf"} transition-colors`} />
                          </div>
                          <p className={`mt-1.5 text-[13px] leading-relaxed ${isDark ? "text-mint/65" : "text-clay"}`}>{item.detail}</p>
                          {item.chips && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {item.chips.map((chip) => (
                                <span key={chip} className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${isDark ? "bg-lime/15 text-lime" : "bg-moss/10 text-moss"}`}>
                                  {chip}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-10">
                      <div className="flex items-center gap-2">
                        <FlaskConical size={16} className={isDark ? "text-lime" : "text-leaf"} />
                        <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${isDark ? "text-mint/60" : "text-clay"}`}>Technologies & approach</p>
                      </div>
                      <div className="mt-4 overflow-hidden rounded-2xl border border-forest/10">
                        <div className={`grid grid-cols-12 gap-px bg-forest/10 text-[11px] font-bold uppercase tracking-[0.16em] ${isDark ? "bg-mint/10 text-mint" : "bg-forest text-cream"}`}>
                          <div className={`col-span-4 px-4 py-3 ${isDark ? "bg-forest" : "bg-forest"}`}>Technology</div>
                          <div className={`col-span-8 px-4 py-3 ${isDark ? "bg-forest" : "bg-forest"}`}>When we use it</div>
                        </div>
                        <div className="divide-y divide-forest/10 bg-white/80">
                          {ext.technologies.map((t) => (
                            <div key={t.name} className="grid grid-cols-12 gap-px bg-forest/10">
                              <div className="col-span-4 bg-white px-4 py-3 text-[13px] font-bold text-forest">{t.name}</div>
                              <div className="col-span-8 bg-white px-4 py-3 text-[13px] leading-relaxed text-clay">{t.use}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={`mt-8 flex items-center gap-2 rounded-2xl border border-dashed px-4 py-3 text-[12px] font-semibold ${isDark ? "border-mint/20 bg-mint/10 text-mint" : "border-moss/30 bg-mint/15 text-moss"}`}>
                      <Settings2 size={14} /> Consultation includes load study, site audit & tech recommendation before quoting.
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* pipeline extended */}
        <div className="mt-20 rounded-[2rem] bg-ink p-8 text-cream md:p-10 lg:p-14">
          <div className="dot-grid absolute inset-0 opacity-20" />
          <div className="relative">
            <SectionHeading dark tag="Turnkey delivery" title={<>From first drawing to <em className="text-lime">daily operation</em></>} copy="Seven accountable steps — single team, single logbook, zero hand-off risk." />
            <div className="relative mt-12">
              <div className="absolute left-6 top-0 hidden h-px w-full bg-mint/15 md:block md:top-6" />
              <div className="absolute left-6 top-0 block h-full w-px bg-mint/15 md:hidden" />
              <div className="grid gap-8 md:grid-cols-7 md:gap-3">
                {processSteps.map((p, i) => (
                  <Reveal key={p.step} delay={0.06 * i}>
                    <div className="group relative flex gap-5 pl-0 md:block">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-mint/25 bg-ink font-display text-sm italic text-lime transition-colors group-hover:bg-lime group-hover:text-forest">{p.step}</div>
                      <div className="md:mt-5">
                        <h4 className="font-display text-[15px] font-semibold text-cream">{p.title}</h4>
                        <p className="mt-1 text-[12px] leading-relaxed text-mint/60">{p.detail}</p>
                        <p className="mt-2 hidden text-[11px] font-bold uppercase tracking-[0.12em] text-lime/70 md:block">Week {i + 1}–{i + 3}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-forest p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-lime">What you get at handover</p>
                <p className="mt-2 text-[13px] leading-relaxed text-mint/70">As-built drawings, O&M manual, chemical dosing chart, MPCB-ready logbooks and trained manpower.</p>
              </div>
              <div className="rounded-2xl bg-lime p-6 text-forest">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-forest/60">Warranty & AMC</p>
                <p className="mt-2 text-[13px] leading-relaxed font-medium">12-month performance warranty with optional annual maintenance contract that keeps cost per KLD predictable.</p>
              </div>
              <div className="rounded-2xl bg-forest p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-lime">One throat to choke</p>
                <p className="mt-2 text-[13px] leading-relaxed text-mint/70">Design, supply, erection, commissioning and O&M by the same engineers — no blamed vendors.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }} className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-lime px-8 py-10 text-center md:flex-row md:px-10 md:text-left">
          <div>
            <p className="font-display text-2xl font-medium leading-snug text-forest md:text-3xl">We design, manufacture, improve & consult — for all of the above.</p>
            <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-forest/60">Talk to an engineer, not a salesperson.</p>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-forest px-7 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-lime transition-colors hover:bg-ink">
            Request a proposal <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
