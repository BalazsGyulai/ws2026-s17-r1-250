import React, { useState } from "react";
import check from "../assets/check.svg";
import maximize from "../assets/maximize.svg";
import minimize from "../assets/minimize.svg";

const Header = () => {
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
        <button className="step done">
          <img src={check} alt="Check" />
        </button>
        <div className="step-divider"></div>
        <button className="step done">2</button>
        <div className="step-divider"></div>
        <button className="step current">3</button>
        <div className="step-divider dashed"></div>
        <button className="step" disabled>
          4
        </button>
      </div>

      <button className="fullscreen-btn" onClick={FullScreenHandler}>
        <img src={fullscreen ? minimize : maximize} alt="Maximize" />
      </button>
    </header>
  );
};

export default Header;
