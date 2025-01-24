import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./Context/UserContext";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </QueryClientProvider>
    ,
  </BrowserRouter>
  // <StrictMode>
  //   <App />
  // </StrictMode>,
);
