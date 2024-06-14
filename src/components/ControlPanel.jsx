import { useEffect, useState } from "react";
import { ColorsList } from "./colors/ColorsList";
import { ShowCarList } from "./allCars/ShowCarList";
export const ControlPanel = ({
  setHood,
  setDayLight,
  setBrakeLight,
  setParkingLight,
  setHazardToggle,
  setWheelSpeed,
  setTrunk,
  setBodyColor,
  setShowColors,
  showColors,
  setNextCar,
  setFLDoor,
  wheelSpeed,
  setShowCarList,
  showCarList,
  setMoveForNextCar,
  setSelectedCar,
}) => {
  // const Cars = ["S-Class-AMG-W222", "SL63-AMG"];
  // const nextCar= (i = 0)=>{
  //   i++;
  //   setNextCar(Cars[i])
  // }
  const [buttonDisabled, setButtonDisabled] = useState(false);

  return (
    <div className=" card-box mt-14">
      <div>
        <button className="btn" onClick={() => setHood((prev) => !prev)}>
          Hood
        </button>
      </div>
      <div>
        <button className="btn" onClick={() => setTrunk((prev) => !prev)}>
          Trunk
        </button>
      </div>
      <div>
        <button className="btn" onClick={() => setFLDoor((prev) => !prev)}>
          FL-Door
        </button>
      </div>
      <div>
        <button
          className="btn material-symbols-outlined text-red-600"
          onClick={() => setHazardToggle((prev) => !prev)}
        >
          <span>warning</span>{" "}
        </button>
      </div>
      <div>
        <button
          className="btn material-symbols-outlined"
          onClick={() => setShowColors((prev) => !prev)}
        >
          palette
        </button>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => setDayLight((prev) => (prev === 0 ? 10 : 0))}
        >
          Day Light
        </button>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => setBrakeLight((prev) => (prev === 0 ? 10 : 0))}
        >
          Brake Light
        </button>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => setParkingLight((prev) => (prev === 0 ? 10 : 0))}
        >
          Parking Light
        </button>
      </div>
      <div>
        <button
          className="btn material-symbols-outlined"
          onClick={() => {
            setButtonDisabled((prev) => !prev);
            setMoveForNextCar(false);
            setWheelSpeed((prev) => (prev === 0 ? 5 : 0));
          }}
        >
          <span>slow_motion_video</span>{" "}
        </button>
      </div>
      <div>
        <button
          disabled={buttonDisabled}
          className={`${buttonDisabled ? "btn-disabled" : "btn"}`}
          onClick={() => {
            setShowCarList((prev) => !prev);
          }}
        >
          Cars
        </button>
      </div>
      <ColorsList
        showColors={showColors}
        setBodyColor={setBodyColor}
        setShowColors={setShowColors}
      />
      <ShowCarList
        showCarList={showCarList}
        setNextCar={setNextCar}
        setFLDoor={setFLDoor}
        setButtonDisabled={setButtonDisabled}
        setHazardToggle={setHazardToggle}
        setHood={setHood}
        setTrunk={setTrunk}
        setWheelSpeed={setWheelSpeed}
        setMoveForNextCar={setMoveForNextCar}
        setSelectedCar={setSelectedCar}
      />
    </div>
  );
};
