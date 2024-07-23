import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CarShow } from "../components/CarShow";
import { ControlPanel } from "../components/ControlPanel";
import * as THREE from "three";
import { Loading } from "../components/shared/Loading";
import TopNav from "../components/layout/TopNav";
import { CarInfoCard } from "../components/carInfo/CarInfoCard";

const HomePage = () => {
  const [hood, setHood] = useState(false);
  const [trunk, setTrunk] = useState(false);
  const [fLDoor, setFLDoor] = useState(false);
  const [bodyColor, setBodyColor] = useState(new THREE.Color("#fff"));
  const [showColors, setShowColors] = useState(false);
  const [nextCar, setNextCar] = useState("models/car/MB-w2222/scene.gltf");
  const [selectedCar, setSelectedCar] = useState(
    "models/car/MB-w2222/scene.gltf"
  );
  const [showCarList, setShowCarList] = useState(false);
  const [moveForNextCar, setMoveForNextCar] = useState(false);
  const [hazard, setHazard] = useState(0);
  const [hazardToggle, setHazardToggle] = useState(false);
  const [dayLight, setDayLight] = useState(0);
  const [brakeLight, setBrakeLight] = useState(0);
  const [parkingLight, setParkingLight] = useState(0);
  const [wheelSpeed, setWheelSpeed] = useState(0);
  const [carPart, setCarPart] = useState("");
  return (
    <>
      <div>
        <TopNav />
      </div>
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
          setNextCar={setNextCar}
          setFLDoor={setFLDoor}
          wheelSpeed={wheelSpeed}
          setShowCarList={setShowCarList}
          showCarList={showCarList}
          setMoveForNextCar={setMoveForNextCar}
          setSelectedCar={setSelectedCar}
          setCarPart={setCarPart}
        />
      </div>
      {/* <div className="info-card-box mt-14">
        <CarInfoCard carPart={carPart} />
      </div> */}
      <Suspense fallback={<Loading loading={true} />}>
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
            nextCar={nextCar}
            setNextCar={setNextCar}
            fLDoor={fLDoor}
            setShowCarList={setShowCarList}
            showCarList={showCarList}
            moveForNextCar={moveForNextCar}
            selectedCar={selectedCar}
            setMoveForNextCar={setMoveForNextCar}
          />
        </Canvas>
      </Suspense>
    </>
  );
};

export default HomePage;
