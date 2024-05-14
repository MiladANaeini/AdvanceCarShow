import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CarShow } from "../components/CarShow";

const HomePage = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
};

export default HomePage;
