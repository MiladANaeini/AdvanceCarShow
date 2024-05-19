import { useEffect } from "react";

export const useHazardLights = ({ hazardToggle, setHazard, hazard, group }) => {
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
      group.children[99].children[2].material.emissiveIntensity = hazard; // rear Hazard lights
      group.children[78].children[5].material.emissiveIntensity = hazard; // Left mirror and front left light Hazard lights
      group.children[79].children[5].material.emissiveIntensity = hazard; // right mirror Hazard lights
      group.children[62].children[2].material.emissiveIntensity = hazard; // front right small Hazard lights
      group.children[64].children[2].material.emissiveIntensity = hazard; // front Right Hazard
    }, [hazard]);
  }
};
