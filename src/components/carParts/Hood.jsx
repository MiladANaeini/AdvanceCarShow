import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useAnimations } from "@react-three/drei";

export const Hood = (gltf, hood) => {
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const [mixer] = useState(() => new THREE.AnimationMixer());

  useEffect(() => {
    if (!actions) {
      console.warn("No actions found!");
      return;
    }

    const actionName = "sw222_hood_2013_sw222_paint_0Action";
    const action = actions[actionName];
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

      return () => {
        action.stop();
      };
    } else {
      console.warn(`Action '${actionName}' not found!`);
    }
  }, [actions, hood]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive object={gltf.scene} />;
};
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";

// export const Hood = (group, hood) => {
//   const targetRotationX = -2.470796629741176;
//   const originalRotationX = -1.570796629741176; // the original radian of the hood
//   var currentRotationX = group.children[67].rotation.x;

//   useFrame(
//     (state, delta) => {
//       if (hood) {
//         currentRotationX = THREE.MathUtils.lerp(
//           currentRotationX,
//           targetRotationX,
//           0.5 * delta // Adjust the speed of the transition by changing the interpolation factor
//         );
//         group.children[67].rotation.x = currentRotationX;
//         return;
//       } else {
//         currentRotationX = THREE.MathUtils.lerp(
//           currentRotationX,
//           originalRotationX,
//           1.8 * delta
//         );
//         group.children[67].rotation.x = currentRotationX;
//         return;
//       }
//     },
//     [hood]
//   );
// };
