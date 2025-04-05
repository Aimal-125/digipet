import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();

  const navigateToCorrectPage = useCallback(
    (roles) => {
      if (roles && roles.length > 0) {
        let navigated = false;

        for (const role of roles) {
          switch (role) {
            case "admin":
              navigate("/dashboard");
              navigated = true;
              break;
            case "user":
              navigate("/pet-parents");
              navigated = true;
              break;
            // Add more roles and their corresponding navigation paths here
            default:
              // Handle cases where the role doesn't match any specific case
              break;
          }
          if (navigated) {
            break; // Exit the loop once navigation occurs
          }
        }
        if (!navigated) {
          navigate("/"); // Default navigation if no specific role is found
        }
      } else {
        navigate("/"); // Navigate to default if roles array is empty or null
      }
    },
    [navigate]
  );

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

    const rolesString = localStorage.getItem("roles");

    if (loggedIn && rolesString) {
      const roles = JSON.parse(rolesString);

      navigateToCorrectPage(roles);
    }
  }, [navigateToCorrectPage]);

  const handleLoginBtnClick = () => {
    localStorage.setItem("loggedIn", JSON.stringify(true));
    localStorage.setItem("roles", JSON.stringify(["admin"]));

    const roles = ["admin"];

    navigateToCorrectPage(roles);
  };

  return (
    <>
      <div>Login Page</div>
      <div>
        <button className="bg-amber-50 border" onClick={handleLoginBtnClick}>
          Login
        </button>
      </div>
    </>
  );
}
