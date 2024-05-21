import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useAnimations } from "@react-three/drei";

export const Wheels = (gltf) => {
  const [mixer] = useState(() => new THREE.AnimationMixer());
  const { actions } = useAnimations(gltf.animations, gltf.scene);

  useEffect(() => {
    if (!actions) {
      console.warn("No actions found!");
      return;
    }

    const actionNames = [
      "Object_4.001_Scene_-_Root.001_0Action",
      "Object_4.002_Scene_-_Root.001_0Action",
      "Object_4.003_Scene_-_Root.001_0Action",
      "Object_4.004_Scene_-_Root.001_0Action",
      "sw222_wheel_amg_sw222_main_alt_2.028_0Action",
      "sw222_wheel_amg.001_sw222_main_alt_2.028_0Action",
      "sw222_wheel_amg.002_sw222_main_alt_2.028_0Action",
      "sw222_wheel_amg.003_sw222_main_alt_2.028_0Action",
    ];

    actionNames.forEach((actionName) => {
      const action = actions[actionName];
      console.log(`Attempting to play action: ${actionName}`, action);

      if (action) {
        action.enabled = true;
        action.reset();
        action.play();
      } else {
        console.warn(`Action not found: ${actionName}`);
      }
    });

    return () => {
      mixer.stopAllAction();
    };
  }, [actions, mixer, gltf.animations, gltf.scene]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return null;
};
