/**
 * Renders text as Grade 1 Braille cells: what the BrailleWise device
 * physically raises in pins. Raised dots are filled, flat positions are faint.
 *
 * Dot numbering per cell:  1 4
 *                          2 5
 *                          3 6
 */
const ALPHABET: Record<string, number[]> = {
  a: [1], b: [1, 2], c: [1, 4], d: [1, 4, 5], e: [1, 5], f: [1, 2, 4], g: [1, 2, 4, 5], h: [1, 2, 5],
  i: [2, 4], j: [2, 4, 5], k: [1, 3], l: [1, 2, 3], m: [1, 3, 4], n: [1, 3, 4, 5], o: [1, 3, 5],
  p: [1, 2, 3, 4], q: [1, 2, 3, 4, 5], r: [1, 2, 3, 5], s: [2, 3, 4], t: [2, 3, 4, 5], u: [1, 3, 6],
  v: [1, 2, 3, 6], w: [2, 4, 5, 6], x: [1, 3, 4, 6], y: [1, 3, 4, 5, 6], z: [1, 3, 5, 6],
};

const DOT = { 1: [0, 0], 2: [0, 1], 3: [0, 2], 4: [1, 0], 5: [1, 1], 6: [1, 2] } as const;

export default function BrailleCells({ text }: { text: string }) {
  const chars = text.toLowerCase().split("").filter((c) => ALPHABET[c]);
  const step = 13; // distance between dots
  const cellW = step * 2 + 14; // cell width incl. gap
  const pad = 14;
  const width = pad * 2 + chars.length * cellW - 14;
  const height = pad * 2 + step * 3 + 20;

  return (
    <svg
      className="braille"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={`"${text}" written in Braille, the way the BrailleWise device raises it in pins`}
    >
      {chars.map((ch, i) => {
        const x0 = pad + i * cellW + 6;
        const raised = ALPHABET[ch];
        return (
          <g key={i}>
            {([1, 2, 3, 4, 5, 6] as const).map((d) => {
              const [cx, cy] = DOT[d];
              const on = raised.includes(d);
              return (
                <circle
                  key={d}
                  className={on ? "braille-on" : "braille-off"}
                  cx={x0 + cx * step}
                  cy={pad + 6 + cy * step}
                  r={on ? 4.6 : 3}
                />
              );
            })}
            <text className="braille-letter" x={x0 + step / 2} y={height - pad + 4} textAnchor="middle">
              {ch.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
