import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { createContext } from "react";
import CursorFollower from "./pages/useCursor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CursorFollower>
    <App />
  </CursorFollower>
);
