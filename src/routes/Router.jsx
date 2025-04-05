import { createBrowserRouter } from "react-router";

import LoginPage from "../components/login/Login";

import NotFoundPage from "../pages/Notfound";

import App from "../App";

import ProtectedRoute from "./ProtectedRoute";

import DashboardPage from "../components/dashboard/Dashboard";
import PetParentsPage from "../components/pet-parents/PetParents";
import RoleProtectedRoute from "./RoleProtectedRoute";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <ProtectedRoute element={<App />} />,
    children: [
      {
        path: "/dashboard",
        element: (
          <RoleProtectedRoute
            element={<DashboardPage />}
            allowedRoles={["admin"]}
          />
        ),
      },
      {
        path: "/pet-parents",
        element: (
          <RoleProtectedRoute
            element={<PetParentsPage />}
            allowedRoles={["admin"]}
          />
        ),
      },
    ],
  },
]);

export default router;
