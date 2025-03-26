"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Calendar } from "lucide-react";
import { Header } from "./components/Layout/Header";
import { MenuButton } from "./components/MenuButton/MenuButton";
import { StarField } from "./components/StarField/StarField";
import { AngryBirds } from "./components/Characters/AngryBirds";
import "./styles/animations.css";
import Galaxies from "./components/Characters/Galaxies";
import Piggies from "./components/Characters/Piggies";
import { useState, useEffect } from "react";
import { Carousel } from "./components/Carousel/Carousel";
import EventCarousel from "./components/EventCarousel/EventCarousel";
import { Tab } from "@headlessui/react";
import { ExternalLink } from "lucide-react";
import eventsData from "../public/data/events.json";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import Link from "next/link";

export default function Home() {
  const [hoveredArtist, setHoveredArtist] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState("all");

  // Convert JSON events to the format needed by EventCarousel
  const carouselEvents = eventsData.events.flatMap((society) =>
    society.events.map((event) => ({
      ...event,
      society: society.society,
      igLink: society.igLink, // Add this to your JSON file
    }))
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  // Convert events data for schedule display
  const scheduleData = {
    1: eventsData.events
      .flatMap((society) =>
        society.events.map((event) => ({
          ...event,
          society: society.society,
          igLink: society.igLink,
          date: event.date || "",
          time: event.time || "",
        }))
      )
      .filter((event) => event.date.includes("28 March"))
      .sort((a, b) => {
        // Sort by time if available
        const timeA = a.time?.split("-")[0] || "";
        const timeB = b.time?.split("-")[0] || "";
        return timeA.localeCompare(timeB);
      }),
    2: eventsData.events
      .flatMap((society) =>
        society.events.map((event) => ({
          ...event,
          society: society.society,
          igLink: society.igLink,
          date: event.date || "",
          time: event.time || "",
        }))
      )
      .filter((event) => event.date.includes("29 March"))
      .sort((a, b) => {
        const timeA = a.time?.split("-")[0] || "";
        const timeB = b.time?.split("-")[0] || "";
        return timeA.localeCompare(timeB);
      }),
    3: eventsData.events
      .flatMap((society) =>
        society.events.map((event) => ({
          ...event,
          society: society.society,
          igLink: society.igLink,
          date: event.date || "",
          time: event.time || "",
        }))
      )
      .filter((event) => event.date.includes("30 March"))
      .sort((a, b) => {
        const timeA = a.time?.split("-")[0] || "";
        const timeB = b.time?.split("-")[0] || "";
        return timeA.localeCompare(timeB);
      }),
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselEvents.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselEvents.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselEvents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselEvents.length]);

  const getVisibleCards = (index) => {
    const total = carouselEvents.length;
    const prevIndex = (index - 1 + total) % total;
    const nextIndex = (index + 1) % total;
    return [
      carouselEvents[prevIndex],
      carouselEvents[index],
      carouselEvents[nextIndex],
    ];
  };

  // Add this new function before the return statement
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0B0B3B] to-[#000000] text-[#f9f9f9] flex flex-col items-center overflow-hidden">
      <Header />
      <MenuButton />

      <div className="absolute inset-0 bg-black opacity-50 z-20" />
      <StarField />

      {/* Hero Section */}
      <motion.div
        id="home"
        className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center z-40 relative py-20 2xl:py-32"
      >
        {/* Character components with their own overlay */}
        <div className="absolute inset-0 w-full h-full">
          {/* <div className="absolute inset-0 bg-black opacity-50 z-20" /> */}
          <div className="z-10 opacity-50">
            <Galaxies />
            <AngryBirds />
            <Piggies />
          </div>
        </div>

        <motion.div
          className="z-50 text-5xl sm:text-8xl 2xl:text-[120px] mt-8 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Confluence 2025
        </motion.div>

        <motion.div
          className="z-50 mt-4 sm:mt-6 text-xl sm:text-3xl 2xl:text-5xl text-center text-[#f9f9f9]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          Annual Fest of Hansraj College
        </motion.div>

        <motion.div
          className="z-50 mt-4 flex items-center gap-2 sm:gap-3 text-xl sm:text-3xl 2xl:text-4xl text-[#f9f9f9]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
          <span>28th - 30th March 2025</span>
        </motion.div>

        {/* Registration and Social Media Container - Fixed z-index */}
        <div className="relative z-50 flex flex-col items-center">
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSeDspP_f4egeJOD86w5CiKLkk4_KCNaQHmCr8DosV7_Ii-9XA/viewform?usp=send_form"
            }
            target="_blank"
          >
            <motion.button
              className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xl hover:scale-105 transition-transform"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Register Now
            </motion.button>
          </Link>

          <motion.a
            href="https://www.instagram.com/confluence.hrc"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-sm md:text-lg text-purple-300 hover:text-purple-400 transition-colors flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Follow @confluence.hrc for updates
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </motion.a>
        </div>
      </motion.div>

      {/* Artist Reveal Section */}
      <motion.div
        id="artists"
        className="container mx-auto px-4 py-12 sm:py-20 z-40"
      >
        <h2 className="text-3xl sm:text-4xl 2xl:text-6xl font-bold text-center mb-8 sm:mb-16">
          Artist Lineup
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 max-w-7xl 2xl:max-w-[1400px] mx-auto">
          {[1, 2, 3].map((day) => (
            <div
              key={day}
              className="relative"
              onMouseEnter={() => setHoveredArtist(day)}
              onMouseLeave={() => setHoveredArtist(null)}
            >
              <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden relative">
                <div className="w-full h-full bg-black opacity-90 flex items-center justify-center">
                  <img
                    src="/artist.png"
                    alt="Artist Silhouette"
                    className="w-[100%] opacity-50"
                  />
                </div>
                {hoveredArtist === day && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div
                      className="text-center px-6 py-4 rounded-lg"
                      style={{
                        fontFamily: '"Press Start 2P", cursive',
                        textShadow: "2px 2px 0 #000",
                      }}
                    >
                      <p className="text-xl md:text-2xl text-yellow-400 mb-2">
                        WHO'S THAT
                      </p>
                      <p className="text-2xl md:text-3xl text-white">ARTIST?</p>
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold">Day {day}</h3>
                <p className="text-purple-400">Artist Reveal Soon</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Schedule Section */}
      <motion.div
        id="schedule"
        className="container mx-auto px-4 py-12 sm:py-20 z-40"
      >
        <h2 className="text-3xl sm:text-4xl 2xl:text-6xl font-bold text-center mb-8 sm:mb-16">
          Schedule
        </h2>

        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
          <Tab.Group>
            <Tab.List className="flex space-x-4 justify-center mb-8">
              {[1, 2, 3].map((day) => (
                <Tab
                  key={day}
                  className={({ selected }) =>
                    `px-6 py-3 rounded-lg font-medium transition-colors ${
                      selected
                        ? "bg-purple-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`
                  }
                >
                  Day {day}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {[1, 2, 3].map((day) => (
                <Tab.Panel key={day}>
                  <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 2xl:gap-6">
                    {scheduleData[day].map((event, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex flex-col gap-2">
                          {event.time ? (
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-purple-400" />
                              <span className="text-purple-400">
                                {event.time}
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-purple-400" />
                              <span className="text-purple-400">-</span>
                            </div>
                          )}
                          <h3 className="text-xl font-bold">
                            {event.name || "-"}
                          </h3>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-300">
                              {event.venue || "-"}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="text-gray-400">
                              By {event.society || "-"}
                            </p>
                            {event.igLink && (
                              <a
                                href={event.igLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm"
                              >
                                <span>View Details</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </motion.div>

      {/* Event Carousel Section */}
      <motion.section
        id="events"
        className="min-h-screen w-full py-12 sm:py-20 relative z-40"
      >
        <h2 className="text-3xl sm:text-4xl 2xl:text-6xl font-bold text-center mb-8 sm:mb-16">
          Featured Events
        </h2>
        <EventCarousel
          events={carouselEvents}
          selectedDay={selectedDay}
          onDayChange={setSelectedDay}
        />
      </motion.section>

      {/* Sponsors Section */}
      <div id="sponsors" className="z-50">
        <Sponsors />
      </div>

      {/* Footer with darker background */}
      <Footer />
    </div>
  );
}
