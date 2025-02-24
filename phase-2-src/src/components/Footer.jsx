import React from "react";

const Footer = (props) => {
  const NextStepHandler = () => {
    const nextValue = props.steps + 1;

    if (nextValue < 4) {
      props.changeStepsHandler(nextValue);
    }
  };

  const PrevStepHandler = () => {
    const prevValue = props.steps - 1;

    if (prevValue >= 0) {
      props.changeStepsHandler(prevValue);
    }
  };

  return (
    <footer class="footer">
      <button
        class="btn"
        onClick={PrevStepHandler}
        disabled={props.steps == 0 ? true : false}
      >
        Back
      </button>
      <button class="btn" onClick={NextStepHandler}>
        Next
      </button>
    </footer>
  );
};

export default Footer;
