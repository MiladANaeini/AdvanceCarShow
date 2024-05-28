import { useFrame } from "@react-three/fiber";

export const SpawnCars = () => {
  useFrame((state, delta) => {
    let elapsed = state.clock.getElapsedTime();

    let mesh = itemsRef.current[i];
    let z = ((elapsed * 0.4) % 3.5) * 2;
    const x = xAxis;
    let dist = Math.abs(z);
    mesh.rotation.set(0, 0, Math.PI / 2);
    mesh.position.set(x, 2.3, z);
    mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);
  });
};
