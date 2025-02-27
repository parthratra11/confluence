import { motion } from "framer-motion";
import Image from "next/image";

export const AngryBirds = () => {
  return (
    <>
      {/* Red Bird */}
      <motion.div
        className="absolute bottom-20 left-10 z-10"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      >
        <Image src="/redBird.png" width={60} height={60} alt="Red Bird" />
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
    </>
  );
};
