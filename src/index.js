import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import "./all.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
