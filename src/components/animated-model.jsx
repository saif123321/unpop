import React, { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const clamp01 = (v) => Math.max(0, Math.min(1, v));
const invLerpClamped = (v, a, b) => clamp01((v - a) / (b - a));
const lerp = (a, b, t) => a + (b - a) * t;

export default function AnimatedModel({ url, progress }) {
  const { scene, animations } = useGLTF(url);
  const { actions, names } = useAnimations(animations, scene);

  const firstName = names?.[0];

  const BASE_SCALE = 1.2;
  const BASE_Y = -2;

  const TARGET_SCALE = 0.7;
  const TARGET_Y = 0;

  const TRANSFORM_START = 0.02;
  const TRANSFORM_END = 0.05;

  const ANIM_END = 0.37;

  useEffect(() => {
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
    action.paused = true; // drive time manually

    return () => action.stop();
  }, [actions, firstName]);

  useEffect(() => {
    scene.position.set(0, BASE_Y, 0);
    scene.scale.setScalar(BASE_SCALE);

    scene.traverse((child) => {
      if (child?.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (!firstName) return;
    const action = actions?.[firstName];
    if (!action) return;

    const animT = invLerpClamped(progress, 0, ANIM_END);
    const clipDuration = action.getClip().duration;
    action.time = clipDuration * animT;

    const t = invLerpClamped(progress, TRANSFORM_START, TRANSFORM_END);

    const targetScale = lerp(BASE_SCALE, TARGET_SCALE, t);
    const targetY = lerp(BASE_Y, TARGET_Y, t);

    const damp = THREE.MathUtils.damp;

    const s = damp(scene.scale.x, targetScale, 12, delta);
    scene.scale.setScalar(s);

    scene.position.y = damp(scene.position.y, targetY, 12, delta);
  });

  return <primitive object={scene} rotation={[-0.5, 0, 0]} />;
}

useGLTF.preload("./models/can.glb");
