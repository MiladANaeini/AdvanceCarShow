import React from "react";

export const ControlPanel = ({ setHood, setHazard, setDayLight }) => {
  return (
    <>
      <div>
        <button onClick={() => setHood((prev) => !prev)}>Hood</button>
      </div>
      <div>
        <button onClick={() => setHazard((prev) => (prev === 0 ? 10 : 0))}>
          Hazrd
        </button>
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
    </>
  );
};
