import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, useProgress } from "@react-three/drei";
import AnimatedModel from "./animated-model";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          color: "white",
          fontFamily: "system-ui, sans-serif",
          fontSize: 14,
          background: "rgba(0,0,0,0.4)",
          padding: "10px 12px",
          borderRadius: 10,
        }}
      >
        Loading 3D… {Math.round(progress)}%
      </div>
    </Html>
  );
}

export default function ThreeScene({
  progress,
  modelUrl = "/can.glb",
  cameraPos = [0, 1.5, 4],
  hdrAsBackground = false,
  backgroundColor = "#050816",
}) {
  const dpr = useMemo(() => {
    if (typeof window === "undefined") return 1;
    return [1, Math.min(2, window.devicePixelRatio || 1)];
  }, []);

  return (
    <Canvas
      shadows
      dpr={dpr}
      camera={{ fov: 45, position: cameraPos, near: 0.1, far: 100 }}
      gl={{ alpha: true, antialias: true }}
    >
      <hemisphereLight args={[0xffffff, 0x222222, 0.8]} position={[0, 2, 0]} />
      <directionalLight intensity={0.8} position={[5, 10, 7]} />

      <Environment preset='sunset' />

      <Suspense fallback={<Loader />}>
        <AnimatedModel url={modelUrl} progress={progress} />
      </Suspense>
    </Canvas>
  );
}
