import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Data } from "./context/DataContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Data>
      <App />
    </Data>
  </StrictMode>
);
