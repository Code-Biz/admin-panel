import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./store/contextsAndEffects_provider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthContextProvider>
);
