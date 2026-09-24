import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, MapPin, Filter, ArrowUpRight, Camera, Grid3X3 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { Reveal, Tag } from "../components/ui";
import { Link } from "../router";

type GalleryItem = {
  id: string;
  title: string;
  location: string;
  category: "STP" | "ETP" | "WTP" | "Solid Waste" | "Site Work" | "Completed";
  image: string;
};

const gallery: GalleryItem[] = [
  {
    id: "g1",
    title: "0.5 MLD Water Treatment Plant",
    location: "Thimphu, Bhutan",
    category: "WTP",
    image: "/images/photos/WTP_THIMPU_BHUTAN.jpeg",
  },
  {
    id: "g2",
    title: "Sewage Treatment Plant — Aerial View",
    location: "Hotel Radisson, Alibaug",
    category: "STP",
    image: "/images/photos/STP_HOTEL_RADISSON_ALIBAUG.jpeg",
  },
  {
    id: "g3",
    title: "STP at Phoenix Mall",
    location: "Pune",
    category: "STP",
    image: "/images/photos/STP_PHEONIXHALL.jpeg",
  },
  {
    id: "g4",
    title: "STP — Radisson Karjat, Mumbai",
    location: "Radisson, Karjat — Mumbai",
    category: "STP",
    image: "/images/photos/STP_RADISSON_KARJAT_MUMBAI.jpeg",
  },
  {
    id: "g5",
    title: "Effluent Treatment — Laundry Line",
    location: "Hotel Radisson",
    category: "ETP",
    image: "/images/photos/ETP_LAUNDRY_HOTEL_RADISSON.jpeg",
  },
  {
    id: "g6",
    title: "Hospital ETP",
    location: "Sahyadri Hospital, Karad",
    category: "ETP",
    image: "/images/photos/ETP_SAHYDARI.jpeg",
  },
  {
    id: "g7",
    title: "ETP — Tasty Bite, Daund",
    location: "Tasty Bite, Daund, Pune",
    category: "ETP",
    image: "/images/photos/TASTY_BITE_ETP_DAUND_PUNE.jpeg",
  },
  {
    id: "g8",
    title: "STP — Hotel Taj Blue Diamond",
    location: "Pune",
    category: "STP",
    image: "/images/photos/HOTEL_TAJ_BLUE_DIAMOND_PUNE.jpeg",
  },
  {
    id: "g9",
    title: "RO & Filtration Skid — Monrovia Agro Foods",
    location: "Monrovia Agro Foods, Pune",
    category: "WTP",
    image: "/images/photos/MONROVIA_AGRO_FOODS.jpeg",
  },
  {
    id: "g10",
    title: "Solid Waste — Composting Facility",
    location: "Pune — Generic Solid Waste",
    category: "Solid Waste",
    image: "/images/photos/page_06_image_03.jpeg",
  },
  {
    id: "g11",
    title: "Slaughter House ETP Tanks",
    location: "Monrovia, Pune",
    category: "ETP",
    image: "/images/photos/MONROVIA_AGRO_FOODS.jpeg",
  },
  {
    id: "g12",
    title: "Completed STP — Cerebrum IT Park",
    location: "Pune",
    category: "Completed",
    image: "/images/photos/STP_PHEONIXHALL.jpeg",
  },
  // additional — mix of real and stock for variety
  {
    id: "g13",
    title: "Biogas Dome — Solid Waste to Energy",
    location: "Hyatt Regency, Pune",
    category: "Solid Waste",
    image: "/images/photos/page_06_image_03.jpeg",
  },
  {
    id: "g14",
    title: "Taj Blue Diamond — STP Terrace",
    location: "Pune",
    category: "STP",
    image: "/images/photos/HOTEL_TAJ_BLUE_DIAMOND_PUNE.jpeg",
  },
  {
    id: "g15",
    title: "Clarifier Tank — Commissioning",
    location: "HSBC Software, Pune",
    category: "STP",
    image: "/images/photos/STP_RADISSON_KARJAT_MUMBAI.jpeg",
  },
  {
    id: "g16",
    title: "Piping & Instrumentation",
    location: "Tasty Bites, Daund",
    category: "Site Work",
    image: "/images/photos/TASTY_BITE_ETP_DAUND_PUNE.jpeg",
  },
  {
    id: "g17",
    title: "Vermicompost Beds — Solid Waste",
    location: "Exide Industries, Taloja",
    category: "Solid Waste",
    image: "/images/photos/page_06_image_03.jpeg",
  },
  {
    id: "g18",
    title: "Control Panel & Automation — WTP Thimphu",
    location: "WTP Site, Bhutan",
    category: "WTP",
    image: "/images/photos/WTP_THIMPU_BHUTAN.jpeg",
  },
];

const cats = ["All", "STP", "ETP", "WTP", "Solid Waste", "Site Work", "Completed"] as const;

