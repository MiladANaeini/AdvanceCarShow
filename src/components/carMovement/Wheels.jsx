import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useAnimations } from "@react-three/drei";

export const Wheels = (gltf, wheelSpeed, nextCar) => {
  const [mixer] = useState(() => new THREE.AnimationMixer());
  const { actions } = useAnimations(gltf.animations, gltf.scene);

  if (nextCar === "models/car/MB-w2222/scene.gltf") {
    var actionNames = [
      "Object_4.001_Scene_-_Root.001_0Action",
      "Object_4.002_Scene_-_Root.001_0Action",
      "Object_4.003_Scene_-_Root.001_0Action",
      "Object_4.004_Scene_-_Root.001_0Action",
      "sw222_wheel_amg_sw222_main_alt_2.028_0Action",
      "sw222_wheel_amg.001_sw222_main_alt_2.028_0Action",
      "sw222_wheel_amg.002_sw222_main_alt_2.028_0Action",
      "sw222_wheel_amg.003_sw222_main_alt_2.028_0Action",
    ];
  }
  if (nextCar === "models/car/MB-SL63/scene.gltf") {
    var actionNames = [
      "Object_4.001_Scene_-_Root.002_0Action",
      "Object_4.002_Scene_-_Root.002_0Action",
      "Object_4.003_Scene_-_Root.002_0Action",
      "Object_4.004_Scene_-_Root.002_0Action",
      "SL63_wheel_SL63_black_0Action",
      "SL63_wheel_SL63_silver_0Action",
      "SL63_wheel.001_SL63_black_0Action",
      "SL63_wheel.001_SL63_silver_0Action",
      "SL63_wheel.002_SL63_black_0Action",
      "SL63_wheel.002_SL63_silver_0Action",
      "SL63_wheel.003_SL63_black_0Action",
      "SL63_wheel.003_SL63_silver_0Action",
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
