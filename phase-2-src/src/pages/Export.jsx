import React, { useContext } from "react";
import DataManage from "../context/DataContext";

const Export = () => {
  const {
    name,
    description,
    postalCode,
    city,
    address,
    openat,
    openfrom,
    opento,
    extras,
    changeExtras,
    map_layout,
    resetFormFields
  } = useContext(DataManage);

  const copyFormValues = () => {
    const jsonFile = {
      name: name.value,
      description: description.value,
      postalCode: postalCode.value,
      city: city.value,
      address: address.value,
      from: openfrom.value,
      to: opento.value,
      openAt: openat.value,
      freeWiFi: extras.freeWiFi,
      accessibleEntry: extras.accessibleEntry,
      loungeArea: extras.loungeArea,
      backgroundMusic: extras.backroundMusic,
      customerService: extras.customerService,
      parking: extras.parking
    };

    const json = JSON.stringify(jsonFile);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = href;
    link.download = `form_values.json`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyFloorPlan = () => {
    let csv = "";

    for (let y = 0; y < map_layout.length; y++) {
      for (let x = 0; x < map_layout[y].length; x++) {
        if (map_layout[y][x] != null) {
          csv = csv + map_layout[y][x];
        } else {
          csv = csv + "-";
        }

        if (x != map_layout[y].length - 1) {
          csv = csv + ",";
        }
      }
      csv = csv + "\n";
    }

    const blob = new Blob([csv], { type: "text/csv" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = href;
    link.download = `floorplan.csv`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="step-4-screen">
        <h2>Successful submission!</h2>
        <p>Thank you for the new location registration!</p>
        <button className="btn" onClick={copyFormValues}>
          COPY FORM VALUES
        </button>
        <button className="btn" onClick={copyFloorPlan}>
          EXPORT FLOORPLAN
        </button>
        <hr />
        <button className="btn" onClick={resetFormFields}>
          START OVER
        </button>
      </div>
    </>
  );
};

export default Export;
