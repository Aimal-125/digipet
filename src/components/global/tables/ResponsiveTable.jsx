import { useEffect, useState } from "react";
import Status from "../status/Status";
import "./responsiveTable.css";

import { IoSearch } from "react-icons/io5";
import Pagination from "../pagination/Pagination";

function ResponsiveTable({
  data = [],
  headings = [],
  mainHeading = "",
  searchBar = true,
  cells = [],
  status = false,
  actions = false,
  actionTypes = [],
  actionHandler = () => {},
  pages = 1,
  setCurrentPage = () => {},
}) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 950);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 950);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <div className="responsive-table-container">
          <div
            className={`${
              mainHeading ? "mb-[20px]" : ""
            } flex max-[572px]:flex-col items-center gap-[20px]`}
          >
            <h2 className="m-0 font-[700] text-[24px] text-[#202224] py-0 px-[20px]">
              {mainHeading}
            </h2>

            {searchBar ? (
              <div className="search-bar">
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
            ) : (
              ""
            )}
          </div>

          <div className="flex flex-col gap-5 px-5">
            {data?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border border-gray-300 border-b-[5px] border-b-blue-500 rounded-[20px] flex flex-col py-2"
                >
                  {headings?.map((heading, hIndex) => {
                    const cellValue = cells[hIndex]
                      ? item[cells[hIndex]]
                      : null;

                    return (
                      <div
                        key={hIndex}
                        className="flex items-center gap-3 justify-between border-b border-gray-300 last-of-type:border-none px-4 py-2"
                      >
                        <div
                          className="flex"
                          style={{
                            wordBreak: "break-all",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                        >
                          {heading}
                        </div>

                        <div className="flex">
                          {heading === "Status" && status ? (
                            <Status status={item?.status} />
                          ) : heading === "Action" && actions ? (
                            <div className="flex items-center justify-center gap-2">
                              {actionTypes?.map((type, index) => {
                                return (
                                  <button
                                    key={index}
                                    aria-label={`${type?.action} button`}
                                    title={`${type?.action}`}
                                    className="inline-flex items-center justify-center cursor-pointer"
                                    onClick={() =>
                                      actionHandler(item, type?.action)
                                    }
                                  >
                                    <img
                                      src={type?.icon}
                                      alt={`${type?.action} icon`}
                                    />
                                  </button>
                                );
                              })}
                            </div>
                          ) : (
                            <span
                              style={{
                                wordBreak: "break-all",
                                fontWeight: "300",
                                fontSize: "14px",
                              }}
                            >
                              {cellValue}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-5">
            <Pagination totalPages={pages} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      ) : (
        <div className="responsive-table-container">
          <div
            className={`${
              mainHeading ? "mb-[20px]" : ""
            } flex max-[572px]:flex-col items-center gap-[20px]`}
          >
            <h2 className="m-0 font-[700] text-[24px] text-[#202224] py-0 px-[20px]">
              {mainHeading}
            </h2>

            {searchBar ? (
              <div className="search-bar">
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
            ) : (
              ""
            )}
          </div>
          <table>
            <thead>
              <tr>
                {headings?.map((heading, index) => {
                  return (
                    <th className="" key={index}>
                      {heading}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={index} className="">
                  {cells?.map((cell, index) => {
                    return (
                      <td className="" key={index}>
                        {item[cell]}
                      </td>
                    );
                  })}

                  {status ? (
                    <td>
                      <Status status={item?.status} />
                    </td>
                  ) : (
                    ""
                  )}

                  {actions ? (
                    <td className="inline-flex items-center justify-center gap-2">
                      {actionTypes?.map((type, index) => {
                        return (
                          <button
                            key={index}
                            aria-label={`${type?.action} button`}
                            title={`${type?.action}`}
                            className="inline-flex items-center justify-center cursor-pointer"
                            onClick={() => actionHandler(item, type?.action)}
                          >
                            <img
                              src={type?.icon}
                              alt={`${type?.action} icon`}
                            />
                          </button>
                        );
                      })}
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-5">
            <Pagination totalPages={pages} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      )}
    </>
  );
}

export default ResponsiveTable;
