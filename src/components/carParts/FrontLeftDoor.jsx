import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useAnimations } from "@react-three/drei";

export const FrontLeftDoor = (gltf, fLDoor, group, nextCar) => {
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const [mixer] = useState(() => new THREE.AnimationMixer());

  if (nextCar === "models/car/MB-w2222/scene.gltf") {
    var actionNames = ["sw222_door_FL_chrome_2_2_sw222_paint_0Action"];
  }
  if (nextCar === "models/car/MB-SL63/scene.gltf") {
    var actionNames = ["SL63_door_L_SL63_paint_0Action"];
  }

  useEffect(() => {
    if (!actions) {
      console.warn("No actions found!");
      return;
    }

    const action = actions[actionNames];
    if (action) {
      action.reset().setLoop(THREE.LoopOnce, 1);

      if (fLDoor) {
        action.timeScale = 1; // Play forward
        action.clampWhenFinished = true; // Ensure the animation remains at the last frame
        action.play();
        if (nextCar === "models/car/MB-w2222/scene.gltf") {
          setTimeout(() => {
            group.children[19].children[0].material.emissiveIntensity = 1; // Dash Screen Light
            group.children[19].children[10].material.emissiveIntensity = 10; // Dash Screen Trunk Light
          }, 1500);
        }
      } else {
        action.timeScale = -1; // Play backward
        action.clampWhenFinished = true; // Ensure the animation remains at the first frame
        if (nextCar === "models/car/MB-w2222/scene.gltf") {
          group.children[19].children[0].material.emissiveIntensity = 0; // Dash Screen Light
          group.children[19].children[10].material.emissiveIntensity = 0; // Dash Screen Trunk Light
        }
        action.time = action.getClip().duration; // Set time to the end for reverse playback
        action.play();
      }

      return () => {
        action.stop();
      };
    } else {
      console.warn(`Action '${actionNames}' not found!`);
    }
  }, [actions, fLDoor]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive object={gltf.scene} />;
};
