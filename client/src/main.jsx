import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./store/contextsAndEffects_provider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "flowbite";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <StrictMode>
      {/* The below App is a function component and being used here by calling it just like an html tag is called/used*/}
      <App />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        // transition={flip}
      />
    </StrictMode>
  </AuthContextProvider>
);
