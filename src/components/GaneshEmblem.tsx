/**
 * Refined Ganesh-inspired ornamental gold emblem
 * Designed to reproduce the visual emblem seen in the reference brand lockup.
 */
export function GaneshEmblem({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ganesh Jewellers Emblem"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFB876" />
          <stop offset="50%" stopColor="#B8863D" />
          <stop offset="100%" stopColor="#8C6226" />
        </linearGradient>
      </defs>

      {/* Decorative Outer Arch / Halo */}
      <path
        d="M 22 56 C 20 30, 32 14, 50 14 C 68 14, 80 30, 78 56"
        stroke="url(#goldGrad)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="50" cy="10" r="2" fill="url(#goldGrad)" />
      
      {/* Crown / Mukut */}
      <path
        d="M 42 28 L 50 18 L 58 28 L 54 32 L 46 32 Z"
        stroke="url(#goldGrad)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="24" r="1.5" fill="url(#goldGrad)" />

      {/* Head & Ears */}
      {/* Left Ear */}
      <path
        d="M 38 34 C 28 34, 25 44, 30 52 C 34 56, 38 54, 40 48"
        stroke="url(#goldGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Right Ear */}
      <path
        d="M 62 34 C 72 34, 75 44, 70 52 C 66 56, 62 54, 60 48"
        stroke="url(#goldGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Forehead / Tilak */}
      <path
        d="M 47 34 C 47 36, 53 36, 53 34"
        stroke="url(#goldGrad)"
        strokeWidth="1.5"
      />
      <path
        d="M 50 31 L 50 37"
        stroke="url(#goldGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="50" cy="38" r="1.2" fill="url(#goldGrad)" />

      {/* Trunk (Sondh) flowing to left/modak */}
      <path
        d="M 45 40 C 47 48, 48 56, 44 64 C 41 68, 36 67, 36 63 C 36 59, 41 58, 43 60"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Modak in hand */}
      <circle cx="34" cy="62" r="2.5" fill="url(#goldGrad)" />

      {/* Belly curve & base */}
      <path
        d="M 37 68 C 42 75, 58 75, 63 68"
        stroke="url(#goldGrad)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Side filigree scrolls at bottom */}
      <path
        d="M 18 64 C 22 62, 26 65, 24 70 C 22 73, 19 72, 19 69"
        stroke="url(#goldGrad)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M 82 64 C 78 62, 74 65, 76 70 C 78 73, 81 72, 81 69"
        stroke="url(#goldGrad)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
