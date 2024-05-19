import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CarShow } from "../components/CarShow";
import { ControlPanel } from "../components/ControlPanel";

const HomePage = () => {
  const [hood, setHood] = useState(false);
  const [hazard, setHazard] = useState(0);
  const [hazardToggle, setHazardToggle] = useState(false);
  const [dayLight, setDayLight] = useState(0);
  const [brakeLight, setBrakeLight] = useState(0);
  const [parkingLight, setParkingLight] = useState(0);
  return (
    <Suspense fallback={null}>
      <ControlPanel
        setHood={setHood}
        setHazard={setHazard}
        setDayLight={setDayLight}
        setBrakeLight={setBrakeLight}
        setParkingLight={setParkingLight}
        setHazardToggle={setHazardToggle}
      />
      <Canvas shadows>
        <CarShow
          hood={hood}
          hazard={hazard}
          dayLight={dayLight}
          brakeLight={brakeLight}
          parkingLight={parkingLight}
          hazardToggle={hazardToggle}
          setHazard={setHazard}
          setHazardToggle={setHazardToggle}
        />
      </Canvas>
    </Suspense>
  );
};

export default HomePage;
