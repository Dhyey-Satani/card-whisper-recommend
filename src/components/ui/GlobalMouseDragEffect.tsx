
import React, { useEffect, useRef, useState } from "react";
import { renderCanvas } from "./hero-designali";

// Utility: checks if the background color of the target element is white
function isWhiteBg(el: HTMLElement | null): boolean {
  if (!el) return false;
  const bg = window.getComputedStyle(el).backgroundColor;
  // Accept rgb(255,255,255) or #fff or rgba(255,255,255,*) with any alpha
  return (
    bg === "rgb(255, 255, 255)" ||
    bg === "#fff" ||
    bg === "white" ||
    /^rgba?\(255,\s*255,\s*255(,[^)]+)?\)$/.test(bg)
  );
}

const GlobalMouseDragEffect: React.FC = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Checks <body> background first (for full page white bg)
    const bodyIsWhite = isWhiteBg(document.body);

    // Checks for any bg-white area on the current page
    // You can further enhance this by using a querySelectorAll if you want the effect for specific elements

    // For now, we'll just enable if <body> is white for simplicity and performance
    if (bodyIsWhite) {
      setShowCanvas(true);
    } else {
      setShowCanvas(false);
    }
  }, []);

  useEffect(() => {
    if (!showCanvas) return;
    renderCanvas();
  }, [showCanvas]);

  return showCanvas ? (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-[100] mix-blend-lighten"
      id="canvas"
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 100 }}
    />
  ) : null;
};

export default GlobalMouseDragEffect;
