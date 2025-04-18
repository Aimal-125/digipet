import { useState, useRef, useEffect } from "react";

import Picker from "emoji-picker-react";

export default function EmojiPickerButton({ onEmojiClick, children }) {
  const [showPicker, setShowPicker] = useState(false);

  const pickerRef = useRef(null);

  const handleEmojiClick = (emojiData) => {
    onEmojiClick(emojiData.emoji);
    setShowPicker(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    }

    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPicker]);

  return (
    <div className="relative flex" ref={pickerRef}>
      <button
        type="button"
        className="inline-flex cursor-pointer"
        onClick={() => setShowPicker(!showPicker)}
        aria-expanded={showPicker}
        aria-haspopup="true"
      >
        {children || (
          <img src="./images/support/smiley.svg" alt="Open emoji picker" />
        )}
      </button>

      {showPicker && (
        <div className="absolute bottom-[100%] w-[300px] max-[401px]:w-[200px] left-0 z-10">
          <Picker
            onEmojiClick={handleEmojiClick}
            style={{
              width: "100%",
            }}
            height={350}
          />
        </div>
      )}
    </div>
  );
}
