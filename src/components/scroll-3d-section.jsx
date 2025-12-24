import React, { useEffect, useState } from "react";
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
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const tick = () => {
      const p = getPageScrollProgress();
      setProgress(clamp01(p - offset));
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [offset]);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 100,
        backgroundColor: "transparent",
        top: 0,
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
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
