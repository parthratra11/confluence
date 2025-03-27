import EventCard from "@/app/components/EventCard";

const EventsPage = () => {
  const events = [
    {
      image: "/path/to/event1-image.jpg",
      eventName: "Coding Competition",
      society: "Computer Science Society",
      igLink: "https://instagram.com/cs_society",
    },
    // ...more events
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            eventName={event.eventName}
            society={event.society}
            igLink={event.igLink}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
