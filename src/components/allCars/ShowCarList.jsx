export const ShowCarList = ({
  showCarList,
  setNextCar,
  setFLDoor,
  setButtonDisabled,
  setHazardToggle,
  setHood,
  setTrunk,
  setWheelSpeed,
  setMoveForNextCar,
  setSelectedCar,
}) => {
  if (showCarList) {
    return (
      <div className={`colors-card-box transition-transform transform mt-16`}>
        {" "}
        <button
          className="btn"
          onClick={() => {
            setFLDoor(false),
              setHazardToggle(false),
              setHood(false),
              setTrunk(false),
              setWheelSpeed(0.8),
              setMoveForNextCar(true);
            setSelectedCar("models/car/MB-w2222/scene.gltf");
          }}
        >
          S-Class W222
        </button>
        <button
          className="btn"
          onClick={() => {
            setFLDoor(false),
              setHazardToggle(false),
              setHood(false),
              setTrunk(false),
              setWheelSpeed(0.8),
              setMoveForNextCar(true);
            setSelectedCar("models/car/MB-SL63/scene.gltf");
          }}
        >
          SL-63 AMG
        </button>
      </div>
    );
  }
};
