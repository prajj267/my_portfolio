"use client";

import { useEffect, useState, type ReactNode } from "react";
import SwarmCursor from "./reactbits/SwarmCursor";
import { useTheme } from "./useTheme";

/**
 * The research "tactics board": a pitch with a particle swarm that follows the
 * cursor and pours around the paper markers (a nod to the UAV swarm research).
 */
export default function TacticsBoard({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 680px), (pointer: coarse)");
    const update = () => setSmall(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="tactics-wrap reveal">
      <div className="tactics">
        <SwarmCursor
          className="tactics-swarm"
          count={small ? 260 : 650}
          size={small ? 2 : 2.4}
          shape="streak"
          color="#ffffff"
          accentColor={theme === "dark" ? "#bdbdbd" : "#9fc0ff"}
          spread={small ? 60 : 85}
          speed={1}
          swirl={0.65}
          tail={0.6}
          trail={0.5}
          targets=".marker"
          idle="roam"
          clickEffect="burst"
          dpr={small ? 1.5 : undefined}
        >
          {children}
        </SwarmCursor>
      </div>
      <p className="tactics-hint">
        <span aria-hidden="true">✦</span> {small ? "Tap the pitch to scatter the swarm" : "Move across the pitch: the swarm follows, click to scatter it"}
      </p>
    </div>
  );
}
