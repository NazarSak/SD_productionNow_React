import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./technical/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="SD_productionNow_React">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
