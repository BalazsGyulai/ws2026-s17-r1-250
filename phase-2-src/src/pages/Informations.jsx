import React, { useState, useContext, useEffect } from "react";
import DataManage from "../context/DataContext";

const Informations = () => {
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

  //---------------------------
  // local - for live validation
  //---------------------------
  const [_nameValid, _setNameValid] = useState(null);
  const [_descriptionValid, _setdescriptionValid] = useState(null);
  const [_postalCode, _setpostalCode] = useState(null);
  const [_city, _setcity] = useState(null);
  const [_address, _setaddress] = useState(null);
  const [_openat, _setopenat] = useState(null);
  const [_openfrom, _setopenfrom] = useState(null);
  const [_opento, _setopento] = useState(null);

  useEffect(() => {
    // does the live validation
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
        <div className="input-group">
          <label for="input-1">Name</label>
          <input
            type="text"
            id="input-1"
            className={
              validateFirstPage.tried == true && !_nameValid ? `error` : ``
            }
            value={name.value}
            minLength={3}
            maxLength={32}
            onChange={(e) => changeNameHandler(e)}
            autoComplete={"input-1"}
            required
          />
          {validateFirstPage.tried == true && !_nameValid ? (
            <span className="input-error">
              {name.value != ""
                ? name.value.length < 3
                  ? `Must be 3 characters long`
                  : `Must not exceed 32 characters`
                : `Required`}
            </span>
          ) : (
            ``
          )}
        </div>
      </div>

      <div className="input-group">
        <label for="textarea">Description</label>
        <textarea
          id="textarea"
          rows="5"
          required
          value={description.value}
          className={
            validateFirstPage.tried == true && _descriptionValid == false
              ? `error`
              : ``
          }
          autoComplete={"input-2"}
          minLength={10}
          maxLength={256}
          onChange={(e) => changeDescription(e)}
        ></textarea>
        {validateFirstPage.tried == true && !_descriptionValid ? (
          <span className="input-error">
            {description.value != ""
              ? description.value.length < 10
                ? `Must be 10 characters long`
                : `Must not exceed 256 characters`
              : `Required`}
          </span>
        ) : (
          ``
        )}
      </div>

      <div className="input-row">
        <div className="input-group">
          <label for="input-3">Postal Code</label>
          <input
            type="number"
            id="input-3"
            value={postalCode.value}
            minLength={4}
            maxLength={4}
            className={
              validateFirstPage.tried == true && _postalCode == false
                ? `error`
                : ``
            }
            onChange={(e) => changePostalCode(e)}
            autoComplete={"input-3"}
            required
          />
          {validateFirstPage.tried == true && !_postalCode ? (
            <span className="input-error">
              {postalCode.value != ""
                ? postalCode.value.length < 4
                  ? `Must be 4 characters long`
                  : `Must not exceed 4 characters`
                : `Required`}
            </span>
          ) : (
            ``
          )}
        </div>
        <div className="input-group">
          <label for="input-4">City</label>
          <input
            type="text"
            id="input-4"
            value={city.value}
            minLength={3}
            maxLength={32}
            className={
              validateFirstPage.tried == true && _city == false ? `error` : ``
            }
            onChange={(e) => changecity(e)}
            autoComplete={"input-4"}
            required
          />
          {validateFirstPage.tried == true && !_city ? (
            <span className="input-error">
              {city.value != ""
                ? city.value.length < 3
                  ? `Must be 3 characters long`
                  : `Must not exceed 32 characters`
                : `Required`}
            </span>
          ) : (
            ``
          )}
        </div>
        <div className="input-group">
          <label for="input-5">Address</label>
          <input
            type="text"
            id="input-5"
            value={address.value}
            minLength={5}
            maxLength={128}
            className={
              validateFirstPage.tried == true && _address == false
                ? `error`
                : ``
            }
            onChange={(e) => changeAddress(e)}
            autoComplete={"input-5"}
            required
          />
          {validateFirstPage.tried == true && !_address ? (
            <span className="input-error">
              {address.value != ""
                ? address.value.length < 5
                  ? `Must be 5 characters long`
                  : `Must not exceed 128 characters`
                : `Required`}
            </span>
          ) : (
            ``
          )}
        </div>
      </div>

      <hr />
      <h2>Operational hours</h2>

      <div className="input-group">
        <label for="select">Open at</label>
        <select
          id="select"
          className={
            validateFirstPage.tried == true && _openat == false ? `error` : ``
          }
          onChange={(e) => changeOpenat(e)}
          value={openat.value}
        >
          <option value="Every day">Every day</option>
          <option value="Weekdays">Weekdays</option>
          <option value="Weekends">Weekends</option>
        </select>

        {validateFirstPage.tried == true && !_openat ? (
          <span className="input-error">
            {openat.value != "" ? `Values must match` : `Required`}
          </span>
        ) : (
          ``
        )}
      </div>

      <div className="input-row">
        <div className="input-group">
          <label for="input-5">From</label>
          <input
            type="time"
            id="input-5"
            value={openfrom.value}
            className={
              validateFirstPage.tried == true && _openfrom == false
                ? `error`
                : ``
            }
            onChange={(e) => changeOpenfrom(e)}
            autoComplete={"input-5"}
            required
          />
          {validateFirstPage.tried == true && !_openfrom ? (
            <span className="input-error">
              {openfrom.value != "" ? `Must choose valid time` : `Required`}
            </span>
          ) : (
            ``
          )}
        </div>
        <div className="input-group">
          <label for="input-6">To</label>
          <input
            type="time"
            id="input-6"
            value={opento.value}
            className={
              validateFirstPage.tried == true && _opento == false ? `error` : ``
            }
            onChange={(e) => changeOpento(e)}
            autoComplete={"input-6"}
            required
          />
          {validateFirstPage.tried == true && !_opento ? (
            <span className="input-error">
              {opento.value != "" ? `Must choose valid time` : `Required`}
            </span>
          ) : (
            ``
          )}
        </div>
      </div>
    </>
  );
};

export default Informations;
