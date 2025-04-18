import { IoSearch } from "react-icons/io5";

import "./supportStyles.css";

import { useEffect, useState } from "react";

import { FaArrowLeft } from "react-icons/fa";

import DesktopVerticalDots from "./DesktopVerticalDots";

import DesktopHorizontalDots from "./DesktopHorizontalDots";
import MobileVerticalDots from "./MobileVerticalDots";
import MobileHorizontalDots from "./MobileHorizontalDots";
import DesktopSendVerticalDots from "./DesktopSendVerticalDots";
import MobileSendVerticalDots from "./MobileSendVerticalDots";
import EmojiPickerButton from "./EmojiPickerButton";

export default function SupportPage() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  const [userId, setUserId] = useState("");

  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const usersData = [
    {
      id: 1,
      name: "Adrian Marshall",
      image: "./images/support/user-1.svg",
      online: false,
      message: "Have you called them?",
      messaged: "Just Now",
      messageSeen: true,
    },
    {
      id: 2,
      name: "Dr Joseph Boyd",
      image: "./images/support/user-2.svg",
      online: true,
      message: "",
      messaged: "Yesterday",
      messageSeen: false,
    },
    {
      id: 3,
      name: "Adrian Marshall",
      image: "./images/support/user-3.svg",
      online: false,
      message: "Have you called them?",
      messaged: "Just Now",
      messageSeen: true,
    },
    {
      id: 4,
      name: "Dr Joseph Boyd",
      image: "./images/support/user-4.svg",
      online: true,
      message: "",
      messaged: "Yesterday",
      messageSeen: false,
    },
  ];

  // Function to handle emoji selection and add it to the input
  const handleEmojiSelect = (emoji) => {
    setCurrentMessage((prevMessage) => prevMessage + emoji);
  };

  // Function to handle sending the message (you'll need to implement the actual send logic)
  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      console.log("Sending message:", currentMessage);
      // TODO: Add logic here to send the message, e.g., via an API call
      setCurrentMessage(""); // Clear the input after sending
    }
  };

  // Handle pressing Enter key to send message
  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission if applicable
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex gap-3 items-center justify-between">
          <h1 className="main-heading">Support</h1>
          <div>
            <button className="inline-flex items-center gap-[8px] px-[12px] py-[8px] bg-[#624DE3] rounded-[8px] font-[600] text-white cursor-pointer">
              <span>+</span>
              <span>Add New</span>
            </button>
          </div>
        </div>
        {/* chat box start */}

        <div className="border border-[#AEC8E2] rounded-[14px] bg-white flex chat-box-overall">
          {/* users box start */}
          {isSmallScreen ? (
            ""
          ) : (
            <div className="flex flex-col gap-5 p-5 w-[40%] users-box overflow-auto">
              <p className="text-[#252C62] font-[500] text-[18px]">All Chats</p>
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

              <div className="flex flex-col gap-3">
                {usersData?.map((user, index) => {
                  return (
                    <div
                      key={index}
                      className="border border-[#AEC8E2] rounded-[6px] bg-white p-[10px] flex items-center gap-3 justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-[50px] h-[50px] relative">
                          <img
                            src={user?.image}
                            alt={user?.name}
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "6px",
                              display: "inline-flex",
                            }}
                          />
                          {user?.online ? (
                            <span className="absolute bottom-[1px] right-[1px] rounded-full w-[10px] h-[10px] bg-[#5BBE6D] border border-white"></span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div>
                          <p>{user?.name}</p>
                          <p>{user?.message}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 items-end">
                        <p>{user?.messaged}</p>
                        <div>
                          <img
                            className={`${
                              user.messageSeen ? "" : "message-unseen"
                            }`}
                            src="./images/support/ticks.svg"
                            alt="icon"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {/* users box end */}

          {/* main chat box start */}

          {isSmallScreen ? (
            ""
          ) : (
            <div className="w-[60%] main-chat-box p-5 overflow-auto">
              <div className="h-full">
                {/* chat header starts */}

                <div className="bg-[#FAFAFA] rounded-[10px] p-5 flex items-center gap-3 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-[50px] h-[50px] relative">
                      <img
                        src={"./images/support/user-4.svg"}
                        alt={`user image`}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "6px",
                          display: "inline-flex",
                        }}
                      />
                      <span className="absolute bottom-[1px] right-[1px] rounded-full w-[10px] h-[10px] bg-[#5BBE6D] border border-white"></span>
                    </div>
                    <div>
                      <p>Dr Edalin Hendry</p>
                      <p className="text-[#4C63BD]">Online</p>
                    </div>
                  </div>
                  <DesktopVerticalDots />
                </div>

                {/* chat header end */}

                {/* chat starts */}

                <div className="">
                  <div className="flex flex-col message-box">
                    <div className="admin-message">
                      <div>
                        <p>Andrea Kearns</p>
                        <p>8:16 PM</p>
                      </div>
                      <DesktopHorizontalDots />
                      <div>
                        <img
                          src="./images/support/girl.svg"
                          alt="image"
                          style={{
                            width: "50px",
                            height: "50px",
                            display: "inline-flex",
                            borderRadius: "6px",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="user-message">
                        Hi Doctor, could you tell a diet plan that suits for me?
                      </p>
                    </div>
                  </div>

                  {/* send message box starts */}

                  <div className="flex items-center gap-3 relative">
                    <EmojiPickerButton onEmojiClick={handleEmojiSelect}>
                      <img
                        src="./images/support/smiley.svg"
                        alt="Open emoji picker"
                      />
                    </EmojiPickerButton>
                    <div className="flex items-center options-box">
                      <DesktopSendVerticalDots />

                      <div>
                        <button type="button" className="inline-block">
                          <img src="./images/support/mic.svg" alt="icon" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center send-box">
                      <div className="w-full">
                        <input
                          type="text"
                          className="border border-[#AEC8E2] rounded-[10px] w-full py-2 px-4"
                          placeholder="Type Your Message Here..."
                          value={currentMessage} // Bind input value to state
                          onChange={(e) => setCurrentMessage(e.target.value)} // Update state on change
                          onKeyDown={handleInputKeyPress} // Handle Enter key
                        />
                      </div>
                      <div>
                        <button
                          type="button"
                          className="bg-[#4C63BD] w-[45px] h-[45px] inline-flex justify-center items-center rounded-[8px]"
                        >
                          <img src="./images/support/send-icon.svg" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* send message end */}
                </div>

                {/* chat end */}
              </div>
            </div>
          )}

          {/* main chat box end */}

          {/* for mobile starts */}

          {isSmallScreen && !userId ? (
            <div className="w-full rounded-[14px] p-5 flex flex-col gap-5">
              <p className="text-[#252C62] font-[500] text-[20px]">All Chats</p>
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
              <div className="flex flex-col gap-3 overflow-auto">
                {usersData?.map((user, index) => {
                  return (
                    <div
                      key={index}
                      className="border border-[#AEC8E2] rounded-[6px] bg-white p-[10px] flex items-center gap-3 justify-between cursor-pointer"
                      onClick={() => {
                        setUserId(user?.id);
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-[50px] h-[50px] relative">
                          <img
                            src={user?.image}
                            alt={user?.name}
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "6px",
                              display: "inline-flex",
                            }}
                          />
                          {user?.online ? (
                            <span className="absolute bottom-[1px] right-[1px] rounded-full w-[10px] h-[10px] bg-[#5BBE6D] border border-white"></span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div>
                          <p>{user?.name}</p>
                          <p>{user?.message}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 items-end">
                        <p>{user?.messaged}</p>
                        <div>
                          <img
                            className={`${
                              user.messageSeen ? "" : "message-unseen"
                            }`}
                            src="./images/support/ticks.svg"
                            alt="icon"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}

          {isSmallScreen && userId ? (
            <div className="flex flex-col gap-5 p-5 w-full">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer text-[#252C62]"
                  onClick={() => {
                    setUserId("");
                  }}
                >
                  <FaArrowLeft />
                </button>
              </div>
              <div className="w-full main-chat-box-mobile overflow-auto">
                <div className="h-full">
                  {/* chat header starts */}

                  <div className="bg-[#FAFAFA] rounded-[10px] p-5 flex items-center gap-3 justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-[50px] h-[50px] relative">
                        <img
                          src={"./images/support/user-4.svg"}
                          alt={`user image`}
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "6px",
                            display: "inline-flex",
                          }}
                        />
                        <span className="absolute bottom-[1px] right-[1px] rounded-full w-[10px] h-[10px] bg-[#5BBE6D] border border-white"></span>
                      </div>
                      <div>
                        <p>Dr Edalin Hendry</p>
                        <p className="text-[#4C63BD]">Online</p>
                      </div>
                    </div>
                    <MobileVerticalDots />
                  </div>

                  {/* chat header end */}

                  {/* chat starts */}

                  <div className="">
                    <div className="flex flex-col message-box-mobile">
                      <div className="admin-message">
                        <div>
                          <p>Andrea Kearns</p>
                          <p>8:16 PM</p>
                        </div>
                        <MobileHorizontalDots />
                        <div>
                          <img
                            src="./images/support/girl.svg"
                            alt="image"
                            style={{
                              width: "50px",
                              height: "50px",
                              display: "inline-flex",
                              borderRadius: "6px",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <p className="user-message">
                          Hi Doctor, could you tell a diet plan that suits for
                          me?
                        </p>
                      </div>
                    </div>

                    {/* send message box starts */}

                    <div className="flex items-center gap-3">
                      <EmojiPickerButton onEmojiClick={handleEmojiSelect}>
                        <img
                          src="./images/support/smiley.svg"
                          alt="Open emoji picker"
                        />
                      </EmojiPickerButton>
                      <div className="flex items-center options-box">
                        <MobileSendVerticalDots />

                        <div>
                          <button type="button" className="inline-block">
                            <img src="./images/support/mic.svg" alt="icon" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center send-box">
                        <div className="w-full">
                          <input
                            type="text"
                            className="border border-[#AEC8E2] rounded-[10px] w-full py-2 px-4"
                            placeholder="Type Your Message Here..."
                            value={currentMessage} // Bind input value to state
                            onChange={(e) => setCurrentMessage(e.target.value)} // Update state on change
                            onKeyDown={handleInputKeyPress} // Handle Enter key
                          />
                        </div>
                        <div>
                          <button
                            type="button"
                            className="bg-[#4C63BD] w-[45px] h-[45px] inline-flex justify-center items-center rounded-[8px]"
                          >
                            <img src="./images/support/send-icon.svg" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* send message end */}
                  </div>

                  {/* chat end */}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* for mobile end */}
        </div>

        {/* chat box end */}
      </div>
    </>
  );
}
