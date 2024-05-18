import React from "react";

export const ControlPanel = ({ setHood, setHazard, setDayLight }) => {
  return (
    <>
      <div>
        <button onClick={() => setHood((prev) => !prev)}>Hood</button>
      </div>
      <div>
        <button onClick={() => setHazard((prev) => !prev)}>Hazrd</button>
      </div>
      <div>
        <button onClick={() => setDayLight((prev) => (prev === 0 ? 1 : 0))}>
          DayLight
        </button>
      </div>
    </>
  );
};
