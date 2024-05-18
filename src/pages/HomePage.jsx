import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CarShow } from "../components/CarShow";
import { ControlPanel } from "../components/ControlPanel";

const HomePage = () => {
  const [hood, setHood] = useState(false);
  const [hazard, setHazard] = useState(0);
  const [dayLight, setDayLight] = useState(0);
  return (
    <Suspense fallback={null}>
      <ControlPanel
        setHood={setHood}
        setHazard={setHazard}
        setDayLight={setDayLight}
      />
      <Canvas shadows>
        <CarShow hood={hood} hazard={hazard} dayLight={dayLight} />
      </Canvas>
    </Suspense>
  );
};

export default HomePage;
