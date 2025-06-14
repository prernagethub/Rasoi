import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import RecipeContext from "./Context/RecipeContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <RecipeContext>
    <BrowserRouter>
      <StrictMode>
        <App />
        <ToastContainer />
      </StrictMode>
    </BrowserRouter>
  </RecipeContext>
);
