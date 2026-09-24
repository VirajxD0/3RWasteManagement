import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Filter, X, Building2, Droplets, Recycle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { featuredProjects, moreProjects } from "../data/site";
import { Reveal, SectionHeading, Tag } from "../components/ui";
import { Link } from "../router";

const allProjects = [
  ...featuredProjects.map((p) => ({ ...p, year: p.location.includes("Bhutan") ? "2023" : p.location.includes("Phoenix") ? "2022" : "2021–24", capacity: p.type === "WTP" ? "0.5 MLD" : p.type === "ETP" ? "20–50 KLD" : "25–100 KLD" })),
  ...moreProjects.map((p) => ({ ...p, image: undefined as string | undefined, year: "2018–24", capacity: p.type === "SWTP" ? "1–2 TPD" : "15–60 KLD" })),
];

const filters = ["All", "STP", "ETP", "WTP", "SWTP"] as const;

const statCards = [
  { value: "13+", label: "Flagship plants", sub: "Built & operated" },
  { value: "0.5 MLD", label: "Largest single WTP", sub: "Thimphu, Bhutan" },
  { value: "19 yrs", label: "Oldest plant still", sub: "Under 3R O&M" },
  { value: "25+", label: "Live O&M sites", sub: "Across Maharashtra" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<(typeof allProjects)[number] | null>(null);

  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.type === active);

  return (
    <main className="bg-cream">
      <PageHeader
        eyebrow="Projects — on the ground"
        title="STP · ETP · WTP · SWTP"
        highlight="built to run, not just inaugurate"
        copy="A selection from nearly two decades of plants across Maharashtra, Mumbai and Bhutan — designed, drawn, supplied, erected, tested, commissioned and operated by the same 3R engineers."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "" },
        ]}
        stats={[
          { value: "13+", label: "Flagship builds" },
          { value: "25+", label: "Live O&M" },
          { value: "0.5 MLD", label: "Bhutan WTP" },
          { value: "2006 →", label: "Since inception" },
        ]}
      />

      {/* quick stats — spaced from hero CTA */}
      <div className="mx-auto max-w-7xl px-5 pt-8 md:px-6 md:pt-10">
        <div className="grid gap-4 md:grid-cols-4">
          {statCards.map((s) => (
            <div key={s.label} className="rounded-2xl border border-forest/10 bg-white p-5">
              <p className="font-display text-2xl font-semibold text-forest">{s.value}</p>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-moss">{s.label}</p>
              <p className="text-[12px] text-clay">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* featured */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            tag="Flagship projects"
            title={<>Six plants that <em className="text-leaf">define the work</em></>}
            copy="Each one turnkey — from load study to MPCB logbooks. Click any card for capacity and scope details."
          />
          <div className="flex items-center gap-2 rounded-full border border-forest/10 bg-white p-1">
            <Filter size={14} className="ml-3 text-clay" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em] transition-all ${active === f ? "bg-forest text-lime" : "text-forest/60 hover:text-forest"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 6).map((p, i) => (
            <Reveal key={p.title + p.location + i} delay={0.05 * i} className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}>
              <button
                onClick={() => setSelected(p)}
                className={`group relative block h-full w-full overflow-hidden rounded-[1.6rem] text-left ${i === 0 ? "min-h-[360px] sm:min-h-[520px]" : "min-h-[280px]"}`}
              >
                {p.image ? (
                  <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-forest via-pine to-moss" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-lime px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest">{p.type} · {p.capacity}</span>
                <span className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-cream/15 text-cream opacity-0 backdrop-blur transition-all group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </span>
                <div className="absolute inset-x-5 bottom-5">
                  <p className={`font-display font-medium leading-tight text-cream ${i === 0 ? "text-2xl md:text-[1.9rem]" : "text-lg"}`}>{p.title}</p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mint/90">
                    <MapPin size={12} className="text-lime" /> {p.location} · {p.year}
                  </p>
                  <p className="mt-1 text-[12px] text-cream/60">{p.note}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* all installations table */}
        <div className="mt-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Tag>Complete installation list</Tag>
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-clay">Filter: <span className="text-forest">{active}</span> · Showing {filtered.length} plants</p>
          </div>

          <div className="mt-6 overflow-hidden rounded-[1.6rem] border border-forest/10 bg-white">
            <div className="flex items-center justify-between bg-forest px-6 py-4 text-cream md:px-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-mint">Installation</p>
              <p className="hidden text-[11px] font-bold uppercase tracking-[0.22em] text-mint/60 sm:block">Capacity · Location</p>
            </div>
            <div className="divide-y divide-forest/8">
              {filtered.map((p) => (
                <div
                  key={p.title + p.location}
                  role="button"
                  onClick={() => setSelected(p)}
                  className="group flex cursor-pointer flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-4 transition-colors hover:bg-mint/15 md:px-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-forest/8 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-moss group-hover:bg-lime">{p.type}</span>
                    <p className="font-display text-[15px] font-semibold text-forest">{p.title}</p>
                  </div>
                  <div className="flex items-center gap-3 pl-12 md:pl-0">
                    <span className="hidden rounded-full bg-mint/20 px-2.5 py-1 text-[11px] font-bold text-moss md:inline-block">{p.capacity}</span>
                    <p className="text-[12px] text-clay">
                      {p.note} — <span className="font-semibold text-moss">{p.location}</span> <span className="text-clay/60">· {p.year}</span>
                    </p>
                    <ArrowUpRight size={14} className="text-clay/40 group-hover:text-leaf" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bhutan highlight */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid overflow-hidden rounded-[2rem] bg-ink lg:grid-cols-12">
            <div className="p-8 md:p-10 lg:col-span-7">
              <Tag dark>Case highlight — Bhutan</Tag>
              <h3 className="font-display mt-5 text-3xl font-medium leading-tight text-cream md:text-4xl">0.5 MLD Water Treatment Plant — Thimphu</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-mint/70">Designed, supplied and commissioned for the Bhutan Industrial Area. Raw water polished through UF + RO + ozonation to industrial standards — one of 3R’s farthest and highest-altitude builds, handed over at committed output and still referenced by clients for remote-site execution.</p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: "Capacity", v: "0.5 MLD" },
                  { k: "Scope", v: "Turnkey" },
                  { k: "Year", v: "2023" },
                ].map((x) => (
                  <div key={x.k} className="rounded-2xl bg-forest px-4 py-4">
                    <p className="font-display text-xl font-semibold text-lime">{x.v}</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-mint/60">{x.k}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["UF", "RO", "Ozonation", "Remote logistics", "Alt. 2,300 m"].map((t) => (
                  <span key={t} className="rounded-full bg-lime/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-lime">{t}</span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[320px] lg:col-span-5">
              <img src="/images/photos/WTP_THIMPU_BHUTAN.jpeg" alt="Bhutan WTP — 0.5 MLD Water Treatment Plant, Thimphu" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-5 left-5 rounded-xl bg-lime px-4 py-3 text-forest">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em]">Farthest build</p>
                <p className="font-display text-lg font-semibold">Bhutan · Thimphu</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* why we last */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { icon: Building2, title: "Own logbook, own team", copy: "No labour contractor rosters. 3R operators on payroll at every live site." },
            { icon: Droplets, title: "MPCB-ready daily", copy: "Logbooks, chemical stock and flow readings kept inspection-ready, always." },
            { icon: Recycle, title: "Output, not just installation", copy: "Handover at committed KLD/TPD — not at ‘installation complete’." },
          ].map((f) => (
            <div key={f.title} className="rounded-3xl border border-forest/10 bg-white p-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-forest text-lime"><f.icon size={18} /></div>
              <h4 className="font-display mt-4 text-lg font-semibold text-forest">{f.title}</h4>
              <p className="mt-1.5 text-[13px] leading-relaxed text-clay">{f.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-forest p-8 text-center md:flex-row md:text-left">
          <div>
            <p className="font-display text-2xl font-medium text-cream">Have a site in mind?</p>
            <p className="mt-1 text-[13px] text-mint/60">Share KLD/TPD, location and timeline — we revert with a tech recommendation before a quote.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-forest">
            Get plant proposal <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] grid place-items-center bg-ink/70 p-4 backdrop-blur-sm" onClick={() => setSelected(null)}>
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl overflow-hidden rounded-[1.8rem] bg-cream shadow-2xl"
            >
              {selected.image && <img src={selected.image} alt={selected.title} className="h-56 w-full object-cover" />}
              {!selected.image && <div className="h-2 w-full bg-lime" />}
              <button onClick={() => setSelected(null)} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-ink/80 text-cream backdrop-blur">
                <X size={16} />
              </button>
              <div className="p-7 md:p-8">
                <span className="rounded-full bg-forest px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-lime">{selected.type} · {selected.capacity} · {selected.year}</span>
                <h3 className="font-display mt-4 text-2xl font-semibold leading-tight text-forest">{selected.title}</h3>
                <p className="mt-2 flex items-center gap-1.5 text-[13px] font-semibold text-moss"><MapPin size={14} /> {selected.location}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-clay">{selected.note} — Turnkey scope: design, drawing, supply, erection, testing, commissioning and O&M where contracted.</p>
                <div className="mt-6 flex gap-3">
                  <Link to="/contact" onClick={() => setSelected(null)} className="flex-1 rounded-full bg-forest py-3 text-center text-[13px] font-bold uppercase tracking-[0.12em] text-lime">Enquire for similar</Link>
                  <button onClick={() => setSelected(null)} className="rounded-full border border-forest/15 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-forest">Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
