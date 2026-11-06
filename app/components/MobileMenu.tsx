"use client";

import { useEffect, useState } from "react";

type Item = { href: string; label: string };

export default function MobileMenu({
  links,
  contactHref,
  email,
  phone,
  phoneHref,
}: {
  links: Item[];
  contactHref: string;
  email: string;
  phone: string;
  phoneHref: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 760 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className={`burger${open ? " is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open} onClick={close}>
        <nav className="mobile-panel" aria-label="Mobile" onClick={(e) => e.stopPropagation()}>
          <ul>
            {links.map((l, i) => (
              <li key={l.href} style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}>
                <a href={l.href} onClick={close} tabIndex={open ? 0 : -1}>
                  <span className="mm-num">{String(i + 1).padStart(2, "0")}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary mm-cta" href={contactHref} onClick={close} tabIndex={open ? 0 : -1}>
            Sign me
          </a>
          <div className="mm-contact">
            <a href={`mailto:${email}`} tabIndex={open ? 0 : -1}>{email}</a>
            <a href={phoneHref} tabIndex={open ? 0 : -1}>{phone}</a>
          </div>
        </nav>
      </div>
    </>
  );
}
