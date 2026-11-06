import Link from "next/link";
import { navLinks, profile } from "@/lib/data";

export default function SiteFooter({ base = "" }: { base?: "" | "/" }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-name">Prajjwal Patel</Link>
          <p>Full stack developer &amp; researcher · No. {profile.number}</p>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <span className="footer-head">Sections</span>
          {navLinks.map((l) => (
            <a key={l.href} href={`${base}${l.href}`}>{l.label}</a>
          ))}
        </nav>

        <div className="footer-col">
          <span className="footer-head">Contact</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.phoneHref}>{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>

        <div className="footer-col">
          <span className="footer-head">Resume</span>
          <a href={profile.resumeTech} target="_blank" rel="noopener">Tech (PDF)</a>
          <a href={profile.resumeResearch} target="_blank" rel="noopener">Research (PDF)</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Prajjwal Patel</span>
        <a href={`${base}#top`}>Back to top ↑</a>
      </div>
    </footer>
  );
}
