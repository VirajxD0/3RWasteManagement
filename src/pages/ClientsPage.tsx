import { ArrowUpRight, Building2, Factory, Hotel, Landmark, Stethoscope, Quote, Star } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { clientGroups, clientMarquee } from "../data/site";
import { Reveal, SectionHeading, Marquee, Tag } from "../components/ui";
import { Link } from "../router";

const groupIcons: Record<string, any> = {
  hotel: Hotel,
  building: Building2,
  health: Stethoscope,
  factory: Factory,
  landmark: Landmark,
};

const testimonials = [
  { who: "Engineering Head · 5-star hotel, Pune", text: "3R’s annual O&M is why we stopped worrying about MPCB audits. Logbook discipline is military.", rating: 5 },
  { who: "Facility Manager · IT Park, Pune", text: "Modification + operation — they made a 12-year-old STP hit reuse specs again. No new civil needed.", rating: 5 },
  { who: "Admin Head · Hospital, Karad", text: "ETP built during full hospital operation — zero disruption, handed over at committed output.", rating: 5 },
];

const stats = [
  { value: "25+", label: "Institutions", sub: "Hotels to hospitals to HPCL" },
  { value: "19 yrs", label: "Average client tenure", sub: "3–8 year AMC renewals" },
  { value: "100%", label: "MPCB inspection pass", sub: "On maintained plants last 3 yrs" },
  { value: "5★", label: "Hospitality cluster", sub: "Taj, Hyatt, Marriott, Westin, Conrad" },
];

export default function ClientsPage() {
  return (
    <main className="bg-cream">
      <PageHeader
        eyebrow="Clients — who trusts the work"
        title="Trusted by names that"
        highlight="don’t compromise"
        copy="From five-star hotels to oil majors, hospitals to municipal corporations — plants built and run by 3R serve India’s most demanding institutions, many on multi-year O&M renewals."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Clients", href: "" },
        ]}
        stats={[
          { value: "25+", label: "Clients served" },
          { value: "5", label: "Sectors" },
          { value: "19 yrs", label: "With us" },
          { value: "PMC", label: "Empanelled" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-6 -mt-6">
        <div className="grid gap-3 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-5 border border-forest/10">
              <p className="font-display text-2xl font-semibold text-forest">{s.value}</p>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-moss">{s.label}</p>
              <p className="text-[12px] text-clay">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-20">
        {/* marquee */}
        <div className="rounded-[1.6rem] border border-forest/10 bg-white py-5">
          <Marquee items={clientMarquee} fast />
        </div>

        {/* groups */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {clientGroups.map((g, gi) => {
            const Icon = groupIcons[g.icon] ?? Building2;
            return (
              <Reveal key={g.category} delay={0.06 * gi} className={gi === 0 ? "lg:row-span-2" : ""}>
                <div className="flex h-full flex-col rounded-[1.6rem] border border-forest/10 bg-white p-7 shadow-[var(--shadow-card)] md:p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest text-lime"><Icon size={20} /></span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-forest">{g.category}</h3>
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-clay">{g.clients.length} clients</p>
                    </div>
                  </div>
                  <ul className="flex-1 space-y-0 divide-y divide-forest/8">
                    {g.clients.map((c) => (
                      <li key={c.name} className="group py-3">
                        <p className="text-[13.5px] font-semibold leading-snug text-forest group-hover:text-leaf transition-colors">{c.name}</p>
                        <p className="mt-1 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-clay/70">
                          <span className="h-1 w-1 rounded-full bg-leaf" /> {c.scope}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={0.35}>
            <div className="flex h-full min-h-[260px] flex-col justify-between rounded-[1.6rem] bg-forest p-8 text-cream">
              <div>
                <Tag dark>PMC Empanelled</Tag>
                <p className="font-display mt-5 text-2xl font-medium leading-snug">Government-registered, PMC panel — audited, not just claimed.</p>
                <p className="mt-3 text-[13px] leading-relaxed text-mint/60">Credentials checked by Pune Municipal Corporation and statutory bodies. That’s why institutions renew AMCs for 5–8 years straight.</p>
              </div>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-[13px] font-bold uppercase tracking-[0.14em] text-forest">
                Check credentials <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <Link to="/contact" className="group flex h-full min-h-[260px] flex-col justify-between rounded-[1.6rem] bg-lime p-8 text-forest transition-transform hover:-translate-y-1">
              <p className="font-display text-2xl font-medium leading-snug">Your organisation could be next on this list.</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.18em]">
                Start the conversation <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-lime transition-transform group-hover:rotate-45"><ArrowUpRight size={17} /></span>
              </span>
            </Link>
          </Reveal>
        </div>

        {/* testimonials */}
        <div className="mt-16">
          <SectionHeading
            tag="What clients say"
            title={<>Plants speak. <em className="text-leaf">Clients stay.</em></>}
            copy="Three unsolicited notes — from housekeeping-proof hospitality to audit-ready hospitals."
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <div className="relative flex h-full flex-col rounded-[1.6rem] border border-forest/10 bg-white p-7">
                  <Quote size={18} className="text-leaf" />
                  <p className="mt-4 flex-1 text-[14px] leading-relaxed text-forest">“{t.text}”</p>
                  <div className="mt-6 flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-lime text-lime" />
                    ))}
                  </div>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-clay">{t.who}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* sectors */}
        <div className="mt-16 grid gap-4 md:grid-cols-5">
          {[
            { label: "Hotels & Hospitality", count: "11" },
            { label: "IT & Corporate", count: "5" },
            { label: "Healthcare", count: "4" },
            { label: "Industry", count: "6" },
            { label: "Govt & Institutions", count: "3" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-ink px-5 py-6 text-center text-cream">
              <p className="font-display text-3xl font-semibold text-lime">{s.count}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-mint/60">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-forest p-8 md:flex-row">
          <p className="font-display text-xl font-medium text-cream text-center md:text-left">Need a reference call? We’ll connect you to a live O&M site <span className="text-lime">near your location.</span></p>
          <Link to="/contact" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-[13px] font-bold uppercase tracking-[0.14em] text-forest">
            Request reference <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
