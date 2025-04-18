import { useEffect, useRef, useState } from "react";

export default function MobileVerticalDots() {
  const [mainVerticalDotsActive, setMainVerticalDotsActive] = useState(false);

  const mainVerticalDotsRef = useRef(null);

  const mainVerticalDotsButtonRef = useRef(null);

  const verticalMainDotsOptions = [
    {
      name: "Close Chat",
    },
    {
      name: "Clear Message",
    },
    {
      name: "Delete Chat",
    },
    {
      name: "Report",
    },
    {
      name: "Block",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mainVerticalDotsActive &&
        mainVerticalDotsRef.current &&
        !mainVerticalDotsRef.current.contains(event.target) &&
        mainVerticalDotsButtonRef.current &&
        !mainVerticalDotsButtonRef.current.contains(event.target)
      ) {
        setMainVerticalDotsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mainVerticalDotsActive]);

  return (
    <>
      <div className="relative flex items-center justify-center">
        <button
          ref={mainVerticalDotsButtonRef}
          type="button"
          className="cursor-pointer bg-gray-100 w-[30px] h-[30px] rounded-full inline-flex justify-center items-center"
          aria-label="menu"
          onClick={() => {
            setMainVerticalDotsActive(!mainVerticalDotsActive);
          }}
        >
          <img src="./images/support/vertical-dots.svg" alt="icon" />
        </button>
        {mainVerticalDotsActive ? (
          <div
            ref={mainVerticalDotsRef}
            className="absolute top-[100%] z-10 border border-[#AEC8E2] right-0 w-[200px] bg-white rounded-md p-[10px]"
          >
            {verticalMainDotsOptions?.map((value, index) => {
              return (
                <div key={index}>
                  <button
                    type="button"
                    aria-label={`${value?.name} button`}
                    className="p-[5px] cursor-pointer w-full text-left text-[#252C62]"
                  >
                    {value?.name}
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
