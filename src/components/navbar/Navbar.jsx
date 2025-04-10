import { Link, useLocation, useNavigate } from "react-router";

import { IoSearch } from "react-icons/io5";

import { MdKeyboardArrowDown } from "react-icons/md";

import { MdKeyboardArrowUp } from "react-icons/md";

import { CgProfile } from "react-icons/cg";

import { RiLockPasswordFill } from "react-icons/ri";

import { MdLogout } from "react-icons/md";

import { CgMenuGridR } from "react-icons/cg";

import BellIcon from "/images/bell-icon.svg";

import ProfileImg from "/images/profile-image.svg";

import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setSidebarCollapse } from "../../redux/slices/sidebar/sidebarSlice";

import "./navbar.css";
import "./logoutMenu.css";

import sidebarItems from "../../constants/sidebar";

export default function Navbar() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const location = useLocation();

  const currentPathname = location.pathname;

  const { sidebarCollapse } = useSelector((state) => state?.sidebar);

  const [logoutMenuActive, setLogoutMenuActive] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [notificationNumbers, setNotificationNumbers] = useState(10);

  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const logoutMenuRef = useRef(null);

  const logoutButtonRef = useRef(null);

  const mobileMenuSidebarRef = useRef(null);

  const mobileMenuButtonRef = useRef(null);

  const [isScrolling, setIsScrolling] = useState(false);

  const roles = ["admin", "doctor", "user"];

  const accessibleSidebarItems = sidebarItems.filter((item) =>
    item.requiredRoles.some((requiredRole) => roles.includes(requiredRole))
  );

  useEffect(() => {
    const sidebarElement = mobileMenuSidebarRef.current;

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

  const handleSidebarCollapseBtnClick = () => {
    dispatch(setSidebarCollapse(!sidebarCollapse));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuActive(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleClickOutsideMobileMenu = (e) => {
      if (
        mobileMenuActive &&
        mobileMenuSidebarRef.current &&
        !mobileMenuSidebarRef.current.contains(e.target) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(e.target)
      ) {
        setMobileMenuActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideMobileMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMobileMenu);
    };
  }, [mobileMenuActive]);

  return (
    <>
      {/* desktop navbar component start */}
      <div className="desktop-navbar">
        <div className="w-[20%] pl-[16px] flex items-center justify-between">
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
          <div className="flex items-center justify-center">
            <button
              title={sidebarCollapse ? "Extend Menu" : "Collapse Menu"}
              className="w-[30px] h-[30px] cursor-pointer"
              type="button"
              aria-label="Collapse or Extend Sidebar Button"
              onClick={handleSidebarCollapseBtnClick}
            >
              <CgMenuGridR size="30px" />
            </button>
          </div>
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
      {/* desktop navbar component end */}

      {/* mobile navbar component start */}

      <div className="mobile-navbar">
        <div>
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
        <div className="mobile-menu">
          <div className="mobile-menu-btn-div">
            <button
              ref={mobileMenuButtonRef}
              type="button"
              className={`${
                mobileMenuActive ? "mobile-menu-active" : ""
              } mobile-menu-btn`}
              aria-label="mobile menu button"
              onClick={() => setMobileMenuActive(!mobileMenuActive)}
            >
              <span className="span-1"></span>
              <span className="span-2"></span>
              <span className="span-3"></span>
            </button>
          </div>
        </div>
        {mobileMenuActive ? (
          <div className="mobile-menu-sidebar">
            <div
              ref={mobileMenuSidebarRef}
              className="mobile-sidebar overflow-auto"
            >
              <div className="">
                <div className="w-full p-[10px]">
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
              </div>
              <div className="flex items-center justify-between p-[10px] border-b border-gray-400">
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
                <div className="flex items-center gap-2">
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
              {/* sidebar navigation links start */}

              <div className={`${isScrolling ? "scrolling" : ""} py-2`}>
                {accessibleSidebarItems.map((item) => {
                  const isActive = currentPathname === item.path;

                  return (
                    <div key={item.id} className={`flex gap-2 px-2`}>
                      <span
                        className={`${
                          isActive ? "highlight-line-active-mobile-sidebar" : ""
                        } highlight-line-mobile-sidebar`}
                      ></span>
                      <Link
                        to={item.path}
                        className={`${
                          isActive ? "active-link" : ""
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
                          <span>{item.label}</span>
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* sidebar navigation links end */}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* mobile navbar component end */}
    </>
  );
}
