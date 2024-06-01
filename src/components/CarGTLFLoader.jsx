import { useEffect, useRef } from "react";
import { Mesh, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

export const CarGTLFLoader = (gltf, group, nextCar) => {
  const targetPosition = useRef(new Vector3(0, -0.035, 0));
  const currentPosition = useRef(new Vector3(0, -0.035, 0));
  const lerpFactor = useRef(0); // Factor for easing
  const speed = 0.045; // Adjust speed as needed

  const cubicEaseInOut = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };
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

    group.children[96].children[0].material.emissiveIntensity = 0; // brake lights

    group.children[96].children[4].material.emissiveIntensity = 0; // parking lights
    group.children[96].children[3].material.emissiveIntensity = 0; // parking lights

    group.children[96].children[2].material.emissiveIntensity = 0; // rear Hazard lights
    group.children[22].children[0].children[19].material.emissiveIntensity = 0; // Left mirror and front left light Hazard lights
    group.children[76].children[5].material.emissiveIntensity = 0; // right mirror Hazard lights
    group.children[60].children[2].material.emissiveIntensity = 0; // front right small Hazard lights
    group.children[63].children[2].material.emissiveIntensity = 0; // front Right Hazard

    group.children[63].children[4].material.emissiveIntensity = 0; // Left Daylight
    group.children[63].children[0].material.emissiveIntensity = 0; // Right DayLight
    group.children[63].children[6].material.emissiveIntensity = 0; // Right DayLight

    group.children[12].children[2].material.emissiveIntensity = 0; // Trunk Light
    group.children[19].children[0].material.emissiveIntensity = 0; // Dash screen
    group.children[19].children[10].material.emissiveIntensity = 0; // Dash screen
  }, [gltf]);

  useEffect(() => {
    // Change target position based on nextCar state
    setTimeout(() => {
      targetPosition.current = nextCar
        ? new Vector3(0, -0.035, 15)
        : new Vector3(0, -0.035, 0);
      lerpFactor.current = 0; // Reset lerp factor for easing
    }, 100);
  }, [nextCar]);

  useFrame((state, delta) => {
    // Increase lerp factor based on the speed
    lerpFactor.current = Math.min(1, lerpFactor.current + speed * delta);
    const easedLerpFactor = cubicEaseInOut(lerpFactor.current);
    // Smoothly transition the car's position towards the target position with easing
    currentPosition.current.lerpVectors(
      currentPosition.current,
      targetPosition.current,
      easedLerpFactor
    );
    gltf.scene.position.copy(currentPosition.current);
  });
};
