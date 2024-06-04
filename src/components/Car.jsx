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
import { useEffect } from "react";
import { FrontLeftDoor } from "./carParts/FrontLeftDoor";

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
}) => {
  const gltf = useLoader(GLTFLoader, "models/car/MB-w2222/scene.gltf");
  const group = gltf.scene.children[0].children[0].children[0];
  CarGTLFLoader(gltf, group, nextCar, setWheelSpeed);

  Hood(gltf, hood);
  Trunk(gltf, trunk, group);
  FrontLeftDoor(gltf, fLDoor, group);
  BodyColor(group, bodyColor);

  Wheels(gltf, wheelSpeed);
  console.log("gltf", gltf.scene.children[0].children[0].children[0]);
  // console.log("gltf", gltf);

  ParkingLights(group, parkingLight);
  BrakeLights(group, brakeLight);
  DayLights(group, dayLight);
  useHazardLights({ hazardToggle, setHazard, group, hazard });

  return <>{gltf ? <primitive object={gltf.scene} /> : null}</>;
};
