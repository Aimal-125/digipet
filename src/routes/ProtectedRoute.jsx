import { Navigate } from "react-router";

export default function ProtectedRoute({ element }) {
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return element;
}
