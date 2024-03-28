import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

// Type definitions
import type { ReactNode } from "react";

export default function EventsCarousel({ cards }: { cards: ReactNode[] }) {
  const [carouselRef] = useEmblaCarousel({ loop: true }, [
    AutoPlay({ stopOnInteraction: false })
  ]);

  return (
    <div className="mt-8 p-4 md:mx-auto md:max-w-[800px]">
      <div ref={carouselRef} className="overflow-hidden">
        <div className="flex">{cards}</div>
      </div>
    </div>
  );
}
