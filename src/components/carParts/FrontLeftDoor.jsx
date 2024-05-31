import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useAnimations } from "@react-three/drei";

export const FrontLeftDoor = (gltf, fLDoor, group) => {
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const [mixer] = useState(() => new THREE.AnimationMixer());

  useEffect(() => {
    if (!actions) {
      console.warn("No actions found!");
      return;
    }

    const actionName = "sw222_door_FL_chrome_2_2_sw222_paint_0Action";
    const action = actions[actionName];
    if (action) {
      action.reset().setLoop(THREE.LoopOnce, 1);

      if (fLDoor) {
        action.timeScale = 1; // Play forward
        action.clampWhenFinished = true; // Ensure the animation remains at the last frame
        action.play();
        // setTimeout(() => {
        //   group.children[12].children[2].material.emissiveIntensity = 10; // Trunk Light
        // }, 1500);
      } else {
        action.timeScale = -1; // Play backward
        action.clampWhenFinished = true; // Ensure the animation remains at the first frame
        action.time = action.getClip().duration; // Set time to the end for reverse playback
        action.play();
      }

      return () => {
        action.stop();
      };
    } else {
      console.warn(`Action '${actionName}' not found!`);
    }
  }, [actions, fLDoor]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive object={gltf.scene} />;
};
