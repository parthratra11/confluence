// Internal dependencies
import Heading from "@/components/Heading";
import Section from "@/components/Section";

import { ABOUT as about } from "@/content/constants";
import { animated, useInView, useTrail } from "@react-spring/web";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function About() {
  return (
    <Section
      offset={2}
      mdAlign="left"
      containerClassName="bg-red-100"
      fullWidth
    >
      <Heading align="left" className="text-tertiary-700">
        {"What is "}
        <span className="text-accent-700">{"Confluence"}</span>
      </Heading>
      <TextSlide />
    </Section>
  );
}

function TextSlide() {
  /* Animate when in view */
  const [sectionRef, sectionInView] = useInView();

  /* Animate menu items */
  const [trail, trailApi] = useTrail(about.length, () => ({
    from: {
      transform: "translateY(-10%)",
      opacity: 0
    },
    to: {
      transform: "translateY(0%)",
      opacity: 1
    },
    reset: true
  }));

  useEffect(() => {
    if (sectionInView && trailApi)
      trailApi.start({ to: { opacity: 1 }, reset: true });
  }, [sectionInView, trailApi]);

  return (
    <div
      className="g-8 mt-8 flex h-[70%] flex-col justify-between p-4"
      ref={sectionRef}
    >
      {trail.map((props, index: number) => (
        <animated.p
          key={index}
          style={props}
          className={twMerge(
            "text-justify text-sm text-slate-950 md:text-lg",
            "first-letter:confluence first-letter:text-lg first-letter:font-semibold first-letter:capitalize first-letter:text-accent-700"
          )}
        >
          {about[index]}
        </animated.p>
      ))}
    </div>
  );
}
