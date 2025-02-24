import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Informations from "./pages/Informations";

function App() {
  const [steps, setSteps] = useState(0);

  const changeStepsHandler = (val) => {
    setSteps(val);
  };

  return (
    <>
      <article className="container">
        <Header steps={steps} changeStepsHandler={changeStepsHandler} />

        <main className="main">
          <Informations />
          {/* 
          <label className="cnr-label">
            <input type="checkbox" />
            <span>Checkbox 1</span>
          </label>

          <label className="cnr-label">
            <input type="checkbox" />
            <span>Checkbox with long label</span>
          </label>

          <h3>H3 inside the form</h3>
          <div className="input-row">
            <label className="cnr-label">
              <input type="radio" name="radio-test" checked />
              <span>Radio</span>
            </label>
            <label className="cnr-label">
              <input type="radio" name="radio-test" />
              <span>Radio with long label</span>
            </label>
          </div>

          <hr />

          <div className="dnd-row">
            <div className="grid-item washer">
              <img src="./assets/washing-machine.svg" alt="Washing Machine" />
              <span>Washer (11 kg)</span>
            </div>
            <div className="grid-item dryer">
              <img src="./assets/washing-machine.svg" alt="Drying Machine" />
              <span>Dryer (25 kg)</span>
            </div>
            <div className="grid-item">
              <img src="./assets/armchair.svg" alt="Waiting Area" />
              <span>Waiting Area</span>
            </div>
            <div className="grid-item">
              <img src="./assets/space.svg" alt="Folding Tables" />
              <span>Folding Table</span>
            </div>
          </div>

          <div className="grid">
            <div className="grid-item empty"></div>
            <div className="grid-item wall">
              <span>Wall</span>
            </div>
            <div className="grid-item washer">
              <img src="./assets/washing-machine.svg" alt="Washing Machine" />
              <span>Washer (11 kg)</span>
            </div>
            <div className="grid-item dryer">
              <img src="./assets/washing-machine.svg" alt="Drying Machine" />
              <span>Dryer (25 kg)</span>
            </div>
            <div className="grid-item dryer">
              <img src="./assets/washing-machine.svg" alt="Drying Machine" />
              <span>Dryer (25 kg)</span>
            </div>
            <div className="grid-item entrance"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
            <div className="grid-item empty"></div>
          </div>

          <hr />

          <div className="alert">
            <img src="./assets/alert.svg" alt="Alert" />
            <span>This is an error message.</span>
          </div> */}
        </main>

        <Footer steps={steps} changeStepsHandler={changeStepsHandler} />
      </article>
    </>
  );
}

export default App;
