import { useNavigate } from "react-router";

import { IoSearch } from "react-icons/io5";

import { MdKeyboardArrowDown } from "react-icons/md";

import { MdKeyboardArrowUp } from "react-icons/md";

import { CgProfile } from "react-icons/cg";

import { RiLockPasswordFill } from "react-icons/ri";

import { MdLogout } from "react-icons/md";

import BellIcon from "/images/bell-icon.svg";

import ProfileImg from "/images/profile-image.svg";

import { useEffect, useRef, useState } from "react";

import "./logoutMenu.css";

export default function Navbar() {
  const navigate = useNavigate();

  const [logoutMenuActive, setLogoutMenuActive] = useState(false);

  const [notificationNumbers, setNotificationNumbers] = useState(10);

  const logoutMenuRef = useRef(null);

  const logoutButtonRef = useRef(null);

  const handleLogout = () => {
    localStorage.setItem("loggedIn", JSON.stringify(false));

    navigate(0);
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        logoutMenuActive &&
        logoutMenuRef.current &&
        !logoutMenuRef.current.contains(e.target) &&
        logoutButtonRef.current &&
        !logoutButtonRef.current.contains(e.target)
      ) {
        setLogoutMenuActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [logoutMenuActive]);

  return (
    <>
      <div className="navbar">
        <div className="w-[20%] pl-[16px]">
          <p
            style={{
              fontSize: "32px",
              fontFamily: "Josefin Sans",
              fontStyle: "italic",
              fontWeight: "700",
            }}
          >
            <span className="text-[#252C62]">Digi</span>
            <span className="text-[#83B830]">Pet</span>
          </p>
        </div>
        <div className="w-[80%] flex items-center">
          <div className="w-full pl-[16px]">
            <div className="flex items-center border border-gray-300 bg-[#F1F5F9] rounded-[20px]">
              <span className="pl-2 text-gray-500">
                <IoSearch />
              </span>
              <input
                className="w-full py-1 px-2 outline-none"
                type="search"
                name="search"
                id="search"
                aria-label="Search"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-end gap-4 pr-[16px]">
            <div className="inline-flex items-center relative">
              <button
                className="cursor-pointer"
                type="button"
                id="notification-bell"
                aria-label="notifications"
              >
                <img src={BellIcon} alt="notifications bell" />
              </button>
              <span
                className="absolute rounded-full w-[18px] h-[18px] text-[12px] inline-flex justify-center items-center bg-red-500 text-white"
                style={{
                  top: "-10px",
                  right: "-5px",
                }}
              >
                {notificationNumbers < 10 ? notificationNumbers : "9+"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-[#D8D8D8] rounded-full inline-flex justify-center items-center w-[50px] h-[50px] ">
                <img
                  src={ProfileImg ? ProfileImg : ""}
                  alt="profile image"
                  style={{
                    display: "inline-flex",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                />
              </span>
              <span className="inline-flex flex-col">
                <span
                  className=""
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  M.Rizwan
                </span>
                <span
                  className=""
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  Admin
                </span>
              </span>
            </div>
            <div className="logout-menu-div">
              <button
                ref={logoutButtonRef}
                className="border border-gray-400 rounded-full w-[18px] h-[18px] bg-white inline-flex justify-center items-center cursor-pointer"
                type="button"
                aria-label="logout dropdown menu"
                onClick={() => {
                  setLogoutMenuActive(!logoutMenuActive);
                }}
              >
                <span className="text-[#565656]">
                  {logoutMenuActive ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
              </button>
              {logoutMenuActive ? (
                <div ref={logoutMenuRef} className="logout-menu">
                  <div className="flex items-center gap-2 p-[10px]">
                    <span className="bg-[#D8D8D8] rounded-full inline-flex justify-center items-center w-[50px] h-[50px] ">
                      <img
                        src={ProfileImg ? ProfileImg : ""}
                        alt="profile image"
                        style={{
                          display: "inline-flex",
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                      />
                    </span>
                    <span className="inline-flex flex-col">
                      <span
                        className=""
                        style={{
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        M.Rizwan
                      </span>
                      <span
                        className=""
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        +920001234567
                      </span>
                    </span>
                  </div>
                  <div>
                    <button type="button" className="logout-menu-btn">
                      <span>
                        <CgProfile />
                      </span>
                      <span>Profile Settings</span>
                    </button>
                  </div>
                  <div>
                    <button type="button" className="logout-menu-btn">
                      <span>
                        <RiLockPasswordFill />
                      </span>
                      <span>Update Password</span>
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="logout-menu-btn"
                      onClick={handleLogout}
                    >
                      <span>
                        <MdLogout />
                      </span>
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
