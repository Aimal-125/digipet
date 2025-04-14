import { useEffect } from "react";

import { useNavigate } from "react-router";

import { navigateToCorrectPage, rolePaths } from "./navigateToCorrectPage";

const NavigateBasedOnRole = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const rolesString = localStorage.getItem("roles");

    const roles = rolesString ? JSON.parse(rolesString) : [];

    navigateToCorrectPage(navigate, rolePaths, roles);
  }, [navigate]);

  return null; // This component doesn't render anything, it just redirects
};

export default NavigateBasedOnRole;
