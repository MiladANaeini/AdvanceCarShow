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
import { useEffect, useRef, useState } from "react";
import { MBLogo } from "./MBLogo";
import { useFrame } from "@react-three/fiber";
import { Vector3, Euler } from "three";

export const CarShow = ({
  hood,
  hazard,
  dayLight,
  brakeLight,
  parkingLight,
  setHazard,
  hazardToggle,
  setHazardToggle,
  wheelSpeed,
  setWheelSpeed,
  trunk,
  bodyColor,
  nextCar,
  fLDoor,
  setShowCarList,
  showCarList,
  moveForNextCar,
  selectedCar,
  setNextCar,
  setMoveForNextCar,
}) => {
  const cameraRef = useRef();
  const controlsRef = useRef();
  const [isMoving, setIsMoving] = useState(false);

  const hoodCameraPosition = new Vector3(0.8, 1.8, 4);
  const hoodCameraRotation = new Euler(
    -0.3477669878570154,
    0.185857209004103,
    0.06688610701996102
  );
  const trunkCameraPosition = new Vector3(-1.0122, 1.5995, -4.537925);
  const trunkCameraRotation = new Euler(
    -2.8729046946801473,
    -0.21182427105818852,
    -3.0837673935444663
  );

  const lerpEuler = (start, end, t) => {
    return new Euler(
      start.x + (end.x - start.x) * t,
      start.y + (end.y - start.y) * t,
      start.z + (end.z - start.z) * t
    );
  };

  // Update target position and rotation based on state changes
  const moveCamera = (targetPosition, targetRotation) => {
    if (cameraRef.current) {
      const camera = cameraRef.current;

      // Smoothly interpolate position and rotation
      camera.position.lerp(targetPosition, 0.1);
      camera.rotation.copy(lerpEuler(camera.rotation, targetRotation, 0.1));

      // Check if the camera has reached the target position and rotation
      const positionReached =
        camera.position.distanceTo(targetPosition) < 0.001;
      const rotationReached =
        Math.abs(camera.rotation.x - targetRotation.x) < 0.001 &&
        Math.abs(camera.rotation.y - targetRotation.y) < 0.001 &&
        Math.abs(camera.rotation.z - targetRotation.z) < 0.001;

      if (positionReached && rotationReached) {
        camera.position.copy(targetPosition); // Ensure exact position
        camera.rotation.copy(targetRotation); // Ensure exact rotation
        setIsMoving(false);
        controlsRef.current.enabled = true; // Re-enable controls after movement
      }
    }
  };
  useEffect(() => {
    if (hood && cameraRef.current) {
      setIsMoving(true);
      controlsRef.current.enabled = false; // Disable controls during movement
    }
  }, [hood]);

  useEffect(() => {
    if (trunk && cameraRef.current) {
      setIsMoving(true);
      controlsRef.current.enabled = false; // Disable controls during movement
    }
  }, [trunk]);

  useFrame(() => {
    if (isMoving) {
      if (hood) {
        moveCamera(hoodCameraPosition, hoodCameraRotation);
      } else if (trunk) {
        moveCamera(trunkCameraPosition, trunkCameraRotation);
      }
    }
  });

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
        enabled={!isMoving}
      />
      <PerspectiveCamera
        makeDefault
        fov={50}
        ref={cameraRef}
        position={[3, 2, 5]}
        rotation={[0, 0, 0]}
      />
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
        position={[3, 2, 3]}
        castShadow
        shadow-bias={-0.000005}
        shadow-mapSize-width={64}
        shadow-mapSize-height={64}
      />
      {/* logo light */}
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={40}
        angle={1.5}
        penumbra={0.5}
        position={[-8, 3, -2]}
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
            <Car
              hood={hood}
              trunk={trunk}
              hazard={hazard}
              dayLight={dayLight}
              brakeLight={brakeLight}
              parkingLight={parkingLight}
              setHazard={setHazard}
              hazardToggle={hazardToggle}
              setHazardToggle={setHazardToggle}
              wheelSpeed={wheelSpeed}
              setWheelSpeed={setWheelSpeed}
              bodyColor={bodyColor}
              nextCar={nextCar}
              fLDoor={fLDoor}
              setShowCarList={setShowCarList}
              showCarList={showCarList}
              moveForNextCar={moveForNextCar}
              selectedCar={selectedCar}
              setNextCar={setNextCar}
              setMoveForNextCar={setMoveForNextCar}
            />
          </>
        )}
      </CubeCamera>{" "}
      <LightPole />
      <MBLogo />
      <Ground />
    </>
  );
};
