import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "../data/site";
import { cn } from "../utils/cn";

const links = [
  { label: "Profile", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

function Logo({ dark }: { dark: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3">
      <span className="relative grid h-11 w-11 place-items-center">
        <span
          className={cn(
            "absolute inset-0 rounded-2xl transition-transform duration-500 group-hover:rotate-12",
            dark ? "bg-lime" : "bg-forest"
          )}
        />
        <span
          className={cn(
            "relative font-display text-lg font-bold tracking-tight",
            dark ? "text-forest" : "text-lime"
          )}
        >
          3R
        </span>
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-[17px] font-semibold tracking-tight",
            dark ? "text-cream" : "text-forest"
          )}
        >
          3R Waste Management
        </span>
        <span
          className={cn(
            "block text-[10px] font-bold uppercase tracking-[0.28em]",
            dark ? "text-mint/70" : "text-leaf"
          )}
        >
          Reduce · Recycle · Reuse
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Utility strip */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 hidden overflow-hidden bg-forest text-cream/85 transition-all duration-500 lg:block",
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
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 z-50 transition-all duration-500",
          scrolled ? "top-0" : "top-0 lg:top-9"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 md:px-6",
            scrolled
              ? "mt-3 h-16 rounded-full border border-forest/10 bg-cream/85 px-5 shadow-[0_18px_40px_-20px_rgba(10,31,22,0.35)] backdrop-blur-xl md:px-6 lg:mx-6 xl:mx-auto"
              : "h-20 bg-transparent"
          )}
        >
          <Logo dark={!scrolled} />

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "link-underline text-[13px] font-bold uppercase tracking-[0.14em] transition-colors",
                  scrolled
                    ? "text-forest/80 hover:text-forest"
                    : "text-cream/80 hover:text-cream"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={cn(
                "group hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] transition-all duration-300 md:inline-flex",
                scrolled
                  ? "bg-forest text-cream hover:bg-pine"
                  : "bg-lime text-forest hover:brightness-105"
              )}
            >
              Get Consultation
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className={cn(
                "grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden",
                scrolled
                  ? "border-forest/15 text-forest"
                  : "border-cream/25 text-cream"
              )}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-24 z-40 rounded-3xl border border-forest/10 bg-cream p-6 shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col divide-y divide-forest/8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-center justify-between py-4 font-display text-xl font-medium text-forest"
                >
                  {l.label}
                  <ArrowUpRight size={18} className="text-leaf" />
                </motion.a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-forest py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-lime"
            >
              Get Consultation <ArrowUpRight size={15} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
