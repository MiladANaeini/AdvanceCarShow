import { useEffect } from "react";

export const ParkingLights = (group, parkingLight) => {
  useEffect(() => {
    group.children[99].children[4].material.emissiveIntensity = parkingLight; // parking Lights
    group.children[99].children[3].material.emissiveIntensity = parkingLight; // parking Lights
  }, [parkingLight]);
};
