import { Outlet } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const { sidebarCollapse } = useSelector((state) => state?.sidebar);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <div
            className={`${
              isSmallScreen ? "content-container-expand" : ""
            } content-container`}
          >
            <div className="inner-container">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
