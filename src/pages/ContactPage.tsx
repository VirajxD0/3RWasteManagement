import { useState } from "react";
import { ArrowUpRight, Clock, Globe, Mail, MapPin, Phone, Send, BadgeCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { company, services } from "../data/site";
import { Reveal, SectionHeading, Tag } from "../components/ui";

const contactRows = [
  { icon: MapPin, label: "Registered Office", value: company.address, href: `https://maps.google.com/?q=${encodeURIComponent(company.address)}` },
  { icon: Phone, label: "Phone", value: `${company.phoneLandline} · ${company.phones.join(" / ")}`, href: `tel:${company.phoneLandline.replace(/-/g, "")}` },
  { icon: Mail, label: "E-Mail", value: company.email, href: `mailto:${company.email}` },
  { icon: Globe, label: "Website", value: company.website, href: `https://${company.website}` },
];

const faqs = [
  { q: "How fast do you respond to an enquiry?", a: "Within one working day — often same day for Pune/Mumbai sites. We reply with a tech recommendation before a quote." },
  { q: "Do you visit the site before quoting?", a: "Yes. Every proposal follows a site audit and load study — no blind quotations. Mumbai/Pune visits within 48 hours." },
  { q: "Is O&M available for plants not built by 3R?", a: "Yes. We take over STP/ETP/OWC plants built by others after an audit and rectification — then put them on AMC." },
  { q: "Do you handle PMC/MPCB liaison?", a: "Completely. From consent to establish/operate to annual statements and audits — we file as per MPCB/CPCB/MoEF norms." },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    phone: "",
    email: "",
    service: services[0].title,
    message: "",
  });

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Plant Enquiry — ${form.service} · ${form.org || form.name}`;
    const body = [`Name: ${form.name}`, `Organisation: ${form.org}`, `Phone: ${form.phone}`, `Email: ${form.email}`, `Interested in: ${form.service}`, "", form.message].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputCls = "w-full rounded-2xl border border-forest/15 bg-white/70 px-5 py-3.5 text-[14px] text-ink placeholder:text-clay/60 outline-none transition-all focus:border-leaf focus:bg-white focus:shadow-[0_0_0_4px_rgba(46,125,83,0.12)]";

  return (
    <main className="bg-cream">
      <PageHeader
        eyebrow="Contact — talk to an engineer"
        title="Let’s engineer your"
        highlight="next plant"
        copy="Annual O&M contracts, turnkey projects, consent consultancy or a feasibility study — the 3R team responds within one working day. Tell us KLD/TPD, location and timeline."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "" },
        ]}
        stats={[
          { value: "<24h", label: "Response time" },
          { value: "48h", label: "Site visit (Pune/Mum)" },
          { value: "19 yrs", label: "Same Pune office" },
          { value: "25+", label: "Live AMCs" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* left */}
          <div className="lg:col-span-5">
            <SectionHeading tag="Reach us" title={<>One address — <em className="text-leaf">since 2006</em></>} copy="Government-registered, PMC empanelled — same office, same team, nineteen years." />
            <div className="mt-8 divide-y divide-forest/8 rounded-[1.6rem] border border-forest/10 bg-white p-2">
              {contactRows.map((row, i) => (
                <Reveal key={row.label} delay={0.05 * i}>
                  <div className="group flex items-start gap-4 px-5 py-4">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest text-lime"><row.icon size={17} /></span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-clay">{row.label}</p>
                      {row.href ? (
                        <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-0.5 block break-words text-[14px] font-semibold text-forest hover:text-leaf">
                          {row.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-[14px] font-semibold text-forest">{row.value}</p>
                      )}
                    </div>
                    {row.href && <ArrowUpRight size={14} className="mt-2 shrink-0 text-clay/40 group-hover:text-leaf" />}
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              <div className="flex items-center gap-2 rounded-2xl border border-moss/20 bg-mint/15 px-5 py-4">
                <BadgeCheck size={16} className="text-leaf" />
                <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-moss">Govt. Registered Organisation</span>
                <span className="ml-auto h-2 w-2 rounded-full bg-leaf" />
                <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-moss">PMC Empanelled</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-forest px-5 py-4 text-cream">
                  <Clock size={16} className="text-lime" />
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-mint/60">Working hours</p>
                  <p className="text-[13px] font-semibold">Mon–Sat · 9:30am – 6:30pm</p>
                  <p className="text-[12px] text-mint/60">Emergency O&M — 24×7 manning</p>
                </div>
                <div className="rounded-2xl bg-lime px-5 py-4 text-forest">
                  <Phone size={16} />
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-forest/60">Prefer a call?</p>
                  <a href="tel:02041240503" className="block text-[13px] font-bold">{company.phoneLandline}</a>
                  <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="text-[12px] font-semibold">{company.phones[0]}</a>
                </div>
              </div>
            </div>

            {/* map */}
            <div className="mt-6 overflow-hidden rounded-[1.6rem] border border-forest/10 bg-white">
              <div className="flex items-center justify-between px-6 py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-forest">Find us — Bibwewadi, Pune</p>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(company.address)}`} target="_blank" rel="noreferrer" className="text-[11px] font-bold uppercase tracking-[0.14em] text-leaf hover:text-moss">
                  Open in Maps ↗
                </a>
              </div>
              <div className="aspect-[16/10] w-full bg-parchment">
                <iframe
                  title="3R Waste Management location"
                  src="https://www.google.com/maps?q=K.K.%20Market%20Bibwewadi%20Pune&z=15&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="px-6 py-3 text-[11px] leading-relaxed text-clay">Office No. 24, ‘C’ Wing, 5th Floor, K.K. Market, Bibwewadi, Pune 411037 — landmark opposite City Pride.</div>
            </div>

            {/* recent sites — real photos */}
            <div className="mt-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-clay">On the ground — recent sites</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {[
                  { src: "/images/photos/WTP_THIMPU_BHUTAN.jpeg", label: "WTP — Thimphu, Bhutan · 0.5 MLD" },
                  { src: "/images/photos/STP_HOTEL_RADISSON_ALIBAUG.jpeg", label: "STP — Radisson, Alibaug" },
                  { src: "/images/photos/HOTEL_TAJ_BLUE_DIAMOND_PUNE.jpeg", label: "STP — Taj Blue Diamond, Pune" },
                  { src: "/images/photos/MONROVIA_AGRO_FOODS.jpeg", label: "ETP — Monrovia Agro, Pune" },
                ].map((p) => (
                  <div key={p.src} className="overflow-hidden rounded-2xl border border-forest/10 bg-white">
                    <img src={p.src} alt={p.label} className="h-28 w-full object-cover" loading="lazy" />
                    <p className="bg-forest px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-lime">{p.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right - form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form onSubmit={submit} className="rounded-[2rem] border border-forest/10 bg-forest p-7 shadow-[0_40px_90px_-40px_rgba(10,31,22,0.55)] md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl font-medium italic text-cream">Request a proposal</p>
                    <p className="mt-1.5 text-[13px] text-mint/65">Opens your mail client with everything pre-filled — or call directly if urgent.</p>
                  </div>
                  <span className="hidden rounded-full bg-lime/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-lime md:inline-block">Avg. reply &lt;24h</span>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <input required value={form.name} onChange={(e) => set("name")(e.target.value)} placeholder="Your name *" className={inputCls} />
                  <input value={form.org} onChange={(e) => set("org")(e.target.value)} placeholder="Organisation / site" className={inputCls} />
                  <input value={form.phone} onChange={(e) => set("phone")(e.target.value)} placeholder="Phone number" className={inputCls} />
                  <input type="email" value={form.email} onChange={(e) => set("email")(e.target.value)} placeholder="Email address" className={inputCls} />
                  <select value={form.service} onChange={(e) => set("service")(e.target.value)} className={inputCls}>
                    {services.map((s) => (
                      <option key={s.id}>{s.title}</option>
                    ))}
                    <option>EIA & Consent Consultancy</option>
                    <option>Gallery / Site Visit Request</option>
                  </select>
                  <textarea value={form.message} onChange={(e) => set("message")(e.target.value)} placeholder="Tell us about your site — KLD/TPD load, waste type, current status, timeline…" rows={5} className={`${inputCls} sm:col-span-2 resize-none`} />
                </div>

                <button type="submit" className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-lime py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-forest transition-all hover:brightness-105">
                  Send enquiry <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="mt-4 text-center text-[11px] tracking-wide text-mint/45">Prefer a call? Dial <a href="tel:02041240503" className="font-bold text-mint">{company.phoneLandline}</a> or <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="font-bold text-mint">{company.phones[0]}</a></p>

                <div className="mt-6 rounded-2xl bg-white/10 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-lime">What happens next?</p>
                  <ol className="mt-2 list-decimal space-y-1 pl-5 text-[13px] leading-relaxed text-mint/70">
                    <li>We acknowledge within one working day with a checklist of site data needed.</li>
                    <li>Site audit & load study (48h for Pune/Mumbai), then tech recommendation.</li>
                    <li>Detailed proposal with drawings outline, capacity and commercial.</li>
                  </ol>
                </div>
              </form>
            </Reveal>

            {/* FAQ */}
            <div className="mt-10">
              <Tag>FAQs</Tag>
              <h3 className="font-display mt-3 text-2xl font-medium text-forest">Before you write — quick answers</h3>
              <div className="mt-6 divide-y divide-forest/10 rounded-[1.6rem] border border-forest/10 bg-white">
                {faqs.map((f) => (
                  <div key={f.q} className="p-6">
                    <p className="font-display text-[15px] font-semibold text-forest">{f.q}</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-clay">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
