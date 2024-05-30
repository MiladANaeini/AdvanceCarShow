import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const BodyColor = (group, bodyColor) => {
  const currentColor = useRef(new THREE.Color(bodyColor));
  const targetColor = useRef(new THREE.Color(bodyColor));
  const startTime = useRef(null);

  useEffect(() => {
    if (group && group.children[12] && group.children[12].children[11]) {
      targetColor.current.set(bodyColor);
      startTime.current = performance.now();
    }
  }, [group, bodyColor]);

  useFrame(() => {
    if (!group || !group.children[12] || !group.children[12].children[11])
      return;

    const material = group.children[12].children[11].material;
    if (!material) return;

    const elapsedTime = (performance.now() - startTime.current) / 1000;
    const progress = Math.min(elapsedTime / 2, 1); // 2 seconds transition duration
    currentColor.current.lerpColors(
      currentColor.current,
      targetColor.current,
      progress
    );

    material.color.copy(currentColor.current);
    material.needsUpdate = true;
  });

  return null;
};
