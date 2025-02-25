import React, { useContext } from "react";
import DataManage from "../context/DataContext";
const Extras = () => {
  // global values
  const { extras, changeExtras } = useContext(DataManage);

  // local values
  // modifies the global values based on what the user selected
  const changeExtrasHandler = (change, value) => {
    if (change == "freeWiFi") {
      changeExtras({ ...extras, freeWiFi: value });
    } else if (change == "accessibleEntry") {
      changeExtras({ ...extras, accessibleEntry: value });
    } else if (change == "loungeArea") {
      changeExtras({ ...extras, loungeArea: value });
    } else if (change == "backroundMusic") {
      changeExtras({ ...extras, backroundMusic: value });
    } else if (change == "customerService") {
      changeExtras({ ...extras, customerService: value });
    } else if (change == "parking") {
      changeExtras({ ...extras, parking: value });
    }
  };

  return (
    <>
      <h2>Amenities and Services</h2>
      <label className="cnr-label">
        <input
          type="checkbox"
          onClick={() => changeExtrasHandler("freeWiFi", !extras.freeWiFi)}
          defaultChecked={extras.freeWiFi}
        />
        <span>Free Wi-Fi</span>
      </label>
      <label className="cnr-label">
        <input
          type="checkbox"
          onClick={() =>
            changeExtrasHandler("accessibleEntry", !extras.accessibleEntry)
          }
          defaultChecked={extras.accessibleEntry}
        />
        <span>Accessible entry</span>
      </label>
      <label className="cnr-label">
        <input
          type="checkbox"
          onClick={() => changeExtrasHandler("loungeArea", !extras.loungeArea)}
          defaultChecked={extras.loungeArea}
        />
        <span>Lounge Area</span>
      </label>
      <label className="cnr-label">
        <input
          type="checkbox"
          onClick={() =>
            changeExtrasHandler("backroundMusic", !extras.backroundMusic)
          }
          defaultChecked={extras.backroundMusic}
        />
        <span>Backround music</span>
      </label>
      <label className="cnr-label">
        <input
          type="checkbox"
          onClick={() =>
            changeExtrasHandler("customerService", !extras.customerService)
          }
          defaultChecked={extras.customerService}
        />
        <span>Personal customer service</span>
      </label>

      <hr />
      <h3>Parking</h3>
      <div className="input-row">
        <label className="cnr-label">
          <input
            type="radio"
            name="radio-test"
            onClick={() => changeExtrasHandler("parking", "Easy")}
            defaultChecked={extras.parking === "Easy" ? true : false}
          />
          <span>Easy</span>
        </label>
        <label className="cnr-label">
          <input
            type="radio"
            name="radio-test"
            onClick={() => changeExtrasHandler("parking", "Medium")}
            defaultChecked={extras.parking === "Medium" ? true : false}
          />
          <span>Medium</span>
        </label>
        <label className="cnr-label">
          <input
            type="radio"
            name="radio-test"
            onClick={() => changeExtrasHandler("parking", "Hard")}
            defaultChecked={extras.parking === "Hard" ? true : false}
          />
          <span>Hard</span>
        </label>
        {/* <label className="cnr-label">
          <input type="radio" name="radio-test" />
          <span>Radio with long label</span>
        </label> */}
      </div>
    </>
  );
};

export default Extras;
