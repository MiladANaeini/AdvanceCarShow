import { useEffect } from "react";
import { Mesh } from "three";

export const CarGTLFLoader = (gltf, group) => {
  useEffect(() => {
    gltf.scene.scale.set(1, 1, 1);
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
    group.children[99].children[0].material.emissiveIntensity = 0; // brake lights

    group.children[99].children[4].material.emissiveIntensity = 0; // parking lights
    group.children[99].children[3].material.emissiveIntensity = 0; // parking lights

    group.children[99].children[2].material.emissiveIntensity = 0; // rear Hazard lights
    group.children[78].children[5].material.emissiveIntensity = 0; // Left mirror and front left light Hazard lights
    group.children[79].children[5].material.emissiveIntensity = 0; // right mirror Hazard lights
    group.children[62].children[2].material.emissiveIntensity = 0; // front right small Hazard lights
    group.children[64].children[2].material.emissiveIntensity = 0; // front Right Hazard

    group.children[63].children[4].material.emissiveIntensity = 0; // Left Daylight
    group.children[64].children[0].material.emissiveIntensity = 0; // Right DayLight
    group.children[64].children[6].material.emissiveIntensity = 0; // Right DayLight
  }, [gltf]);
};
