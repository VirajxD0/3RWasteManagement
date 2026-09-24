/* ─────────────────────────────────────────────────────────────
   3R WASTE MANAGEMENT · Company data
   Reduce · Recycle · Reuse
   ───────────────────────────────────────────────────────────── */

export const company = {
  name: "3R Waste Management",
  short: "3R",
  mantra: "Reduce · Recycle · Reuse",
  established: "December 2006",
  field: "Environmental Management",
  address:
    "Office No. 24, ‘C’ Wing, 5th Floor, K.K. Market, Bibwewadi, Pune 411 037",
  city: "Pune, Maharashtra, India",
  phoneLandline: "020-41240503",
  phones: ["+91 98501 39390", "+91 95450 39390"],
  email: "3rwastemanagement@gmail.com",
  emailDisplay: "3rwastemanagement@gmail.com",
  website: "www.3rwastemanagement.com",
  bank: "IDBI, Swargate, Pune",
};

export const heroStats = [
  { value: "2006", label: "Established · Pune" },
  { value: "25+", label: "Clients served" },
  { value: "13+", label: "Flagship plants built" },
  { value: "0.5", label: "MLD WTP · Thimphu" },
];

/* ── Services ──────────────────────────────────────────────── */

export type Service = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  icon: "droplets" | "recycle" | "fileCheck" | "wrench";
  items: { name: string; detail: string; chips?: string[] }[];
};

export const services: Service[] = [
  {
    id: "water",
    index: "01",
    title: "Water & Waste Water Management",
    tagline: "ETP · STP · WTP",
    description:
      "End-to-end engineering of effluent, sewage and water treatment plants — configured around the treatment technology your site actually needs.",
    icon: "droplets",
    items: [
      {
        name: "Effluent Treatment Plant (ETP)",
        detail:
          "Industrial effluent treated through proven process trains for safe discharge and reuse.",
        chips: ["ASP", "UAHSB", "Root Zone"],
      },
      {
        name: "Sewage Treatment Plant (STP)",
        detail:
          "Domestic sewage recovered into water fit for flushing, gardening and cooling towers.",
        chips: ["MBBR", "MBR", "RBC", "ASP"],
      },
      {
        name: "Water Treatment Plant (WTP)",
        detail:
          "Raw water polished to process, potable and boiler-feed standards.",
        chips: ["UF", "RO", "Ozonation"],
      },
    ],
  },
  {
    id: "solid",
    index: "02",
    title: "Solid Waste Management",
    tagline: "Compost · Biogas · Pellets",
    description:
      "Municipal solid waste, organic industrial waste and kitchen waste converted into compost, fuel and energy using the right decomposition technique.",
    icon: "recycle",
    items: [
      {
        name: "Technical Composting Plant",
        detail: "Rapid, mechanised aerobic composting for bulk organic waste.",
        chips: ["Aerobic Composting"],
      },
      {
        name: "Bio Gas Plant",
        detail:
          "Anaerobic decomposition that turns wet waste into clean cooking fuel & energy.",
        chips: ["Anaerobic Decomposition"],
      },
      {
        name: "Vermicomposting Plant",
        detail:
          "Slow, natural conversion of organic matter into rich bio-fertiliser.",
        chips: ["Through Earthworms"],
      },
      {
        name: "Bio Fuel Pelleting Plant",
        detail: "Green biomass densified into high-efficiency fuel pellets.",
        chips: ["Garden Waste", "Agriculture Waste", "Biomass"],
      },
    ],
  },
  {
    id: "eia",
    index: "03",
    title: "EIA & Consent Consultancy",
    tagline: "MPCB · CPCB · MoEF",
    description:
      "Complete statutory guidance for projects — reports and clearances prepared exactly as per MPCB, CPCB and MoEF, New Delhi norms.",
    icon: "fileCheck",
    items: [
      {
        name: "Environmental Impact Assessment (EIA)",
        detail: "Full assessment studies and report preparation for clearance.",
      },
      {
        name: "Environmental Clearance (EC)",
        detail: "End-to-end liaison and documentation for project clearance.",
      },
      {
        name: "Environmental Statement & Audit Report",
        detail: "Annual statements, audits and compliance submissions.",
      },
      {
        name: "Environmental Management Plan (EMP)",
        detail: "Site-specific management plans for varied project types.",
      },
      {
        name: "Monitoring, Testing & Analysis",
        detail: "Environmental monitoring with laboratory-grade analysis.",
      },
    ],
  },
  {
    id: "om",
    index: "04",
    title: "Operation & Maintenance",
    tagline: "STP · ETP · OWC",
    description:
      "Dedicated annual O&M contracts that keep plants compliant, efficient and audit-ready — run by a trained technical team.",
    icon: "wrench",
    items: [
      {
        name: "O&M of STP Plants",
        detail: "Round-the-clock operation of sewage treatment plants.",
      },
      {
        name: "O&M of ETP Plants",
        detail: "Trained operators for effluent treatment plants.",
      },
      {
        name: "O&M of OWC Plants",
        detail: "Organic waste converters kept running at full efficiency.",
      },
    ],
  },
];

