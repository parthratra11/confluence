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

export default function Home() {
  const [hoveredArtist, setHoveredArtist] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(1);

  const events = [
    {
      id: 1,
      title: "Battle of Bands",
      society: "Music Society",
      date: "28th March",
      time: "10:00 AM",
      venue: "OAT",
      image: "/temp.jpg",
    },
    {
      id: 2,
      title: "Street Play Finals",
      society: "Dramatics Society",
      date: "28th March",
      time: "2:00 PM",
      venue: "Sports Ground",
      image: "/temp.jpg",
    },
    {
      id: 3,
      title: "EDM Night",
      society: "Cultural Council",
      date: "29th March",
      time: "6:00 PM",
      venue: "Sports Ground",
      image: "/temp.jpg",
    },
    {
      id: 4,
      title: "Fashion Show",
      society: "Fashion Society",
      date: "30th March",
      time: "5:00 PM",
      venue: "Main Stage",
      image: "/temp.jpg",
    },
    {
      id: 5,
      title: "Dance Competition",
      society: "Dance Society",
      date: "29th March",
      time: "3:00 PM",
      venue: "Main Auditorium",
      image: "/temp.jpg",
    },
    {
      id: 6,
      title: "Poetry Slam",
      society: "Literary Society",
      date: "28th March",
      time: "1:00 PM",
      venue: "Seminar Hall",
      image: "/temp.jpg",
    },
    {
      id: 7,
      title: "Art Exhibition",
      society: "Fine Arts Society",
      date: "29th March",
      time: "11:00 AM",
      venue: "Art Gallery",
      image: "/temp.jpg",
    },
    {
      id: 8,
      title: "Stand-up Comedy",
      society: "Drama Society",
      date: "30th March",
      time: "4:00 PM",
      venue: "OAT",
      image: "/temp.jpg",
    },
    {
      id: 9,
      title: "DJ War",
      society: "Music Society",
      date: "30th March",
      time: "7:00 PM",
      venue: "Sports Ground",
      image: "/temp.jpg",
    },
    {
      id: 10,
      title: "Star Night",
      society: "Cultural Council",
      date: "30th March",
      time: "8:00 PM",
      venue: "Sports Ground",
      image: "/temp.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const scheduleData = {
    1: [
      // Morning Events Column
      {
        time: "9:00 AM",
        name: "Opening Ceremony",
        venue: "College Auditorium",
        society: "Cultural Council",
        igLink: "https://instagram.com/cultural_council",
      },
      {
        time: "10:00 AM",
        name: "Battle of Bands",
        venue: "Open Air Theatre",
        society: "Music Society",
        igLink: "https://instagram.com/music_society",
      },
      {
        time: "11:00 AM",
        name: "Street Play",
        venue: "Sports Ground",
        society: "Theatre Society",
        igLink: "https://instagram.com/theatre_society",
      },
      {
        time: "11:30 AM",
        name: "Poetry Slam",
        venue: "Seminar Hall",
        society: "Literary Society",
        igLink: "https://instagram.com/lit_society",
      },
      {
        time: "12:00 PM",
        name: "Art Exhibition",
        venue: "Art Gallery",
        society: "Fine Arts Society",
        igLink: "https://instagram.com/fine_arts",
      },
      // Afternoon/Evening Events Column
      {
        time: "2:00 PM",
        name: "Dance Competition",
        venue: "Main Stage",
        society: "Dance Society",
        igLink: "https://instagram.com/dance_society",
      },
      {
        time: "3:30 PM",
        name: "Music Performance",
        venue: "Auditorium",
        society: "Music Society",
        igLink: "https://instagram.com/music_society",
      },
      {
        time: "4:00 PM",
        name: "Fashion Show",
        venue: "Main Stage",
        society: "Fashion Society",
        igLink: "https://instagram.com/fashion_society",
      },
      {
        time: "5:00 PM",
        name: "Stand-up Comedy",
        venue: "Seminar Hall",
        society: "Drama Society",
        igLink: "https://instagram.com/drama_society",
      },
      {
        time: "6:00 PM",
        name: "DJ Night",
        venue: "Sports Ground",
        society: "Cultural Council",
        igLink: "https://instagram.com/cultural_council",
      },
    ],
    2: [
      // Morning Events Column
      {
        time: "9:00 AM",
        name: "Opening Ceremony",
        venue: "College Auditorium",
        society: "Cultural Council",
        igLink: "https://instagram.com/cultural_council",
      },
      {
        time: "10:00 AM",
        name: "Battle of Bands",
        venue: "Open Air Theatre",
        society: "Music Society",
        igLink: "https://instagram.com/music_society",
      },
      {
        time: "11:00 AM",
        name: "Street Play",
        venue: "Sports Ground",
        society: "Theatre Society",
        igLink: "https://instagram.com/theatre_society",
      },
      {
        time: "11:30 AM",
        name: "Poetry Slam",
        venue: "Seminar Hall",
        society: "Literary Society",
        igLink: "https://instagram.com/lit_society",
      },
      {
        time: "12:00 PM",
        name: "Art Exhibition",
        venue: "Art Gallery",
        society: "Fine Arts Society",
        igLink: "https://instagram.com/fine_arts",
      },
      // Afternoon/Evening Events Column
      {
        time: "2:00 PM",
        name: "Dance Competition",
        venue: "Main Stage",
        society: "Dance Society",
        igLink: "https://instagram.com/dance_society",
      },
      {
        time: "3:30 PM",
        name: "Music Performance",
        venue: "Auditorium",
        society: "Music Society",
        igLink: "https://instagram.com/music_society",
      },
      {
        time: "4:00 PM",
        name: "Fashion Show",
        venue: "Main Stage",
        society: "Fashion Society",
        igLink: "https://instagram.com/fashion_society",
      },
      {
        time: "5:00 PM",
        name: "Stand-up Comedy",
        venue: "Seminar Hall",
        society: "Drama Society",
        igLink: "https://instagram.com/drama_society",
      },
      {
        time: "6:00 PM",
        name: "DJ Night",
        venue: "Sports Ground",
        society: "Cultural Council",
        igLink: "https://instagram.com/cultural_council",
      },
    ],
    3: [
      // Morning Events Column
      {
        time: "9:00 AM",
        name: "Opening Ceremony",
        venue: "College Auditorium",
        society: "Cultural Council",
        igLink: "https://instagram.com/cultural_council",
      },
      {
        time: "10:00 AM",
        name: "Battle of Bands",
        venue: "Open Air Theatre",
        society: "Music Society",
        igLink: "https://instagram.com/music_society",
      },
      {
        time: "11:00 AM",
        name: "Street Play",
        venue: "Sports Ground",
        society: "Theatre Society",
        igLink: "https://instagram.com/theatre_society",
      },
      {
        time: "11:30 AM",
        name: "Poetry Slam",
        venue: "Seminar Hall",
        society: "Literary Society",
        igLink: "https://instagram.com/lit_society",
      },
      {
        time: "12:00 PM",
        name: "Art Exhibition",
        venue: "Art Gallery",
        society: "Fine Arts Society",
        igLink: "https://instagram.com/fine_arts",
      },
      // Afternoon/Evening Events Column
      {
        time: "2:00 PM",
        name: "Dance Competition",
        venue: "Main Stage",
        society: "Dance Society",
        igLink: "https://instagram.com/dance_society",
      },
      {
        time: "3:30 PM",
        name: "Music Performance",
        venue: "Auditorium",
        society: "Music Society",
        igLink: "https://instagram.com/music_society",
      },
      {
        time: "4:00 PM",
        name: "Fashion Show",
        venue: "Main Stage",
        society: "Fashion Society",
        igLink: "https://instagram.com/fashion_society",
      },
      {
        time: "5:00 PM",
        name: "Stand-up Comedy",
        venue: "Seminar Hall",
        society: "Drama Society",
        igLink: "https://instagram.com/drama_society",
      },
      {
        time: "6:00 PM",
        name: "DJ Night",
        venue: "Sports Ground",
        society: "Cultural Council",
        igLink: "https://instagram.com/cultural_council",
      },
    ],
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [events.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [events.length]);

  const getVisibleCards = (index) => {
    const total = events.length;
    const prevIndex = (index - 1 + total) % total;
    const nextIndex = (index + 1) % total;
    return [events[prevIndex], events[index], events[nextIndex]];
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0B0B3B] to-[#000000] text-[#f9f9f9] flex flex-col items-center overflow-hidden">
      <Header />
      <MenuButton />
      <div className="absolute inset-0 bg-black opacity-50 z-20" />
      <StarField />
      <Galaxies />
      <AngryBirds />
      <Piggies />

      {/* Hero Section */}
      <motion.div className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center z-40">
        <motion.div
          className="text-7xl md:text-9xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Confluence 2025
        </motion.div>

        <motion.div
          className="mt-6 text-2xl md:text-4xl text-center text-[#f9f9f9]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          Annual Fest of Hansraj College
        </motion.div>

        <motion.div
          className="mt-8 flex items-center gap-3 text-2xl md:text-3xl text-[#f9f9f9]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Calendar className="w-8 h-8 text-yellow-400" />
          <span>28th - 30th March 2025</span>
        </motion.div>
      </motion.div>

      {/* Artist Reveal Section */}
      <motion.div className="container mx-auto px-4 py-20 z-40">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Artist Lineup
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
      <motion.div className="container mx-auto px-4 py-20 z-40">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Schedule
        </h2>

        <div className="max-w-4xl mx-auto">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Morning Events Column */}
                    <div className="space-y-4">
                      {scheduleData[day].slice(0, 5).map((event, index) => (
                        <motion.div
                          key={`morning-${index}`}
                          className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-purple-400" />
                              <span className="text-purple-400">
                                {event.time}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold">{event.name}</h3>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300">
                                {event.venue}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className="text-gray-400">
                                By {event.society}
                              </p>
                              <a
                                href={event.igLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm"
                              >
                                <span>View Details</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Afternoon/Evening Events Column */}
                    <div className="space-y-4">
                      {scheduleData[day].slice(5, 10).map((event, index) => (
                        <motion.div
                          key={`afternoon-${index}`}
                          className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: (index + 5) * 0.1 }}
                        >
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-purple-400" />
                              <span className="text-purple-400">
                                {event.time}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold">{event.name}</h3>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300">
                                {event.venue}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className="text-gray-400">
                                By {event.society}
                              </p>
                              <a
                                href={event.igLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm"
                              >
                                <span>View Details</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </motion.div>

      {/* Registration and Social Media Container - Fixed z-index */}
      <div className="relative z-50 flex flex-col items-center">
        <motion.button
          className="mt-16 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xl font-bold hover:scale-105 transition-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Register Now
        </motion.button>

        <motion.a
          href="https://www.instagram.com/confluence.hrc"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 text-sm md:text-lg text-purple-300 hover:text-purple-400 transition-colors flex items-center gap-2"
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

      {/* Event Carousel Section */}
      <motion.section className="min-h-screen w-full py-20 relative z-40">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Events
        </motion.h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex justify-center items-center">
            <div className="relative w-[90vw] max-w-[1200px] h-[600px] mx-auto">
              {getVisibleCards(activeIndex).map((event, index) => (
                <motion.div
                  key={`${event.id}-${index}`}
                  className="absolute top-1/2 left-1/2"
                  initial={false}
                  animate={{
                    x: `${(index - 1) * 120 - 50}%`,
                    y: "-50%",
                    scale: index === 1 ? 1 : 0.85,
                    opacity: index === 1 ? 1 : 0.5,
                    zIndex: index === 1 ? 10 : index === 0 ? 5 : 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.32, 0.72, 0, 1],
                    x: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    },
                  }}
                  style={{
                    width: "384px",
                    transformPerspective: "1000px",
                  }}
                >
                  <motion.div
                    className="bg-gray-800/60 rounded-xl overflow-hidden backdrop-blur-sm shadow-xl"
                    animate={{
                      y: index === 1 ? 0 : index === 0 ? 40 : -40,
                      rotateX: index === 1 ? 0 : index === 0 ? 10 : -10,
                      filter: index === 1 ? "blur(0px)" : "blur(4px)",
                      scale: index === 1 ? 1 : 0.95,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-purple-400 mb-2">{event.society}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{event.venue}</span>
                      </div>
                      <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg transition-colors">
                        View Details
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 left-8 -translate-y-1/2">
            <button
              className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
              onClick={() => {
                setActiveIndex((prev) =>
                  prev === 0 ? events.length - 1 : prev - 1
                );
              }}
            >
              ←
            </button>
          </div>

          <div className="absolute top-1/2 right-8 -translate-y-1/2">
            <button
              className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
              onClick={() => {
                setActiveIndex((prev) => (prev + 1) % events.length);
              }}
            >
              →
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {events.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-purple-600" : "bg-gray-600"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </motion.section>

      {/* Sponsors Section */}
      <motion.section className="container mx-auto px-4 py-20 z-40">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Sponsors
        </h2>
        <div className="bg-black/30 p-8 rounded-xl">
          <Carousel
            items={[
              { image: "/temp.jpg", name: "Sponsor 1" },
              { image: "/temp.jpg", name: "Sponsor 2" },
              { image: "/temp.jpg", name: "Sponsor 3" },
              // Add more sponsors as needed
            ]}
          />
        </div>
      </motion.section>

      {/* Footer with darker background */}
      <footer className="w-full bg-black/90 mt-20 py-12 px-4 z-40 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Hansraj College</h3>
              <a
                href="https://goo.gl/maps/YourCollegeLocation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-300 hover:text-purple-400"
              >
                <MapPin className="w-4 h-4" />
                Mahatma Hans Raj Marg, Malka Ganj, Delhi
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p>Email: confluence@hansrajcollege.ac.in</p>
              <p>Phone: +91 XXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
