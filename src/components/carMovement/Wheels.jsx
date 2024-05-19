import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export const Wheels = ({ group, speed }) => {
  useFrame(
    (state, delta) => {
      let t = state.clock.getElapsedTime();

      group.children[108].rotation.x = t * speed;
      group.children[109].rotation.x = t * speed;
      group.children[110].rotation.x = t * speed;
      group.children[111].rotation.x = t * speed;
      group.children[4].rotation.x = t * speed;
      group.children[5].rotation.x = t * speed;
      group.children[6].rotation.x = t * speed;
      group.children[7].rotation.x = t * speed;
    },
    [speed]
  );
};
