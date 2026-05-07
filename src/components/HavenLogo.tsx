"use client";

export function HavenLogo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Crown */}
      <g fill="url(#goldGradient)">
        <path d="M100 5 L110 25 L120 10 L125 30 L140 15 L135 35 L150 25 L140 45 L60 45 L50 25 L65 35 L60 15 L75 30 L80 10 L90 25 Z" />
        <rect x="65" y="42" width="70" height="8" rx="2" />
      </g>

      {/* Shield */}
      <path
        d="M40 60 L40 150 Q40 200 100 230 Q160 200 160 150 L160 60 Z"
        fill="url(#darkGradient)"
        stroke="url(#goldGradient)"
        strokeWidth="3"
      />

      {/* Shield inner border */}
      <path
        d="M50 70 L50 148 Q50 190 100 215 Q150 190 150 148 L150 70 Z"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Left Lion */}
      <g transform="translate(55, 85) scale(0.35)" fill="url(#goldGradient)">
        <path d="M60 0 Q80 10 85 30 Q90 20 100 25 Q95 35 90 40 L95 60 Q85 55 75 60 L80 80 Q70 75 60 80 L65 100 Q55 95 45 100 L50 120 L30 110 L35 90 Q25 95 15 90 L20 70 Q10 75 5 65 L25 55 Q15 50 20 35 Q30 40 40 30 Q35 15 45 5 Q55 10 60 0 Z" />
      </g>

      {/* Right Lion (mirrored) */}
      <g transform="translate(145, 85) scale(-0.35, 0.35)" fill="url(#goldGradient)">
        <path d="M60 0 Q80 10 85 30 Q90 20 100 25 Q95 35 90 40 L95 60 Q85 55 75 60 L80 80 Q70 75 60 80 L65 100 Q55 95 45 100 L50 120 L30 110 L35 90 Q25 95 15 90 L20 70 Q10 75 5 65 L25 55 Q15 50 20 35 Q30 40 40 30 Q35 15 45 5 Q55 10 60 0 Z" />
      </g>

      {/* Center emblem - stylized H */}
      <g fill="url(#goldGradient)">
        <rect x="85" y="110" width="8" height="50" rx="1" />
        <rect x="107" y="110" width="8" height="50" rx="1" />
        <rect x="85" y="130" width="30" height="8" rx="1" />
      </g>

      {/* Banner ribbon */}
      <path
        d="M25 190 Q50 185 75 190 L100 195 L125 190 Q150 185 175 190 L180 210 Q150 205 125 210 L100 215 L75 210 Q50 205 20 210 Z"
        fill="url(#goldGradient)"
        opacity="0.9"
      />

      {/* Decorative scrollwork */}
      <path
        d="M30 55 Q35 50 40 55"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M160 55 Q165 50 170 55"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        fill="none"
      />

      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b8923d" />
          <stop offset="50%" stopColor="#d4a853" />
          <stop offset="100%" stopColor="#e8c573" />
        </linearGradient>
        <linearGradient id="darkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a2a30" />
          <stop offset="100%" stopColor="#1a1a1e" />
        </linearGradient>
      </defs>
    </svg>
  );
}
