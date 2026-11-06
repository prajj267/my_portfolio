import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const description =
  "Prajjwal Patel: B.Tech CS student at KIIT, full stack developer (Next.js, TypeScript, PostgreSQL) and UAV swarm researcher with IIT Patna. Open to internships.";

// Base URL for share-image links. On Vercel the production domain is detected
// automatically; NEXT_PUBLIC_SITE_URL overrides it (e.g. for a custom domain).
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prajjwal Patel · Full Stack Developer & Researcher",
    template: "%s · Prajjwal Patel",
  },
  description,
  applicationName: "Prajjwal Patel Portfolio",
  authors: [{ name: "Prajjwal Patel", url: "https://github.com/prajj267" }],
  creator: "Prajjwal Patel",
  keywords: [
    "Prajjwal Patel",
    "portfolio",
    "full stack developer",
    "Next.js",
    "TypeScript",
    "KIIT",
    "IIT Patna",
    "UAV swarm research",
    "internship",
  ],
  openGraph: {
    type: "website",
    title: "Prajjwal Patel · Full Stack Developer & Researcher",
    description,
    siteName: "Prajjwal Patel",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajjwal Patel · Full Stack Developer & Researcher",
    description,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

// Runs before paint: dark is the default; a visitor's saved choice (from the toggle) wins.
const themeScript = `(function(){document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:'dark'}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
