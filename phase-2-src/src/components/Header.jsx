import React, { useState } from "react";
import check from "../assets/check.svg";
import maximize from "../assets/maximize.svg";
import minimize from "../assets/minimize.svg";

const Header = (props) => {
  const [fullscreen, setFullscreen] = useState(false); // for changing the fullsize icon

  const FullScreenHandler = () => {
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
        <button
          className={`step ${
            props.steps == 0 ? `current` : 0 < props.steps ? `done` : `dashed`
          }`}
          disabled={props.steps == 3 ? true : false}
          onClick={() => props.changeStepsHandler(0)}
        >
          {props.steps == 3 ? <img src={check} alt="Check" /> : `1`}
        </button>
        <div
          className={`step-divider ${props.steps < 1 ? `dashed` : ``}`}
        ></div>
        <button
          className={`step ${
            props.steps == 1 ? `current` : 1 < props.steps ? `done` : `dashed`
          }`}
          disabled={props.steps == 3 ? true : 1 < props.steps ? false : true}
          onClick={() => props.changeStepsHandler(1)}
        >
          {props.steps == 3 ? <img src={check} alt="Check" /> : `2`}
        </button>
        <div
          className={`step-divider ${props.steps < 2 ? `dashed` : ``}`}
        ></div>
        <button
          className={`step ${
            props.steps == 2 ? `current` : 2 < props.steps ? `done` : `dashed`
          }`}
          disabled={props.steps == 3 ? true : 2 < props.steps ? false : true}
          onClick={() => props.changeStepsHandler(2)}
        >
          {props.steps == 3 ? <img src={check} alt="Check" /> : `3`}
        </button>
        <div
          className={`step-divider ${props.steps < 3 ? `dashed` : ``}`}
        ></div>
        <button
          className={`step ${
            props.steps == 3 ? `current` : 3 < props.steps ? `done` : `dashed`
          }`}
          disabled={true}
          onClick={() => props.changeStepsHandler(3)}
        >
          {props.steps == 3 ? <img src={check} alt="Check" /> : `4`}
        </button>
      </div>

      <button className="fullscreen-btn" onClick={FullScreenHandler}>
        <img src={fullscreen ? minimize : maximize} alt="Maximize" />
      </button>
    </header>
  );
};

export default Header;
