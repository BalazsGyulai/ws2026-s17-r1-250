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
