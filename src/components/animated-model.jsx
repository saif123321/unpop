import React, { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

export default function AnimatedModel({ url, progress }) {
  const { scene, animations } = useGLTF(url);
  console.log(progress);

  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    const firstName = names?.[0];
    if (!firstName) {
      console.warn("No animation clips found in GLB");
      return;
    }

    const action = actions?.[firstName];
    if (!action) {
      console.warn("Animation action not found for:", firstName);
      return;
    }

    action.reset();
    action.play();
    action.paused = true; // we drive time manually

    return () => {
      action.stop();
    };
  }, [actions, names]);

  useFrame(() => {
    const firstName = names?.[0];
    const action = firstName ? actions?.[firstName] : null;
    if (!action) return;

    const clipDuration = action.getClip().duration;
    action.time = clipDuration * progress;
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child?.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      rotation={[-0.5, 0, 0]}
      position={[0, -1.6, 0]}
      scale={0.9}
    />
  );
}

useGLTF.preload("./models/can.glb");
