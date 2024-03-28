// Internal depedencies
import ArtistsCarousel from "./ArtistsCarousel";

import Section from "@/components/Section";
import Heading from "@/components/Heading";

export default function Artists() {
  return (
    <Section offset={2} mdAlign="right" containerClassName="pl-0">
      <div className="h-full md:m-auto md:max-w-[1080px]">
        <Heading>
          Meet the <span className="text-accent-700">Artists</span>
        </Heading>
        <ArtistsCarousel />
      </div>
    </Section>
  );
}
