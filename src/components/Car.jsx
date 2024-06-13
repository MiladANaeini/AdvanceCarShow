import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useHazardLights } from "./carLights/useHazardLights";
import { CarGTLFLoader } from "./CarGTLFLoader";
import { DayLights } from "./carLights/DayLights";
import { BrakeLights } from "./carLights/BrakeLights";
import { ParkingLights } from "./carLights/ParkingLights";
import { Wheels } from "./carMovement/Wheels";
import { Hood } from "./carParts/Hood";
import { Trunk } from "./carParts/Trunk";
import { BodyColor } from "./colors/BodyColor";
import { Suspense } from "react";
import { FrontLeftDoor } from "./carParts/FrontLeftDoor";
import { Loading } from "../components/shared/Loading";

export const Car = ({
  hood,
  hazard,
  dayLight,
  parkingLight,
  brakeLight,
  setHazard,
  hazardToggle,
  trunk,
  wheelSpeed,
  fLDoor,
  bodyColor,
  nextCar,
  setWheelSpeed,
  setShowCarList,
  showCarList,
  moveForNextCar,
  selectedCar,
  setNextCar,
  setMoveForNextCar,
}) => {
  const gltf = useLoader(GLTFLoader, nextCar);
  const group = gltf.scene.children[0].children[0].children[0];
  CarGTLFLoader(
    gltf,
    group,
    nextCar,
    setWheelSpeed,
    moveForNextCar,
    selectedCar,
    setNextCar,
    setMoveForNextCar
  );

  Hood(gltf, hood, nextCar);
  Trunk(gltf, trunk, group, nextCar);
  FrontLeftDoor(gltf, fLDoor, group, nextCar);
  BodyColor(group, bodyColor);

  Wheels(gltf, wheelSpeed, nextCar, setMoveForNextCar);
  console.log("gltf", gltf.scene.children[0].children[0].children[0]);
  console.log("gltf", gltf);

  ParkingLights(group, parkingLight);
  BrakeLights(group, brakeLight);
  DayLights(group, dayLight);
  useHazardLights({ hazardToggle, setHazard, group, hazard });

  return (
    <>
      <Suspense fallback={<Loading loading={true} />}>
        {gltf ? <primitive object={gltf.scene} /> : null}
      </Suspense>
    </>
  );
};
