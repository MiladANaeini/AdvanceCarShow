import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Mesh } from "three";
import * as THREE from "three";

export const Car = ({ hood }) => {
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
      } else {
        currentRotationX = THREE.MathUtils.lerp(
          currentRotationX,
          originalRotationX,
          1.8 * delta
        );
        group.children[67].rotation.x = currentRotationX;
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
  console.log("gltf.scene", gltf.scene.children[0].children[0].children[0]);

  useEffect(() => {}, [hood]);

  return <primitive object={gltf.scene} />;
};
