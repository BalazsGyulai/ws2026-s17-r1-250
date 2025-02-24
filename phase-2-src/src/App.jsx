import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [steps, setSteps] = useState(0);

  const changeStepsHandler = (val) => {
    setSteps(val);
    console.log(val);
  };

  return (
    <>
      <article class="container">
        <Header steps={steps} changeStepsHandler={changeStepsHandler} />

        <main class="main">
          <div class="input-row">
            <div class="input-group">
              <label for="input-1">Input</label>
              <input type="text" id="input-1" placeholder="Input placeholder" />
            </div>

            <div class="input-group">
              <label for="input-2">Input Error</label>
              <input type="text" id="input-2" class="error" />
              <span class="input-error">This field is required</span>
            </div>
          </div>

          <div class="input-group">
            <label for="textarea">Textarea</label>
            <textarea id="textarea" rows="5"></textarea>
          </div>

          <h2>Subtitle inside the form</h2>

          <div class="input-group">
            <label for="select">Test select</label>
            <select id="select">
              <option value="1">Value 1</option>
              <option value="2">Value 2</option>
            </select>
          </div>

          <hr />

          <label class="cnr-label">
            <input type="checkbox" />
            <span>Checkbox 1</span>
          </label>

          <label class="cnr-label">
            <input type="checkbox" />
            <span>Checkbox with long label</span>
          </label>

          <h3>H3 inside the form</h3>
          <div class="input-row">
            <label class="cnr-label">
              <input type="radio" name="radio-test" checked />
              <span>Radio</span>
            </label>
            <label class="cnr-label">
              <input type="radio" name="radio-test" />
              <span>Radio with long label</span>
            </label>
          </div>

          <hr />

          <div class="dnd-row">
            <div class="grid-item washer">
              <img src="./assets/washing-machine.svg" alt="Washing Machine" />
              <span>Washer (11 kg)</span>
            </div>
            <div class="grid-item dryer">
              <img src="./assets/washing-machine.svg" alt="Drying Machine" />
              <span>Dryer (25 kg)</span>
            </div>
            <div class="grid-item">
              <img src="./assets/armchair.svg" alt="Waiting Area" />
              <span>Waiting Area</span>
            </div>
            <div class="grid-item">
              <img src="./assets/space.svg" alt="Folding Tables" />
              <span>Folding Table</span>
            </div>
          </div>

          <div class="grid">
            <div class="grid-item empty"></div>
            <div class="grid-item wall">
              <span>Wall</span>
            </div>
            <div class="grid-item washer">
              <img src="./assets/washing-machine.svg" alt="Washing Machine" />
              <span>Washer (11 kg)</span>
            </div>
            <div class="grid-item dryer">
              <img src="./assets/washing-machine.svg" alt="Drying Machine" />
              <span>Dryer (25 kg)</span>
            </div>
            <div class="grid-item dryer">
              <img src="./assets/washing-machine.svg" alt="Drying Machine" />
              <span>Dryer (25 kg)</span>
            </div>
            <div class="grid-item entrance"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
            <div class="grid-item empty"></div>
          </div>

          <hr />

          <div class="alert">
            <img src="./assets/alert.svg" alt="Alert" />
            <span>This is an error message.</span>
          </div>
        </main>

        <Footer steps={steps} changeStepsHandler={changeStepsHandler} />
      </article>
    </>
  );
}

export default App;
