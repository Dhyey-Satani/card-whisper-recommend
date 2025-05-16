
import React, { useEffect, useRef, useState } from "react";
import { renderCanvas } from "./hero-designali";

// More robust: checks if *any* major container has white bg or white text
function isWhiteContext() {
  // Check body, #root, main, and main layout containers for white background OR white text
  const selectors = [
    "body",
    "#root",
    "main",
    '[class*="bg-white"]',
    '[style*="background-color: white"]',
    '[style*="color: white"]',
  ];
  for (const sel of selectors) {
    const els = Array.from(document.querySelectorAll(sel)) as HTMLElement[];
    for (const el of els) {
      const bg = window.getComputedStyle(el).backgroundColor;
      const color = window.getComputedStyle(el).color;
      if (
        bg === "rgb(255, 255, 255)" ||
        bg === "#fff" ||
        bg === "white" ||
        /^rgba?\(255,\s*255,\s*255(,[^)]+)?\)$/.test(bg) ||
        color === "rgb(255, 255, 255)" ||
        color === "#fff" ||
        color === "white"
      ) {
        return true;
      }
    }
  }
  return false;
}

// Mounts and always runs the effect if major area is white
const GlobalMouseDragEffect: React.FC = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const check = () => setShowCanvas(isWhiteContext());
    check();
    window.addEventListener("resize", check);
    window.addEventListener("scroll", check);
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("scroll", check);
    };
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
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 100,
      }}
    />
  ) : null;
};
export default GlobalMouseDragEffect;
