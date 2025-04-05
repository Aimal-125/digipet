import { Navigate } from "react-router";

import UnauthorizedPage from "../pages/Unauthorized";

export default function RoleProtectedRoute({ element, allowedRoles }) {
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

  const roles = JSON.parse(localStorage.getItem("roles"));

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!roles?.some((role) => allowedRoles.includes(role))) {
    return <UnauthorizedPage />;
  }

  return element;
}
