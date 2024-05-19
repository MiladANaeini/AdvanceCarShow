import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Wheels = (group, wheelSpeed, setWheelSpeed) => {
  // Initialize currentSpeed outside the render cycle
  let currentSpeed = -0.1;

  // Update the target speed whenever the wheelSpeed prop changes
  useEffect(() => {}, [wheelSpeed]);
  useFrame((state, delta) => {
    currentSpeed = THREE.MathUtils.lerp(
      currentSpeed,
      wheelSpeed,
      0.5 * delta // Adjust the speed of the transition by changing the interpolation factor
    );
    let t = state.clock.getElapsedTime();
    const rotationSpeed = -t * currentSpeed;
    group.children[108].rotation.x = t * rotationSpeed;
    group.children[109].rotation.x = t * rotationSpeed;
    group.children[110].rotation.x = t * rotationSpeed;
    group.children[111].rotation.x = t * rotationSpeed;
    group.children[4].rotation.x = t * rotationSpeed;
    group.children[5].rotation.x = t * rotationSpeed;
    group.children[6].rotation.x = t * rotationSpeed;
    group.children[7].rotation.x = t * rotationSpeed;
  });

  return null;
};
