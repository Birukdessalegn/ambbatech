interface AmbbaLogoProps {
  size?: number;
  className?: string;
}

export default function AmbbaLogo({ size = 32, className = "" }: AmbbaLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AmbbaTech Logo"
    >
      <defs>
        {/* Electric Blue Gradient for Escarpments */}
        <linearGradient id="ambaBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6D8DFF" />
          <stop offset="100%" stopColor="#3B68F5" />
        </linearGradient>

        {/* Radiant Cyan Gradient for Flat Summit & Bridge */}
        <linearGradient id="ambaCyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#27D3FF" />
          <stop offset="100%" stopColor="#4F7CFF" />
        </linearGradient>

        {/* Soft Background Glass Tile Gradient */}
        <linearGradient id="ambaTileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#15203A" />
          <stop offset="100%" stopColor="#0B1224" />
        </linearGradient>
      </defs>

      {/* Rounded Dark Glass Tile Container */}
      <rect
        width="36"
        height="36"
        rx="9"
        fill="url(#ambaTileGrad)"
        stroke="rgba(39, 211, 255, 0.28)"
        strokeWidth="1"
      />

      {/* Left Stepped Escarpment Cliff (Forms Left Leg of 'A') */}
      <path
        d="M7.5 28L12.5 11H16L12.5 28H7.5Z"
        fill="url(#ambaBlueGrad)"
      />

      {/* Right Stepped Escarpment Cliff (Forms Right Leg of 'A') */}
      <path
        d="M28.5 28L23.5 11H20L23.5 28H28.5Z"
        fill="url(#ambaBlueGrad)"
      />

      {/* Elevated Flat-Top Summit (The Amba Plateau Tableland) */}
      <path
        d="M10.5 11H25.5L23.5 7.5H12.5L10.5 11Z"
        fill="url(#ambaCyanGrad)"
      />

      {/* Center Connecting Platform Bridge (Forms Crossbar of 'A') */}
      <path
        d="M11 19.5H25L24 22.5H12L11 19.5Z"
        fill="#27D3FF"
        opacity="0.95"
      />

      {/* Summit Core Luminous Beacon Node */}
      <circle cx="18" cy="9.25" r="1.5" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
}
