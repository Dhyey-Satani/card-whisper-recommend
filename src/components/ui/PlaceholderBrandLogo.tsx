
import React from "react";

// A more intricate SVG placeholder for a bank/brand logo.
const PlaceholderBrandLogo = ({ bankName = "Bank" }: { bankName?: string }) => {
  const colors = ["#9b87f5", "#f2fce2", "#D6BCFA", "#E5DEFF"];
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" style={{ borderRadius: 12 }}>
      <defs>
        <radialGradient id="logo-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity={0.7} />
          <stop offset="100%" stopColor={colors[2]} stopOpacity={1} />
        </radialGradient>
      </defs>
      <rect x={0} y={0} width={48} height={48} rx={12} fill="url(#logo-bg)" />
      <circle cx={15} cy={18} r={6} fill={colors[1]} opacity={0.88} />
      <circle cx={36} cy={30} r={8} fill={colors[3]} opacity={0.66} />
      <rect x={8} y={35} width={32} height={6} rx={3} fill={colors[2]} opacity={0.32} />
      <text x={24} y={27} textAnchor="middle" style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 11, fill: "#403E43" }}>
        {bankName.split(" ")[0]}
      </text>
    </svg>
  );
};
export default PlaceholderBrandLogo;