export default function GalleryPage() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [cols, setCols] = useState<2 | 3>(3);

  const filtered = active === "All" ? gallery : gallery.filter((g) => g.category === active);

  return (
    <main className="bg-cream">
      <PageHeader
        eyebrow="Gallery — on the ground"
        title="Built, commissioned,"
        highlight="operating"
        copy="From Thimphu’s 0.5 MLD WTP to Mumbai hospitality STPs — eighteen images from plants that were engineered, erected and run by the same 3R team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "" },
        ]}
        stats={[
          { value: "18", label: "Sites photographed" },
          { value: "6", label: "Categories" },
          { value: "2006 →", label: "Archive" },
          { value: "25+", label: "Live plants to visit" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-6">
        {/* controls */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Camera size={16} className="text-leaf" />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-clay">Filter by type</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setCols(2)} className={`hidden rounded-full p-2 md:grid ${cols === 2 ? "bg-forest text-lime" : "bg-white text-forest border border-forest/10"}`}>
              <Grid3X3 size={16} className="rotate-45" />
            </button>
            <button onClick={() => setCols(3)} className={`hidden rounded-full p-2 md:grid ${cols === 3 ? "bg-forest text-lime" : "bg-white text-forest border border-forest/10"}`}>
              <Grid3X3 size={16} />
            </button>
            <Link to="/contact" className="ml-2 inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-lime">
              Request site visit <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] transition-all ${active === c ? "border-forest bg-forest text-lime" : "border-forest/15 bg-white text-forest hover:border-forest"}`}
            >
              {c} {c !== "All" && <span className="ml-1 opacity-60">· {gallery.filter((g) => g.category === c).length}</span>}
            </button>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-2 text-[12px] font-semibold text-clay">
          <Filter size={14} /> Showing {filtered.length} images {active !== "All" && `— ${active}`}
        </div>

        {/* masonry */}
        <motion.div layout className={`mt-8 grid gap-4 ${cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} grid-cols-1 sm:grid-cols-2`}>
          {filtered.map((item, i) => (
            <motion.button
              layout
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.03 * i }}
              onClick={() => setLightbox(item)}
              className={`group relative overflow-hidden rounded-[1.6rem] text-left ${i % 5 === 0 ? "md:row-span-2" : ""} ${i % 5 === 0 ? "min-h-[380px]" : "min-h-[280px]"}`}
            >
              <img src={item.image} alt={item.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <span className="absolute left-4 top-4 rounded-full bg-lime px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-forest">{item.category}</span>
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-cream/15 text-cream opacity-0 backdrop-blur transition-all group-hover:opacity-100">
                <ZoomIn size={16} />
              </span>
              <div className="absolute inset-x-4 bottom-4">
                <p className="font-display text-lg font-medium leading-tight text-cream">{item.title}</p>
                <p className="mt-1 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mint/90">
                  <MapPin size={11} className="text-lime" /> {item.location}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-16 rounded-[1.6rem] border border-dashed border-forest/15 p-10 text-center">
            <p className="font-display text-xl text-forest">No images in this category yet.</p>
            <p className="mt-2 text-[13px] text-clay">Try “All” or request a live site visit.</p>
          </div>
        )}

        {/* info strip */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 border border-forest/10">
              <Tag>Visit a live plant</Tag>
              <p className="font-display mt-3 text-xl font-semibold text-forest">See operation, not just photos</p>
              <p className="mt-2 text-[13px] leading-relaxed text-clay">We can arrange a walkthrough at a running STP/ETP/OWC near Pune/Mumbai — logbooks, outputs and operator on site.</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-leaf">Request visit <ArrowUpRight size={14} /></Link>
            </div>
            <div className="rounded-3xl bg-forest p-6 text-cream">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-lime">Archive note</p>
              <p className="font-display mt-3 text-xl font-semibold">Every image is from a 3R-built site</p>
              <p className="mt-2 text-[13px] leading-relaxed text-mint/60">No stock photography here — only plants we engineered, erected and operated. Site names and locations verified.</p>
            </div>
            <div className="rounded-3xl bg-lime p-6 text-forest">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-forest/60">Have a site to document?</p>
              <p className="font-display mt-3 text-xl font-semibold">We’ll photograph your handover</p>
              <p className="mt-2 text-[13px] leading-relaxed font-medium">Drone, ground and plant-room coverage included at commissioning — useful for MPCB files and investor updates.</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.12em]">Book handover shoot <ArrowUpRight size={14} /></Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] grid place-items-center bg-ink/85 p-4 backdrop-blur-sm" onClick={() => setLightbox(null)}>
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[1.8rem] bg-ink shadow-2xl"
            >
              <button onClick={() => setLightbox(null)} className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-cream text-forest shadow-lg">
                <X size={18} />
              </button>
              <img src={lightbox.image} alt={lightbox.title} className="max-h-[72vh] w-full object-contain bg-ink" />
              <div className="bg-cream px-6 py-5 md:px-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="rounded-full bg-forest px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-lime">{lightbox.category}</span>
                    <h3 className="font-display mt-3 text-xl font-semibold leading-tight text-forest md:text-2xl">{lightbox.title}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-[13px] font-semibold text-moss"><MapPin size={14} /> {lightbox.location}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setLightbox(null)} className="rounded-full border border-forest/15 px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-forest">Close</button>
                    <Link to="/contact" onClick={() => setLightbox(null)} className="rounded-full bg-forest px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-lime">Enquire for similar</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