/* ── Turnkey delivery pipeline ─────────────────────────────── */

export const processSteps = [
  { step: "01", title: "Design", detail: "Process engineering & load study" },
  { step: "02", title: "Drawing", detail: "Civil, MEP & P&ID drawings" },
  { step: "03", title: "Supply", detail: "Manufacture & procurement" },
  { step: "04", title: "Erection", detail: "On-site installation" },
  { step: "05", title: "Testing", detail: "Hydraulic & process trials" },
  { step: "06", title: "Commissioning", detail: "Handover at design output" },
  { step: "07", title: "O & M", detail: "Annual operation contracts" },
];

/* ── Salient features ──────────────────────────────────────── */

export const features = [
  {
    title: "Annual O&M Contracts",
    detail:
      "3R offers annual operation & maintenance contracts across every field it builds for.",
  },
  {
    title: "True Turnkey Delivery",
    detail:
      "Turnkey projects and services executed by a technical, experienced in-house team.",
  },
  {
    title: "Govt. Registered · PMC Panel",
    detail:
      "A registered organisation with Government credentials and empanelment on the PMC panel.",
  },
  {
    title: "Consent & Subsidy Consultancy",
    detail:
      "Consultancy for project proposals, consents and subsidies available from the Government.",
  },
  {
    title: "Efficiency-First Management",
    detail:
      "Services oriented towards better, more efficient day-to-day environmental management.",
  },
  {
    title: "Economical Treatment Systems",
    detail:
      "Treatment systems engineered to stay economical and feasible through their lifecycle.",
  },
];

/* ── Projects gallery ──────────────────────────────────────── */

export type Project = {
  title: string;
  location: string;
  type: string;
  note: string;
  image?: string;
};

