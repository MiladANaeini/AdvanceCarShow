import { useEffect } from "react";

export const BrakeLights = (group, brakeLight, nextCar) => {
  useEffect(() => {
    if (nextCar === "models/car/MB-w2222/scene.gltf") {
      group.children[96].children[0].material.emissiveIntensity = brakeLight; // brake lights
    }
    if (nextCar === "models/car/MB-SL63/scene.gltf") {
      group.children[83].children[1].material.emissiveIntensity = brakeLight; // brake Lights
    }
  }, [brakeLight]);
};
