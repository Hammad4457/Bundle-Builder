import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BundleProvider } from "./context/bundleContext";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BundleProvider>
      <App />
    </BundleProvider>
  </StrictMode>,
);
