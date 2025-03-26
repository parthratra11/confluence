/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { RiInstagramLine, RiMailLine } from "react-icons/ri";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer
        id="contact"
        className="bg-gradient-to-r z-50 from-[#000000] to-[#05101d] text-white py-8"
      >
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <div className="grid gap-1 mb-4 grid-cols-[1fr_1fr]">
              <img
                src="/hrcLogo.jpeg"
                alt="Hansraj Logo"
                className="rounded-full p-4"
              />
              <img
                src="/confluenceLogo.png"
                alt="Confluence Logo"
                className="rounded-full p-4"
              />
            </div>
            <p className="text-2xl md:text-4xl font-bold flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Confluence 2025
            </p>
            <p className="text-sm md:text-lg flex items-center justify-center text-gray-200">
              Annual Fest of Hansraj College
            </p>
          </div>

          {/* Useful Links Section */}
          <div className="sm:ml-16 font-mont">
            <h3 className="font-semibold mb-4 text-2xl relative">
              <span className="relative">Quick Links</span>
              <span className="absolute left-0 bottom-[-4px] w-1/3 h-0.5 bg-cyan-500"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="relative group"
                >
                  <span className="relative pb-2">Home</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("artists")}
                  className="relative group"
                >
                  <span className="relative pb-2">Artists</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("schedule")}
                  className="relative group"
                >
                  <span className="relative pb-2">Schedule</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("events")}
                  className="relative group"
                >
                  <span className="relative pb-2">Events</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sponsors")}
                  className="relative group"
                >
                  <span className="relative pb-2">Sponsors</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            </ul>
            <div className="flex space-x-2 mt-6">
              <a
                href="mailto:ordinateur.hrc.du@gmail.com"
                aria-label="Mail"
                className="bg-white bg-opacity-10 rounded-full p-2  text-white hover:text-cyan-400 hover:-translate-y-2 transition-all duration-200"
              >
                <RiMailLine className="text-2xl " />
              </a>
              <a
                href="https://www.instagram.com/confluence.hrc"
                target="_blank"
                aria-label="Instagram"
                className="bg-white bg-opacity-10 rounded-full p-2  text-white hover:text-cyan-400 hover:-translate-y-2 transition-all duration-200"
              >
                <RiInstagramLine className="text-2xl " />
              </a>
            </div>
          </div>

          {/* Contact and Get Involved Section */}
          <div>
            <div className="h-full w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8890731166856!2d77.2102467!3d28.6797055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9a74a2aacf%3A0x59e09f11f71c1a54!2sHansraj+College!5e0!3m2!1sen!2sin!4v1707654321!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
      <div className="h-[5vh] z-50 w-full border-t border-gray-700 bg-gray-900 text-gray-300 flex justify-center items-center px-4 text-center">
        <p className="text-sm flex sm:py-0 flex-col sm:flex-row">
          <p className="mx-1">Copyright © 2025 Confluence | </p>
          <p>
            Designed and Developed by{" "}
            <a
              href="https://www.linkedin.com/in/parthratra11/"
              target="_blank"
              className="italic hover:text-cyan-400"
            >
              Parth Ratra
            </a>
          </p>
        </p>
      </div>
    </>
  );
};

export default Footer;
