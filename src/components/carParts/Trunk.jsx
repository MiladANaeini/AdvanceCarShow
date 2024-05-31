import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useAnimations } from "@react-three/drei";
export const Trunk = (gltf, trunk, group) => {
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const [mixer] = useState(() => new THREE.AnimationMixer());
  useEffect(() => {
    if (!actions) {
      console.warn("No actions found!");
      return;
    }
    const actionName = "Trunk.001";
    const action = actions[actionName];
    if (action) {
      action.reset().setLoop(THREE.LoopOnce, 1);

      if (trunk) {
        action.timeScale = 1; // Play forward
        action.clampWhenFinished = true; // Ensure the animation remains at the last frame
        action.play();
        setTimeout(() => {
          group.children[12].children[2].material.emissiveIntensity = 10; // Trunk Light
        }, 1500);
      } else {
        action.timeScale = -1; // Play backward
        action.clampWhenFinished = true; // Ensure the animation remains at the first frame
        action.time = action.getClip().duration; // Set time to the end for reverse playback
        group.children[12].children[2].material.emissiveIntensity = 0; // Trunk Light
        action.play();
      }

      return () => {
        action.stop();
      };
    } else {
      console.warn(`Action '${actionName}' not found!`);
    }
  }, [actions, trunk]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive object={gltf.scene} />;
};
