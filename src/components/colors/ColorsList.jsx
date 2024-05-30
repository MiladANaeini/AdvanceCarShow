import { useEffect, useRef } from "react";

export const ColorsList = ({
  showColors,
  setBodyColor,
  paletteButtonRef,
  setShowColors,
}) => {
  const paletteButtonPosition =
    paletteButtonRef.current?.getBoundingClientRect();
  console.log("showColors", showColors);
  if (showColors) {
    return (
      <div
        className={`colors-card-box transition-transform transform`}
        style={{
          position: "absolute",
          top: paletteButtonPosition.bottom + window.scrollY - 25,
          left: paletteButtonPosition.left + window.scrollX - 50,
        }}
      >
        {" "}
        <div
          className="car-colors bg-black"
          onClick={() => setBodyColor("#000")}
        />
        <div
          className="car-colors bg-gray-100"
          onClick={() => setBodyColor("#fff")}
        />
        <div
          className="car-colors bg-gray-500"
          onClick={() => setBodyColor("#78716c")}
        />
        <div
          className="car-colors bg-stone-800"
          onClick={() => setBodyColor("#292524")}
        />
      </div>
    );
  }
};
