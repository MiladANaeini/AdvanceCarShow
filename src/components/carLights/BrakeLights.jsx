import { useEffect } from "react";

export const BrakeLights = (group, brakeLight) => {
  useEffect(() => {
    group.children[99].children[0].material.emissiveIntensity = brakeLight; // brake lights
  }, [brakeLight]);
};
