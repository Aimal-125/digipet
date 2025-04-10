import { Outlet } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

import { useSelector } from "react-redux";

export default function App() {
  const { sidebarCollapse } = useSelector((state) => state?.sidebar);

  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <div
            className={`${
              sidebarCollapse ? "content-container-expand" : ""
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
