import { useEffect, useRef, useState } from "react";
import { CgAttachment } from "react-icons/cg";

export default function DesktopSendVerticalDots() {
  const [verticalDotsActive, setverticalDotsActive] = useState(false);

  const verticalDotsRef = useRef(null);

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        verticalDotsActive &&
        verticalDotsRef.current &&
        !verticalDotsRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setverticalDotsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [verticalDotsActive]);

  const options = [
    {
      name: "Attachment",
      icon: <CgAttachment />,
    },
  ];

  return (
    <>
      <div className="relative flex items-center justify-center">
        <button
          ref={buttonRef}
          type="button"
          className="cursor-pointer inline-flex justify-center items-center"
          aria-label="menu"
          onClick={() => {
            setverticalDotsActive(!verticalDotsActive);
          }}
        >
          <img src="./images/support/vertical-dots.svg" alt="icon" />
        </button>
        {verticalDotsActive ? (
          <div
            ref={verticalDotsRef}
            className="absolute bottom-[100%] z-10 border border-[#AEC8E2] left-0 w-[200px] bg-white rounded-md p-[10px]"
          >
            {options?.map((value, index) => {
              return (
                <div key={index} className="w-full">
                  <button
                    type="button"
                    aria-label={`${value?.name} button`}
                    className="p-[5px] cursor-pointer w-full text-left text-[#252C62] inline-flex items-center gap-1"
                  >
                    <span>{value?.icon}</span>
                    <span>{value?.name}</span>
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
