import Image from "next/image";

// Type definitions
import type { RefObject } from "react";
import type { IParallax } from "@react-spring/parallax";

// Internal Dependencies
import Section from "@/components/Section";

// Content Dependencies
import {
  SOCIALS as socials,
  MENU_ITEMS as menuItems
} from "@/content/constants";

export default function Footer({
  parallax
}: {
  parallax: RefObject<IParallax>;
}) {
  return (
    <Section
      offset={8}
      fullWidth
      containerClassName="flex flex-col justify-center items-center"
    >
      <Image
        src={"/logo-white.svg"}
        className="aspect-square h-full w-full grow fill-white object-contain"
        width={300}
        height={300}
        alt={"confluence"}
      />
      <footer className="m-2 flex flex-col justify-center space-y-10">
        <nav className="flex flex-wrap justify-center gap-6 font-medium text-gray-500">
          {menuItems.map((section, index) => {
            return (
              <a
                className="hover:text-accent-700"
                key={index}
                onClick={() => {
                  parallax?.current?.scrollTo(section.offset);
                }}
              >
                {section.name}
              </a>
            );
          })}
        </nav>

        <div className="flex justify-center space-x-5">
          {socials.map((object, index) => {
            return (
              <a
                href={object.handle}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <Image
                  src={object.iconSrc}
                  alt={object.name}
                  width={30}
                  height={30}
                  className="aspect-square"
                />
              </a>
            );
          })}
        </div>
        <p className="text-center font-medium text-gray-700">
          &copy; 2024 Hansraj College, University of Delhi. All rights
          reservered.
        </p>
      </footer>
    </Section>
  );
}
