import ReactPaginate from "react-paginate";

import "./pagination.css";

import { IoCaretBackOutline } from "react-icons/io5";
import { IoCaretForward } from "react-icons/io5";

import { useEffect, useState } from "react";

export default function Pagination({ totalPages, setCurrentPage }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex overflow-auto max-[601px]:flex-col gap-3 items-center justify-between p-2 rounded-md">
        <div className="">
          <ReactPaginate
            previousClassName={"cursor-pointer"}
            previousLabel={
              isSmallScreen ? (
                <IoCaretBackOutline />
              ) : (
                <div className="text-gray-500 text-[16px]">Previous</div>
              )
            }
            nextClassName={"cursor-pointer"}
            nextLabel={
              isSmallScreen ? (
                <IoCaretForward />
              ) : (
                <div className="text-gray-500 text-[16px]">Next</div>
              )
            }
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPages || 1}
            marginPagesDisplayed={2} // Number of pages to show at the beginning and end
            pageRangeDisplayed={3} // Number of pages to show around the current page
            onPageChange={(data) => setCurrentPage(data.selected + 1)}
            containerClassName={"flex items-center max-[400px]:gap-2 gap-3"}
            pageClassName={
              "bg-gray-300 rounded-[8px] overflow-hidden max-[400px]:w-[20px] max-[400px]:h-[20px] w-[32px] h-[32px] flex items-center justify-center text-black cursor-pointer font-[500] text-[12px]"
            }
            activeClassName={"pagination-active-btn"}
          />
        </div>
      </div>
    </>
  );
}
