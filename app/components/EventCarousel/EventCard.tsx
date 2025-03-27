import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  image: string;
  eventName: string;
  society: string;
  igLink: string;
}

const EventCard = ({ image, eventName, society, igLink }: EventCardProps) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden transition-transform hover:scale-105 w-[350px]">
      <div className="aspect-square relative">
        <div className="w-full h-full bg-black opacity-90 flex items-center justify-center">
          <Image
            src={image}
            alt={eventName}
            fill
            className="object-cover opacity-80"
          />
        </div>
      </div>
      <div className="text-center mt-4 p-4">
        <h3 className="text-xl font-semibold text-white">{eventName}</h3>
        <p className="text-purple-400">by {society}</p>
        <Link
          href={igLink}
          target="_blank"
          className="inline-block mt-3 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
