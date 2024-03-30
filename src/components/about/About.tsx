// Internal dependencies
import Heading from "@/components/Heading";
import Section from "@/components/Section";

import { ABOUT as about } from "@/content/constants";
import { animated, useInView, useTrail } from "@react-spring/web";
import Image from "next/image";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function About() {
  return (
    <Section offset={2} mdAlign="left" fullWidth>
      <Heading align="left" className="text-secondary-200">
        {"What is "}
        <span className="text-accent-700">{"Confluence"}</span>
      </Heading>
      <div className="flex flex-row justify-between">
        <TextSlide />
        <Image
          src={"/logo-white.svg"}
          className="hidden aspect-square max-w-[800px] md:block"
          width={450}
          height={450}
          alt={"confluence"}
        />
      </div>
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
      className={"g-8 mt-8 flex min-h-[50vh] flex-col justify-between p-4"}
      ref={sectionRef}
    >
      {trail.map((props, index: number) => (
        <animated.p
          key={index}
          style={props}
          className={twMerge(
            "text-justify text-sm text-secondary-200 md:text-lg",
            "first-letter:confluence first-letter:text-lg first-letter:font-semibold first-letter:capitalize first-letter:text-accent-700"
          )}
        >
          {about[index]}
        </animated.p>
      ))}
    </div>
  );
}
