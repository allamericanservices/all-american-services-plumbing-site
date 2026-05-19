import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AllAmericanServicesPlumbingSite from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllAmericanServicesPlumbingSite />
  </React.StrictMode>
);
