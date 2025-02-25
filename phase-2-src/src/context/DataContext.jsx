import React, { createContext, useState } from "react";

const DataManage = createContext();

export function Data({ children }) {
  // ----------------------------------------------
  // GLOBAL - variables
  // ----------------------------------------------

  // general
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
  const [validateFirstPage, setValidateFirstPage] = useState({
    page: false,
    tried: false
  });

  // extras page
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
  const [validateSecondPage, setValidateSecondPage] = useState({
    page: false,
    tried: false
  });

  //-------------------------------------------
  // Global Funtions
  //-------------------------------------------

  //
  // General

  // based on this the pages are shown
  // 0 - informations
  // 1 - shoplayout
  // 2 - extras
  // 3 - export
  const changeStepsHandler = (val) => {
    setSteps(val);
  };

  // checks a received value length
  const CheckLengthValidation = (value, min, max) => {
    if (value != "" && value.length >= min && value.length <= max) {
      return true;
    }
    return false;
  };

  // each time hitting the next button it validates the actual page
  // true - valid inputs
  // false - invalid inputs
  const informationValidation = () => {
    if (steps == 0) {
      // when everything is right it allows to go another page
      checkFirstPageValidation(); // validation within the function

      // shows that the next button has been hit
      changeValidationFirstPage((prevState) => ({ ...prevState, tried: true }));

      // when all fields are valid it goes to the next page
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
      // shopLayout page
      setValidateSecondPage((prevState) => ({
        ...prevState,
        tried: true
      }));

      if (validateBoard() && validateSecondPage.tried) {
        return true;
      } else {
        return false;
      }
    } else if (steps == 2) {
      // extras page
      return true;
    }
  };

  //
  // Information page

  // Modifies each variable and also checks if it is valid
  // value - text or/and number
  // valid - true/false
  const changeNameHandler = (e) => {
    setName((prevName) => ({
      ...prevName,
      value: e.target.value,
      valid: CheckLengthValidation(name.value, 3, 32)
    }));
  };

  const changeDescription = (e) => {
    setDescription((prevState) => ({
      ...prevState,
      value: e.target.value,
      valid: CheckLengthValidation(description.value, 10, 256)
    }));
  };

  const changePostalCode = (e) => {
    setPostalCode((prevState) => ({
      ...prevState,
      value: e.target.value,
      valid: CheckLengthValidation(postalCode.value, 4, 4)
    }));
  };

  const changecity = (e) => {
    setcity((prevState) => ({
      ...prevState,
      value: e.target.value,
      valid: CheckLengthValidation(city.value, 3, 32)
    }));
  };

  const changeAddress = (e) => {
    setaddress((prevState) => ({
      ...prevState,
      value: e.target.value,
      valid: CheckLengthValidation(address.value, 5, 128)
    }));
  };

  const changeOpenat = (e) => {
    setopenat((prevState) => ({
      ...prevState,
      value: e.target.value,
      valid: CheckSelectValues(e.target.value)
    }));
  };

  const changeOpenfrom = (e) => {
    setopenfrom((prevState) => ({
      ...prevState,
      value: e.target.value,
      valid: CheckLengthValidation(openfrom.value, 1, 5)
    }));
  };

  const changeOpento = (e) => {
    setopento((prevState) => ({
      ...prevState,
      value: e.target.value,
      valid: CheckLengthValidation(opento.value, 1, 5)
    }));
  };

  const CheckSelectValues = (value) => {
    if (value == "Every day" || value == "Weekdays" || value == "Weekends") {
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

  // based on the received value, it's checked wether the whole
  // page is valid or not
  const changeValidationFirstPage = (val) => {
    setValidateFirstPage(val);
  };

  //
  // ShopLayout page

  // based on the received value saves the items in the grid
  const changeMap_layout = (newboard) => {
    setMap_layout(newboard);
    validateBoard();
  };

  // checks wether a washer or a dryer is not beside a wall
  // when it finds machine it will give back a true or false value
  // also modifies the validity of the (second) page
  // true - there is at least one wall
  // false - there is no wall near the item and breaks the cycle
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
              page: false
            }));

            return false;
          }
        }
      }
    }

    setValidateSecondPage((prevState) => ({
      ...prevState,
      page: true
    }));

    return true;
  };

  // receives a cell from the grid
  // examines whether it has a wall next to it or not
  // when the next button hasn't clicked yet permanently gives back true
  // true - it has wall near to it, or it's on the edge or next button hasn't clicked yet
  // false - there is no wall near to it
  const isThereWallBesideMe = (x, y) => {
    if (validateSecondPage.tried == false) {
      return true;
    }

    if (
      y == 0 ||
      y == map_layout.length - 1 ||
      x == 0 ||
      x == map_layout[y].length - 1
    ) {
      // sides of the grid
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

  //
  // extras page

  // changes the value of the extras based on the received value
  // receives value from the extras page
  const changeExtras = (newState) => {
    setExtras(newState);
  };

  //
  // export page

  // resets the whole registration back to its original values
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

  // ------------------------------------
  // global informations
  // ------------------------------------

  // for the three static value

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
