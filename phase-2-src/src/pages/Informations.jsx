import React, { useState, useContext, useEffect } from "react";
import DataManage from "../context/DataContext";
import Input from "./../UI/Input";
import TextArea from "./../UI/TextArea";
import Select from "./../UI/Select";

const Informations = () => {
  // global values
  const {
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
    CheckLengthValidation,
    CheckSelectValues,
    openfrom,
    changeOpenfrom,
    opento,
    changeOpento,
    validateFirstPage
  } = useContext(DataManage);

  // local values & variables
  const [_nameValid, _setNameValid] = useState(null);
  const [_descriptionValid, _setdescriptionValid] = useState(null);
  const [_postalCode, _setpostalCode] = useState(null);
  const [_city, _setcity] = useState(null);
  const [_address, _setaddress] = useState(null);
  const [_openat, _setopenat] = useState(null);
  const [_openfrom, _setopenfrom] = useState(null);
  const [_opento, _setopento] = useState(null);

  useEffect(() => {
    // does the live validation locally
    if (name.valid != null) {
      _setNameValid(CheckLengthValidation(name.value, 3, 32));
    }

    if (description.valid != null) {
      _setdescriptionValid(CheckLengthValidation(description.value, 10, 256));
    }

    if (postalCode.valid != null) {
      _setpostalCode(CheckLengthValidation(postalCode.value, 4, 4));
    }

    if (city.valid != null) {
      _setcity(CheckLengthValidation(city.value, 3, 32));
    }

    if (address.valid != null) {
      _setaddress(CheckLengthValidation(address.value, 5, 128));
    }

    if (openat.valid != null) {
      _setopenat(CheckSelectValues(openat.value));
    }

    if (openfrom.valid != null) {
      _setopenfrom(CheckLengthValidation(openfrom.value, 1, 5));
    }

    if (opento.valid != null) {
      _setopento(CheckLengthValidation(opento.value, 1, 5));
    }
  }, [name, description, postalCode, city, address, openat, openfrom, opento]);

  return (
    <>
      <h2>Information about the Location</h2>
      <div className="input-row">
        <Input
          type={"text"}
          text={"Name"}
          id={"input-1"}
          validateFirstPage={validateFirstPage}
          value={name.value}
          minLength={3}
          maxLength={32}
          onChange={(e) => changeNameHandler(e)}
          valid={_nameValid}
        />
      </div>

      <TextArea
        id="textarea"
        text={"Description"}
        validateFirstPage={validateFirstPage}
        rows={5}
        value={description.value}
        minLength={10}
        maxLength={256}
        onChange={(e) => changeDescription(e)}
        valid={_descriptionValid}
      />

      <div className="input-row">
        <Input
          type={"number"}
          text={"Postal Code"}
          id={"input-3"}
          validateFirstPage={validateFirstPage}
          value={postalCode.value}
          minLength={4}
          maxLength={4}
          onChange={(e) => changePostalCode(e)}
          valid={_postalCode}
        />

        <Input
          type={"text"}
          text={"City"}
          id={"input-4"}
          validateFirstPage={validateFirstPage}
          value={city.value}
          minLength={3}
          maxLength={32}
          onChange={(e) => changecity(e)}
          valid={_city}
        />

        <Input
          type={"text"}
          text={"Address"}
          id={"input-5"}
          validateFirstPage={validateFirstPage}
          value={address.value}
          minLength={5}
          maxLength={128}
          onChange={(e) => changeAddress(e)}
          valid={_address}
        />
      </div>

      <hr />
      <h2>Operational hours</h2>

      <Select
        id="select"
        text={"Open at"}
        validateFirstPage={validateFirstPage}
        valid={_openat}
        onChange={(e) => changeOpenat(e)}
        value={openat.value}
      >
        <option value="Every day">Every day</option>
        <option value="Weekdays">Weekdays</option>
        <option value="Weekends">Weekends</option>
      </Select>

      <div className="input-row">
        <Input
          type={"time"}
          text={"From"}
          id={"input-6"}
          validateFirstPage={validateFirstPage}
          value={openfrom.value}
          onChange={(e) => changeOpenfrom(e)}
          valid={_openfrom}
        />

        <Input
          type={"time"}
          text={"To"}
          id={"input-7"}
          validateFirstPage={validateFirstPage}
          value={opento.value}
          onChange={(e) => changeOpento(e)}
          valid={_opento}
        />
      </div>
    </>
  );
};

export default Informations;
