import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CarShow } from "../components/CarShow";
import { ControlPanel } from "../components/ControlPanel";
import * as THREE from "three";

const HomePage = () => {
  const [hood, setHood] = useState(false);
  const [trunk, setTrunk] = useState(false);
  const [bodyColor, setBodyColor] = useState(new THREE.Color("#fff"));
  const [showColors, setShowColors] = useState(false);
  const [hazard, setHazard] = useState(0);
  const [hazardToggle, setHazardToggle] = useState(false);
  const [dayLight, setDayLight] = useState(0);
  const [brakeLight, setBrakeLight] = useState(0);
  const [parkingLight, setParkingLight] = useState(0);
  const [wheelSpeed, setWheelSpeed] = useState(0);

  return (
    <Suspense fallback={null}>
      <div className="flex justify-center">
        <ControlPanel
          setHood={setHood}
          setTrunk={setTrunk}
          setHazard={setHazard}
          setDayLight={setDayLight}
          setBrakeLight={setBrakeLight}
          setParkingLight={setParkingLight}
          setHazardToggle={setHazardToggle}
          setWheelSpeed={setWheelSpeed}
          setBodyColor={setBodyColor}
          setShowColors={setShowColors}
          showColors={showColors}
        />
      </div>
      <Canvas shadows>
        <CarShow
          hood={hood}
          bodyColor={bodyColor}
          trunk={trunk}
          hazard={hazard}
          dayLight={dayLight}
          brakeLight={brakeLight}
          parkingLight={parkingLight}
          hazardToggle={hazardToggle}
          setHazard={setHazard}
          setHazardToggle={setHazardToggle}
          setWheelSpeed={setWheelSpeed}
          wheelSpeed={wheelSpeed}
        />
      </Canvas>
    </Suspense>
  );
};

export default HomePage;
