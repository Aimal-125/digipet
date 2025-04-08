import { createBrowserRouter } from "react-router";

import { lazy, Suspense } from "react";

import Loader from "../components/global/loaders/Loader";

import Spinner from "../components/global/loaders/Spinner";

import ProtectedRoute from "./ProtectedRoute";

import RoleProtectedRoute from "./RoleProtectedRoute";

const App = Loader(lazy(() => import("../App")));

const LoginPage = Loader(lazy(() => import("../components/login/Login")));

const NotFoundPage = Loader(lazy(() => import("../pages/Notfound")));

const DashboardPage = lazy(() => import("../components/dashboard/Dashboard"));

const PetParentsPage = lazy(() =>
  import("../components/pet-parents/PetParents")
);

const DoctorsPage = lazy(() => import("../components/doctors/Doctors"));

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
            element={
              <Suspense fallback={<Spinner />}>
                <DashboardPage />
              </Suspense>
            }
            allowedRoles={["admin"]}
          />
        ),
      },
      {
        path: "/pet-parents",
        element: (
          <RoleProtectedRoute
            element={
              <Suspense fallback={<Spinner />}>
                <PetParentsPage />
              </Suspense>
            }
            allowedRoles={["doctor", "user"]}
          />
        ),
      },
      {
        path: "/doctors",
        element: (
          <RoleProtectedRoute
            element={
              <Suspense fallback={<Spinner />}>
                <DoctorsPage />
              </Suspense>
            }
            allowedRoles={["doctor", "user"]}
          />
        ),
      },
    ],
  },
]);

export default router;
