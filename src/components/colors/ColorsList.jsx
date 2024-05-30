export const ColorsList = ({ showColors, setBodyColor }) => {
  if (showColors) {
    return (
      <div className={`colors-card-box transition-transform transform mt-16`}>
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
