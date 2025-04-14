import { createBrowserRouter } from "react-router";

import { lazy } from "react";

import Loader from "../components/global/loaders/Loader";

import ProtectedRoute from "./ProtectedRoute";

import NavigateBasedOnRole from "../utils/NavigateRoleBased";

import RoleProtectedRoute from "./RoleProtectedRoute";

import ErrorBoundary from "../pages/ErrorElement";

const App = Loader(lazy(() => import("../App")));

const LoginPage = Loader(lazy(() => import("../components/login/Login")));

const NotFoundPage = Loader(lazy(() => import("../pages/Notfound")));

const DashboardPage = lazy(() => import("../components/dashboard/Dashboard"));

const PetParentsPage = lazy(() =>
  import("../components/pet-parents/PetParents")
);

const DoctorsPage = lazy(() => import("../components/doctors/Doctors"));

const DoctorsProfilePage = lazy(() =>
  import("../components/doctors/DoctorsProfile")
);

const LabsPage = lazy(() => import("../components/labs/Labs"));

const AppointmentsPage = lazy(() =>
  import("../components/appointments/Appointments")
);

const BookedLabTestsPage = lazy(() =>
  import("../components/booked-lab-tests/BookedLabTests")
);

const DoctorsCategoriesPage = lazy(() =>
  import("../components/doctors-categories/DoctorsCategories")
);

const LabTestsCategoriesPage = lazy(() =>
  import("../components/lab-tests-categories/LabTestsCategories")
);

const router = createBrowserRouter(
  [
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
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          element: <NavigateBasedOnRole />,
        },
        {
          path: "dashboard",
          element: (
            <RoleProtectedRoute
              element={<DashboardPage />}
              allowedRoles={["admin"]}
            />
          ),
        },
        {
          path: "pet-parents",
          element: (
            <RoleProtectedRoute
              element={<PetParentsPage />}
              allowedRoles={["doctor", "user"]}
            />
          ),
        },
        {
          path: "doctors",
          element: (
            <RoleProtectedRoute
              element={<DoctorsPage />}
              allowedRoles={["doctor", "user"]}
            />
          ),
        },
        {
          path: "doctors/doctors-profile/:id",
          element: (
            <RoleProtectedRoute
              element={<DoctorsProfilePage />}
              allowedRoles={["doctor", "user"]}
            />
          ),
        },
        {
          path: "labs",
          element: (
            <RoleProtectedRoute
              element={<LabsPage />}
              allowedRoles={["admin"]}
            />
          ),
        },
        {
          path: "appointments",
          element: (
            <RoleProtectedRoute
              element={<AppointmentsPage />}
              allowedRoles={["admin"]}
            />
          ),
        },
        {
          path: "booked-lab-tests",
          element: (
            <RoleProtectedRoute
              element={<BookedLabTestsPage />}
              allowedRoles={["admin"]}
            />
          ),
        },
        {
          path: "doctors-categories",
          element: (
            <RoleProtectedRoute
              element={<DoctorsCategoriesPage />}
              allowedRoles={["admin"]}
            />
          ),
        },
        {
          path: "lab-tests-categories",
          element: (
            <RoleProtectedRoute
              element={<LabTestsCategoriesPage />}
              allowedRoles={["admin"]}
            />
          ),
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default router;
