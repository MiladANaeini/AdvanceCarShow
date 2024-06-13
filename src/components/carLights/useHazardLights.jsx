import { useEffect } from "react";

export const useHazardLights = ({
  hazardToggle,
  setHazard,
  hazard,
  group,
  nextCar,
}) => {
  if (group) {
    useEffect(() => {
      let interval;
      if (hazardToggle) {
        interval = setInterval(() => {
          setHazard((prev) => (prev === 0 ? 10 : 0));
        }, 500);
      } else {
        setHazard(0);
      }
      return () => clearInterval(interval);
    }, [hazardToggle]);

    useEffect(() => {
      if (nextCar === "models/car/MB-w2222/scene.gltf") {
        group.children[96].children[2].material.emissiveIntensity = hazard; // rear Hazard lights
        group.children[22].children[0].children[19].material.emissiveIntensity =
          hazard; // Left mirror and front left light Hazard lights
        group.children[76].children[5].material.emissiveIntensity = hazard; // right mirror Hazard lights
        group.children[60].children[2].material.emissiveIntensity = hazard; // front right small Hazard lights
        group.children[63].children[2].material.emissiveIntensity = hazard; // front Right Hazard
      }
      if (nextCar === "models/car/MB-SL63/scene.gltf") {
        group.children[43].children[5].material.emissiveIntensity = hazard; // front and mirrors Hazard lights
        group.children[83].children[6].material.emissiveIntensity = hazard; // front and mirrors Hazard lights
      }
    }, [hazard]);
  }
};
