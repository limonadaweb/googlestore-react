import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./css/index.css";
import Smartwatch from "./views/smartwatch/smartwatchView.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Smartwatch />
  </React.StrictMode>
);
