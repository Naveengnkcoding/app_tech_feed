import React from "react";
import Individual from "./Individual";
// import Individual from './Individual';

const PopUp = ({ openPopUp, closePopUp }: any) => {
  const handleClosePopUp = (e: any) => {
    console.log("Clicked:", e.target.id);
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };
  if (!openPopUp) return null;

  return (
    <div id="ModelContainer" onClick={handleClosePopUp}>
      <div>
        <Individual />
      </div>
    </div>
  );
};

export default PopUp;
