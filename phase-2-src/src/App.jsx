import { useState, useContext } from "react";
import DataManage from "./context/DataContext";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Informations from "./pages/Informations";
import ShopLayout from "./pages/ShopLayout";
import Extras from "./pages/Extras";
import Export from "./pages/Export";

function App() {
  const { steps, changeStepsHandler } = useContext(DataManage);
  return (
    <>
      <article className="container">
        <Header steps={steps} changeStepsHandler={changeStepsHandler} />

        <main className="main">
          {steps == 0 ? <Informations /> : ""}
          {steps == 1 ? <ShopLayout /> : ""}
          {steps == 2 ? <Extras /> : ""}
          {steps == 3 ? <Export /> : ""}

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

          

          <hr />

          <div className="alert">
            <img src="./assets/alert.svg" alt="Alert" />
            <span>This is an error message.</span>
          </div> */}
        </main>

        {steps != 3 ? (
          <Footer steps={steps} changeStepsHandler={changeStepsHandler} />
        ) : (
          ""
        )}
      </article>
    </>
  );
}

export default App;
