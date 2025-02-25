import React from "react";

const NavButton = () => {
  return (
    <button
      className={`step ${
        props.steps == 0 ? `current` : 0 < props.steps ? `done` : `dashed`
      }`}
      disabled={props.steps == 3 ? true : false}
      onClick={() => props.changeStepsHandler(0)}
    >
      {props.steps == 3 ? <img src={check} alt="Check" /> : `1`}
    </button>
  );
};

export default NavButton;
