import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <>
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        success: {
          duration: 50000,
        },
        error: {
          duration: 5000,
        },
      }}
    />
    <App />
  </>,
);
