import { Outlet } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <div className="content-container">
            <div className="inner-container">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
