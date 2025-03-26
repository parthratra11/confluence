import React from "react";
import { motion } from "framer-motion";
import sponsorsData from "../../public/data/sponsors.json";

const Sponsors = () => {
  return (
    <div className="z-50">
      <motion.section className="container mx-auto px-4 py-20 z-40">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Sponsors
        </h2>
        <div className="bg-black/20 p-6 rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sponsorsData.brands.map((sponsor, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="max-h-32 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Sponsors;
