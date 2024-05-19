import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Mesh } from "three";
import * as THREE from "three";
import { useHazardLights } from "./carLights/useHazardLights";
import { CarGTLFLoader } from "./CarGTLFLoader";
import { DayLights } from "./carLights/DayLights";
import { BrakeLights } from "./carLights/BrakeLights";
import { ParkingLights } from "./carLights/ParkingLights";
import { Wheels } from "./carMovement/Wheels";
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
  // const [speed, setSpeed] = useState(20);
  const group = gltf.scene.children[0].children[0].children[0];
  CarGTLFLoader(gltf, group);
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

  Wheels({ group, speed: 2 });
  // console.log("gltf.scene", gltf.scene.children[0].children[0].children[0]);

  ParkingLights(group, parkingLight);
  BrakeLights(group, brakeLight);
  DayLights(group, dayLight);
  useHazardLights({ hazardToggle, setHazard, group, hazard });

  return <primitive object={gltf.scene} />;
};
