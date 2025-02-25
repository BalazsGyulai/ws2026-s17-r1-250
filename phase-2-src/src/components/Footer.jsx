import React, { useContext } from "react";
import DataManage from "../context/DataContext";

const Footer = (props) => {
  // global values
  const { informationValidation } = useContext(DataManage);

  // local values
  // goes to the next page by adding +1 to the global steps variable
  // at 3 it stops adding more
  const _NextStepHandler = () => {
    const informationValid = informationValidation();

    if (informationValid) {
      const nextValue = props.steps + 1;

      if (nextValue < 4) {
        props.changeStepsHandler(nextValue);
      }
    }
  };

  // goes back to the previous page by substacting -1 from the global steps variable
  // at 0 it won't subtract any more
  const _PrevStepHandler = () => {
    const prevValue = props.steps - 1;

    if (prevValue >= 0) {
      props.changeStepsHandler(prevValue);
    }
  };

  return (
    <footer className="footer">
      <button
        className="btn"
        onClick={_PrevStepHandler}
        disabled={props.steps == 0 ? true : false}
      >
        Back
      </button>
      <button className="btn" onClick={_NextStepHandler}>
        Next
      </button>
    </footer>
  );
};

export default Footer;
