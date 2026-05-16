/**
 * Animation de vapeur en SVG pour le Hero
 * 3 courbes Bezier animées qui s'élèvent avec décalages temporels
 * Effet "rituel chaud" sans charger une image lourde
 */
export default function SteamAnimation() {
  return (
    <svg
      className="steam-svg"
      viewBox="0 0 200 400"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="steamGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#F7F3EC" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#F7F3EC" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F7F3EC" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="steamGradientWarm" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#C9A547" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C9A547" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Vapeur principale */}
      <path
        className="steam-path steam-path--1"
        d="M100,400 C110,340 90,300 100,260 C110,220 90,180 100,140 C110,100 95,60 100,20"
        fill="none"
        stroke="url(#steamGradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Vapeur secondaire (décalée) */}
      <path
        className="steam-path steam-path--2"
        d="M75,400 C85,350 70,310 75,270 C80,230 70,190 75,150 C80,110 65,70 70,30"
        fill="none"
        stroke="url(#steamGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Vapeur tertiaire */}
      <path
        className="steam-path steam-path--3"
        d="M125,400 C135,350 120,310 125,270 C130,230 120,190 125,150 C130,110 115,70 120,30"
        fill="none"
        stroke="url(#steamGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Filaments d'or subtils */}
      <path
        className="steam-path steam-path--gold"
        d="M100,400 C105,360 95,320 100,280 C105,240 95,200 100,160"
        fill="none"
        stroke="url(#steamGradientWarm)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
