import Reveal from "./components/Reveal";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import HeroBoard from "./components/HeroBoard";
import PlayerHoloCard from "./components/PlayerHoloCard";
import TacticsBoard from "./components/TacticsBoard";
import ScrollSpy from "./components/ScrollSpy";
import Icon from "./components/Icon";
import BrailleCells from "./components/BrailleCells";
import LedBoard from "./components/LedBoard";
import {
  profile,
  stats,
  career,
  highlights,
  research,
  formation,
  bench,
  captaincy,
} from "@/lib/data";

function SectionHead({ kicker, title, id }: { kicker: string; title: string; id: string }) {
  return (
    <header className="section-head reveal" id={id}>
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <Reveal />
      <ScrollSpy />

      <SiteNav />

      <main id="top">
        {/* ── HERO ─────────────────────────────── */}
        <section className="hero">
          <svg className="hero-chalk" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <line x1="1040" y1="-10" x2="1040" y2="910" />
            <circle cx="1040" cy="470" r="210" />
            <circle className="spot" cx="1040" cy="470" r="6" />
            <path d="M 0 880 H 1440" />
            <path d="M 0 250 H 170 V 690 H 0" />
            <path d="M 170 380 A 110 110 0 0 1 170 560" />
          </svg>

          <div className="hero-inner">
            <div className="hero-text">
              <span className="pill">Season 2026 · No. {profile.number} · KIIT CSE</span>
              <h1>
                <span className="first">{profile.firstName}</span>
                <span className="last">{profile.lastName}</span>
              </h1>
              <HeroBoard />
              <p className="hero-bio">{profile.bio}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={profile.resumeTech} target="_blank" rel="noopener">
                  Resume · Tech
                </a>
                <a className="btn btn-ghost" href={profile.resumeResearch} target="_blank" rel="noopener">
                  Resume · Research
                </a>
              </div>
              <div className="hero-contact">
                <a href={`mailto:${profile.email}`}>
                  <Icon name="mail" />
                  {profile.email}
                </a>
                <a href={profile.phoneHref}>
                  <Icon name="phone" />
                  {profile.phone}
                </a>
              </div>
            </div>

            <aside aria-label="Player card">
              <PlayerHoloCard />
            </aside>
          </div>
        </section>

        {/* ── SCOREBOARD ─────────────────────────── */}
        <section className="scoreboard" aria-label="Key stats">
          {stats.map((s) => (
            <div className="score reveal" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </section>

        {/* ── CAREER ─────────────────────────────── */}
        <section className="section">
          <SectionHead id="season" kicker="Career" title="The Season So Far" />
          <div className="career reveal">
            <div className="career-head" aria-hidden="true">
              <span>Season</span>
              <span>Club and role</span>
              <span>What I did</span>
            </div>
            <ol className="career-list">
              {[...career].reverse().map((c) => {
                const current = c.period.includes("Present");
                return (
                  <li className={`career-row${current ? " is-current" : ""}`} key={c.club}>
                    <div className="career-when">
                      <span className="career-period">{c.period.replace("Present", "now")}</span>
                      <span className="career-status">
                        {current && <span className="career-live" aria-label="Current role" />}
                        {c.tag}
                      </span>
                    </div>
                    <div className="career-club">
                      <h3>{c.club}</h3>
                      <p>
                        {c.role}
                        <span>{c.place}</span>
                      </p>
                    </div>
                    <ul className="career-notes">
                      {c.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* ── HIGHLIGHTS ─────────────────────────── */}
        <section className="section section-tint">
          <SectionHead id="highlights" kicker="Projects" title="Match Highlights" />
          <div className="reports">
            {highlights.map((h) => (
              <article className="report reveal" key={h.name}>
                <figure className="report-visual">
                  {h.visual.kind === "image" ? (
                    <div className="browser">
                      <div className="browser-bar" aria-hidden="true">
                        <span className="browser-dots"><i /><i /><i /></span>
                        <span className="browser-url">{h.visual.url}</span>
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={h.visual.src} alt={h.visual.alt} width={799} height={506} loading="lazy" decoding="async" />
                    </div>
                  ) : (
                    <div className="braille-panel">
                      <BrailleCells text={h.visual.text} />
                    </div>
                  )}
                </figure>

                <div className="report-body">
                  <span className="report-year">{h.year}</span>
                  <h3>{h.name}</h3>
                  <p className={`report-result is-${h.resultKind}`}>
                    {h.resultKind === "won" ? <Icon name="trophy" size={18} /> : <span className="live-dot" aria-hidden="true" />}
                    {h.result}
                  </p>
                  <p className="report-summary">{h.summary}</p>
                  <ul className="report-notes">
                    {h.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <p className="report-stack">
                    Built with {h.stack.slice(0, -1).join(", ")} and {h.stack[h.stack.length - 1]}
                  </p>
                  <a className="report-link" href={h.link.href} target="_blank" rel="noopener noreferrer">
                    {h.link.label}
                    <Icon name="external" size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── PITCH-SIDE LED BOARD ─────────────────── */}
        <LedBoard
          rows={[
            ["Open to internships", "Full stack developer", "Next.js", "TypeScript", "PostgreSQL", "FastAPI", "React"],
            ["UAV swarm research", "IIT Patna", "KIIT CSE", "ICDCIT hackathon winner", "florawish.in is live", "3 manuscripts"],
          ]}
        />

        {/* ── TACTICS / RESEARCH ─────────────────── */}
        <section className="section">
          <SectionHead id="tactics" kicker="Research · IIT Patna" title="The Tactics Board" />
          <p className="lead reveal">
            Three manuscripts in preparation on UAV swarm coalition recovery and energy-aware routing,
            written with graduate researchers under faculty mentorship.
          </p>

          <TacticsBoard>
            <svg className="pitch" viewBox="0 0 100 70" preserveAspectRatio="none" aria-hidden="true">
              <rect x="1" y="1" width="98" height="68" />
              <line x1="50" y1="1" x2="50" y2="69" />
              <circle cx="50" cy="35" r="9" />
              <rect x="1" y="18" width="14" height="34" />
              <rect x="85" y="18" width="14" height="34" />
              <path className="run" d="M22 22 Q 36 50 50 50 T 78 22" />
            </svg>
            {research.map((r, i) => (
              <div
                className="marker"
                key={r.code}
                style={{ left: `${r.pos.x}%`, top: `${(r.pos.y / 70) * 100}%` }}
              >
                <span>{i + 1}</span>
                <em className="marker-label">{r.code}</em>
              </div>
            ))}
          </TacticsBoard>

          <div className="papers">
            {research.map((r, i) => (
              <article className="paper reveal" key={r.code}>
                <div className="paper-top">
                  <span className="paper-num">{i + 1}</span>
                  <span className="badge">{r.venue}</span>
                </div>
                <h3>{r.code}</h3>
                <p className="paper-title">{r.title}</p>
                <p>{r.summary}</p>
                <span className="paper-role">{r.role} · Manuscript in preparation</span>
              </article>
            ))}
          </div>
        </section>

        {/* ── FORMATION / SKILLS ─────────────────── */}
        <section className="section section-blue">
          <SectionHead id="formation" kicker="Skills" title="Starting Formation" />
          <div className="formation reveal">
            {formation.map((row) => (
              <div className="f-row" key={row.line}>
                <span className="f-label">{row.line}<em>{row.note}</em></span>
                <div className="f-players">
                  {row.players.map((p) => (
                    <span className="f-player" key={p}>{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bench reveal">
            <span className="bench-label">On the bench</span>
            {bench.map((b) => <span className="chip chip-light" key={b}>{b}</span>)}
          </div>
        </section>

        {/* ── CAPTAINCY ─────────────────────────── */}
        <section className="section">
          <SectionHead id="captaincy" kicker="Leadership & Honours" title="The Armband" />
          <div className="armband reveal">
            <figure className="armband-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/stage.webp"
                alt="Prajjwal speaking on stage with a microphone at an NSS KIIT event"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
              />
              <figcaption>On stage at an NSS KIIT event</figcaption>
            </figure>
            <ul className="honours">
              {captaincy.map((c) => (
                <li className="honour" key={c.title}>
                  <span className="c-mark" aria-hidden="true">C</span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.org}, {c.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CONTACT ─────────────────────────── */}
        <section className="contact" id="contact">
          <div className="contact-inner reveal">
            <figure className="contact-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photos/portrait.webp" alt="Prajjwal Patel in a navy check blazer" width={600} height={900} loading="lazy" decoding="async" />
            </figure>
            <div className="contact-copy">
            <span className="kicker kicker-light">Transfer window open</span>
            <h2>Sign the player.</h2>
            <p>Open to internships in full stack development and AI/ML research.</p>
            <div className="contact-links">
              <a className="btn btn-white" href={`mailto:${profile.email}`}><Icon name="mail" /> {profile.email}</a>
              <a className="btn btn-white" href={profile.phoneHref}><Icon name="phone" /> {profile.phone}</a>
              <a className="btn btn-outline-light" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="btn btn-outline-light" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="contact-resumes">
              <a href={profile.resumeTech} target="_blank" rel="noopener"><Icon name="download" size={16} /> Tech resume</a>
              <a href={profile.resumeResearch} target="_blank" rel="noopener"><Icon name="download" size={16} /> Research resume</a>
            </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
