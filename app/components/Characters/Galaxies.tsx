import Image from "next/image";
import React from "react";

const Galaxies = () => {
  return (
    <div>
      <div className="absolute top-10 left-32 w-32 h-32 z-10 opacity-60">
        <Image
          src="/astronaut.png"
          alt="Astronaut"
          fill
          className="object-contain animate-float"
        />
      </div>

      <div
        className="absolute bottom-40 left-20 w-40 h-40 z-[5] opacity-60"
        style={{ animationDelay: "-3s" }}
      >
        <Image
          src="/galaxy1.png"
          alt="Galaxy 1"
          fill
          className="object-contain animate-float"
        />
      </div>

      <div
        className="absolute top-40 right-20 w-40 h-40 z-10 opacity-60"
        style={{ animationDelay: "-2s" }}
      >
        <Image
          src="/galaxy2.png"
          alt="Galaxy 2"
          fill
          className="object-contain animate-float"
        />
      </div>
    </div>
  );
};

export default Galaxies;
