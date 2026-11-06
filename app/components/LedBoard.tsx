"use client";

import { useEffect, useRef } from "react";

/**
 * Pitch-side LED advertising board. Rows drift in opposite directions and
 * speed up (and follow the direction) when the page is scrolled, like
 * React Bits' Scroll Velocity, but with no animation library.
 */
export default function LedBoard({ rows, speed = 60 }: { rows: string[][]; speed?: number }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tracks = trackRefs.current.filter((t): t is HTMLDivElement => !!t);
    const offsets = tracks.map(() => 0);
    let width = tracks.map((t) => (t.firstElementChild as HTMLElement | null)?.offsetWidth ?? 0);
    const measure = () => {
      width = tracks.map((t) => (t.firstElementChild as HTMLElement | null)?.offsetWidth ?? 0);
    };
    const ro = new ResizeObserver(measure);
    tracks.forEach((t) => ro.observe(t));

    let raf = 0;
    let last = 0;
    let lastY = window.scrollY;
    let boost = 0; // extra speed from scrolling
    let dir = 1; // flips with scroll direction
    let visible = false;

    const frame = (now: number) => {
      raf = 0;
      if (!visible) return;
      const dt = last ? Math.min(now - last, 64) / 1000 : 0;
      last = now;

      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      if (dt > 0) {
        const v = Math.abs(dy) / dt; // px/s of scrolling
        boost += (Math.min(v / 250, 8) - boost) * (1 - Math.exp(-dt * 6));
        if (dy !== 0) dir = dy > 0 ? 1 : -1;
      }

      tracks.forEach((t, i) => {
        const w = width[i];
        if (!w) return;
        const rowDir = i % 2 === 0 ? -1 : 1;
        offsets[i] += rowDir * dir * speed * (1 + boost) * dt;
        offsets[i] = ((offsets[i] % w) + w) % w; // wrap into [0, w)
        t.style.transform = `translate3d(${-offsets[i]}px,0,0)`;
      });
      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) {
        last = 0;
        lastY = window.scrollY;
        raf = requestAnimationFrame(frame);
      }
    });
    io.observe(root);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, [speed]);

  return (
    <div className="led" ref={rootRef} role="marquee" aria-label={rows.map((r) => r.join(", ")).join(". ")}>
      {rows.map((items, i) => (
        <div className="led-row" key={i} aria-hidden="true">
          <div className="led-track" ref={(el) => { trackRefs.current[i] = el; }}>
            {/* 3 copies so the strip never shows a gap while wrapping */}
            {[0, 1, 2].map((copy) => (
              <span className="led-copy" key={copy}>
                {items.map((item) => (
                  <span className="led-item" key={item}>
                    {item}
                    <i className="led-sep" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
