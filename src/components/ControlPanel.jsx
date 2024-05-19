import React from "react";

export const ControlPanel = ({
  setHood,
  setDayLight,
  setBrakeLight,
  setParkingLight,
  setHazardToggle,
  setWheelSpeed,
}) => {
  return (
    <>
      <div>
        <button onClick={() => setHood((prev) => !prev)}>Hood</button>
      </div>
      <div>
        <button onClick={() => setHazardToggle((prev) => !prev)}>Hazrd</button>
      </div>
      <div>
        <button onClick={() => setDayLight((prev) => (prev === 0 ? 10 : 0))}>
          Day Light
        </button>
      </div>
      <div>
        <button onClick={() => setBrakeLight((prev) => (prev === 0 ? 10 : 0))}>
          Brake Light
        </button>
      </div>
      <div>
        <button
          onClick={() => setParkingLight((prev) => (prev === 0 ? 10 : 0))}
        >
          Parking Light
        </button>
      </div>
      <div>
        <button onClick={() => setWheelSpeed((prev) => (prev === 0 ? 10 : 0))}>
          Speed
        </button>
      </div>
    </>
  );
};
