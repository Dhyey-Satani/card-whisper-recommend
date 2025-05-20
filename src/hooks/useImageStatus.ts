
import { useEffect, useState } from "react";

type ImageStatus = "loading" | "loaded" | "error";

/**
 * Custom hook to load and track the status of a given image URL.
 */
export function useImageStatus(src?: string | null) {
  const [status, setStatus] = useState<ImageStatus>("loading");

  useEffect(() => {
    if (!src) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    const img = new window.Image();
    img.onload = () => setStatus("loaded");
    img.onerror = () => setStatus("error");
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return status;
}
