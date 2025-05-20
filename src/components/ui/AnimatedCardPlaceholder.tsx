
import React from "react";

// Visually appealing SVG with animation.
const AnimatedCardPlaceholder = ({
  bankName = "Bank Name",
  cardType = "Credit Card",
  width = 390,
  height = 210,
  theme = "light",
  brandColor,
  animate = true,
}: {
  bankName?: string;
  cardType?: string;
  width?: number | string;
  height?: number | string;
  theme?: "light" | "dark";
  brandColor?: string;
  animate?: boolean;
}) => {
  // Simple shimmer animation
  const gradientId = "card-skeleton-gradient";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 390 210"
      style={{
        borderRadius: 18,
        background: theme === "dark"
          ? "linear-gradient(135deg, #2c56ff 0%, #6e59a5 100%)"
          : "linear-gradient(135deg, #c7deff 0%, #d6bcfa 100%)",
        boxShadow: theme === "dark"
          ? "0 6px 18px 0 rgba(30,30,64,.32)"
          : "0 6px 12px 0 rgba(155,151,255,.19)",
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId}>
          <stop offset="0%" stopColor="#ece9fd" />
          <stop offset="50%" stopColor="#d6bcfa">
            {animate && <animate attributeName="offset" values="0;1;0" dur="2s" repeatCount="indefinite" />}
          </stop>
          <stop offset="100%" stopColor="#f6f5fe" />
        </linearGradient>
      </defs>
      {/* Card base with animated shimmer */}
      <rect x={0} y={0} width={390} height={210} rx={18} fill={`url(#${gradientId})`} />
      {/* Credit card chip */}
      <rect x={34} y={38} rx={6} width={38} height={28} fill="#aaa" stroke="#6767ac" strokeWidth={2} opacity={0.8} />
      {/* Bank Name */}
      <text
        x="36"
        y="80"
        fontFamily="Inter, Arial,sans-serif"
        fontWeight="bold"
        fontSize="22"
        fill={theme === "dark" ? "#fff" : "#403E43"}
        opacity="0.86"
      >
        {bankName.length > 22 ? bankName.slice(0, 20) + "..." : bankName}
      </text>
      {/* Card Type */}
      <text
        x="36"
        y="155"
        fontFamily="Inter, Arial,sans-serif"
        fontWeight="700"
        fontSize="15"
        fill={brandColor ?? "#9b87f5"}
        opacity="0.97"
      >
        {cardType}
      </text>
      {/* Card Number */}
      <rect x={36} y={101} rx={8} width={215} height={16} fill="#fff6" />
      <rect x={36} y={126} rx={5} width={82} height={13} fill="#f3f3f3" />
      {/* Circles for brand visual */}
      <circle cx={340} cy={180} r={20} fill="#d946ef" opacity={0.17}/>
      <circle cx={360} cy={180} r={20} fill="#e5deff" opacity={0.12}/>
      {/* Master brand on right */}
      <g>
        <ellipse cx="370" cy="55" rx="14" ry="14" fill={brandColor ?? "#7e69ab"} opacity="0.30" />
        <ellipse cx="355" cy="55" rx="12" ry="12" fill="#f2fce2" opacity="0.2" />
      </g>
      {/* Animated shimmer rectangle */}
      {animate && (
        <rect x={0} y={0} width={390} height={210} rx={18}
          fill="url(#card-skeleton-gradient)" opacity="0.32">
          <animate attributeName="x" values="0; 170; 0" dur="1.4s" repeatCount="indefinite" />
        </rect>
      )}
      {/* Branding */}
      <text
        x={370}
        y={198}
        fontFamily="Inter, Arial,sans-serif"
        fontWeight="bold"
        fontSize="9"
        fill={theme === "dark" ? "#d6bcfa" : "#6e59a5"}
        opacity="0.44"
        textAnchor="end"
      >INDIA CARD FINDER</text>
    </svg>
  );
};
export default AnimatedCardPlaceholder;
