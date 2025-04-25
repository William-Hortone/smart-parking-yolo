import React from "react";

const ParkingSlot = ({ index, price, occupied }) => {
  return (
    <div
      className={`p-4 rounded-xl shadow-md text-center ${
        occupied ? "bg-red-200" : "bg-green-200"
      }`}
    >
      <h2 className="text-lg font-semibold">Slot #{index + 1}</h2>
      <p>
        Status: <strong>{occupied ? "Occupied" : "Free"}</strong>
      </p>
      <p>Price: ¥{price}</p>
    </div>
  );
};

export default ParkingSlot;
