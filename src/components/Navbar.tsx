import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "../data/site";
import { cn } from "../utils/cn";
import { Link, usePath, isActive } from "../router";

const links = [
  { label: "Home", href: "/", num: "01" },
  { label: "Services", href: "/services", num: "02" },
  { label: "Projects", href: "/projects", num: "03" },
  { label: "Clients", href: "/clients", num: "04" },
  { label: "Gallery", href: "/gallery", num: "05" },
  { label: "Founder", href: "/founder", num: "06" },
  { label: "Contact", href: "/contact", num: "07" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function Logo({ dark, onNavigate, compact }: { dark: boolean; onNavigate?: () => void; compact?: boolean }) {
  return (
    <Link to="/" onClick={onNavigate} className="group flex items-center gap-3">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-white shadow-[0_8px_20px_-12px_rgba(0,0,0,0.5)] ring-1 ring-forest/10 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-[1.03] sm:h-11 sm:w-11 sm:rounded-2xl">
        <img
          src="/images/LOGOFINAL.png"
          alt="3R Waste Management logo"
          className="h-full w-full object-contain p-1.5"
          loading="eager"
        />
      </span>
      <span className={cn("leading-tight", compact && "hidden sm:block")}>
        <span
          className={cn(
            "block font-display text-[15px] font-semibold tracking-tight sm:text-[17px]",
            dark ? "text-cream" : "text-forest"
          )}
        >
          3R Waste Management
        </span>
        <span
          className={cn(
            "block text-[9px] font-bold uppercase tracking-[0.28em] sm:text-[10px]",
            dark ? "text-mint/70" : "text-leaf"
          )}
        >
          Reduce · Recycle · Reuse
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePath();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const h = () => setOpen(false);
    window.addEventListener("routechange", h as any);
    return () => window.removeEventListener("routechange", h as any);
  }, []);

  useEffect(() => setOpen(false), [path]);

  // body lock + esc + resize close
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Utility strip — desktop only */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-30 hidden overflow-hidden bg-forest text-cream/85 transition-all duration-500 lg:block",
          scrolled ? "h-0" : "h-9"
        )}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[11px] font-semibold tracking-wide">
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            Environmental Management · Est. December 2006 · PMC Empanelled
          </p>
          <div className="flex items-center gap-6">
            <a
              href="tel:02041240503"
              className="flex items-center gap-1.5 transition-colors hover:text-lime"
            >
              <Phone size={12} /> {company.phoneLandline}
            </a>
            <a
              href="tel:+919850139390"
              className="flex items-center gap-1.5 transition-colors hover:text-lime"
            >
              <Phone size={12} /> +91 98501 39390
            </a>
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-lime">
              {company.emailDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className={cn(
          "fixed inset-x-0 z-30 transition-all duration-500",
          scrolled ? "top-0" : "top-0 lg:top-9"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between transition-all duration-500",
            // when scrolled: premium pill with side margins on mobile, full pill on desktop
            scrolled
              ? "mx-3 mt-3 h-[60px] rounded-2xl border border-forest/10 bg-mint/90 px-4 shadow-[0_18px_40px_-20px_rgba(10,31,22,0.35),0_1px_0_rgba(255,255,255,0.6)_inset] backdrop-blur-xl sm:mx-4 sm:h-16 sm:rounded-full sm:px-5 md:px-6 lg:mx-6 xl:mx-auto"
              : // when top: transparent, taller, with safe padding
                "h-[68px] bg-transparent px-4 sm:h-20 sm:px-5 md:px-6"
          )}
        >
          <Logo dark={!scrolled} />

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const active = isActive(path, l.href);
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[13px] font-bold uppercase tracking-[0.14em] transition-colors",
                    active
                      ? scrolled
                        ? "bg-forest text-lime"
                        : "bg-cream text-forest"
                      : scrolled
                        ? "text-forest/70 hover:bg-forest/5 hover:text-forest"
                        : "text-cream/80 hover:bg-cream/10 hover:text-cream"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/contact"
              className={cn(
                "group hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] transition-all duration-300 sm:inline-flex md:px-6",
                scrolled
                  ? "bg-forest text-lime shadow-[0_8px_20px_-12px_rgba(10,31,22,0.6)] hover:bg-pine hover:shadow-[0_12px_24px_-12px_rgba(10,31,22,0.5)]"
                  : "bg-lime text-forest shadow-[0_8px_20px_-12px_rgba(201,241,88,0.5)] hover:brightness-[1.03] hover:shadow-[0_12px_24px_-12px_rgba(201,241,88,0.6)]"
              )}
            >
              <span className="hidden sm:inline">Get Consultation</span>
              <span className="sm:hidden">Contact</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={cn(
                "relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border text-[0px] transition-all duration-300 active:scale-95 lg:hidden",
                scrolled
                  ? "border-forest/10 bg-forest text-lime shadow-[0_8px_20px_-12px_rgba(10,31,22,0.4)] hover:bg-pine"
                  : "border-cream/20 bg-cream/10 text-cream backdrop-blur-md hover:bg-cream/15 hover:border-cream/30",
                open && scrolled && "bg-forest text-lime",
                open && !scrolled && "bg-cream text-forest border-cream"
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.22, ease: EASE }}
                    className="grid place-items-center"
                  >
                    <X size={20} strokeWidth={2.2} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.22, ease: EASE }}
                    className="grid place-items-center"
                  >
                    <Menu size={20} strokeWidth={2} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile premium drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-[6px] lg:hidden"
              aria-hidden="true"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%", opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="fixed inset-y-0 right-0 z-50 flex w-[92%] max-w-[420px] flex-col overflow-hidden rounded-l-[2rem] border-l border-forest/10 bg-cream shadow-[-24px_0_60px_-20px_rgba(10,31,22,0.45)] lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-forest/8 px-6 py-5 sm:px-7">
                <Logo dark={false} onNavigate={() => setOpen(false)} compact />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full bg-forest text-lime transition-colors hover:bg-pine active:scale-95"
                >
                  <X size={18} strokeWidth={2.2} />
                </button>
              </div>

              {/* Nav links - premium large */}
              <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-7">
                <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-clay">
                  <span className="h-px flex-1 bg-forest/10" />
                  Navigate
                  <span className="h-px flex-1 bg-forest/10" />
                </div>
                <nav className="flex flex-col">
                  {links.map((l, i) => {
                    const active = isActive(path, l.href);
                    return (
                      <motion.div
                        key={l.href}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.06 * i, duration: 0.5, ease: EASE }}
                      >
                        <Link
                          to={l.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "group flex items-center justify-between gap-4 rounded-2xl px-4 py-4 transition-all sm:px-5",
                            active
                              ? "bg-forest text-cream shadow-[0_10px_24px_-14px_rgba(10,31,22,0.5)]"
                              : "hover:bg-forest/[0.04] active:bg-forest/[0.06]"
                          )}
                        >
                          <span className="flex items-baseline gap-4">
                            <span
                              className={cn(
                                "font-mono text-[11px] font-bold tracking-[0.14em]",
                                active ? "text-lime" : "text-clay/60 group-hover:text-leaf"
                              )}
                            >
                              {l.num}
                            </span>
                            <span
                              className={cn(
                                "font-display text-[26px] font-medium leading-none tracking-tight sm:text-[28px]",
                                active ? "text-cream" : "text-forest group-hover:text-leaf"
                              )}
                            >
                              {l.label}
                            </span>
                          </span>
                          <span
                            className={cn(
                              "grid h-10 w-10 place-items-center rounded-full border text-forest transition-all duration-300",
                              active
                                ? "border-lime bg-lime text-forest"
                                : "border-forest/10 bg-white group-hover:border-leaf group-hover:bg-leaf group-hover:text-white"
                            )}
                          >
                            <ArrowUpRight
                              size={16}
                              strokeWidth={2.2}
                              className={cn(
                                "transition-transform duration-300",
                                active ? "" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              )}
                            />
                          </span>
                        </Link>
                        {i !== links.length - 1 && <div className="mx-4 h-px bg-forest/[0.06] sm:mx-5" />}
                      </motion.div>
                    );
                  })}
                </nav>

                {/* CTA card inside drawer */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38, duration: 0.6, ease: EASE }}
                  className="mt-6 overflow-hidden rounded-[1.6rem] bg-forest p-6 text-cream"
                >
                  <p className="inline-flex items-center gap-2 rounded-full bg-lime/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-lime">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" /> PMC Empanelled · Est. 2006
                  </p>
                  <p className="font-display mt-4 text-[22px] font-medium leading-tight sm:text-2xl">
                    Let’s engineer your <em className="italic text-lime">next plant</em>
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-mint/70">
                    Turnkey STP · ETP · WTP · Solid Waste — one team from drawing to daily O&M.
                  </p>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="mt-5 flex items-center justify-center gap-2 rounded-full bg-lime py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-forest transition-all hover:brightness-105 active:scale-[0.98]"
                  >
                    Get Consultation <ArrowUpRight size={16} />
                  </Link>
                </motion.div>
              </div>

              {/* Drawer footer — contact */}
              <div className="border-t border-forest/8 bg-parchment/50 px-6 py-5 sm:px-7">
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href={`tel:${company.phoneLandline.replace(/-/g, "")}`}
                    className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 ring-1 ring-forest/5 transition-colors hover:ring-forest/10"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-forest text-lime">
                      <Phone size={16} />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-clay">Call us</span>
                      <span className="block text-[14px] font-bold leading-tight text-forest">{company.phoneLandline}</span>
                    </span>
                    <ArrowUpRight size={14} className="ml-auto text-clay/40" />
                  </a>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`mailto:${company.email}`}
                      className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 ring-1 ring-forest/5 transition-colors hover:ring-forest/10"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-mint/20 text-moss">
                        <Mail size={14} />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[11px] font-bold uppercase tracking-[0.12em] text-clay">Email</span>
                        <span className="block truncate text-[12px] font-semibold text-forest">Mail us</span>
                      </span>
                    </a>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(company.address)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 ring-1 ring-forest/5 transition-colors hover:ring-forest/10"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-mint/20 text-moss">
                        <MapPin size={14} />
                      </span>
                      <span>
                        <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-clay">Visit</span>
                        <span className="block text-[12px] font-semibold text-forest">Bibwewadi</span>
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-clay/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" /> Pune, Maharashtra · Since 2006
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
