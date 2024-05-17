import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CarShow } from "../components/CarShow";
import { ControlPanel } from "../components/ControlPanel";

const HomePage = () => {
  const [hood, setHood] = useState(false);
  console.log("hood", hood);
  return (
    <Suspense fallback={null}>
      <ControlPanel setHood={setHood} />
      <Canvas shadows>
        <CarShow hood={hood} />
      </Canvas>
    </Suspense>
  );
};

export default HomePage;
