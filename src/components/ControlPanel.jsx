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
}) => {
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
          onClick={() => setWheelSpeed((prev) => (prev === 0 ? 10 : 0))}
        >
          <span>slow_motion_video</span>{" "}
        </button>
      </div>
      {/* <div>
        <button
          className="btn"
          onClick={() => {
            setNextCar((prev) => !prev),
              setWheelSpeed((prev) => (prev === 0 ? 10 : 0));
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
