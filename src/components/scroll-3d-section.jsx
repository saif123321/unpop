import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ThreeScene from "./three-scene";

function clamp01(v) {
  return Math.max(0, Math.min(1, v));
}

function getPageScrollProgress() {
  const doc = document.documentElement;

  const scrollTop = window.scrollY || doc.scrollTop || 0;
  const scrollHeight = doc.scrollHeight || 0;
  const clientHeight = doc.clientHeight || window.innerHeight || 0;

  const maxScroll = Math.max(1, scrollHeight - clientHeight);
  return clamp01(scrollTop / maxScroll);
}

export default function Scroll3DSection({
  modelUrl = "./models/can.glb",
  cameraPos = [0, 1.5, 4],
  hdrAsBackground = false,
  backgroundColor = "#050816",
  offset = 0.0,
  // NEW:
  stopAtId = "cola-sublime", // section where the overlay should stop
  stopOffsetPx = -300, // optionally stop a bit before/after the section
}) {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("fixed"); // "fixed" | "absolute"
  const [stopY, setStopY] = useState(null);

  // Measure where to stop (top of #cola-sublime)
  useLayoutEffect(() => {
    const measure = () => {
      const el = document.getElementById(stopAtId);
      if (!el) return;

      const y = el.getBoundingClientRect().top + window.scrollY + stopOffsetPx;
      setStopY(y);
    };

    measure();
    window.addEventListener("resize", measure);

    // If content loads later (images/fonts), re-measure a bit
    const t = setTimeout(measure, 250);

    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, [stopAtId, stopOffsetPx]);

  useEffect(() => {
    let raf = 0;

    const tick = () => {
      const y = window.scrollY || 0;

      if (stopY != null && y >= stopY) {
        // reached stop point -> pin it in the document
        if (mode !== "absolute") setMode("absolute");
        // IMPORTANT: do NOT update progress anymore (freeze animation)
      } else {
        if (mode !== "fixed") setMode("fixed");
        const p = getPageScrollProgress();
        setProgress(clamp01(p - offset));
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [offset, stopY, mode]);

  // If absolute, we place it at `top: stopY` (pinned)
  const containerStyle =
    mode === "fixed"
      ? { position: "fixed", top: 0, left: 0 }
      : { position: "absolute", top: stopY ?? 0, left: 0 };

  return (
    <div
      style={containerStyle}
      className='w-full h-screen z-[9999] pointer-events-none'
    >
      <ThreeScene
        progress={progress}
        modelUrl={modelUrl}
        cameraPos={cameraPos}
        hdrAsBackground={hdrAsBackground}
        backgroundColor={backgroundColor}
      />
    </div>
  );
}
