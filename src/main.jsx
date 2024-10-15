import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Supports weights 300-700
import "@fontsource-variable/red-hat-text";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
