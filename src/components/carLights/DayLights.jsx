import { useEffect } from "react";

export const DayLights = (group, dayLight) => {
  useEffect(() => {
    group.children[63].children[4].material.emissiveIntensity = dayLight; // Left Daylight
    group.children[64].children[0].material.emissiveIntensity = dayLight; // Right DayLight
    group.children[64].children[6].material.emissiveIntensity = dayLight; // Right DayLight
  }, [dayLight]);
};
