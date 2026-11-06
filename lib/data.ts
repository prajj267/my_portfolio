export const profile = {
  firstName: "Prajjwal",
  lastName: "Patel",
  number: "24",
  position: "Full Stack Developer · Researcher",
  club: "KIIT, Bhubaneswar",
  homeGround: "Kakori, Uttar Pradesh, India",
  bio: "B.Tech Computer Science student at KIIT (CGPA 8.48). I ship production web apps end to end and do research on UAV swarm coordination with IIT Patna. Interested in AI/ML and full stack development, and I write poetry off the pitch.",
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
  { value: "8.48", label: "CGPA" },
  { value: "3", label: "Manuscripts" },
  { value: "1", label: "Hackathon win" },
  { value: "2", label: "Products shipped" },
];

export const career = [
  {
    club: "IIT Patna",
    role: "Research & Full Stack Development Intern",
    period: "May 2025 – Jul 2025",
    place: "Patna, Bihar",
    tag: "Loan spell",
    points: [
      "Designed, built and deployed the official lab website (HTML, CSS, JavaScript) on a PostgreSQL database powering members, projects, publications and news.",
      "Implemented and evaluated UAV swarm recovery algorithms alongside graduate researchers, contributing to 3 manuscripts in preparation.",
    ],
  },
  {
    club: "KIIT Saathi",
    role: "Web Developer",
    period: "Oct 2025 – Mar 2026",
    place: "Bhubaneswar, Odisha",
    tag: "First team",
    points: [
      "Built a campus map feature and shipped student facility-access features in Node.js for KIIT's student platform.",
      "Led UI/UX improvements across the platform.",
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
      "Writes event reports and social media content for NSS activities. Promoted from Content Writer in Sep 2025.",
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
};

export const highlights: Highlight[] = [
  {
    name: "FloraWish",
    year: "2025 – now",
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

export const formation = [
  { line: "Attack", note: "Frameworks", players: ["React", "Next.js", "Node.js", "FastAPI"] },
  { line: "Midfield", note: "Languages", players: ["TypeScript", "JavaScript", "Python", "C++", "C"] },
  { line: "Defence", note: "Data", players: ["PostgreSQL", "SQL", "NumPy", "pandas"] },
  { line: "Keeper", note: "Version control", players: ["Git"] },
];

export const bench = ["HTML", "CSS", "Matplotlib", "GitHub", "Vercel", "VS Code", "Arduino"];

export const captaincy = [
  { title: "Content Writing Lead", org: "NSS, KIIT", detail: "Apr 2026 – Present" },
  { title: "Entrepreneurship Domain Lead", org: "E Labs", detail: "Domain lead" },
  { title: "Drafting Lead & Anchor", org: "KYMIC", detail: "Drafting & stage" },
  { title: "ICDCIT Hackathon Winner", org: "BrailleWise", detail: "2025" },
];
