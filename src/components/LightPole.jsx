import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color } from "three";

export const LightPole = ({ xAxis = 0 }) => {
  const itemsRef = useRef([]);

  useFrame((state, delta) => {
    let elapsed = state.clock.getElapsedTime();

    for (let i = 0; i < itemsRef.current.length; i++) {
      let mesh = itemsRef.current[i];
      let z = (i - 7) * 3.5 + ((elapsed * 0.4) % 3.5) * 2;
      const x = xAxis;
      let dist = Math.abs(z);
      mesh.rotation.set(0, 0, Math.PI / 2);
      mesh.material.metalness = 0.1;
      mesh.material.roughness = 0.5;
      mesh.position.set(x, 2.3, -z);
      mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

      let colorScale = 1;
      if (dist > 2) {
        colorScale = 1 - (Math.min(dist, 12) - 2) / 10;
      }
      colorScale *= 0.5;

      if (i % 2 == 1) {
        mesh.material.emissive = new Color(1, 0.25, 0).multiplyScalar(
          colorScale
        );
      } else {
        mesh.material.emissive = new Color(0.14, 0.5, 1).multiplyScalar(
          colorScale
        );
      }
    }
  });

  const myLightPole = Array(14).fill(0);
  return (
    <>
      {myLightPole.map((v, i) => (
        <mesh
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
        >
          <cylinderGeometry args={[0.03, 0.03, 10, 16]} />
          <meshStandardMaterial
            emissive={[0, 0, 0]}
            color={[0, 0, 0]}
            metalness={0.5}
            roughness={0.5}
          />
        </mesh>
      ))}
    </>
  );
};
