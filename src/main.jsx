import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DropContextProvider from "./Context/DropContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DropContextProvider>
      <App />
    </DropContextProvider>
  </React.StrictMode>
);
