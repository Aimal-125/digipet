import { Link, useLocation } from "react-router";
import { sidebarItems } from "../../constants/sidebar";

export default function Sidebar() {
  const location = useLocation();

  const currentPathname = location.pathname;

  const roles = ["admin", "doctor", "user"];

  const accessibleSidebarItems = sidebarItems.filter((item) =>
    item.requiredRoles.some((requiredRole) => roles.includes(requiredRole))
  );

  return (
    <div className="sidebar">
      {accessibleSidebarItems.map((item) => {
        const isActive = currentPathname === item.path;

        return (
          <div key={item.id}>
            <Link
              to={item.path}
              className={`${isActive ? "text-red-500" : ""} bg-white`}
            >
              {item.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
