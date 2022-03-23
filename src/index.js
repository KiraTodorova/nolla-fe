import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import MouseContextProvider from "./Components/mouse-context";

const myfirstelement = <h1> Hello React!</h1>;
ReactDOM.render(
  <React.StrictMode>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
