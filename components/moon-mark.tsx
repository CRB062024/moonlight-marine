type Crater = { cx: number; cy: number; r: number };

// Hand-placed craters roughly echoing the near side of the Moon.
const craters: Crater[] = [
  { cx: 34, cy: 26, r: 6.2 },
  { cx: 62, cy: 20, r: 3.4 },
  { cx: 72, cy: 34, r: 5.1 },
  { cx: 44, cy: 44, r: 2.6 },
  { cx: 26, cy: 52, r: 4.4 },
  { cx: 58, cy: 56, r: 3.1 },
  { cx: 78, cy: 58, r: 2.4 },
  { cx: 40, cy: 68, r: 7.4 },
  { cx: 62, cy: 74, r: 3.6 },
  { cx: 22, cy: 38, r: 2.1 },
  { cx: 52, cy: 32, r: 1.7 },
  { cx: 30, cy: 74, r: 2.2 },
  { cx: 68, cy: 46, r: 1.6 },
  { cx: 48, cy: 84, r: 2.8 },
];

export function MoonMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        {/* Regolith base with limb darkening toward the edge */}
        <radialGradient id="mm-surface" cx="36%" cy="30%" r="82%">
          <stop offset="0%" stopColor="#fff6e2" />
          <stop offset="38%" stopColor="#f6e2b4" />
          <stop offset="70%" stopColor="#dcbd80" />
          <stop offset="90%" stopColor="#b18f4f" />
          <stop offset="100%" stopColor="#8d6c34" />
        </radialGradient>
        {/* Shadowed limb opposite the light source */}
        <radialGradient id="mm-shade" cx="30%" cy="26%" r="86%">
          <stop offset="55%" stopColor="#1b1206" stopOpacity="0" />
          <stop offset="100%" stopColor="#1b1206" stopOpacity="0.55" />
        </radialGradient>
        {/* Crater floors: dark on the lit-facing rim, brighter opposite */}
        <radialGradient id="mm-crater" cx="34%" cy="30%" r="78%">
          <stop offset="0%" stopColor="#8f7038" stopOpacity="0.85" />
          <stop offset="65%" stopColor="#b08f55" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fdf1d4" stopOpacity="0.42" />
        </radialGradient>
        <linearGradient id="mm-rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6f5526" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#c9a86a" stopOpacity="0" />
          <stop offset="100%" stopColor="#fff8e6" stopOpacity="0.6" />
        </linearGradient>
        <filter id="mm-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.1" />
        </filter>
        <filter id="mm-maria" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="3.4" />
        </filter>
        {/* Fine regolith speckle so the disc is never a flat fill */}
        <filter id="mm-grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="7" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <clipPath id="mm-disc">
          <circle cx="50" cy="50" r="46" />
        </clipPath>
      </defs>

      {/* Outer halo */}
      <circle cx="50" cy="50" r="46" fill="#f4dda6" opacity="0.16" filter="url(#mm-maria)" />

      <circle cx="50" cy="50" r="46" fill="url(#mm-surface)" />

      <g clipPath="url(#mm-disc)">
        {/* Maria — the dark basaltic plains */}
        <g filter="url(#mm-maria)" fill="#a8843f" opacity="0.42">
          <ellipse cx="38" cy="34" rx="17" ry="13" />
          <ellipse cx="60" cy="28" rx="11" ry="9" />
          <ellipse cx="68" cy="52" rx="13" ry="16" />
          <ellipse cx="30" cy="60" rx="10" ry="12" />
          <ellipse cx="52" cy="48" rx="8" ry="7" />
        </g>

        {/* Regolith grain */}
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          filter="url(#mm-grain)"
          opacity="0.18"
          style={{ mixBlendMode: "overlay" }}
        />

        {/* Craters */}
        <g filter="url(#mm-soft)">
          {craters.map((c) => (
            <g key={`${c.cx}-${c.cy}`}>
              <circle cx={c.cx} cy={c.cy} r={c.r} fill="url(#mm-crater)" />
              <circle
                cx={c.cx}
                cy={c.cy}
                r={c.r}
                fill="none"
                stroke="url(#mm-rim)"
                strokeWidth={Math.max(0.5, c.r * 0.16)}
              />
            </g>
          ))}
        </g>

        {/* Ejecta rays from the large southern crater */}
        <g stroke="#fff6de" strokeWidth="0.7" opacity="0.2" filter="url(#mm-soft)">
          <line x1="40" y1="68" x2="24" y2="88" />
          <line x1="40" y1="68" x2="40" y2="94" />
          <line x1="40" y1="68" x2="58" y2="90" />
          <line x1="40" y1="68" x2="18" y2="72" />
        </g>

        {/* Terminator shading */}
        <circle cx="50" cy="50" r="46" fill="url(#mm-shade)" />
      </g>

      {/* Crisp limb */}
      <circle cx="50" cy="50" r="46" fill="none" stroke="#fff3d6" strokeWidth="0.5" opacity="0.35" />
    </svg>
  );
}
