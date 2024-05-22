import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useAnimations } from "@react-three/drei";

export const Wheels = (gltf, wheelSpeed) => {
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

    const animationActions = actionNames.map((actionName) => {
      const action = actions[actionName];
      if (action) {
        action.reset();
        action.play();
      } else {
        console.warn(`Action not found: ${actionName}`);
      }
      return action;
    });

    return () => {
      animationActions.forEach((action) => {
        if (action) action.stop();
      });
    };
  }, [actions, gltf.animations, gltf.scene]);

  useEffect(() => {
    if (mixer && actions) {
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
        if (action) {
          const currentSpeed = action.timeScale;
          const targetSpeed = wheelSpeed;
          const easingDuration = 2; // Duration of easing in seconds

          let startTime = null;
          const updateSpeed = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsedTime = (timestamp - startTime) / 1000; // Convert milliseconds to seconds
            const progress = Math.min(elapsedTime / easingDuration, 1);
            const easedSpeed =
              cubicEaseInOut(progress) * (targetSpeed - currentSpeed) +
              currentSpeed;
            action.timeScale = easedSpeed;

            if (progress < 1) {
              requestAnimationFrame(updateSpeed);
            } else {
              action.timeScale = targetSpeed;
            }
          };

          requestAnimationFrame(updateSpeed);
        }
      });
    }
  }, [wheelSpeed]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return null;
};

// Cubic easing function
function cubicEaseInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
