import React, { createContext, useState } from "react";

const DataManage = createContext();

export function Data({ children }) {
  const [name, setName] = useState({ value: "", valid: null });
  const [description, setDescription] = useState({ value: "", valid: null });
  const [postalCode, setPostalCode] = useState({ value: "", valid: null });
  const [city, setcity] = useState({ value: "", valid: null });
  const [address, setaddress] = useState({ value: "", valid: null });
  const [openat, setopenat] = useState({ value: "Every day", valid: null });
  const [openfrom, setopenfrom] = useState({ value: "", valid: null });
  const [opento, setopento] = useState({ value: "", valid: null });

  // ------------------------------------
  // global informations
  // ------------------------------------
  const changeNameHandler = (e) => {
    setName((prevName) => ({ ...prevName, value: e.target.value }));

    if (name.valid != null) {
      setName((prevName) => ({
        ...prevName,
        valid: CheckLengthValidation(name.value, 3, 32)
      }));
    }
  };

  const changeDescription = (e) => {
    setDescription((prevState) => ({ ...prevState, value: e.target.value }));

    if (description.valid != null) {
      setDescription((prevState) => ({
        ...prevState,
        valid: CheckLengthValidation(description.value, 10, 256)
      }));
    }
  };

  const changePostalCode = (e) => {
    setPostalCode((prevState) => ({ ...prevState, value: e.target.value }));

    if (postalCode.valid != null) {
      setPostalCode((prevState) => ({
        ...prevState,
        valid: CheckLengthValidation(postalCode.value, 4, 4)
      }));
    }
  };

  const changecity = (e) => {
    setcity((prevState) => ({ ...prevState, value: e.target.value }));

    if (city.valid != null) {
      setcity((prevState) => ({
        ...prevState,
        valid: CheckLengthValidation(city.value, 3, 32)
      }));
    }
  };

  const changeAddress = (e) => {
    setaddress((prevState) => ({ ...prevState, value: e.target.value }));

    if (address.valid != null) {
      setaddress((prevState) => ({
        ...prevState,
        valid: CheckLengthValidation(address.value, 5, 128)
      }));
    }
  };

  const changeOpenat = (e) => {
    setopenat((prevState) => ({ ...prevState, value: e.target.value }));

    if (openat.valid != null) {
      setopenat((prevState) => ({
        ...prevState,
        valid: CheckSelectValues(e.target.value)
      }));
    }
  };

  const changeOpenfrom = (e) => {
    setopenfrom((prevState) => ({ ...prevState, value: e.target.value }));

    if (openfrom.valid != null) {
      setopenfrom((prevState) => ({
        ...prevState,
        valid: CheckLengthValidation(openfrom.value, 1, 5)
      }));
    }
  };

  const changeOpento = (e) => {
    setopento((prevState) => ({ ...prevState, value: e.target.value }));

    if (opento.valid != null) {
      setopento((prevState) => ({
        ...prevState,
        valid: CheckLengthValidation(opento.value, 1, 5)
      }));
    }
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

  // when hitting the next button it validates
  const informationValidation = () => {
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

    // when everything is right it allows to go another page
    if (
      name.valid &&
      description.valid &&
      postalCode.valid &&
      city.valid &&
      address.valid &&
      openat.valid &&
      openfrom &&
      opento
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <DataManage.Provider
      value={{
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
        CheckSelectValues
      }}
    >
      {children}
    </DataManage.Provider>
  );
}

export default DataManage;
