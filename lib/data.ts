export const profile = {
  firstName: "Prajjwal",
  lastName: "Patel",
  number: "24",
  position: "Full Stack Developer · Researcher",
  club: "KIIT, Bhubaneswar",
  homeGround: "Kakori, Uttar Pradesh, India",
  bio: "I build production software and research how autonomous drone swarms recover and coordinate. I've shipped a live store for a paying client and implemented UAV swarm algorithms at IIT Patna. B.Tech CS at KIIT, and a poet off the pitch.",
  availability: "Open to internships in full stack engineering and AI/ML research",
  email: "pprajjwal2@gmail.com",
  phone: "+91 63064 24579",
  phoneHref: "tel:+916306424579",
  github: "https://github.com/prajj267",
  linkedin: "https://www.linkedin.com/in/prajjwal-patel-5642b7318",
  resumeTech: "/resume/Prajjwal_Patel_Resume_Tech.pdf",
  resumeResearch: "/resume/Prajjwal_Patel_Resume_Research.pdf",
};

export const navLinks = [
  { href: "#season", label: "Season" },
  { href: "#highlights", label: "Highlights" },
  { href: "#tactics", label: "Tactics" },
  { href: "#formation", label: "Formation" },
  { href: "#captaincy", label: "Armband" },
];

export const stats = [
  { value: "3", label: "Manuscripts" },
  { value: "1", label: "Hackathon win" },
  { value: "2", label: "Products shipped" },
];

// Oldest first; the page reverses it so the most recent role leads.
export const career = [
  {
    club: "IIT Patna",
    role: "Research & Full Stack Development Intern",
    period: "May 2026 – Jul 2026",
    place: "Patna, Bihar",
    tag: "Research stint",
    points: [
      "Designed, built and deployed the official lab website (HTML, CSS, JavaScript) on a PostgreSQL database powering members, projects, publications and news.",
      "Implemented and evaluated UAV swarm recovery algorithms alongside graduate researchers, contributing to 3 manuscripts in preparation.",
    ],
  },
  {
    club: "NSS, KIIT",
    role: "Content Writing Lead",
    period: "Apr 2026 – Present",
    place: "Bhubaneswar, Odisha",
    tag: "Captain",
    points: [
      "Leads a team of volunteer writers for NSS publications and campus outreach.",
      "Writes event reports and social media content for NSS activities. Joined as a Content Writer and volunteer in Sep 2025.",
    ],
  },
  {
    club: "FloraWish",
    role: "Web Developer",
    period: "May 2026 – Present",
    place: "Client project",
    tag: "Free agent",
    points: [
      "Built and deployed florawish.in, a live e-commerce store for a small business selling handmade bouquets and crochet gifts.",
      "Product catalogue on a PostgreSQL data layer with the Next.js App Router and TypeScript; SEO-optimised pages on Vercel with a custom domain.",
    ],
  },
];

export type Highlight = {
  name: string;
  year: string;
  /** The outcome, stated plainly: the "final score" of the project. */
  result: string;
  resultKind: "live" | "won";
  stack: string[];
  link: { label: string; href: string };
  visual: { kind: "image"; src: string; alt: string; url: string } | { kind: "braille"; text: string };
  summary: string;
  points: string[];
  /** How a request/document flows through the system, in order. */
  pipeline: string[];
};

export const highlights: Highlight[] = [
  {
    name: "FloraWish",
    year: "2026 – now",
    result: "Live, serving a paying client",
    resultKind: "live",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
    link: { label: "Visit florawish.in", href: "https://www.florawish.in" },
    visual: {
      kind: "image",
      src: "/projects/florawish.jpg",
      alt: "FloraWish storefront: handcrafted pipe-cleaner bouquets, keychains and flower pots",
      url: "florawish.in",
    },
    summary:
      "An e-commerce store for a small business selling handmade bouquets and crochet gifts. I built it end to end and it takes real orders.",
    points: [
      "Product catalogue on a PostgreSQL data layer with the Next.js App Router.",
      "SEO-optimised pages, deployed on Vercel with a custom domain.",
    ],
    pipeline: ["Shopper visits florawish.in", "Next.js App Router pages", "PostgreSQL product catalogue", "Served from Vercel"],
  },
  {
    name: "BrailleWise",
    year: "2025",
    result: "Won the ICDCIT Hackathon 2025",
    resultKind: "won",
    stack: ["FastAPI", "Python", "Arduino", "JavaScript"],
    link: { label: "View the code on GitHub", href: "https://github.com/prajj267/sihh" },
    visual: { kind: "braille", text: "BrailleWise" },
    summary:
      "Upload a document and a physical device spells it out in raised Braille pins. Built in a team against entries from multiple institutions.",
    points: [
      "Built the web frontend and the FastAPI endpoints for uploads and queries, wired to a teammate's RAG backend.",
      "Arduino serial integration, so the Braille output physically moves the pins.",
    ],
    pipeline: ["Document upload", "FastAPI endpoints", "RAG backend", "Braille binary output", "Arduino over serial", "Raised pins"],
  },
];

export const research = [
  {
    code: "CHORUS",
    title: "Coalition Health-Aware Orchestrated Recovery of UAV Swarms",
    venue: "Conference",
    role: "Led implementation",
    summary:
      "Coordinated multi-coalition recovery over a shared UAV pool; evaluated recovery welfare, blocking pairs and runtime across 40 recovery epochs.",
    pos: { x: 22, y: 22 },
  },
  {
    code: "RIPPLE",
    title: "Health-Aware Coalition Recovery via Cascade-Coupled Resource Reallocation",
    venue: "Transactions",
    role: "Led implementation",
    summary:
      "Cascade-aware recovery under concurrent degradation; validated donor-cascade elimination and migration-cost reduction.",
    pos: { x: 50, y: 50 },
  },
  {
    code: "UpdraftNet",
    title: "Cooperative Urban Updraft Mapping for Energy-Aware UAV Delivery Swarms",
    venue: "Conference",
    role: "Simulation & evaluation",
    summary:
      "Cooperative updraft mapping for energy-aware routing; 60 Monte Carlo trials on cruise-energy savings and map coverage time.",
    pos: { x: 78, y: 22 },
  },
];

// Grouped by what each line does, so the football labels stay readable.
export const formation = [
  { line: "Attack", note: "Frontend", players: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { line: "Midfield", note: "Backend", players: ["Node.js", "FastAPI", "Python"] },
  { line: "Defence", note: "Data", players: ["PostgreSQL", "SQL", "NumPy", "pandas", "Matplotlib"] },
  { line: "Keeper", note: "Systems & hardware", players: ["C", "C++", "Arduino"] },
];

export const bench = ["Git", "GitHub", "Vercel", "VS Code"];

export const captaincy = [
  { title: "Content Writing Lead", org: "NSS, KIIT", detail: "Apr 2026 – Present" },
  { title: "Entrepreneurship Domain Lead", org: "E Labs", detail: "Feb 2026 – Present" },
  { title: "Drafting Lead & Anchor", org: "KYMIC, KIIT SCE", detail: "Anchor since Jan 2026, Drafting Lead since Jun 2026" },
  { title: "ICDCIT Hackathon Winner", org: "BrailleWise", detail: "2025" },
];
