import { useEffect, useState } from "react";
import { ColorsList } from "./colors/ColorsList";
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
}) => {
  // const Cars = ["S-Class-AMG-W222", "SL63-AMG"];
  // const nextCar= (i = 0)=>{
  //   i++;
  //   setNextCar(Cars[i])
  // }
  const [buttonDisabled, setButtonDisabled] = useState(false);

  return (
    <div className=" card-box mt-2">
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
            setButtonDisabled((prev) => !prev),
              setWheelSpeed((prev) => (prev === 0 ? 10 : 0));
          }}
        >
          <span>slow_motion_video</span>{" "}
        </button>
      </div>
      {/* <div>
        <button
          disabled={buttonDisabled}
          className={`${buttonDisabled ? "btn-disabled" : "btn"}`}
          onClick={() => {
            setFLDoor(false),
              setButtonDisabled(true),
              setHazardToggle(false),
              setHood(false),
              setTrunk(false),
              setNextCar((prev) => !prev),
              setWheelSpeed(0.8);
          }}
        >
          Next Car
        </button>
      </div> */}
      <ColorsList
        showColors={showColors}
        setBodyColor={setBodyColor}
        setShowColors={setShowColors}
      />
    </div>
  );
};
