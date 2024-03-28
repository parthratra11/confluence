import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

// Type definitions
import type { ReactNode } from "react";

// Content dependencies
import { ARTISTS } from "@/content/constants";

export default function ArtistsCarousel() {
  return (
    <div className="relative text-white md:mx-auto md:max-w-[800px]">
      <Tabs.Root defaultValue="day1">
        <nav className="mt-8 p-4 text-right">
          <Tabs.List>
            {ARTISTS.map((_, index) => (
              <Tabs.Trigger
                key={index}
                value={`day${index + 1}`}
                className="p-2 data-[state=active]:text-secondary-600 data-[state=active]:underline data-[state=active]:underline-offset-4"
              >
                Day {index + 1}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </nav>
        <div className="flex justify-end gap-8 text-right">
          {ARTISTS.map((ARTISTS_FOR_DAY, index) => (
            <Tabs.Content value={`day${index + 1}`} key={index}>
              <Carousel
                slides={ARTISTS_FOR_DAY.map((ARTIST, index) => (
                  <Slide key={index} {...ARTIST} />
                ))}
              />
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  );
}

function Carousel({ slides }: { slides: ReactNode[] }) {
  const [carouselRef] = useEmblaCarousel({ loop: true }, [
    AutoPlay({ stopOnInteraction: false })
  ]);

  return (
    <div ref={carouselRef} className="overflow-x-clip">
      <div className="flex">{slides}</div>
    </div>
  );
}

function Slide({
  prefix,
  name,
  description,
  image
}: {
  prefix: string;
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div className="relative mr-4 flex flex-shrink-0 flex-grow-0 basis-full justify-end gap-8 overflow-x-clip text-right">
      <Image
        src={`/content/artists/${image}`}
        loading="eager"
        width={320}
        height={640}
        alt={name}
        className="absolute left-[-20vw] object-contain md:left-0"
      />
      <div className="z-50 flex max-w-[240px] flex-col items-end p-4 md:max-w-[360px]">
        <h2 className="display text-4xl text-secondary-200 md:text-6xl">
          {prefix}
        </h2>
        <h2 className="heading text-4xl text-primary-500 md:text-6xl">
          {name}
        </h2>
        <p className="text-right text-secondary-200 md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
