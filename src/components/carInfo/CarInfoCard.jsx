import React from "react";

export const CarInfoCard = ({ carPart }) => {
  const MBW222 = {
    Generation: "W222",
    year: "2013",
    CarType: "4-door saloon",
    CurbWeight: "2085 kg (4597 lbs)",
    Layout: "Front engine, RWD",
    EngineType: "Petrol",
    Transmission: "7-speed AMG Speedshift MCT plus",
    OriginCountry: "Deutschland",
    ZeroToSixty: "4.3 Sec",
  };
  const MBW222Engine = {
    Engine: "Twin Turbo V12, SOHC, 36v",
    Displacement: " 6.0 l (366 ci) ",
    Power: "621 bhp",
    Torque: "1000 Nm (738 lb-ft) ",
  };
  const SL63 = {
    Generation: "SL-Class R232",
    year: "2022 ",
    CarType: "Sports roadster",
    CurbWeight: "1939 kg (4275 lbs)",
    Layout: "Front engine, 4MATIC",
    EngineType: "Petrol",
    Transmission: "9-speed G-Tronic",
    OriginCountry: "Deutschland",
    ZeroToSixty: "3.0 Sec",
  };
  const SL63Engine = {
    Engine: "Handcrafted AMG V8 Biturbo ",
    Displacement: " 4.0L ",
    Power: "577 bhp",
    Torque: "800  Nm (590 lb-ft) ",
  };

  const renderCarInfo = (info) => {
    if (info === "MBW222Engine") {
      return Object.entries(MBW222Engine).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong> {value}
        </li>
      ));
    }
    // Add more conditions for other car parts if needed
    return null; // Return null if no valid carPart
  };
  console.log("carPart", carPart);
  return (
    <div>
      <h1>Car Information:</h1>
      <ul>{renderCarInfo(carPart)}</ul>
    </div>
  );
};
