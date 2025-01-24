import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import RequiresAuth from "../utils/requiresAuth";

import IndividualDashBoard from "../Pages/Individuals/IndividualDashBoard";
import LoginPage from "../Pages/Login/LoginPage";
import OrganisationsDashboard from "../Pages/Organisations/OrganisationsDashboard";
import ResumeUpload from "../Pages/ResumeUpload/ResumeUpload";
import NotFound from "../components/MyComponents/404Page";
import IndividualLayout from "../Pages/Individuals/IndividualLayout";
import IndividualProvider from "../contexts/IndividualContext";
import UserChoice from "../components/MyComponents/UserChoice";
import UserDetailsForm from "../components/MyComponents/UserDetailsConfirm";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        path="login"
        element={
            <LoginPage />
        }
      />
      <Route path="Individual">
        <Route
          path="Dashboard"
          element={
            <IndividualLayout>
              <IndividualDashBoard />
            </IndividualLayout>
          }
        />
        <Route
          path="ResumeUpload"
          element={
            <RequiresAuth>
              <ResumeUpload />
            </RequiresAuth>
          }
        />
        <Route path="DetailsConfrmation" element={<UserDetailsForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="Organisations">
        <Route path="Dashboard" element={<OrganisationsDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route
        path="userChoice"
        element={
          <RequiresAuth>
            <UserChoice />
          </RequiresAuth>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default routes;
