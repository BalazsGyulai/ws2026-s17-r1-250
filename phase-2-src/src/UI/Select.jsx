import React from "react";
import "./input.css";

const Select = (props) => {
  return (
    <div className="input-group">
      <label for={props.id}>{props.text}</label>
      <select
        id={props.id}
        className={
          props.validateFirstPage.tried == true && !props.valid ? `error` : ``
        }
        onChange={props.onChange}
        value={props.value}
      >
        {props.children}
      </select>

      {props.validateFirstPage.tried == true && !props.valid ? (
        <span className="input-error">
          {props.value != "" ? `Values must match` : `Required`}
        </span>
      ) : (
        ``
      )}
    </div>
  );
};

export default Select;
