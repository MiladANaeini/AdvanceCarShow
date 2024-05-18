import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Mesh } from "three";
import * as THREE from "three";
export const Car = ({ hood, hazard, dayLight }) => {
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
    // if (gltf) {
    //   gltf.scene.traverse((child) => {
    //     if (child.isMesh) {
    //       const material = child.material;
    //       if (material) {
    //         // Access the emissive property
    //         const emissiveColor = material.emissive;
    //         console.log("Emissive Color:", emissiveColor);

    //         // Optionally, modify the emissive color
    //         material.emissive = new THREE.Color(0xff0000); // Set emissive to red
    //         material.emissiveIntensity = 0; // Adjust intensity if needed
    //       }
    //     }
    //   });
    // }
    group.children[99].children[4].material.emissiveIntensity = 0;
    group.children[99].children[3].material.emissiveIntensity = 0;
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
    group.userData.RearLights = dayLight;
    console.log("group.userData.RearLights", group.userData.RearLights);
  }, [dayLight]);
  // bebin ba emmissive mishe karish kard?
  return <primitive object={gltf.scene} />;
};
