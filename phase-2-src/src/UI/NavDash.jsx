import React from "react";

const NavDash = (props) => {
  return (
    <div
      className={`step-divider ${props.steps < props.lower ? `dashed` : ``}`}
    ></div>
  );
};

export default NavDash;
