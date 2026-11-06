import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const description =
  "Prajjwal Patel: B.Tech CS student at KIIT, full stack developer (Next.js, TypeScript, PostgreSQL) and UAV swarm researcher with IIT Patna. Open to internships.";

// Set NEXT_PUBLIC_SITE_URL to the live domain when deploying (used for share-image URLs).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b3d91" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// Runs before paint so the saved (or system) theme applies without a flash.
const themeScript = `(function(){document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
