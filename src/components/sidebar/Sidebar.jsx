import { Link, useLocation } from "react-router";

import sidebarItems from "../../constants/sidebar";

import "./sidebarStyles.css";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const location = useLocation();

  const { sidebarCollapse } = useSelector((state) => state?.sidebar);

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
      className={`${isScrolling ? "scrolling" : ""} ${
        sidebarCollapse ? "sidebar-collapse" : ""
      } sidebar`}
    >
      {accessibleSidebarItems.map((item) => {
        const isActive = currentPathname === item.path;

        return (
          <div
            key={item.id}
            className={`${
              sidebarCollapse ? "w-[40px] h-[40px]" : ""
            } flex gap-2`}
          >
            <span
              className={`${
                !sidebarCollapse && isActive
                  ? "highlight-line-active"
                  : "hidden"
              } ${sidebarCollapse ? "hidden" : "highlight-line"}`}
            ></span>
            <Link
              to={item.path}
              className={`${isActive ? "active-link" : ""} ${
                sidebarCollapse ? "sidebar-link-center" : ""
              } sidebar-link`}
            >
              <span className="inline-flex items-center gap-2">
                <span className="sidebar-icon-span">
                  <img
                    className={`${isActive ? "active-icon" : ""}`}
                    src={item.icon}
                    alt="sidebar icon"
                  />
                </span>
                <span className={`${sidebarCollapse ? "hidden" : ""}`}>
                  {item.label}
                </span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
