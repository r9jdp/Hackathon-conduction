// import "./App.css";
// import ResumeUpload from "./components/Resume/ResumeUpload";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/LoginSubComponents/Login";
// import UserChoice from "./components/UserChoice";
// import UserDetailsForm from "./components/UserDetailsConfirm";
// import DashBoard from "./components/DashBoard";

import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Lazy load the components
const ResumeUpload = React.lazy(() =>
  import("./components/Resume/ResumeUpload")
);
const UserChoice = React.lazy(() => import("./components/UserChoice"));
const UserDetailsForm = React.lazy(() =>
  import("./components/UserDetailsConfirm")
);
const DashBoard = React.lazy(() => import("./components/DashBoard"));
const Login = React.lazy(() => import("./components/LoginSubComponents/Login"));

function App() {
  return (
    <Routes>
      <Route path="/participant/resume" element={<ResumeUpload />} />
      <Route path="/" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userChoice" element={<UserChoice />} />
      <Route path="/UserDetailsConfrmation" element={<UserDetailsForm />} />
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
