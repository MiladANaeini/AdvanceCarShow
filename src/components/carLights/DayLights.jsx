import { useEffect } from "react";

export const DayLights = (group, dayLight, nextCar) => {
  useEffect(() => {
    if (nextCar === "models/car/MB-w2222/scene.gltf") {
      group.children[63].children[4].material.emissiveIntensity = dayLight; // Left Daylight
      group.children[63].children[0].material.emissiveIntensity = dayLight; // Right DayLight
      group.children[63].children[6].material.emissiveIntensity = dayLight; // Right DayLight
    }
    if (nextCar === "models/car/MB-SL63/scene.gltf") {
      group.children[43].children[2].material.emissiveIntensity = dayLight; // running Lights
    }
  }, [dayLight]);
};
