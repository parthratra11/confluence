"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CarouselProps {
  items: Array<{
    image: string;
    name: string;
  }>;
}

export const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative h-40 overflow-hidden">
      <div className="flex justify-center items-center h-full">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full flex justify-center items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: currentIndex === index ? 1 : 0,
              x: currentIndex === index ? 0 : -100,
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="max-h-full max-w-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
