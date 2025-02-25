import React, { useContext } from "react";
import DataManage from "../context/DataContext";

const Export = () => {
  const { extras, changeExtras, resetFormFields } = useContext(DataManage);

  return (
    <>
      <div className="step-4-screen">
        <h2>Successful submission!</h2>
        <p>Thank you for the new location registration!</p>
        <button className="btn">COPY FORM VALUES</button>
        <button className="btn">EXPORT FLOORPLAN</button>
        <hr />
        <button className="btn" onClick={resetFormFields}>
          START OVER
        </button>
      </div>
    </>
  );
};

export default Export;
