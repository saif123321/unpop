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

  stopAtId = "cola-sublime", 
  stopOffsetPx = -300,
}) {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("fixed"); 
  const [stopY, setStopY] = useState(null);

 
  useLayoutEffect(() => {
    const measure = () => {
      const el = document.getElementById(stopAtId);
      if (!el) return;

      const y = el.getBoundingClientRect().top + window.scrollY + stopOffsetPx;
      setStopY(y);
    };

    measure();
    window.addEventListener("resize", measure);

   
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
       
        if (mode !== "absolute") setMode("absolute");
      
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
