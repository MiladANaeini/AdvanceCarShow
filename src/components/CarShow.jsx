import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Ground } from "./Ground";
import { Car } from "./Car";
import { LightPole } from "./LightPole";
export const CarShow = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color args={[0, 0, 0]} attach={"background"} />
      <spotLight
        color={[1, 0.25, 0, 7]}
        intensity={300}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, -5]}
        castShadow
        shadowBias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={300}
        angle={0.6}
        penumbra={0.5}
        position={[5, 4, 0]}
        castShadow
        shadowBias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={150}
        angle={1.5}
        penumbra={0.5}
        position={[3, 2, 4]}
        castShadow
        shadowBias={-0.0001}
      />
      <Car />
      <LightPole />
      <Ground />
    </>
  );
};
