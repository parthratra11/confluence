// Internal dependencies
// import Heading from "@/components/Heading";
import Section from "@/components/Section";
import { animated, useInView, useSpring } from "@react-spring/web";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function Theme() {
  return (
    <Section
      offset={3}
      mdAlign="left"
      containerClassName="bg-red-100"
      fullWidth
    >
      <JumboText />
      <Description />
    </Section>
  );
}

const theme: {
  head: string[];
  description: string[];
} = {
  head: ["Lights", "Camera", "Confluence"],
  description: [
    "It\u2019s the time to step into the spotlight and let the magic of cinema engulf you in a whirlwind of glamour, drama, and unforgettable moments! This year, Confluence turns into a Bollywood bonanza!  We'll celebrate iconic scenes, cult dialogues, and the masala we all adore.",
    "This is one party you won't want to miss. After all It's SHOWTIME!"
  ]
};

function JumboText() {
  const [textRef, textInView] = useInView();
  const [spring, api] = useSpring(() => ({
    transform: "translateX(-100%)"
  }));

  useEffect(() => {
    api.start({
      transform: textInView ? "translateX(0%)" : "translateX(-100%)",
      reset: true
    });
  }, [textInView, api]);

  return (
    <animated.div ref={textRef} style={spring} className="flex flex-col gap-6">
      {theme.head.map((text, index) => {
        return (
          <div
            className={twMerge(
              "text-6xl font-bold",
              index % 2 === 0 ? "text-tertiary-700" : "text-slate-950",
              index === theme.head.length - 1
                ? "confluence text-accent-700"
                : ""
            )}
            key={index}
          >
            {text + (index === theme.head.length - 1 ? " \u203C" : "\u275F")}
          </div>
        );
      })}
    </animated.div>
  );
}

function Description() {
  const [textRef, textInView] = useInView();
  const [spring, api] = useSpring(() => ({
    transform: "translateX(90vw)"
  }));

  useEffect(() => {
    api.start({
      transform: textInView ? "translateX(0%)" : "translateX(90vw)"
    });
  }, [textInView, api]);

  return theme.description.map((sentence, index) => {
    return (
      <animated.p
        ref={textRef}
        key={index}
        style={spring}
        className="first-letter:confluence mt-20 text-justify text-base first-letter:text-lg first-letter:font-semibold first-letter:capitalize first-letter:text-accent-700 md:text-lg"
      >
        {sentence}
      </animated.p>
    );
  });
}
