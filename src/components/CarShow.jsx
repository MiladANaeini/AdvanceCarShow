import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
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
        shadow-bias={-0.0001}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={300}
        angle={0.6}
        penumbra={0.5}
        position={[5, 4, 0]}
        castShadow
        shadow-bias={-0.0005}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={150}
        angle={1.5}
        penumbra={0.5}
        position={[3, 2, 4]}
        castShadow
        shadow-bias={-0.000005}
        shadow-mapSize-width={128}
        shadow-mapSize-height={128}
      />
      <EffectComposer>
        <DepthOfField
          focusDistance={0.0035}
          focalLength={0.01}
          bokehScale={0.1}
          height={480}
        />
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0.03} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={5} // blur kernel size
          luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.0005, 0.0012]} // color offset
        />
      </EffectComposer>
      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera>{" "}
      <LightPole />
      <Ground />
    </>
  );
};
