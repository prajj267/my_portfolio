"use client";

import SplitFlapText from "./reactbits/SplitFlapText";
import { useTheme } from "./useTheme";

const WORDS = ["FULL STACK DEV", "RESEARCHER", "OPEN TO WORK"];

/** Stadium-style flip board under the hero name. */
export default function HeroBoard() {
  const theme = useTheme();
  const dark = theme === "dark";

  return (
    <div className="hero-board">
      <SplitFlapText
        words={WORDS}
        padTo={14}
        fontSize="clamp(17px, 6.2vw, 32px)"
        gap="clamp(3px, 0.5vw, 5px)"
        tileRadius={5}
        flipDuration={0.1}
        stagger={0.04}
        cycleDelay={2600}
        flipsPerChar={6}
        tileColor={dark ? "#f2f2f2" : "#0b3d91"}
        textColor={dark ? "#000000" : "#ffffff"}
        depth={0.6}
        glare={0.35}
        intro
        loop
      />
    </div>
  );
}
