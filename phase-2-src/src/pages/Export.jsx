import React, { useContext } from "react";
import DataManage from "../context/DataContext";

const Export = () => {
  // global values
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

  // local values
  // creates a file with its context and automatically downloads it
  // file - file's context
  // type - file format
  // downloadedFileName - name of the file that will downloaded
  const _makesFileDowloadable = (file, type, downloadedFileName) => {
    const blob = new Blob([file], { type: type });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = href;
    link.download = downloadedFileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // creates JSON file
  const _copyFormValues = () => {
    // base of the file with values
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

    _makesFileDowloadable(json, "application/json", "form_values.json");
  };

  // creates CSV file
  const _copyFloorPlan = () => {
    let csv = "";

    // separates the shop layout
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

    _makesFileDowloadable(csv, "text/csv", "floorplan.csv");
  };

  return (
    <>
      <div className="step-4-screen">
        <h2>Successful submission!</h2>
        <p>Thank you for the new location registration!</p>
        <button className="btn" onClick={_copyFormValues}>
          COPY FORM VALUES
        </button>
        <button className="btn" onClick={_copyFloorPlan}>
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
