"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Event {
  title: string;
  society: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  registrationLink: string;
  description: string;
}

interface EventCarouselProps {
  events: Event[];
}

const EventCarousel = ({ events }: EventCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const getVisibleEvents = () => {
    const result = [];
    // Get previous 2 events
    for (let i = -2; i <= 2; i++) {
      let index = (currentIndex + i + events.length) % events.length;
      result.push({ event: events[index], offset: i });
    }
    return result;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(handleNext, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, events.length]);

  return (
    <div className="relative px-12">
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-purple-600/80 p-2 rounded-full hover:bg-purple-600 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-purple-600/80 p-2 rounded-full hover:bg-purple-600 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden relative h-[600px]">
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
                width: "30%",
              }}
            >
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-105">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-purple-400">{event.society}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{`${event.date} | ${event.time}`}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  {Math.abs(offset) <= 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4"
                    >
                      <p className="text-sm text-gray-300">
                        {event.description}
                      </p>
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors text-sm"
                      >
                        Register Now
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-center gap-2 mt-8">
        {events.map((_, index) => (
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
