import { useState } from "react";
import { funMessages } from "@/utils/constants";
import Popup from "./Popup";
// import { Popup } from "./Popup";

export const MenuButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleMenuClick = () => {
    const randomMessage =
      funMessages[Math.floor(Math.random() * funMessages.length)];
    setPopupMessage(randomMessage);
    setShowPopup(true);
  };

  return (
    <>
      <button
        onClick={handleMenuClick}
        className="absolute top-4 right-4 z-50 p-2 rounded-full hover:bg-purple-600/20 transition-colors"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {showPopup && (
        <Popup
          popupMessage={popupMessage}
          setShowPopup={setShowPopup}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};
