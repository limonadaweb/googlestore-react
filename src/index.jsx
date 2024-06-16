import "./css/App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Earbuds from "./views/earbuds/earbudsView";
import Smartwatch from "./views/smartwatch/smartwatchView";
import Layout from "./layout/layout";
import Cart from "./views/cart/cartView";

function App() {
  return (
    <div className="Index">
      <Routes>
        <Route path="/layout" element={<Layout />} />
        <Route path="/earbudsView" element={<Earbuds />} />
        <Route path="/smarthwatchView" element={<Smartwatch />} />
        <Route path="/" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
