import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import IndividualProvider from "./contexts/IndividualContext.jsx";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="668104587029-nri82mg92fos37443k3cdaipgfvk1v4h.apps.googleusercontent.com">
    <IndividualProvider>
      <App />
    </IndividualProvider>
  </GoogleOAuthProvider>
);
