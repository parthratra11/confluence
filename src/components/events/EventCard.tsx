import Image from "next/image";

// Internal dependencies
import Button from "@/components/Button";

export default function EventCard({
  name,
  day,
  description,
  image,
  organizedBy,
  registrationLink
}: {
  name: string;
  day: string;
  description: string;
  image: string;
  organizedBy: string;
  registrationLink: string;
}) {
  return (
    <div className="mr-4 flex-shrink-0 flex-grow-0 basis-full rounded-lg bg-secondary-100 md:basis-1/2">
      <div className="aspect-square w-full rounded-xl">
        <Image
          height="400"
          width="400"
          src={`/content/events/${image}`}
          alt="event image"
          className="h-full w-full"
        />
      </div>
      <div className="p-4">
        <h2 className="display text-tertiary-700">{name}</h2>
        <p className="text-sm text-tertiary-700">
          Organized by <b className="uppercase">{organizedBy}</b>
        </p>
        <p className="text-sm text-tertiary-700">
          on <b className="uppercase">{day}</b>
        </p>
        <p className="my-2">{description}</p>
        <Button href={registrationLink}>Register</Button>
      </div>
    </div>
  );
}
