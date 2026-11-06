import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { navLinks, profile } from "@/lib/data";

/** `base` is "" on the home page (plain #anchors) and "/" elsewhere (links back home). */
export default function SiteNav({ base = "" }: { base?: "" | "/" }) {
  const links = navLinks.map((l) => ({ ...l, href: `${base}${l.href}` }));

  return (
    <header className="nav">
      <Link href="/" className="crest" aria-label="Prajjwal Patel, home">
        <span>PP</span>
      </Link>
      <nav aria-label="Main">
        <ul>
          {links.map((l) => (
            <li className="nav-link" key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li><ThemeToggle /></li>
          <li className="nav-cta-item"><a href={`${base}#contact`} className="nav-cta">Sign me</a></li>
          <li className="nav-burger">
            <MobileMenu links={links} contactHref={`${base}#contact`} email={profile.email} phone={profile.phone} phoneHref={profile.phoneHref} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
