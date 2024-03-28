import Image from "next/image";
import Link from "next/link";

export default function Sponsor({
  name,
  image,
  link
}: {
  name: string;
  image: string;
  link: string;
}) {
  return (
    <div>
      <Link href={link}>
        <Image
          height={100}
          width={100}
          src={`/content/sponsors/${image}`}
          alt={name}
          className="h-16 w-32 object-contain"
        />
      </Link>
      <span className="text-center font-medium">{name}</span>
    </div>
  );
}
