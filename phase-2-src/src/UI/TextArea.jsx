import React from "react";
import "./input.css";

const TextArea = (props) => {
  return (
    <div className="input-group">
      <label for={props.id}>{props.text}</label>
      <textarea
        id={props.id}
        rows={props.rows}
        required
        value={props.value}
        className={
          props.validateFirstPage.tried == true && !props.valid ? `error` : ``
        }
        autoComplete={props.id}
        minLength={props.minLength}
        maxLength={props.maxLength}
        onChange={props.onChange}
      ></textarea>
      {props.validateFirstPage.tried == true && !props.valid ? (
        <span className="input-error">
          {props.value != ""
            ? props.value.length < props.minLength
              ? `Must be ${props.minLength} characters long`
              : `Must not exceed ${props.maxLength} characters`
            : `Required`}
        </span>
      ) : (
        ``
      )}
    </div>
  );
};

export default TextArea;
