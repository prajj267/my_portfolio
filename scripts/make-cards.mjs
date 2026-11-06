// Generates the holo player-card artwork (front/back x light/dark) as SVG.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const out = process.argv[2];
const W = 630, H = 880;
const DISPLAY = "Impact, 'Haettenschweiler', 'Arial Narrow Bold', 'Oswald', sans-serif";
const BODY = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";

const themes = {
  light: { a: "#0f3a8c", b: "#020c26", ink: "#ffffff", soft: "rgba(255,255,255,0.62)", faint: "rgba(255,255,255,0.14)", band: "rgba(4,18,48,0.55)", accent: "#9fc0ff" },
  dark: { a: "#3d3d3d", b: "#000000", ink: "#ffffff", soft: "rgba(255,255,255,0.6)", faint: "rgba(255,255,255,0.12)", band: "rgba(0,0,0,0.6)", accent: "#d4d4d4" },
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function shell(t, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0" stop-color="${t.a}"/>
      <stop offset="1" stop-color="${t.b}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.36" r="0.55">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <pattern id="stripes" width="70" height="${H}" patternUnits="userSpaceOnUse">
      <rect width="35" height="${H}" fill="#ffffff" fill-opacity="0.035"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" rx="34" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" rx="34" fill="url(#stripes)"/>
  <rect width="${W}" height="${H}" rx="34" fill="url(#glow)"/>
  <rect x="22" y="22" width="${W - 44}" height="${H - 44}" rx="22" fill="none" stroke="${t.soft}" stroke-width="3"/>
${body}
</svg>
`;
}

function crest(x, y, s, t) {
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <path d="M0 0h60v38L30 64 0 38z" fill="${t.ink}"/>
    <text x="30" y="36" text-anchor="middle" font-family="${DISPLAY}" font-size="26" fill="${t.b}">PP</text>
  </g>`;
}

function front(t) {
  const stats = [["8.48", "CGPA"], ["3", "PAPERS"], ["1", "TITLE"], ["2", "SHIPPED"]];
  const colW = (W - 120) / 4;
  return shell(t, `
  <text x="58" y="150" font-family="${DISPLAY}" font-size="128" fill="${t.ink}">24</text>
  <text x="62" y="192" font-family="${BODY}" font-weight="700" font-size="22" letter-spacing="4" fill="${t.soft}">FS · RS</text>
  ${crest(W - 118, 58, 1.0, t)}
  <text x="${W - 88}" y="160" text-anchor="middle" font-family="${BODY}" font-weight="700" font-size="16" letter-spacing="3" fill="${t.soft}">KIIT</text>

  <!-- silhouette -->
  <g fill="${t.faint}">
    <circle cx="${W / 2}" cy="330" r="92"/>
    <path d="M${W / 2 - 205} 640 C ${W / 2 - 190} 470, ${W / 2 - 90} 440, ${W / 2} 440 C ${W / 2 + 90} 440, ${W / 2 + 190} 470, ${W / 2 + 205} 640 Z"/>
  </g>
  <text x="${W / 2}" y="400" text-anchor="middle" font-family="${DISPLAY}" font-size="150" fill="${t.ink}" fill-opacity="0.9">PP</text>

  <!-- name band -->
  <rect x="22" y="600" width="${W - 44}" height="258" fill="${t.band}"/>
  <text x="${W / 2}" y="648" text-anchor="middle" font-family="${BODY}" font-weight="700" font-size="24" letter-spacing="10" fill="${t.accent}">PRAJJWAL</text>
  <text x="${W / 2}" y="740" text-anchor="middle" font-family="${DISPLAY}" font-size="104" letter-spacing="4" fill="${t.ink}">PATEL</text>
  <line x1="60" y1="762" x2="${W - 60}" y2="762" stroke="${t.soft}" stroke-width="2"/>
  ${stats
    .map(
      ([v, l], i) => `<g transform="translate(${60 + colW * i + colW / 2} 0)">
    <text y="808" text-anchor="middle" font-family="${DISPLAY}" font-size="40" fill="${t.ink}">${v}</text>
    <text y="834" text-anchor="middle" font-family="${BODY}" font-weight="700" font-size="14" letter-spacing="2" fill="${t.soft}">${l}</text>
  </g>`
    )
    .join("\n  ")}`);
}

function back(t) {
  const rows = [
    ["CLUB", "KIIT, Bhubaneswar"],
    ["POSITION", "Full Stack · Research"],
    ["HOME", "Kakori, Uttar Pradesh"],
    ["STACK", "Next.js · TypeScript · SQL"],
    ["RESEARCH", "UAV swarms · IIT Patna"],
    ["HONOURS", "ICDCIT Hackathon 2025"],
  ];
  return shell(t, `
  ${crest(W / 2 - 45, 64, 1.5, t)}
  <text x="${W / 2}" y="205" text-anchor="middle" font-family="${DISPLAY}" font-size="58" letter-spacing="3" fill="${t.ink}">PLAYER PROFILE</text>
  <text x="${W / 2}" y="240" text-anchor="middle" font-family="${BODY}" font-weight="700" font-size="18" letter-spacing="6" fill="${t.soft}">SEASON 2026 · NO. 24</text>
  ${rows
    .map(
      ([k, v], i) => `<g transform="translate(60 ${300 + i * 82})">
    <rect width="${W - 120}" height="66" rx="12" fill="${t.faint}"/>
    <text x="22" y="28" font-family="${BODY}" font-weight="700" font-size="14" letter-spacing="3" fill="${t.accent}">${k}</text>
    <text x="22" y="54" font-family="${BODY}" font-weight="700" font-size="22" fill="${t.ink}">${esc(v)}</text>
  </g>`
    )
    .join("\n  ")}
  <text x="${W / 2}" y="822" text-anchor="middle" font-family="${BODY}" font-weight="700" font-size="16" letter-spacing="4" fill="${t.soft}">TAP TO FLIP BACK</text>`);
}

for (const [name, t] of Object.entries(themes)) {
  writeFileSync(join(out, `front-${name}.svg`), front(t));
  writeFileSync(join(out, `back-${name}.svg`), back(t));
}
console.log("wrote 4 cards to", out);
