import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const BodyColor = (group, bodyColor, nextCar) => {
  const currentColor = useRef(new THREE.Color(bodyColor));
  const targetColor = useRef(new THREE.Color(bodyColor));
  const startTime = useRef(null);
  if (nextCar === "models/car/MB-w2222/scene.gltf") {
    var x = 12;
    var y = 11;
  }
  if (nextCar === "models/car/MB-SL63/scene.gltf") {
    var x = 9;
    var y = 4;
  }

  useEffect(() => {
    if (group && group.children[x] && group.children[x].children[y]) {
      targetColor.current.set(bodyColor);
      startTime.current = performance.now();
    }
  }, [group, bodyColor]);

  useFrame(() => {
    if (!group || !group.children[x] || !group.children[x].children[y]) return;

    const material = group.children[x].children[y].material;
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
