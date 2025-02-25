import React from "react";
import check from "../assets/check.svg";

const NavButton = (props) => {
  return (
    <button
      className={`step ${
        props.steps == props.content - 1
          ? `current`
          : props.content - 1 < props.steps
          ? `done`
          : `dashed`
      }`}
      disabled={
        props.steps == 3 ? true : props.content - 1 < props.steps ? false : true
      }
      onClick={props.onClick}
    >
      {props.steps == 3 ? <img src={check} alt="Check" /> : `${props.content}`}
    </button>
  );
};

export default NavButton;
