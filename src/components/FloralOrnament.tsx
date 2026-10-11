/**
 * Delicate blush-pink and ivory floral decoration
 * matching the soft botanical spray in the upper-left and side margins of the reference image.
 */

export function FloralOrnament({ className = "w-64 h-64" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Soft blush pink petal gradients */}
        <radialGradient id="pinkPetal1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF0EE" />
          <stop offset="60%" stopColor="#F5D0C9" />
          <stop offset="100%" stopColor="#E5ACA2" />
        </radialGradient>
        <radialGradient id="pinkPetal2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF7F5" />
          <stop offset="50%" stopColor="#FADBD5" />
          <stop offset="100%" stopColor="#EDB8B0" />
        </radialGradient>
        <radialGradient id="goldBud" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF4D8" />
          <stop offset="70%" stopColor="#D8A55B" />
          <stop offset="100%" stopColor="#9C7235" />
        </radialGradient>
      </defs>

      {/* Gentle leafy sprigs and golden stems */}
      <path
        d="M 10 10 Q 50 80, 110 100"
        stroke="#A89478"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M 20 20 Q 80 40, 140 50"
        stroke="#A89478"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M 30 110 Q 70 140, 120 180"
        stroke="#A89478"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* Small botanical bud berries */}
      <circle cx="28" cy="42" r="3" fill="url(#goldBud)" opacity="0.8" />
      <circle cx="45" cy="24" r="2.5" fill="url(#goldBud)" opacity="0.8" />
      <circle cx="85" cy="38" r="3" fill="url(#goldBud)" opacity="0.7" />
      <circle cx="120" cy="52" r="2.5" fill="url(#goldBud)" opacity="0.7" />
      <circle cx="65" cy="130" r="3" fill="url(#goldBud)" opacity="0.6" />

      {/* Large Flower 1 (Upper Left) */}
      <g transform="translate(48, 52)">
        {/* Petals */}
        <ellipse cx="0" cy="-22" rx="14" ry="18" fill="url(#pinkPetal1)" opacity="0.9" />
        <ellipse cx="20" cy="-10" rx="14" ry="17" fill="url(#pinkPetal2)" opacity="0.85" transform="rotate(35, 20, -10)" />
        <ellipse cx="18" cy="16" rx="13" ry="17" fill="url(#pinkPetal1)" opacity="0.9" transform="rotate(75, 18, 16)" />
        <ellipse cx="-4" cy="22" rx="14" ry="18" fill="url(#pinkPetal2)" opacity="0.85" transform="rotate(110, -4, 22)" />
        <ellipse cx="-20" cy="8" rx="13" ry="17" fill="url(#pinkPetal1)" opacity="0.9" transform="rotate(150, -20, 8)" />
        <ellipse cx="-18" cy="-14" rx="13" ry="17" fill="url(#pinkPetal2)" opacity="0.85" transform="rotate(-40, -18, -14)" />
        
        {/* Inner small petal ring */}
        <circle cx="0" cy="0" r="14" fill="#FDF3F1" opacity="0.95" />
        <circle cx="0" cy="0" r="7" fill="url(#goldBud)" />
        <circle cx="0" cy="0" r="3" fill="#6B4B1B" />
      </g>

      {/* Medium Flower 2 (Lower Left) */}
      <g transform="translate(32, 145) scale(0.75)">
        <ellipse cx="0" cy="-20" rx="13" ry="16" fill="url(#pinkPetal2)" opacity="0.88" />
        <ellipse cx="18" cy="-8" rx="13" ry="16" fill="url(#pinkPetal1)" opacity="0.85" transform="rotate(35, 18, -8)" />
        <ellipse cx="16" cy="14" rx="12" ry="16" fill="url(#pinkPetal2)" opacity="0.88" transform="rotate(75, 16, 14)" />
        <ellipse cx="-4" cy="18" rx="13" ry="16" fill="url(#pinkPetal1)" opacity="0.85" transform="rotate(110, -4, 18)" />
        <ellipse cx="-18" cy="6" rx="12" ry="16" fill="url(#pinkPetal2)" opacity="0.88" transform="rotate(150, -18, 6)" />
        <ellipse cx="-16" cy="-12" rx="12" ry="16" fill="url(#pinkPetal1)" opacity="0.85" transform="rotate(-40, -16, -12)" />
        
        <circle cx="0" cy="0" r="11" fill="#FFF2F0" opacity="0.95" />
        <circle cx="0" cy="0" r="5" fill="url(#goldBud)" />
      </g>

      {/* Small accent flower (Upper Right offset) */}
      <g transform="translate(115, 36) scale(0.55)">
        <ellipse cx="0" cy="-18" rx="12" ry="15" fill="url(#pinkPetal1)" opacity="0.8" />
        <ellipse cx="16" cy="-6" rx="12" ry="15" fill="url(#pinkPetal2)" opacity="0.75" transform="rotate(45, 16, -6)" />
        <ellipse cx="12" cy="14" rx="11" ry="15" fill="url(#pinkPetal1)" opacity="0.8" transform="rotate(90, 12, 14)" />
        <ellipse cx="-10" cy="14" rx="11" ry="15" fill="url(#pinkPetal2)" opacity="0.75" transform="rotate(135, -10, 14)" />
        <ellipse cx="-14" cy="-6" rx="11" ry="15" fill="url(#pinkPetal1)" opacity="0.8" transform="rotate(-45, -14, -6)" />
        <circle cx="0" cy="0" r="4.5" fill="url(#goldBud)" />
      </g>
    </svg>
  );
}
