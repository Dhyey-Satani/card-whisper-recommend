
import React from "react";

interface PlaceholderCardImageProps {
  bankName?: string;
  cardType?: string;
  variant?: "front" | "back";
  width?: number | string;
  height?: number | string;
  theme?: "light" | "dark";
}
const gradientLight = "linear-gradient(135deg, #c7deff 0%, #d6bcfa 100%)";
const gradientDark = "linear-gradient(135deg, #2c56ff 0%, #6e59a5 100%)";
const chipColorLight = "#aaa";
const chipColorDark = "#ddd";
const brandColor = "#9b87f5";

const PlaceholderCardImage: React.FC<PlaceholderCardImageProps> = ({
  bankName = "Bank Name",
  cardType = "Credit Card",
  variant = "front",
  width = 390,
  height = 210,
  theme = "light",
}) => {
  const isFront = variant === "front";
  const gradient = theme === "dark" ? gradientDark : gradientLight;
  const chip = theme === "dark" ? chipColorDark : chipColorLight;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 390 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        borderRadius: 18,
        background: gradient,
        boxShadow:
          theme === "dark"
            ? "0 6px 28px 0 rgba(30,30,64,.66)"
            : "0 6px 18px 0 rgba(155,151,255,.18)",
      }}
    >
      {/* Card base */}
      <rect
        x={0}
        y={0}
        width={390}
        height={210}
        rx={18}
        fill="url(#bg-gradient)"
        filter="url(#shadow)"
      />
      <defs>
        <linearGradient
          id="bg-gradient"
          x1={0}
          y1={0}
          x2={390}
          y2={210}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme === "dark" ? "#1d3eff" : "#c7deff"} />
          <stop offset="1" stopColor={theme === "dark" ? "#9b87f5" : "#d6bcfa"} />
        </linearGradient>
      </defs>
      {/* Card chip */}
      {isFront && (
        <rect
          x={34}
          y={38}
          rx={6}
          width={38}
          height={28}
          fill={chip}
          stroke="#6767ac"
          strokeWidth={2}
          opacity={0.9}
        />
      )}
      {/* Branded logo (circle & gradient) */}
      {isFront && (
        <g>
          <circle cx={55} cy={170} r={20} fill="#9b87f5" opacity={0.33} />
          <circle cx={85} cy={170} r={20} fill="#f2fce2" opacity={0.25} />
          <circle cx={342} cy={44} r={14} fill="#d946ef" opacity={0.18} />
        </g>
      )}
      {/* Card number or magnetic line/back details */}
      {isFront ? (
        <g>
          <rect x={36} y={101} rx={10} width={215} height={16} fill="#fff6" />
          <rect x={36} y={126} rx={5} width={92} height={14} fill="#f3f3f3" />
        </g>
      ) : (
        <g>
          {/* Magnetic stripe */}
          <rect x={0} y={34} width={390} height={28} rx={4} fill="#333" opacity={0.7}/>
          {/* Mini signature block */}
          <rect x={278} y={120} rx={3} width={74} height={14} fill="#fff" opacity={0.8} />
        </g>
      )}
      {/* Bank name */}
      <text
        x="36"
        y="80"
        fontFamily="Inter, Arial,sans-serif"
        fontWeight="bold"
        fontSize="22"
        fill={theme === "dark" ? "#fff" : "#333"}
        opacity="0.82"
      >
        {bankName.length > 22 ? bankName.slice(0, 20) + "..." : bankName}
      </text>
      {/* Card type (front) or Back info */}
      {isFront ? (
        <text
          x="36"
          y="155"
          fontFamily="Inter, Arial,sans-serif"
          fontWeight="600"
          fontSize="15"
          fill={brandColor}
        >
          {cardType}
        </text>
      ) : (
        <text
          x="278"
          y="112"
          fontFamily="Inter, Arial,sans-serif"
          fontWeight="400"
          fontSize="11"
          fill="#888"
        >
          AUTHORIZED SIGNATURE
        </text>
      )}
      {/* Placeholder Mastercard circles */}
      {isFront && (
        <>
          <circle cx={340} cy={180} r={20} fill="#d946ef" opacity={0.27}/>
          <circle cx={360} cy={180} r={20} fill="#e5deff" opacity={0.19}/>
        </>
      )}
      {/* Card branding text/back code */}
      <text
        x={isFront ? 335 : 350}
        y={isFront ? 72 : 198}
        fontFamily="Inter, Arial,sans-serif"
        fontWeight={isFront ? 800 : 500}
        fontSize={isFront ? 10 : 13}
        fill={isFront ? "#7e69ab" : "#888"}
        opacity="0.75"
        textAnchor="end"
      >
        {isFront ? "INDIA CARD FINDER" : ""}
      </text>
      {/* Backside CVC block */}
      {!isFront && (
        <rect
          x={360}
          y={170}
          width={20}
          height={16}
          rx={3}
          fill="#f1f0fb"
          stroke="#aaa"
          strokeWidth={1}
        />
      )}
    </svg>
  );
};

export default PlaceholderCardImage;
