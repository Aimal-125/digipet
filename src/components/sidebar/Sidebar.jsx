import { Link, useLocation } from "react-router";

import sidebarItems from "../../constants/sidebar";

import "./sidebarStyles.css";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const location = useLocation();

  // eslint-disable-next-line no-unused-vars
  const { sidebarCollapse } = useSelector((state) => state?.sidebar);

  const currentPathname = location.pathname;

  const sidebarRef = useRef(null);

  const [isScrolling, setIsScrolling] = useState(false);

  const roles = ["admin", "doctor", "user"];

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  const accessibleSidebarItems = sidebarItems.filter((item) =>
    item.requiredRoles.some((requiredRole) => roles.includes(requiredRole))
  );

  const [activeItemId, setActiveItemId] = useState(null);

  useEffect(() => {
    let bestMatch = null;

    accessibleSidebarItems.forEach((item) => {
      const isDashboard = item.label === "Dashboard";
      let isMatch = false;

      if (isDashboard) {
        isMatch =
          currentPathname === "/" || currentPathname.startsWith(item.path);
      } else {
        isMatch =
          currentPathname === item.path ||
          currentPathname.startsWith(item.path + "/");
      }

      if (isMatch) {
        if (!bestMatch || item.path.length > bestMatch.path.length) {
          bestMatch = item;
        }
      }
    });

    setActiveItemId(bestMatch?.id);
  }, [currentPathname, accessibleSidebarItems]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        isSmallScreen ? "sidebar-collapse" : ""
      } sidebar`}
    >
      {accessibleSidebarItems.map((item) => {
        const isActive = activeItemId === item.id;

        return (
          <div
            key={item.id}
            className={`${
              isSmallScreen ? "w-[50px] h-[50px]" : ""
            } flex gap-[20px] max-[1311px]:gap-[10px]`}
          >
            <span
              className={`${
                !isSmallScreen && isActive ? "highlight-line-active" : "hidden"
              } ${isSmallScreen ? "hidden" : "highlight-line"}`}
            ></span>
            <Link
              to={item.path}
              className={`${isActive ? "active-link" : ""} ${
                isSmallScreen ? "sidebar-link-center" : ""
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
                <span
                  className={`${
                    isSmallScreen ? "hidden" : ""
                  } max-[1311px]:text-[14px]`}
                >
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
