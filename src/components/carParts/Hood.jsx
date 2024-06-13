import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useAnimations } from "@react-three/drei";

export const Hood = (gltf, hood, nextCar) => {
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const [mixer] = useState(() => new THREE.AnimationMixer());
  if (nextCar === "models/car/MB-w2222/scene.gltf") {
    var actionNames = ["sw222_hood_2013_sw222_paint_0Action"];
  }
  if (nextCar === "models/car/MB-SL63/scene.gltf") {
    var actionNames = ["SL63_hood_SL63_paint_0Action"];
  }

  useEffect(() => {
    if (!actions) {
      console.warn("No actions found!");
      return;
    }
    const action = actions[actionNames];
    if (action) {
      action.reset().setLoop(THREE.LoopOnce, 1);

      if (hood) {
        action.timeScale = 1; // Play forward
        action.clampWhenFinished = true; // Ensure the animation remains at the last frame
        action.play();
      } else {
        action.timeScale = -1; // Play backward
        action.clampWhenFinished = true; // Ensure the animation remains at the first frame
        action.time = action.getClip().duration; // Set time to the end for reverse playback
        action.play();
      }
    }

    return () => {
      action.stop();
    };
  }, [actions, hood]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive object={gltf.scene} />;
};