const img = {
  bhutan:
    "https://images.pexels.com/photos/32418621/pexels-photo-32418621.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  phoenix:
    "https://images.pexels.com/photos/19281034/pexels-photo-19281034.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  alibaug:
    "https://images.pexels.com/photos/11452356/pexels-photo-11452356.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  karjat:
    "https://images.pexels.com/photos/13016004/pexels-photo-13016004.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  laundry:
    "https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  sahyadri:
    "https://images.pexels.com/photos/18843272/pexels-photo-18843272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  cerebrum:
    "https://images.pexels.com/photos/31403876/pexels-photo-31403876.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  tastybite:
    "https://images.pexels.com/photos/3089681/pexels-photo-3089681.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  taj: "https://images.pexels.com/photos/5532845/pexels-photo-5532845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  hsbc: "https://images.pexels.com/photos/10040001/pexels-photo-10040001.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  monroviaEtp:
    "https://images.pexels.com/photos/17882790/pexels-photo-17882790.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  monroviaRo:
    "https://images.pexels.com/photos/38336747/pexels-photo-38336747.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  pmc: "https://images.pexels.com/photos/20177021/pexels-photo-20177021.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  compost:
    "https://images.pexels.com/photos/28214180/pexels-photo-28214180.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  organic:
    "https://images.pexels.com/photos/6994745/pexels-photo-6994745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

export const aboutImages = {
  primary: img.alibaug,
  secondary: img.compost,
  tertiary: img.organic,
};

export const featuredProjects: Project[] = [
  {
    title: "0.5 MLD Water Treatment Plant",
    location: "Bhutan Industrial Area, Thimphu, Bhutan",
    type: "WTP",
    note: "Designed, supplied & commissioned",
    image: img.bhutan,
  },
  {
    title: "Sewage Treatment Plant",
    location: "Phoenix Mall, Pune",
    type: "STP",
    note: "Modification & operation",
    image: img.phoenix,
  },
  {
    title: "Sewage Treatment Plant",
    location: "Hotel Radisson, Alibaug",
    type: "STP",
    note: "Built & operated by 3R",
    image: img.alibaug,
  },
  {
    title: "Sewage Treatment Plant",
    location: "Radisson, Karjat — Mumbai",
    type: "STP",
    note: "Turnkey execution",
    image: img.karjat,
  },
  {
    title: "Laundry Effluent Treatment Plant",
    location: "Hotel Radisson",
    type: "ETP",
    note: "Laundry effluent recovery",
    image: img.laundry,
  },
  {
    title: "Effluent Treatment Plant",
    location: "Sahyadri Hospital, Karad",
    type: "ETP",
    note: "Hospital effluent management",
    image: img.sahyadri,
  },
];

export const moreProjects: Project[] = [
  {
    title: "STP — Cerebrum IT Park",
    location: "Pune",
    type: "STP",
    note: "IT park sewage treatment",
  },
  {
    title: "ETP — Tastybite",
    location: "Daund, Pune",
    type: "ETP",
    note: "Food industry effluent",
  },
  {
    title: "STP — Hotel Taj Blue Diamond",
    location: "Pune",
    type: "STP",
    note: "Built & operated",
  },
  {
    title: "STP — HSBC Software",
    location: "IT Company",
    type: "STP",
    note: "Built & operated",
  },
  {
    title: "Slaughter House ETP — Monrovia",
    location: "Poultry processing",
    type: "ETP",
    note: "Built & operated",
  },
  {
    title: "RO Plant — Monrovia Agro Foods",
    location: "Pune",
    type: "WTP",
    note: "Reverse osmosis plant",
  },
  {
    title: "Solid Food Waste Treatment Plant",
    location: "Pune Municipal Corporation",
    type: "SWTP",
    note: "Municipal food waste facility",
  },
];

/* ── Clients ───────────────────────────────────────────────── */

export type ClientGroup = {
  category: string;
  icon: string;
  clients: { name: string; scope: string }[];
};

export const clientGroups: ClientGroup[] = [
  {
    category: "Hotels & Hospitality",
    icon: "hotel",
    clients: [
      { name: "Taj Blue Diamond, Pune", scope: "STP — built & operate" },
      { name: "The Westin, Pune", scope: "STP modification" },
      { name: "Hyatt Regency, Pune", scope: "OWC — operate" },
      { name: "Hyatt, Pune", scope: "OWC — operate" },
      { name: "Conrad, Pune", scope: "STP — operation" },
      { name: "Novotel, Pune", scope: "OWC — operate" },
      { name: "J W Marriott", scope: "Waste systems" },
      { name: "Courtyard by Marriott, Mumbai", scope: "STP — operation" },
      { name: "Sun-n-Sand, Mumbai", scope: "STP — under construction" },
      { name: "High Street Phoenix, Lower Parel, Mumbai", scope: "STP" },
      { name: "Vamona Pvt. Ltd. — Phoenix Mall, Pune", scope: "STP modification & operate" },
    ],
  },
  {
    category: "IT & Corporate",
    icon: "building",
    clients: [
      { name: "HSBC Software Development Pvt. Ltd.", scope: "STP — built & operate" },
      { name: "Tata Consultancy Services, Mumbai", scope: "Treatment services" },
      { name: "Tata Consultancy Services, Thane", scope: "Treatment services" },
      { name: "Tata Communications Ltd.", scope: "OWC — operate" },
      { name: "Cummins India Ltd., Kothrud, Pune", scope: "Waste management" },
    ],
  },
  {
    category: "Healthcare",
    icon: "health",
    clients: [
      { name: "Ruby Hall Clinic (Grant Medical Foundation), Pune", scope: "Environmental services" },
      { name: "Dr. Vasantrao Pawar Medical College Hospital, Adgaon, Nashik", scope: "ETP & STP — built, O&M" },
      { name: "Smt. Kashibai Navale Hospital & Medical College, Narhe, Pune", scope: "OWC" },
      { name: "Sahyadri Hospital, Karad", scope: "ETP" },
    ],
  },
  {
    category: "Industry & Manufacturing",
    icon: "factory",
    clients: [
      { name: "Hindustan Petroleum Corporation Ltd. (HPCL), Ballard Estate, Mumbai", scope: "STP — built & operate" },
      { name: "Baramati Taluka Sahakari Doodh Utpadak Sangh, Baramati", scope: "ETP — built & operate" },
      { name: "Tastybites Eatables Ltd., Yawat, Pune", scope: "ETP & RO WTP — built & operate" },
      { name: "Monrovia Agro Foods", scope: "Poultry slaughter house ETP & RO — built & operate" },
      { name: "Exide Industries Ltd., MIDC Taloja, Raigad", scope: "OWC" },
      { name: "M/s Concrete Builders — Morya SRA CHS Ltd., Vashi, Navi Mumbai", scope: "OWC" },
    ],
  },
  {
    category: "Institutions & Government",
    icon: "landmark",
    clients: [
      { name: "National Bank for Agriculture & Rural Development (NABARD)", scope: "Environmental services" },
      { name: "Pune Municipal Corporation (PMC)", scope: "Empanelled — solid waste treatment" },
      { name: "Bhutan Industrial Area, Thimphu, Bhutan", scope: "0.5 MLD WTP" },
    ],
  },
];

export const clientMarquee = [
  "Taj Blue Diamond",
  "Hyatt Regency",
  "J W Marriott",
  "HSBC Software",
  "Cummins India",
  "HPCL",
  "TCS",
  "The Westin",
  "Conrad",
  "Novotel",
  "Ruby Hall Clinic",
  "NABARD",
  "Exide Industries",
  "Tastybites",
  "Tata Communications",
  "Phoenix Mall",
  "Sun-n-Sand",
  "Courtyard Marriott",
  "PMC",
  "Sahyadri Hospital",
];

/* ── Marquee tech strip ────────────────────────────────────── */

export const techStrip = [
  "ETP",
  "STP",
  "WTP",
  "OWC",
  "MBBR",
  "MBR",
  "RBC",
  "ASP",
  "UAHSB",
  "Root Zone",
  "UF",
  "RO",
  "Ozonation",
  "Aerobic Composting",
  "Anaerobic Biogas",
  "Vermicomposting",
  "Bio-Fuel Pellets",
  "EIA & Consent",
];
