"use client";

import { useEffect } from "react";

/** Marks the nav link for the section currently in view with aria-current. */
export default function ScrollSpy() {
  useEffect(() => {
    const links = [...document.querySelectorAll<HTMLAnchorElement>('.nav .nav-link a[href^="#"]')];
    const targets: { a: HTMLAnchorElement; section: Element }[] = [];
    links.forEach((a) => {
      const el = document.getElementById(a.hash.slice(1));
      if (el) targets.push({ a, section: el.closest("section") ?? el });
    });
    if (!targets.length || !("IntersectionObserver" in window)) return;

    const visible = new Map<Element, number>();
    const update = () => {
      let best: Element | null = null;
      let bestRatio = 0;
      visible.forEach((ratio, el) => {
        if (ratio > bestRatio) {
          best = el;
          bestRatio = ratio;
        }
      });
      targets.forEach(({ a, section }) => {
        if (section === best) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target, e.isIntersecting ? e.intersectionRatio : 0));
        update();
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );
    targets.forEach(({ section }) => io.observe(section));
    return () => io.disconnect();
  }, []);

  return null;
}
