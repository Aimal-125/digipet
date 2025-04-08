export const rolePaths = {
  admin: "/dashboard",
  user: "/pet-parents",
  doctor: "/doctors",
  default: "/",
};

export const navigateToCorrectPage = (navigate, rolePathsConfig, roles) => {
  if (roles && roles.length > 0) {
    let navigated = false;

    // Check for admin role first
    if (roles.includes("admin") && rolePathsConfig["admin"]) {
      navigate(rolePathsConfig["admin"]);

      navigated = true;
    } else if (roles.length > 1) {
      // Preferred order for multiple roles

      const preferredOrder = ["user", "doctor"];

      for (const preferredRole of preferredOrder) {
        if (roles.includes(preferredRole) && rolePathsConfig[preferredRole]) {
          navigate(rolePathsConfig[preferredRole]);

          navigated = true;

          break; // Exit the loop once navigation occurs
        }
      }
    } else if (roles.length === 1) {
      // Handle single role case as before

      const role = roles[0];

      if (rolePathsConfig[role]) {
        navigate(rolePathsConfig[role]);

        navigated = true;
      }
    }

    if (!navigated) {
      navigate(rolePathsConfig["default"] || "/"); // Default navigation if no specific role is found
    }
  } else {
    navigate(rolePathsConfig["default"] || "/"); // Navigate to default if roles array is empty or null
  }
};
