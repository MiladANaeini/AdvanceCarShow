import { useEffect } from "react";

export const ParkingLights = (group, parkingLight, nextCar) => {
  useEffect(() => {
    if (nextCar === "models/car/MB-w2222/scene.gltf") {
      group.children[96].children[4].material.emissiveIntensity = parkingLight; // parking Lights
      group.children[96].children[3].material.emissiveIntensity = parkingLight; // parking Lights
    }
    if (nextCar === "models/car/MB-SL63/scene.gltf") {
      group.children[83].children[5].material.emissiveIntensity = parkingLight; // parking Lights
      // group.children[83].children[0].material.emissiveIntensity = parkingLight; // parking Lights
    }
  }, [parkingLight]);
};
