import "./css/App.css";
import React from "react";
import {Routes, Route } from "react-router-dom"; 
import Earbuds from "./views/earbuds/earbudsView";
import Smartwatch from "./views/smartwatch/smartwatchView";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Earbuds />} />
          {/* <Route path="earbudsView" element={<Earbuds />} /> */}
          <Route path="/smarthwatchView" element={<Smartwatch />} />
        </Routes>
      </div>
  );
}

export default App;
