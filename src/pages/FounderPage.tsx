import {
  ArrowUpRight,
  Award,
  Briefcase,
  Calendar,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Users,
  Building2,
  Droplets,
  Recycle,
  Quote,
  Sparkles,
  BookOpen,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import { Reveal, SectionHeading, Tag } from "../components/ui";
import { Link } from "../router";
import { company } from "../data/site";

export default function FounderPage() {
  return (
    <main className="bg-cream">
      <PageHeader
        eyebrow="Founder — one person, one standard"
        title="Vikramsinha Deshmukh"
        highlight="Founder, 3R Waste Management"
        copy="Environmental & Agriculture professional — 20+ years building water, wastewater and solid-waste systems that actually run. One accountable founder from drawing to daily O&M."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Founder", href: "" },
        ]}
        stats={[
          { value: "20+ yrs", label: "In the field" },
          { value: "50+", label: "Waste systems built" },
          { value: "25+", label: "STP / ETP plants" },
          { value: "2010", label: "Founded 3R" },
        ]}
      />

      {/* quick jump */}
      <div className="mx-auto max-w-7xl px-5 pt-8 md:px-6 md:pt-10">
        <div className="flex flex-wrap gap-2">
          {[
            ["Profile", "#profile"],
            ["Employment", "#employment"],
            ["Professional work", "#professional"],
            ["Other work", "#other"],
            ["Training", "#training"],
            ["Awards", "#awards"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full border border-forest/15 bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-forest transition-colors hover:border-forest hover:bg-forest hover:text-lime"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Profile hero */}
      <section id="profile" className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-16">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* left — photo card */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-parchment">
                  <img
                    src="/images/Vikramsinha-Deshmukh.jpeg"
                    alt="Vikramsinha Deshmukh — Founder, 3R Waste Management"
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-lime px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-forest">
                      <span className="h-1.5 w-1.5 rounded-full bg-forest" /> Founder & Director
                    </div>
                    <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-cream">
                      Vikramsinha Deshmukh
                    </h2>
                    <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.16em] text-mint/80">
                      Environmental & Agriculture Professional
                    </p>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest text-lime">
                        <Calendar size={16} />
                      </span>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-clay">Date of Birth</p>
                        <p className="text-[14px] font-semibold text-forest">20 September 1975</p>
                        <p className="text-[12px] text-clay">Age 47 (as per biodata) · 20+ years in field</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest text-lime">
                        <Mail size={16} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-clay">Email</p>
                        <a href="mailto:vikramdeshmukh102@gmail.com" className="break-all text-[14px] font-semibold text-forest hover:text-leaf">
                          vikramdeshmukh102@gmail.com
                        </a>
                        <p className="text-[12px] text-clay">Also: {company.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest text-lime">
                        <MapPin size={16} />
                      </span>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-clay">Contact Address</p>
                        <p className="text-[13px] font-semibold leading-relaxed text-forest">Office No 24, “C” Wing, 5th Floor, KK Market, Dhankawadi, Pune — 411043</p>
                        <p className="mt-1 text-[13px] font-semibold text-moss">020-41240503 · 9850139390</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <a href="tel:+919850139390" className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-4 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-lime hover:bg-pine">
                      <Phone size={14} /> Call
                    </a>
                    <a href="mailto:vikramdeshmukh102@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/15 bg-white px-4 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-forest hover:border-forest">
                      <Mail size={14} /> Email
                    </a>
                  </div>

                  <div className="mt-6 rounded-2xl bg-mint/15 p-5">
                    <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-moss">
                      <GraduationCap size={14} className="text-leaf" /> Education
                    </p>
                    <ul className="mt-3 space-y-3 text-[13px] leading-relaxed text-forest">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                        <span>
                          <span className="font-semibold">M.Sc. (Environment)</span> — Dept. of Environmental Science, Pune University, Pune
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                        <span>
                          <span className="font-semibold">B.Sc. (Agriculture)</span> — College of Agriculture, Dr. P.D.K.V., Akola, Maharashtra
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* quote */}
            <Reveal delay={0.1}>
              <div className="mt-6 rounded-[1.6rem] bg-ink p-7 text-cream">
                <Quote size={20} className="text-lime" />
                <p className="font-display mt-4 text-[18px] font-medium leading-relaxed">
                  “Working for betterment of agriculture & environment through own firm, NGO & CBO — pollution control with water, wastewater and solid-waste systems that stay compliant, daily.”
                </p>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-mint/60">— Vikramsinha Deshmukh, 47 · 20+ years</p>
              </div>
            </Reveal>
          </div>

          {/* right — narrative + employment */}
          <div className="lg:col-span-7">
            <SectionHeading
              tag="About the founder"
              title={
                <>
                  One accountable person — <em className="text-leaf">from drawing to O&M</em>
                </>
              }
              copy="Vikramsinha Deshmukh (47) is an Environmental & Agriculture professional working through his own firms, NGOs and Community Based Organisations. For two decades he has designed and operated decentralised treatment systems — ETP, STP, WTP and compost/bio systems — and generated direct employment for 100+ persons."
            />

            <Reveal delay={0.1}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Droplets, label: "Wastewater plants", value: "25+", sub: "ETP / STP built & run" },
                  { icon: Recycle, label: "Composting systems", value: "50+", sub: "Decentralised OWC" },
                  { icon: Building2, label: "Water plants", value: "10+", sub: "WTP / RO / softener" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-forest/10 bg-white p-5">
                    <s.icon size={18} className="text-leaf" />
                    <p className="font-display mt-3 text-2xl font-semibold text-forest">{s.value}</p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-moss">{s.label}</p>
                    <p className="text-[12px] text-clay">{s.sub}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Employment record */}
            <div id="employment" className="mt-10">
              <Tag>Employment Record</Tag>
              <h3 className="font-display mt-4 text-2xl font-semibold text-forest">Firms built by the founder</h3>
              <div className="relative mt-6">
                <div className="absolute left-[18px] top-2 h-[calc(100%-16px)] w-px bg-forest/10 md:left-[20px]" />
                <div className="space-y-4">
                  {[
                    { year: "2014", title: "Director, Samasta Life Science Pvt. Ltd.", note: "Life science enterprise — current directorship", icon: Building2 },
                    { year: "2010", title: "Owner, 3R Waste Management", note: "Environmental management — ETP / STP / WTP / solid waste · Pune", icon: Leaf },
                    { year: "2004", title: "Owner, Prakruti Agro Enviro Tech, Pune", note: "Agro-enviro systems — genesis of 3R practice", icon: Sparkles },
                  ].map((e) => (
                    <Reveal key={e.year} delay={0.05}>
                      <div className="relative flex gap-4 rounded-2xl border border-forest/10 bg-white p-5 pl-12 md:pl-14">
                        <span className="absolute left-0 top-5 grid h-10 w-10 place-items-center rounded-full border-2 border-lime bg-forest font-mono text-[11px] font-bold text-lime">
                          {e.year.slice(2)}
                        </span>
                        <div className="absolute left-[14px] top-5 h-2 w-2 rounded-full bg-lime md:left-[16px]" />
                        <div className="flex-1">
                          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-leaf">{e.year}</p>
                          <h4 className="font-display text-[17px] font-semibold leading-tight text-forest">{e.title}</h4>
                          <p className="mt-1 text-[13px] leading-relaxed text-clay">{e.note}</p>
                        </div>
                        <e.icon size={18} className="hidden text-clay/40 sm:block" />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Associated orgs */}
            <div className="mt-10">
              <Tag>Associated Organizations</Tag>
              <h3 className="font-display mt-4 text-2xl font-semibold text-forest">NGO · CBO · Rural development</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Founder Director, Rui Farmers Producer Co. Ltd.", year: "2018", tag: "CBO for farmers — 450+ small & marginal farmers", icon: Users },
                  { title: "Member, Paani Foundation", year: "2017", tag: "Water conservation — Rui, Satara", icon: Droplets },
                  { title: "Member, Rui Ekta Vikas Manch", year: "2016", tag: "Rural sustainable development — Rui, Satara", icon: HeartHandshake },
                  { title: "Member, Bhartiya Yuva Shakti Trust", year: "2008", tag: "First-generation entrepreneurship — Pune", icon: Briefcase },
                  { title: "Life Member, Satpuda Foundation", year: "2004", tag: "Forest & wildlife — Amravati / Nagpur", icon: Leaf },
                  { title: "Founder, Prakruti for Agriculture & Environment", year: "2002", tag: "NGO — Pune, Maharashtra", icon: Sparkles },
                ].map((o) => (
                  <div key={o.title} className="rounded-2xl border border-forest/10 bg-white p-5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint/20 text-moss">
                        <o.icon size={16} />
                      </span>
                      <span className="rounded-full bg-forest px-2.5 py-1 text-[11px] font-bold text-lime">{o.year}</span>
                    </div>
                    <h4 className="font-display mt-3 text-[14px] font-semibold leading-tight text-forest">{o.title}</h4>
                    <p className="mt-1 text-[12px] leading-relaxed text-clay">{o.tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional work */}
      <section id="professional" className="bg-ink py-16 md:py-20">
        <div className="dot-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            dark
            tag="Professional Work Experience"
            title={
              <>
                Plants that <em className="text-lime">stay running</em>
              </>
            }
            copy="From Tata and Taj to PMC and the Royal Government of Bhutan — same founder-led team, same logbook discipline."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Bhutan — 0.5 MLD WTP, Thimphu",
                year: "2022",
                desc: "Designed & commissioned 0.5 MLD Water Treatment Plant for Royal Government of Bhutan — Industrial Area, Thimphu.",
                icon: Droplets,
              },
              {
                title: "50+ Decentralised compost systems",
                year: "2010–2022",
                desc: "Supplied, installed & operated food-waste composting systems for societies, hotels, canteens & food malls around Pune / Nashik / Mumbai.",
                icon: Recycle,
              },
              {
                title: "25+ Wastewater plants — ETP / STP",
                year: "2010–2022",
                desc: "Designed, developed, installed & operated plants for food processing, slaughter house, 5/4-star hotels, hospitals & laundry wastewater.",
                icon: Building2,
              },
              {
                title: "10+ Water plants — WTP / RO / Softener",
                year: "—",
                desc: "Decentralised water treatment for domestic & industrial use — WTP, softener, RO.",
                icon: Droplets,
              },
              {
                title: "PMC — 1 MT Bio-Mechanical compost",
                year: "2008",
                desc: "Established & operated 1 MT bio-mechanical composting plant for Pune Municipal Corporation.",
                icon: Users,
              },
              {
                title: "Industry partners & distributors",
                year: "2000–2007",
                desc: "Sudarshan Chemicals (microbial cultures) · Excel Industries (OWC & cultures) · VDS Chemicals · Rallis India — field demonstration & marketing; 100+ direct jobs generated via turnkey projects for Tata, Taj, Radisson, Cummins, Phoenix Mall, Sahyadri Hospitals & PMC.",
                icon: Briefcase,
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={0.06 * i}>
                <div className="flex h-full flex-col rounded-[1.6rem] border border-mint/10 bg-forest/40 p-6 backdrop-blur">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/15 text-lime">
                      <item.icon size={18} />
                    </span>
                    <span className="rounded-full bg-lime px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-forest">{item.year}</span>
                  </div>
                  <h4 className="font-display mt-4 text-[16px] font-semibold leading-tight text-cream">{item.title}</h4>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-mint/70">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* EIA / compliance strip */}
          <Reveal delay={0.2}>
            <div className="mt-8 rounded-[1.6rem] bg-lime p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-display text-xl font-semibold leading-tight text-forest">Environmental compliance — MOEF & State PCBs</p>
                  <p className="mt-1 max-w-2xl text-[13px] leading-relaxed text-forest/70">
                    Consultancy for Environmental Compliance, monitoring, consent to establish / operate for various establishments — lab-grade analysis and MPCB / CPCB / MoEF liaison.
                  </p>
                </div>
                <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-forest px-6 py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-lime">
                  Discuss compliance <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other work + training */}
      <section id="other" className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              tag="Other Work Experience"
              title={
                <>
                  Soil, water & <em className="text-leaf">village</em>
                </>
              }
              copy="Beyond treatment plants — agriculture extension, water and rural development that keeps villages self-reliant."
            />
            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Sustainable agriculture & direct marketing",
                  desc: "With Vasantdada Sugar Institute, Dept. of Agriculture, Maharashtra Co-op Development Corp., KVK — organic agri inputs and farmer-to-consumer direct marketing, even during COVID-19 lockdown.",
                },
                {
                  title: "Majhi Vasundara Abhiyan — Govt. of Maharashtra",
                  year: "2021",
                  desc: "Environment & climate change — Panchmahabhuta (Bhumi, Jal, Vayu, Agni, Akash) for sustainable development.",
                },
                {
                  title: "Rui Farmers Producer Co. Ltd. — 450+ farmers",
                  year: "2020",
                  desc: "CBO formation — Agri input supply and collection, cleaning, grading & value addition of Jowar, Rajma.",
                },
                {
                  title: "Paani Foundation — Water Cup",
                  year: "2018",
                  desc: "Mission to overcome village water crisis — won 1st prize at Satyameva Jayate Water Cup, Rui, Satara.",
                },
                {
                  title: "Tree plantation & green belt",
                  year: "2016",
                  desc: "Village-level green belt development.",
                },
                {
                  title: "Environmental awareness via ‘Prakruti’ NGO",
                  year: "2003 →",
                  desc: "Agriculture extension & environmental awareness since 2003.",
                },
              ].map((r, i) => (
                <Reveal key={r.title} delay={0.04 * i}>
                  <div className="rounded-2xl border border-forest/10 bg-white p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-display text-[16px] font-semibold leading-tight text-forest">{r.title}</h4>
                      {r.year && <span className="shrink-0 rounded-full bg-mint/20 px-2.5 py-1 text-[11px] font-bold text-moss">{r.year}</span>}
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-clay">{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div id="training" className="lg:col-span-5">
            <div className="rounded-[2rem] border border-forest/10 bg-white p-6 md:p-8">
              <Tag>Training & Conferences</Tag>
              <h3 className="font-display mt-4 text-2xl font-semibold text-forest">Continuous learning</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "International Conference on Sustainable Energy & Environment — IISF, Mumbai (2000)",
                  "In-plant Training — Thane Municipal Corp. / Leaf Biotech — Bioconversion of solid waste (2000)",
                  "Agri-clinics & Agri-business Centres — Agri Dept. GOI, MANAGE, NABARD (2002)",
                  "Regional Agriculture Extension Management Training — Kolhapur (2004)",
                  "National Conference on Waste Management & Waste Water Treatment — Hyderabad (2010)",
                  "Radio Talk — AIR Satara (Akashwani) on Farmers Producer Organisation",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-[13px] leading-relaxed text-forest/80">
                    <BookOpen size={16} className="mt-0.5 shrink-0 text-leaf" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div id="awards" className="mt-8 rounded-2xl bg-forest p-6 text-cream">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-lime">
                  <Award size={14} /> Awards & Certifications
                </p>
                <ul className="mt-4 space-y-2.5 text-[13px] leading-relaxed text-mint/80">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" /> NCC Certificates ‘A’, ‘B’ & ‘C’ · NSS Certificate
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" /> “Environmental Entrepreneur” — The Prince’s Youth Business International, London
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" /> “Environmentalist Award 2022” — AETDS International Conference, Pokhara, Nepal
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-lime px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-forest">NCC A·B·C</span>
                <span className="rounded-full bg-forest px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-lime">NSS</span>
                <span className="rounded-full border border-forest/15 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-forest">Environmentalist 2022</span>
              </div>
            </div>

            {/* contact CTA */}
            <Reveal delay={0.1}>
              <div className="mt-6 rounded-[1.6rem] border border-forest/10 bg-parchment p-6">
                <p className="font-display text-lg font-semibold text-forest">Invite the founder to your site</p>
                <p className="mt-2 text-[13px] leading-relaxed text-clay">Site audit, load study & tech recommendation — same person who signs the O&M logbook.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-lime">
                    Request founder visit <ArrowUpRight size={14} />
                  </Link>
                  <a href="tel:+919850139390" className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-5 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-forest">
                    <Phone size={14} /> 98501 39390
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* closing band */}
      <section className="bg-forest py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-6">
          <p className="text-center font-display text-lg font-medium text-cream md:text-left">
            Founder-led — <span className="text-lime">designs, builds & operates what he consults for.</span>
          </p>
          <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-forest">
            See founder’s plants <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
