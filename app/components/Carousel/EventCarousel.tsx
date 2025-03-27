"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../styles/carousel.scss";

interface EventCarouselProps {
  events: Array<{
    image: string;
    eventName: string;
    society: string;
    igLink: string;
  }>;
}

export const EventCarousel = ({ events }: EventCarouselProps) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("");

  const moveLeft = () => {
    setDirection("left");
    setActive(active === 0 ? events.length - 1 : active - 1);
  };

  const moveRight = () => {
    setDirection("right");
    setActive((active + 1) % events.length);
  };

  const generateItems = () => {
    let items = [];

    for (let i = active - 2; i <= active + 2; i++) {
      let index = i;
      if (i < 0) {
        index = events.length + i;
      } else if (i >= events.length) {
        index = i % events.length;
      }

      const level = active - i;
      const event = events[index];

      items.push(
        <div key={index} className={`carousel-item level${level}`}>
          <img src={event.image} alt={event.eventName} />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-xl font-bold">{event.eventName}</h3>
            <p className="text-sm text-purple-300">{event.society}</p>
          </div>
        </div>
      );
    }

    return items;
  };

  return (
    <div id="event-carousel">
      <div className="arrow arrow-left" onClick={moveLeft}>
        <ChevronLeft />
      </div>
      <div className="items-wrapper">{generateItems()}</div>
      <div className="arrow arrow-right" onClick={moveRight}>
        <ChevronRight />
      </div>
    </div>
  );
};

export default EventCarousel;
