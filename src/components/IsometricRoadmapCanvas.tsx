import React from "react";

interface IsometricRoadmapCanvasProps {
  activeStep: number;
  hoveredStep: number | null;
  onStepHover: (stepId: number | null) => void;
  onStepClick: (stepId: number) => void;
}

const BEACON_COORDS = [
  { id: 1, x: 100, y: 470, stepNumber: "01", cardX: 30, cardY: 260 },
  { id: 2, x: 300, y: 400, stepNumber: "02", cardX: 220, cardY: 190 },
  { id: 3, x: 500, y: 330, stepNumber: "03", cardX: 420, cardY: 120 },
  { id: 4, x: 700, y: 260, stepNumber: "04", cardX: 620, cardY: 50 },
  { id: 5, x: 900, y: 190, stepNumber: "05", cardX: 820, cardY: -20 },
  { id: 6, x: 1100, y: 120, stepNumber: "06", cardX: 1000, cardY: -90, isSpecial: true },
];

export const IsometricRoadmapCanvas: React.FC<IsometricRoadmapCanvasProps> = ({
  activeStep,
  hoveredStep,
  onStepHover,
  onStepClick,
}) => {
  return (
    <svg
      viewBox="0 0 1260 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full pointer-events-none select-none overflow-visible"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Track Body Linear Gradient */}
        <linearGradient id="isoTrackGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#063F32" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#0B6B52" stopOpacity="0.8" />
          <stop offset="75%" stopColor="#10b981" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#F2A202" stopOpacity="0.9" />
        </linearGradient>

        {/* Track Surface Gradient */}
        <linearGradient id="isoTrackSurface" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#34d399" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F2A202" stopOpacity="0.35" />
        </linearGradient>

        {/* Neon Light Pillar Gradient */}
        <linearGradient id="pillarBeamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="25%" stopColor="#6ee7b7" stopOpacity="0.95" />
          <stop offset="75%" stopColor="#10b981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#063F32" stopOpacity="0.4" />
        </linearGradient>

        {/* Pillar Special Gold Gradient for Step 06 */}
        <linearGradient id="pillarBeamGoldGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="30%" stopColor="#fde047" stopOpacity="0.95" />
          <stop offset="75%" stopColor="#F2A202" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#b45309" stopOpacity="0.4" />
        </linearGradient>

        {/* Ambient Glow Filters */}
        <filter id="isoGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <filter id="beamFlare" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ======================================================== */}
      {/* 1. ISOMETRIC PERSPECTIVE DIAGONAL CONVEYOR TRACK         */}
      {/* ======================================================== */}
      
      {/* Outer Soft Track Shadow */}
      <polygon
        points="-20,535 1220,115 1250,155 10,575"
        fill="#063F32"
        fillOpacity="0.08"
        filter="url(#isoGlow)"
      />

      {/* Main Isometric Diagonal Road Ribbon */}
      <polygon
        points="-20,520 1200,105 1250,140 30,555"
        fill="url(#isoTrackSurface)"
        stroke="url(#isoTrackGrad)"
        strokeWidth="3.5"
        className="transition-all duration-500"
      />

      {/* Front Isometric Track Extrusion Bevel (3D Thickness) */}
      <polygon
        points="30,555 1250,140 1250,152 30,567"
        fill="#063F32"
        fillOpacity="0.85"
      />

      {/* Futuristic Cross Beams / Rungs across the Diagonal Track */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const xOffset = i * 200 + 40;
        const yOffset = 515 - i * 70;
        return (
          <g key={`rung-${i}`}>
            <line
              x1={xOffset - 35}
              y1={yOffset + 12}
              x2={xOffset + 25}
              y2={yOffset - 18}
              stroke="#10b981"
              strokeOpacity="0.35"
              strokeWidth="2.5"
              strokeDasharray="4 4"
            />
            {/* Cutout Notch */}
            <polygon
              points={`${xOffset - 10},${yOffset + 4} ${xOffset + 15},${yOffset - 10} ${xOffset + 10},${yOffset - 12} ${xOffset - 15},${yOffset + 2}`}
              fill="#DDEED8"
              fillOpacity="0.4"
            />
          </g>
        );
      })}

      {/* Inner Glowing Centerline along the Track */}
      <line
        x1="10"
        y1="535"
        x2="1220"
        y2="122"
        stroke="#ffffff"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeDasharray="10 8"
        filter="url(#isoGlow)"
      />

      {/* ======================================================== */}
      {/* 2. GLOWING LIGHT PILLAR BEACONS & TARGET PADS (01 -> 06)  */}
      {/* ======================================================== */}
      {BEACON_COORDS.map((beacon) => {
        const isTarget = activeStep === beacon.id || hoveredStep === beacon.id;
        const isSpecial = beacon.isSpecial;

        return (
          <g
            key={beacon.id}
            className="pointer-events-auto cursor-pointer group"
            onClick={() => onStepClick(beacon.id)}
            onMouseEnter={() => onStepHover(beacon.id)}
            onMouseLeave={() => onStepHover(null)}
          >
            {/* Base Concentric Target Pad Ellipses on Track */}
            {/* Outer Target Radar Ring */}
            <ellipse
              cx={beacon.x}
              cy={beacon.y}
              rx={isTarget ? 36 : 28}
              ry={isTarget ? 18 : 14}
              fill={isSpecial ? "#F2A202" : "#10b981"}
              fillOpacity={isTarget ? 0.28 : 0.12}
              stroke={isSpecial ? "#F2A202" : "#10b981"}
              strokeWidth={isTarget ? 2.5 : 1.5}
              className="transition-all duration-300"
            />

            {/* Inner Glowing Core Ellipse */}
            <ellipse
              cx={beacon.x}
              cy={beacon.y}
              rx={isTarget ? 18 : 14}
              ry={isTarget ? 9 : 7}
              fill="#FFFFFF"
              fillOpacity="0.85"
              stroke={isSpecial ? "#F2A202" : "#0B6B52"}
              strokeWidth="2"
              filter="url(#beamFlare)"
            />

            {/* Animated Light Pillar Cylinder Beam Rising from Pad */}
            {/* Pillar Ambient Beam */}
            <rect
              x={beacon.x - (isTarget ? 7 : 5)}
              y={beacon.y - (isTarget ? 80 : 65)}
              width={isTarget ? 14 : 10}
              height={isTarget ? 80 : 65}
              rx={isTarget ? 7 : 5}
              fill={isSpecial ? "url(#pillarBeamGoldGrad)" : "url(#pillarBeamGrad)"}
              filter="url(#beamFlare)"
              className="transition-all duration-300 origin-bottom"
            />

            {/* Pillar Bright White Core Line */}
            <line
              x1={beacon.x}
              y1={beacon.y}
              x2={beacon.x}
              y2={beacon.y - (isTarget ? 80 : 65)}
              stroke="#ffffff"
              strokeWidth={isTarget ? 3.5 : 2.5}
              strokeLinecap="round"
              className="transition-all duration-300"
            />

            {/* Pillar Base Light Sparkle */}
            <circle
              cx={beacon.x}
              cy={beacon.y}
              r={isTarget ? 6 : 4}
              fill="#ffffff"
              filter="url(#beamFlare)"
            />

            {/* Top Halo Holographic Orbit Ring around Beam Cap */}
            <circle
              cx={beacon.x}
              cy={beacon.y - (isTarget ? 80 : 65)}
              r={isTarget ? 34 : 26}
              fill="none"
              stroke={isSpecial ? "#F2A202" : "#10b981"}
              strokeOpacity={isTarget ? 0.9 : 0.45}
              strokeWidth={isTarget ? 2 : 1.5}
              strokeDasharray="6 4"
              className="transition-all duration-300 group-hover:rotate-45 origin-center"
            />

            {/* Glowing Cap Jewel Dot */}
            <circle
              cx={beacon.x}
              cy={beacon.y - (isTarget ? 80 : 65)}
              r={isTarget ? 7 : 5}
              fill={isSpecial ? "#F2A202" : "#ffffff"}
              stroke={isSpecial ? "#ffffff" : "#063F32"}
              strokeWidth="1.5"
              filter="url(#beamFlare)"
              className="transition-all duration-300"
            />

            {/* Floating Step Number Pill attached above the Halo */}
            <g
              transform={`translate(${beacon.x}, ${beacon.y - (isTarget ? 115 : 98)})`}
              className="transition-transform duration-300 group-hover:-translate-y-2"
            >
              <rect
                x="-14"
                y="-9"
                width="28"
                height="18"
                rx="9"
                fill={isTarget ? (isSpecial ? "#F2A202" : "#063F32") : "#FFFFFF"}
                stroke={isTarget ? "#FFFFFF" : "#063F32"}
                strokeOpacity={isTarget ? 0.4 : 0.2}
                strokeWidth="1.5"
                filter="url(#isoGlow)"
              />
              <text
                x="0"
                y="3.5"
                textAnchor="middle"
                fontSize="9"
                fontWeight="900"
                fill={isTarget ? (isSpecial ? "#063F32" : "#FFFFFF") : "#063F32"}
                fontFamily="sans-serif"
              >
                {beacon.stepNumber}
              </text>
            </g>
          </g>
        );
      })}
    </svg>
  );
};

export default IsometricRoadmapCanvas;
