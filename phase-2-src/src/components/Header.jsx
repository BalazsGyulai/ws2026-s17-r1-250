import React, { useState } from "react";
import check from "../assets/check.svg";
import maximize from "../assets/maximize.svg";
import minimize from "../assets/minimize.svg";
import NavButton from "./../UI/NavButton";
import NavDash from "./../UI/NavDash";

const Header = (props) => {
  // local values
  const [fullscreen, setFullscreen] = useState(false); // for changing the fullsize icon

  // full sizes the screen
  const _FullScreenHandler = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(!fullscreen);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullscreen(!fullscreen);
    }
  };

  return (
    <header className="header">
      <h1>Register a new location</h1>
      <div className="steps">
        <NavButton
          steps={props.steps}
          onClick={() => props.changeStepsHandler(0)}
          content={1}
        ></NavButton>
        <NavDash steps={props.steps} lower={1} />
        <NavButton
          steps={props.steps}
          onClick={() => props.changeStepsHandler(1)}
          content={2}
        ></NavButton>
        <NavDash steps={props.steps} lower={2} />
        <NavButton
          steps={props.steps}
          onClick={() => props.changeStepsHandler(2)}
          content={3}
        ></NavButton>
        <NavDash steps={props.steps} lower={3} />
        <NavButton
          steps={props.steps}
          onClick={() => props.changeStepsHandler(3)}
          content={4}
        ></NavButton>
      </div>

      <button className="fullscreen-btn" onClick={_FullScreenHandler}>
        <img src={fullscreen ? minimize : maximize} alt="Maximize" />
      </button>
    </header>
  );
};

export default Header;
