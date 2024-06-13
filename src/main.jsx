import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
// import Earbuds from "./views/earbuds/earbudsView.jsx";
// import Smartwatch from "./views/smartwatch/smartwatchView";
// import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Earbuds />
      <Smartwatch /> */}
    </BrowserRouter>
  </React.StrictMode>
);
