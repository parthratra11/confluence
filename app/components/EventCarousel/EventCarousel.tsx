"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Instagram,
} from "lucide-react";

interface Event {
  name: string;
  society: string;
  date?: string;
  time?: string;
  venue: string;
  igLink?: string;
  image: string; // Add image property
}

interface EventCarouselProps {
  events: Event[];
  selectedDay: string;
  onDayChange: (day: string) => void;
}

const EventCarousel = ({
  events,
  selectedDay,
  onDayChange,
}: EventCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const AUTO_SCROLL_INTERVAL = 5000; // 5 seconds between slides

  // Filter events by day
  const filteredEvents = events.filter((event) => {
    if (selectedDay === "all") return true;
    return event.date?.includes(selectedDay);
  });

  const getVisibleEvents = () => {
    const result = [];
    // Get previous 2 events
    for (let i = -2; i <= 2; i++) {
      let index =
        (currentIndex + i + filteredEvents.length) % filteredEvents.length;
      result.push({ event: filteredEvents[index], offset: i });
    }
    return result;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredEvents.length);
    setIsAutoPlaying(false); // Pause auto-play on manual navigation
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length
    );
    setIsAutoPlaying(false); // Pause auto-play on manual navigation
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying || filteredEvents.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredEvents.length);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, [isAutoPlaying, filteredEvents.length]);

  // Reset auto-play when filtered events change
  useEffect(() => {
    setIsAutoPlaying(true);
    setCurrentIndex(0);
  }, [selectedDay]);

  return (
    <div className="relative px-4 sm:px-12 max-w-7xl 2xl:max-w-[1400px] mx-auto">
      {/* Day Selection */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
        <button
          onClick={() => onDayChange("all")}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg ${
            selectedDay === "all" ? "bg-purple-600" : "bg-gray-700"
          }`}
        >
          All Events
        </button>
        <button
          onClick={() => onDayChange("28 March")}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg ${
            selectedDay === "28 March" ? "bg-purple-600" : "bg-gray-700"
          }`}
        >
          Day 1
        </button>
        <button
          onClick={() => onDayChange("29 March")}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg ${
            selectedDay === "29 March" ? "bg-purple-600" : "bg-gray-700"
          }`}
        >
          Day 2
        </button>
        <button
          onClick={() => onDayChange("30 March")}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg ${
            selectedDay === "30 March" ? "bg-purple-600" : "bg-gray-700"
          }`}
        >
          Day 3
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-50 bg-purple-600/80 p-1 sm:p-2 rounded-full hover:bg-purple-600 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-50 bg-purple-600/80 p-1 sm:p-2 rounded-full hover:bg-purple-600 transition-colors"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Event Cards */}
      <div className="overflow-hidden relative h-[400px] sm:h-[600px]">
        <div className="absolute w-full h-full flex items-center justify-center">
          {getVisibleEvents().map(({ event, offset }, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={false}
              animate={{
                x: `${offset * 100}%`,
                scale: Math.abs(offset) <= 1 ? 1 : 0.8,
                opacity: Math.abs(offset) <= 1 ? 1 : 0.3,
                zIndex: Math.abs(offset) <= 1 ? 20 : 10,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                filter: Math.abs(offset) <= 1 ? "none" : "blur(4px)",
                width: "280px", // Smaller width for mobile
                "@media (min-width: 640px)": {
                  width: "320px", // Original width for larger screens
                },
              }}
            >
              <div className="bg-gray-900 rounded-xl mx-2 overflow-hidden shadow-xl">
                {/* Image with 4:5 aspect ratio */}
                <div className="w-full pb-[125%] relative bg-gray-800">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.society}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <span>{event.society}</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {event.name || "-"}
                  </h3>
                  <p className="text-purple-400 mb-4">{event.society || "-"}</p>

                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4" />
                    <span>
                      {event.date || "-"}
                      {event.time ? ` | ${event.time}` : ""}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{event.venue || "-"}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-center gap-2 mt-8">
        {filteredEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            className="group relative h-1 w-12 bg-gray-600 rounded-full overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-purple-600 transition-transform duration-300 ${
                index === currentIndex ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
