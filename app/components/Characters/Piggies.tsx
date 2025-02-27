import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Piggies = () => {
  return (
    <div>
      {/* Piggy 1*/}
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

      {/* Piggy 2 */}
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
    </div>
  );
};

export default Piggies;
