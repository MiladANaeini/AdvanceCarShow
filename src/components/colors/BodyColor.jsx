import { useEffect } from "react";
import * as THREE from "three";

export const BodyColor = (group, bodyColor) => {
  const black = new THREE.Color(0, 0, 0);

  useEffect(() => {
    if (group && group.children[12] && group.children[12].children[11]) {
      const material = group.children[12].children[11].material;
      if (material) {
        material.color.set(new THREE.Color(bodyColor)); // Set to black if `bodyColor` is true, white if false
        material.needsUpdate = true; // Ensure the material updates
      }
    }
  }, [group, bodyColor]);

  return null;
};
