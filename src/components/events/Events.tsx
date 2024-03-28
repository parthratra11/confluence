// Internal dependencies
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import EventsCarousel from "./EventsCarousel";
import EventCard from "./EventCard";

// Content dependencies
import { EVENTS as events } from "@/content/constants";

export default function Events() {
  return (
    <Section offset={4} mdAlign="right">
      <Heading align="center">Events</Heading>
      <div className="h-[90%] overflow-y-auto">
        <EventsCarousel
          cards={events.map((details, index) => (
            <EventCard key={index} {...details} />
          ))}
        />
      </div>
    </Section>
  );
}
