import { Link, useLocation } from "react-router";

import sidebarItems from "../../constants/sidebar";

import "./sidebarStyles.css";
import { useEffect, useRef, useState } from "react";

export default function Sidebar() {
  const location = useLocation();

  const currentPathname = location.pathname;

  const sidebarRef = useRef(null);

  const [isScrolling, setIsScrolling] = useState(false);

  const roles = ["admin", "doctor", "user"];

  const accessibleSidebarItems = sidebarItems.filter((item) =>
    item.requiredRoles.some((requiredRole) => roles.includes(requiredRole))
  );

  useEffect(() => {
    const sidebarElement = sidebarRef.current;

    if (!sidebarElement) return;

    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    sidebarElement.addEventListener("scroll", handleScroll);

    return () => {
      sidebarElement.removeEventListener("scroll", handleScroll);

      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      ref={sidebarRef}
      className={`${isScrolling ? "scrolling" : ""} sidebar`}
    >
      {accessibleSidebarItems.map((item) => {
        const isActive = currentPathname === item.path;

        return (
          <div key={item.id} className="flex gap-2">
            <span
              className={`${
                isActive ? "highlight-line-active" : "highlight-line"
              }`}
            ></span>
            <Link
              to={item.path}
              className={`${isActive ? "active-link" : ""} sidebar-link`}
            >
              <span className="inline-flex items-center gap-2">
                <span className="sidebar-icon-span">
                  <img
                    className={`${isActive ? "active-icon" : ""}`}
                    src={item.icon}
                    alt="sidebar icon"
                  />
                </span>
                <span>{item.label}</span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
