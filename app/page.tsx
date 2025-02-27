"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const funMessages = [
    "You expected something to happen? That's cute.",
    "This button just applied for sick leave. Try again later.",
    "This button is legally required to ignore you. Any further clicks will be considered harassment.",
    "This button doesn't work, but you do. Go touch some grass",
    "Hold on, the fest coordinators are still arguing over what this button does.",
    "This button was supposed to open something… then the committee forgot.",
    "Nice try! This was just a test to see if you'd fall for a pointless feature. You did.",
    "Nice try! This is just a test to see if you're paying attention.",
    "This button was last seen running away with the fest sponsorship money.",
    "Nope. Not today. This button is on a 'No Work' strike.",
    "Your click has been forwarded to the most clueless fest volunteer.",
    "This button just ghosted you like your fest crush.",
    "Your click just got added to the 8-hour-long registration queue.",
    "This button had dreams once. Then it joined the fest committee.",
    "Breaking news: Your click has been ignored just like our budget requests.",
    "Clicking this just added your name to the 'forever unpaid volunteers' list.",
    "You clicked? Nice. Now go enjoy the fest instead of pressing useless buttons.",
  ];

  const handleMenuClick = () => {
    const randomMessage =
      funMessages[Math.floor(Math.random() * funMessages.length)];
    setPopupMessage(randomMessage);
    setShowPopup(true);
  };

  useEffect(() => {
    // Create stars with different sizes
    const container = document.querySelector(".star-container");
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      const size = Math.random();
      star.className = `star ${
        size < 0.6 ? "star-small" : size < 0.8 ? "star-medium" : "star-large"
      }`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite`;
      container?.appendChild(star);
    }

    // Simplified shooting star creation logic
    const createShootingStar = () => {
      const star = document.createElement("div");
      star.className = "shooting-star";

      // Position anywhere but leave room for animation
      star.style.top = `${Math.random() * 60}%`;
      star.style.left = `${Math.random() * 60}%`;

      container?.appendChild(star);
      setTimeout(() => star.remove(), 2000);
    };

    // Create shooting stars with longer intervals
    const interval = setInterval(() => {
      createShootingStar();
    }, 3000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0B0B3B] to-[#000000] text-[#f9f9f9] flex flex-col justify-center items-center overflow-hidden">
      {/* Menu Button */}
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

      {/* Cartoonish Popup */}
      {showPopup && (
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
      )}

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

      {/* Stars Container */}
      <div className="star-container absolute inset-0"></div>

      {/* Background Images replacing planets */}
      <div className="absolute top-10 left-32 w-32 h-32 z-10 opacity-60">
        <Image
          src="/astronaut.png"
          alt="Astronaut"
          fill
          className="object-contain animate-float"
        />
      </div>

      <div
        className="absolute top-40 right-20 w-40 h-40 z-10 opacity-60"
        style={{ animationDelay: "-2s" }}
      >
        <Image
          src="/galaxy2.png"
          alt="Galaxy 2"
          fill
          className="object-contain animate-float"
        />
      </div>

      <div
        className="absolute bottom-40 left-1/4 w-36 h-36 z-10 opacity-70"
        style={{ animationDelay: "-4s" }}
      ></div>
      {/* Logos in top left */}
      <div className="absolute top-4 left-4 flex gap-4 z-50">
        <a
          href="https://www.instagram.com/confluence.hrc"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Image
            src="/confluenceLogo2.png"
            width={50}
            height={50}
            alt="Confluence Logo"
            className="rounded-full"
          />
        </a>
        <a
          href="https://www.hansrajcollege.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Image
            src="/hrcLogo.jpeg"
            width={50}
            height={50}
            alt="HRC Logo"
            className="rounded-full"
          />
        </a>
      </div>

      {/* Heading */}
      <motion.div
        className="text-5xl md:text-8xl z-40 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        Confluence 2025
      </motion.div>

      {/* Subheading */}
      <motion.div
        className="mt-4 text-lg md:text-3xl text-center z-40 text-[#f9f9f9]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        Annual Fest of Hansraj College
      </motion.div>

      {/* Countdown */}
      <motion.div
        className="mt-6 flex items-center gap-2 text-xl md:text-2xl z-40 text-[#f9f9f9]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Clock className="w-6 h-6 text-yellow-400" />
        <span>Coming Soon...</span>
      </motion.div>

      {/* Instagram Call-to-action */}
      <motion.a
        href="https://www.instagram.com/confluence.hrc"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-sm md:text-lg text-purple-300 hover:text-purple-400 transition-colors z-40 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Follow @confluence.hrc for updates
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
        </svg>
      </motion.a>

      {/* Angry Birds Characters */}
      <motion.div
        className="absolute bottom-20 left-10 z-10"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
      >
        <Image src="/redBird.png" width={60} height={60} alt="Red Bird" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-20 z-10"
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
      >
        <Image src="/yellowBird.png" width={50} height={50} alt="Yellow Bird" />
      </motion.div>

      {/* Blue Birds Triangle Formation */}
      <motion.div
        className="absolute top-1/4 left-20 z-10"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
      >
        <Image src="/blueBird.png" width={30} height={30} alt="Blue Bird 1" />
      </motion.div>

      <motion.div
        className="absolute top-[28%] left-24 z-10"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          delay: 0.2,
          ease: "easeInOut",
        }}
      >
        <Image src="/blueBird.png" width={30} height={30} alt="Blue Bird 2" />
      </motion.div>

      <motion.div
        className="absolute top-[28%] left-16 z-10"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          delay: 0.4,
          ease: "easeInOut",
        }}
      >
        <Image src="/blueBird.png" width={30} height={30} alt="Blue Bird 3" />
      </motion.div>

      {/* Black Bird - moved more up and right */}
      <motion.div
        className="absolute bottom-52 right-20 z-10"
        animate={{
          x: [0, -20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
      >
        <Image src="/blackBird.png" width={60} height={60} alt="Black Bird" />
      </motion.div>

      {/* Move bigBird below text */}
      <motion.div
        className="absolute bottom-20 left-1/3 z-[1]"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
      >
        <Image src="/bigBird.png" width={80} height={80} alt="Big Bird" />
      </motion.div>

      {/* Piggy1 - moved more to the right */}
      <motion.div
        className="absolute bottom-32 right-1/4 z-10"
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
      >
        <Image src="/piggy1.png" width={50} height={50} alt="Piggy 1" />
      </motion.div>

      <motion.div
        className="absolute top-20 right-20 z-10"
        animate={{
          x: [0, -35, 0],
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
      >
        <Image src="/piggy2.png" width={45} height={45} alt="Piggy 2" />
      </motion.div>

      <motion.div
        className="absolute top-40 left-1/2 z-10"
        animate={{
          x: [0, 45, 0],
          y: [0, -25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
      >
        <Image src="/whiteBird.png" width={55} height={55} alt="White Bird" />
      </motion.div>
    </div>
  );
}
