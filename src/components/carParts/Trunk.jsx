import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useAnimations } from "@react-three/drei";
export const Trunk = (gltf, trunk, group, nextCar) => {
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const [mixer] = useState(() => new THREE.AnimationMixer());
  if (nextCar === "models/car/MB-w2222/scene.gltf") {
    var actionNames = ["Trunk.001"];
  }
  if (nextCar === "models/car/MB-SL63/scene.gltf") {
    var actionNames = [
      "SL63_trunk_SL63_paint_0Action",
      "SL63_trunk_SL63_silver_0Action",
    ];
  }
  useEffect(() => {
    if (!actions) {
      console.warn("No actions found!");
      return;
    }
    const animationActions = actionNames.map((actionName) => {
      const action = actions[actionName];
      if (action) {
        action.reset().setLoop(THREE.LoopOnce, 1);

        if (trunk) {
          action.timeScale = 1; // Play forward
          action.clampWhenFinished = true; // Ensure the animation remains at the last frame
          action.play();
          if (nextCar === "models/car/MB-w2222/scene.gltf") {
            setTimeout(() => {
              group.children[12].children[2].material.emissiveIntensity = 10; // Trunk Light
            }, 1500);
          }
        } else {
          action.timeScale = -1; // Play backward
          action.clampWhenFinished = true; // Ensure the animation remains at the first frame
          action.time = action.getClip().duration; // Set time to the end for reverse playback
          if (nextCar === "models/car/MB-w2222/scene.gltf") {
            group.children[12].children[2].material.emissiveIntensity = 0; // Trunk Light
          }
          action.play();
        }
      }
    });
    return () => {
      animationActions.forEach((action) => {
        if (action) action.stop();
      });
    };
  }, [actions, trunk]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive object={gltf.scene} />;
};
