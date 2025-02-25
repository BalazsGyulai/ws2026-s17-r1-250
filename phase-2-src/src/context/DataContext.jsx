import React, { createContext, useState } from "react";

const DataManage = createContext();

export function Data({ children }) {
  // global
  const [steps, setSteps] = useState(0);
  // informations page
  const [name, setName] = useState({ value: "", valid: null });
  const [description, setDescription] = useState({ value: "", valid: null });
  const [postalCode, setPostalCode] = useState({ value: "", valid: null });
  const [city, setcity] = useState({ value: "", valid: null });
  const [address, setaddress] = useState({ value: "", valid: null });
  const [openat, setopenat] = useState({ value: "Every day", valid: null });
  const [openfrom, setopenfrom] = useState({ value: "", valid: null });
  const [opento, setopento] = useState({ value: "", valid: null });
  const [extras, setExtras] = useState({
    freeWiFi: false,
    accessibleEntry: false,
    loungeArea: false,
    backroundMusic: false,
    customerService: false,
    parking: "Easy"
  });

  // shop layout page
  const [map_layout, setMap_layout] = useState([
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
  ]);
  const [validateFirstPage, setValidateFirstPage] = useState({
    page: false,
    tried: false
  });
  const [validateSecondPage, setValidateSecondPage] = useState({
    page: false,
    tried: false
  });

  const changeValidationFirstPage = (val) => {
    setValidateFirstPage(val);
  };

  const resetFormFields = () => {
    setName({ value: "", valid: null });
    setDescription({ value: "", valid: null });
    setPostalCode({ value: "", valid: null });
    setcity({ value: "", valid: null });
    setaddress({ value: "", valid: null });
    setopenat({ value: "", valid: null });
    setopenfrom({ value: "", valid: null });
    setopento({ value: "", valid: null });
    setExtras({
      freeWiFi: false,
      accessibleEntry: false,
      loungeArea: false,
      backroundMusic: false,
      customerService: false,
      parking: "Easy"
    });
    setMap_layout([
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null]
    ]);
    setValidateSecondPage({
      page: false,
      tried: false
    });
    setSteps(0);
  };

  const changeStepsHandler = (val) => {
    setSteps(val);
  };

  const changeMap_layout = (newboard) => {
    setMap_layout(newboard);
    validateBoard();
  };

  const isThereWallBesideMe = (x, y) => {
    if (!validateSecondPage.tried) {
      return true;
    }

    if (
      y == 0 ||
      y == map_layout.length - 1 ||
      x == 0 ||
      x == map_layout[y].length - 1
    ) {
      // sides
      return true;
    } else if (map_layout[y - 1][x] == "Wall") {
      // top side
      return true;
    } else if (map_layout[y + 1][x] == "Wall") {
      // bottom side
      return true;
    } else if (map_layout[y][x - 1] == "Wall") {
      // left side
      return true;
    } else if (map_layout[y][x + 1] == "Wall") {
      // right side
      return true;
    }

    return false;
  };

  // ------------------------------------
  // global informations
  // ------------------------------------
  const changeNameHandler = (e) => {
    setName((prevName) => ({ ...prevName, value: e.target.value }));

    setName((prevName) => ({
      ...prevName,
      valid: CheckLengthValidation(name.value, 3, 32)
    }));
  };

  const changeDescription = (e) => {
    setDescription((prevState) => ({ ...prevState, value: e.target.value }));

    setDescription((prevState) => ({
      ...prevState,
      valid: CheckLengthValidation(description.value, 10, 256)
    }));
  };

  const changePostalCode = (e) => {
    setPostalCode((prevState) => ({ ...prevState, value: e.target.value }));

    setPostalCode((prevState) => ({
      ...prevState,
      valid: CheckLengthValidation(postalCode.value, 4, 4)
    }));
  };

  const changecity = (e) => {
    setcity((prevState) => ({ ...prevState, value: e.target.value }));

    setcity((prevState) => ({
      ...prevState,
      valid: CheckLengthValidation(city.value, 3, 32)
    }));
  };

  const changeAddress = (e) => {
    setaddress((prevState) => ({ ...prevState, value: e.target.value }));

    setaddress((prevState) => ({
      ...prevState,
      valid: CheckLengthValidation(address.value, 5, 128)
    }));
  };

  const changeOpenat = (e) => {
    setopenat((prevState) => ({ ...prevState, value: e.target.value }));

    setopenat((prevState) => ({
      ...prevState,
      valid: CheckSelectValues(e.target.value)
    }));
  };

  const changeOpenfrom = (e) => {
    setopenfrom((prevState) => ({ ...prevState, value: e.target.value }));

    setopenfrom((prevState) => ({
      ...prevState,
      valid: CheckLengthValidation(openfrom.value, 1, 5)
    }));
  };

  const changeOpento = (e) => {
    setopento((prevState) => ({ ...prevState, value: e.target.value }));

    setopento((prevState) => ({
      ...prevState,
      valid: CheckLengthValidation(opento.value, 1, 5)
    }));
  };

  // for the three static value
  const CheckSelectValues = (value) => {
    if (value == "Every day" || value == "Weekdays" || value == "Weekends") {
      return true;
    }
    return false;
  };

  const CheckLengthValidation = (value, min, max) => {
    if (value != "" && value.length >= min && value.length <= max) {
      return true;
    }
    return false;
  };

  const checkFirstPageValidation = () => {
    setName((prevName) => ({
      ...prevName,
      valid: CheckLengthValidation(name.value, 3, 32)
    }));

    setDescription((prevState) => ({
      ...prevState,
      valid: CheckLengthValidation(description.value, 10, 256)
    }));

    setPostalCode((prevState) => ({
      ...prevState,
      valid: CheckLengthValidation(postalCode.value, 4, 4)
    }));

    setcity((prevState) => ({
      ...prevState,
      valid: CheckLengthValidation(city.value, 3, 32)
    }));

    setaddress((prevState) => ({
      ...prevState,
      valid: CheckLengthValidation(address.value, 5, 128)
    }));

    setopenat((prevState) => ({
      ...prevState,
      valid: CheckSelectValues(openat.value)
    }));

    setopenfrom((prevState) => ({
      ...prevState,
      valid: CheckLengthValidation(openfrom.value, 1, 5)
    }));

    setopento((prevState) => ({
      ...prevState,
      valid: CheckLengthValidation(opento.value, 1, 5)
    }));
  };

  // when hitting the next button it validates
  const informationValidation = () => {
    if (steps == 0) {
      // when everything is right it allows to go another page
      checkFirstPageValidation();

      changeValidationFirstPage((prevState) => ({ ...prevState, tried: true }));

      if (
        CheckLengthValidation(name.value, 3, 32) &&
        CheckLengthValidation(description.value, 10, 256) &&
        CheckLengthValidation(postalCode.value, 4, 4) &&
        CheckLengthValidation(city.value, 3, 32) &&
        CheckLengthValidation(address.value, 5, 128) &&
        CheckSelectValues(openat.value) &&
        CheckLengthValidation(openfrom.value, 1, 5) &&
        CheckLengthValidation(opento.value, 1, 5)
      ) {
        changeValidationFirstPage((prevState) => ({
          ...prevState,
          page: true
        }));
        return true;
      } else {
        changeValidationFirstPage((prevState) => ({
          ...prevState,
          page: false
        }));
        return false;
      }
    } else if (steps == 1) {
      return validateBoard();
    } else if (steps == 2) {
      return true;
    }
  };

  const validateBoard = () => {
    for (let y = 0; y < map_layout.length; y++) {
      for (let x = 0; x < map_layout[y].length; x++) {
        if (
          map_layout[y][x] != null &&
          (map_layout[y][x].includes("Washer") ||
            map_layout[y][x].includes("Dryer"))
        ) {
          if (isThereWallBesideMe(x, y) == false) {
            setValidateSecondPage((prevState) => ({
              ...prevState,
              page: false,
              tried: true
            }));

            return false;
          }
        }
      }
    }

    setValidateSecondPage((prevState) => ({
      ...prevState,
      page: true,
      tried: true
    }));

    return true;
  };

  const changeExtras = (newState) => {
    setExtras(newState);
  };

  return (
    <DataManage.Provider
      value={{
        steps,
        changeStepsHandler,
        name,
        changeNameHandler,
        description,
        changeDescription,
        postalCode,
        changePostalCode,
        city,
        changecity,
        address,
        changeAddress,
        openat,
        changeOpenat,
        openfrom,
        changeOpenfrom,
        opento,
        changeOpento,
        informationValidation,
        CheckLengthValidation,
        CheckSelectValues,
        map_layout,
        changeMap_layout,
        isThereWallBesideMe,
        validateFirstPage,
        changeValidationFirstPage,
        validateSecondPage,
        validateBoard,
        extras,
        changeExtras,
        resetFormFields
      }}
    >
      {children}
    </DataManage.Provider>
  );
}

export default DataManage;
