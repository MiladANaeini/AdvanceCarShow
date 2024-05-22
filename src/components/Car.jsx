import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useHazardLights } from "./carLights/useHazardLights";
import { CarGTLFLoader } from "./CarGTLFLoader";
import { DayLights } from "./carLights/DayLights";
import { BrakeLights } from "./carLights/BrakeLights";
import { ParkingLights } from "./carLights/ParkingLights";
import { Wheels } from "./carMovement/Wheels";
import { Hood } from "./carParts/Hood";
export const Car = ({
  hood,
  hazard,
  dayLight,
  parkingLight,
  brakeLight,
  setHazard,
  hazardToggle,
  setWheelSpeed,
  wheelSpeed,
}) => {
  const gltf = useLoader(GLTFLoader, "models/car/MB-w2222/scene.gltf");
  const group = gltf.scene.children[0].children[0].children[0];
  CarGTLFLoader(gltf, group);

  Hood(gltf, hood);

  Wheels(gltf, wheelSpeed);
  console.log("gltf", gltf.scene.children[0].children[0].children[0]);
  console.log("gltf", gltf);

  ParkingLights(group, parkingLight);
  BrakeLights(group, brakeLight);
  DayLights(group, dayLight);
  useHazardLights({ hazardToggle, setHazard, group, hazard });

  return <primitive object={gltf.scene} />;
};
