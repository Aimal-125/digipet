import { useEffect, useRef, useState } from "react";

export default function DesktopHorizontalDots() {
  const [messageHorizontalDotsActive, setMessageHorizontalDotsActive] =
    useState(false);

  const messageHorizontalDotsRef = useRef(null);

  const messageHorizontalDotsButtonRef = useRef(null);

  const horizontalMessageDotsOptions = [
    {
      name: "Message Info",
    },
    {
      name: "Reply",
    },
    {
      name: "React",
    },
    {
      name: "Forward",
    },
    {
      name: "Delete",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        messageHorizontalDotsActive &&
        messageHorizontalDotsRef.current &&
        !messageHorizontalDotsRef.current.contains(event.target) &&
        messageHorizontalDotsButtonRef.current &&
        !messageHorizontalDotsButtonRef.current.contains(event.target)
      ) {
        setMessageHorizontalDotsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [messageHorizontalDotsActive]);

  return (
    <>
      <div className="relative flex items-center justify-center">
        <button
          ref={messageHorizontalDotsButtonRef}
          type="button"
          aria-label="options button"
          className="cursor-pointer bg-gray-100 w-[30px] h-[30px] rounded-full inline-flex justify-center items-center"
          onClick={() => {
            setMessageHorizontalDotsActive(!messageHorizontalDotsActive);
          }}
        >
          <img src="./images/support/horizontal-dots.svg" alt="icon" />
        </button>
        {messageHorizontalDotsActive ? (
          <div
            ref={messageHorizontalDotsRef}
            className="absolute top-[100%] z-10 border border-[#AEC8E2] right-0 w-[200px] bg-white rounded-md p-[10px]"
          >
            {horizontalMessageDotsOptions?.map((value, index) => {
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
