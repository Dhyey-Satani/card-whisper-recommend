
import React from "react";

interface CreditCard3DViewerProps {
  src: string;
  title: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

const CreditCard3DViewer: React.FC<CreditCard3DViewerProps> = ({
  src,
  title,
  width = "100%",
  height = 360,
  style,
}) => (
  <div className="flex justify-center items-center w-full my-6" title={title}>
    <iframe
      src={src}
      width={typeof width === 'number' ? width : width}
      height={typeof height === 'number' ? height : height}
      frameBorder="0"
      allowFullScreen
      aria-label={title}
      style={{
        border: 0,
        borderRadius: 16,
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        maxWidth: '100%',
        ...style,
      }}
      loading="lazy"
    />
  </div>
);

export default CreditCard3DViewer;
