import React, { useContext } from "react";
import DataManage from "../context/DataContext";

const Footer = (props) => {
  const { informationValidation } = useContext(DataManage);
  const NextStepHandler = () => {
    const informationValid = informationValidation();

    if (informationValid) {
      const nextValue = props.steps + 1;

      if (nextValue < 4) {
        props.changeStepsHandler(nextValue);
      }
    }
  };

  const PrevStepHandler = () => {
    const prevValue = props.steps - 1;

    if (prevValue >= 0) {
      props.changeStepsHandler(prevValue);
    }
  };

  return (
    <footer className="footer">
      <button
        className="btn"
        onClick={PrevStepHandler}
        disabled={props.steps == 0 ? true : false}
      >
        Back
      </button>
      <button className="btn" onClick={NextStepHandler}>
        Next
      </button>
    </footer>
  );
};

export default Footer;
