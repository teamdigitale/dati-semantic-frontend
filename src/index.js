import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { loadFonts } from "bootstrap-italia";

// import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
// import "bootstrap-italia/dist/js/bootstrap-italia.min.js";

loadFonts("/bootstrap-italia/dist/fonts");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
