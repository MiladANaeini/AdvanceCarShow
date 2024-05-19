import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export const Hood = (group, hood) => {
  const targetRotationX = -2.470796629741176;
  const originalRotationX = -1.570796629741176; // the original radian of the hood
  var currentRotationX = group.children[67].rotation.x;

  useFrame(
    (state, delta) => {
      if (hood) {
        currentRotationX = THREE.MathUtils.lerp(
          currentRotationX,
          targetRotationX,
          0.5 * delta // Adjust the speed of the transition by changing the interpolation factor
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
};
