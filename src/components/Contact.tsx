import {
  ArrowUpRight,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { company, services } from "../data/site";
import { Link } from "../router";
import { Reveal, SectionHeading } from "./ui";

const contactRows = [
  {
    icon: MapPin,
    label: "Registered Office",
    value: company.address,
    href: undefined as string | undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: `${company.phoneLandline} · ${company.phones.join(" / ")}`,
    href: `tel:${company.phoneLandline.replace(/-/g, "")}`,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: Globe,
    label: "Website",
    value: company.website,
    href: `https://${company.website}`,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    phone: "",
    service: services[0].title,
    message: "",
  });

  const set = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Plant Enquiry — ${form.service} · ${form.org || form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Organisation: ${form.org}`,
      `Phone: ${form.phone}`,
      `Interested in: ${form.service}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const inputCls =
    "w-full rounded-2xl border border-forest/15 bg-white/70 px-5 py-3.5 text-[14px] text-ink placeholder:text-clay/60 outline-none transition-all focus:border-leaf focus:bg-white focus:shadow-[0_0_0_4px_rgba(46,125,83,0.12)]";

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="dot-grid-dark absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-6">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-6">
            <SectionHeading
              tag="Contact"
              title={
                <>
                  Let’s engineer your{" "}
                  <em className="text-leaf">next plant</em>
                </>
              }
              copy="Annual O&M contracts, turnkey projects, consent consultancy or a feasibility study — the 3R team responds within one working day."
            />

            <div className="mt-10 divide-y divide-forest/8">
              {contactRows.map((row, i) => (
                <Reveal key={row.label} delay={0.06 * i}>
                  <div className="group flex items-start gap-4 py-4">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest text-lime transition-transform duration-500 group-hover:rotate-6">
                      <row.icon size={17} strokeWidth={1.9} />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-clay">
                        {row.label}
                      </p>
                      {row.href ? (
                        <a
                          href={row.href}
                          className="link-underline mt-0.5 block text-[15px] font-semibold text-forest"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-[15px] font-semibold text-forest">
                          {row.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <form
                onSubmit={submit}
                className="rounded-[2rem] border border-forest/10 bg-forest p-7 shadow-[0_40px_90px_-40px_rgba(10,31,22,0.55)] md:p-10"
              >
                <p className="font-display text-2xl font-medium italic text-cream">
                  Request a proposal
                </p>
                <p className="mt-1.5 text-[13px] text-mint/65">
                  Opens your mail client with everything pre-filled.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => set("name")(e.target.value)}
                    placeholder="Your name *"
                    className={inputCls}
                  />
                  <input
                    value={form.org}
                    onChange={(e) => set("org")(e.target.value)}
                    placeholder="Organisation / site"
                    className={inputCls}
                  />
                  <input
                    value={form.phone}
                    onChange={(e) => set("phone")(e.target.value)}
                    placeholder="Phone number"
                    className={inputCls}
                  />
                  <select
                    value={form.service}
                    onChange={(e) => set("service")(e.target.value)}
                    className={inputCls}
                  >
                    {services.map((s) => (
                      <option key={s.id}>{s.title}</option>
                    ))}
                  </select>
                  <textarea
                    value={form.message}
                    onChange={(e) => set("message")(e.target.value)}
                    placeholder="Tell us about your site — KLD load, waste type, timeline…"
                    rows={4}
                    className={`${inputCls} sm:col-span-2 resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-lime py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-forest transition-all duration-300 hover:brightness-105 hover:shadow-[0_16px_40px_-12px_rgba(201,241,88,0.45)]"
                >
                  Send enquiry
                  <Send
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <p className="mt-4 text-center text-[11px] tracking-wide text-mint/45">
                  Prefer a call? Dial{" "}
                  <a href="tel:02041240503" className="font-bold text-mint">
                    {company.phoneLandline}
                  </a>{" "}
                  or{" "}
                  <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="font-bold text-mint">
                    {company.phones[0]}
                  </a>
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */

export function Footer() {
  return (
    <footer className="noise relative overflow-hidden bg-ink pb-10 pt-20">
      <div className="dot-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-6">
        {/* logo - centered */}
        <Reveal>
          <Link to="/" className="group mx-auto flex justify-center">
            <span className="inline-flex items-center justify-center rounded-[1.6rem] bg-white p-2.5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
              <img
                src="/images/LOGOFINAL.png"
                alt="3R Waste Management logo"
                className="h-14 w-auto object-contain md:h-16"
                loading="lazy"
              />
            </span>
          </Link>
        </Reveal>
        {/* giant wordmark */}
        <Reveal>
          <Link to="/" className="group mt-8 block text-center">
            <p className="font-display text-[clamp(4rem,13vw,11rem)] font-bold leading-none tracking-tight">
              <span className="text-cream transition-colors duration-500 group-hover:text-lime">
                3R
              </span>{" "}
              <span className="text-outline italic">waste</span>{" "}
              <span className="text-cream">mgmt</span>
              <span className="text-lime">.</span>
            </p>
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-mint/10 pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-lime">
              {company.mantra}
            </p>
            <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-mint/65">
              {company.name} — a Government-registered environmental management
              organisation on the PMC panel. Designing, manufacturing and
              operating treatment infrastructure since{" "}
              {company.established}.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-mint/50">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["Clients", "/clients"],
                ["Gallery", "/gallery"],
                ["Founder", "/founder"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-cream/80 transition-colors hover:text-lime"
                  >
                    {label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-mint/50">
              Reach us
            </p>
            <ul className="mt-4 space-y-2.5 text-[13.5px] leading-relaxed text-cream/75">
              <li>{company.address}</li>
              <li className="font-semibold text-cream">
                {company.phoneLandline} · {company.phones.join(" / ")}
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="link-underline font-semibold text-lime"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-mint/10 pt-7">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-mint/45">
            <span className="inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-lg bg-white p-1">
              <img src="/images/LOGOFINAL.png" alt="3R logo" className="h-full w-full object-contain" loading="lazy" />
            </span>
            © 2006–2026 {company.name} · {company.city}
          </p>
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-mint/45">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            {company.website}
          </p>
        </div>
      </div>
    </footer>
  );
}
