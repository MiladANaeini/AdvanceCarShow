import React from "react";

export const ControlPanel = ({ setHood }) => {
  return (
    <div>
      <button onClick={() => setHood((prev) => !prev)}>Hood</button>
    </div>
  );
};
