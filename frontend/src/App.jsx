import "./App.css";
import Home from "./Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          <>
            <h1>Page not found</h1>
          </>
        }
      />
    </Routes>
  );
}

export default App;
