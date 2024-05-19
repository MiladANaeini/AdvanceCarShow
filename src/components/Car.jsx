import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Mesh } from "three";
import * as THREE from "three";
export const Car = ({
  hood,
  hazard,
  dayLight,
  parkingLight,
  brakeLight,
  setHazard,
  hazardToggle,
}) => {
  const gltf = useLoader(GLTFLoader, "models/car/MB-w2222/scene.gltf");

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
    // group.children[61].children[2].material.emissiveIntensity = 0; // front left small Hazard lights
    group.children[62].children[2].material.emissiveIntensity = 0; // front right small Hazard lights
    group.children[64].children[2].material.emissiveIntensity = 0; // front Right Hazard

    group.children[63].children[4].material.emissiveIntensity = 0; // Left Daylight
    group.children[64].children[0].material.emissiveIntensity = 0; // Right DayLight
    group.children[64].children[6].material.emissiveIntensity = 0; // Right DayLight
  }, [gltf]);

  const group = gltf.scene.children[0].children[0].children[0];
  const targetRotationX = -2.470796629741176;
  const originalRotationX = -1.570796629741176; // the original radian of the hood
  var currentRotationX = group.children[67].rotation.x;

  useFrame(
    (state, delta) => {
      if (hood) {
        currentRotationX = THREE.MathUtils.lerp(
          currentRotationX,
          targetRotationX,
          1.8 * delta // Adjust the speed of the transition by changing the interpolation factor
        );
        group.children[67].rotation.x = currentRotationX;
        return;
      } else {
        currentRotationX = THREE.MathUtils.lerp(
          currentRotationX,
          originalRotationX,
          1.8 * delta
        );
        group.children[67].rotation.x = currentRotationX;
        return;
      }
    },
    [hood]
  );

  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime();

    group.children[108].rotation.x = t * 2;
    group.children[109].rotation.x = t * 2;
    group.children[110].rotation.x = t * 2;
    group.children[111].rotation.x = t * 2;
    group.children[4].rotation.x = t * 2;
    group.children[5].rotation.x = t * 2;
    group.children[6].rotation.x = t * 2;
    group.children[7].rotation.x = t * 2;
  });
  // console.log("gltf.scene", gltf.scene.children[0].children[0].children[0]);
  console.log(
    "group.userData.Flasher",
    gltf.scene.children[0].children[0].children[0]
  );
  useEffect(() => {
    group.children[99].children[4].material.emissiveIntensity = parkingLight; // parking Lights
    group.children[99].children[3].material.emissiveIntensity = parkingLight; // parking Lights
  }, [parkingLight]);
  useEffect(() => {
    group.children[99].children[0].material.emissiveIntensity = brakeLight; // brake lights
  }, [brakeLight]);
  useEffect(() => {
    group.children[63].children[4].material.emissiveIntensity = dayLight; // Left Daylight
    group.children[64].children[0].material.emissiveIntensity = dayLight; // Right DayLight
    group.children[64].children[6].material.emissiveIntensity = dayLight; // Right DayLight
  }, [dayLight]);
  console.log("hazard", hazard);
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

  return <primitive object={gltf.scene} />;
};
