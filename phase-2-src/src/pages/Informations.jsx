import React from "react";

const Informations = () => {
  return (
    <>
      <h2>Information about the Location</h2>
      <div className="input-row">
        <div className="input-group">
          <label for="input-1">Name</label>
          <input
            type="text"
            id="input-1"
            minLength={3}
            maxLength={32}
            autoComplete={"input-1"}
            required
          />
        </div>

        {/* <div className="input-group">
        <label for="input-2">Input Error</label>
        <input type="text" id="input-2" className="error" />
        <span className="input-error">This field is required</span>
      </div> */}
      </div>

      <div className="input-group">
        <label for="textarea">Description</label>
        <textarea
          id="textarea"
          rows="5"
          required
          autoComplete={"input-2"}
          minLength={10}
          maxLength={256}
        ></textarea>
      </div>

      <div className="input-row">
        <div className="input-group">
          <label for="input-3">Postal Code</label>
          <input
            type="number"
            id="input-3"
            minLength={4}
            maxLength={4}
            autoComplete={"input-3"}
            required
          />
        </div>
        <div className="input-group">
          <label for="input-4">City</label>
          <input
            type="text"
            id="input-4"
            minLength={3}
            maxLength={32}
            autoComplete={"input-4"}
            required
          />
        </div>
        <div className="input-group">
          <label for="input-5">Address</label>
          <input
            type="text"
            id="input-5"
            minLength={5}
            maxLength={128}
            autoComplete={"input-5"}
            required
          />
        </div>
      </div>

      <hr />
      <h2>Operational hours</h2>

      <div className="input-group">
        <label for="select">Open at</label>
        <select id="select">
          <option value="Every day" selected>
            Every day
          </option>
          <option value="Weekdays">Weekdays</option>
          <option value="Weekends">Weekends</option>
        </select>
      </div>

      <div className="input-row">
        <div className="input-group">
          <label for="input-5">From</label>
          <input type="time" id="input-5" autoComplete={"input-5"} required />
        </div>
        <div className="input-group">
          <label for="input-6">To</label>
          <input type="time" id="input-6" autoComplete={"input-6"} required />
        </div>
      </div>
    </>
  );
};

export default Informations;
