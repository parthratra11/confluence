import React from "react";

const Popup = ({ popupMessage, setShowPopup, onClose }) => {
  return (
    <div>
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowPopup(false);
          }
        }}
      >
        <div className="bg-[#1a0f2e] text-[#f9f9f9] p-8 rounded-2xl shadow-xl max-w-md mx-4 animate-bounce-in relative border-2 border-purple-500/30">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute -top-4 -right-4 bg-purple-600 text-[#f9f9f9] w-9 h-9 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors text-xl font-bold border-2 border-purple-400"
          >
            ×
          </button>
          <div className="relative">
            <p className="text-lg text-purple-100">{popupMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
