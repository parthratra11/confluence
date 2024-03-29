import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useInView, useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";

// Content dependencies
import { DATES } from "@/content/constants";

export default function Dates() {
  const [ref, inView] = useInView({ amount: 1 });

  const [spring, api] = useSpring(() => ({
    opacity: 0,
    y: 20
  }));

  useEffect(() => {
    if (inView) {
      api.start({ to: { opacity: 1, y: 0 }, reset: true });
    }
  });

  return (
    <div className="min-h-screen rounded bg-gradient-to-b from-accent-700/50 to-primary-700/50 p-12 py-16 backdrop-blur-md">
      <div className="h-full py-4 md:mx-auto md:max-w-[1080px]">
        <animated.h1
          ref={ref}
          style={spring}
          className="heading text-white md:text-center"
        >
          Mark the <span className="text-secondary-300">dates!</span>
        </animated.h1>
        <animated.div
          style={spring}
          className="flex flex-col gap-8 py-8 text-secondary-200 md:m-auto md:max-w-[640px] md:gap-16 md:py-16"
        >
          {DATES.map(({ numeral, date, description }, index) => (
            <Date
              key={index}
              src={`/assets/images/poster${index + 1}.jpg`}
              numeral={numeral}
              date={date}
              description={description}
              reverse={index % 2 != 0}
            />
          ))}
        </animated.div>
      </div>
    </div>
  );
}

function Date({
  src,
  numeral,
  date,
  description,
  reverse = false
}: {
  src: string;
  numeral: number;
  date: string;
  description: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={twMerge(
        "flex h-[20vh] items-center gap-4",
        reverse ? "flex-row-reverse" : ""
      )}
    >
      <Poster src={src} date={numeral} />
      <div
        className={twMerge(
          `right-0 h-full w-full rounded-lg from-transparent to-tertiary-700/50 p-4`,
          reverse ? "bg-gradient-to-l" : "bg-gradient-to-r"
        )}
      >
        <h2 className="heading text-lg md:text-xl">{date}</h2>
        <p className="text-sm md:text-lg">{description}</p>
      </div>
    </div>
  );
}

function Poster({ src, date }: { src: string; date: number }) {
  return (
    <div
      className={
        "display relative flex aspect-square h-1/2 items-center justify-center rounded-lg p-4 text-white md:scale-125"
      }
    >
      <Image
        height={100}
        width={100}
        src={src}
        className="absolute left-0 top-0 h-full w-full scale-150 object-contain text-sm"
        alt="Cover image"
      />
      <span className="relative z-[999]">{date}</span>
    </div>
  );
}
