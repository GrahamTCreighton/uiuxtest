import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App.js";
import { StateProvider } from "./common/StateContext.js";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
