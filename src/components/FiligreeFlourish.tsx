/**
 * Delicate antique-gold filigree flourishes and ornamental dividers
 * faithfully matching the reference artwork motifs.
 */

export function FiligreeFlourish({ className = "w-32 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="filigreeGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#DFB876" stopOpacity="0.2" />
          <stop offset="30%" stopColor="#B8863D" />
          <stop offset="50%" stopColor="#DFC493" />
          <stop offset="70%" stopColor="#B8863D" />
          <stop offset="100%" stopColor="#DFB876" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Central Diamond / Flower motif */}
      <circle cx="80" cy="12" r="2.5" fill="#B8863D" />
      <path
        d="M 80 7 L 82.5 12 L 80 17 L 77.5 12 Z"
        fill="#DFB876"
      />

      {/* Left Wing Scrolls */}
      <path
        d="M 74 12 C 68 12, 64 8, 60 8 C 55 8, 52 13, 56 15 C 60 17, 65 14, 61 11"
        stroke="url(#filigreeGold)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 50 12 L 20 12"
        stroke="url(#filigreeGold)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="16" cy="12" r="1.5" fill="#B8863D" />

      {/* Right Wing Scrolls */}
      <path
        d="M 86 12 C 92 12, 96 8, 100 8 C 105 8, 108 13, 104 15 C 100 17, 95 14, 99 11"
        stroke="url(#filigreeGold)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 110 12 L 140 12"
        stroke="url(#filigreeGold)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="144" cy="12" r="1.5" fill="#B8863D" />
    </svg>
  );
}

export function CategoryFlourish({ className = "w-16 h-3" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 10 6 L 34 6"
        stroke="#B8863D"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
      <circle cx="40" cy="6" r="2" fill="#B8863D" />
      <path
        d="M 37 6 C 37 4, 43 4, 43 6 C 43 8, 37 8, 37 6"
        stroke="#B8863D"
        strokeWidth="0.7"
      />
      <path
        d="M 46 6 L 70 6"
        stroke="#B8863D"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
    </svg>
  );
}

export function OrnamentalFlourishWing({ flip = false, className = "w-10 h-6" }: { flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 60 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M 4 12 C 16 12, 24 6, 32 6 C 40 6, 44 14, 38 18 C 32 22, 26 14, 34 10 C 42 6, 52 12, 58 12"
        stroke="#B8863D"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="35" cy="14" r="1.8" fill="#B8863D" />
      <circle cx="58" cy="12" r="1.5" fill="#DFC493" />
    </svg>
  );
}
