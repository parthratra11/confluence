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
  const imgdim =
    image === "pw.png" || image === "acer.png"
      ? image === "acer.png"
        ? "h-27 w-full object-contain"
        : "h-16 w-32 object-contain"
      : "h-27 w-47 object-contain";
  return (
    <div>
      <Link href={link}>
        <Image
          height={100}
          width={100}
          src={`/content/sponsors/${image}`}
          alt={name}
          className={imgdim}
        />
      </Link>
      <span className="text-center font-medium text-tertiary-700">{name}</span>
    </div>
  );
}
