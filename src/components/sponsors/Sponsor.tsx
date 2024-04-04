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

  const imgDim =
    image === "pw.png" || image === "acer.png"
      ? image === "acer.png"
        ? "w-52 object-contain"
        : "h-16 w-32 object-contain"
      : "w-16 object-contain";
  return (
    <div>
      <Link href={link} className={"w-full min-h-24 flex flex-col justify-center items-center"}>
        <Image
          height={100}
          width={100}
          src={`/content/sponsors/${image}`}
          alt={name}
          className={imgDim}
        />
      </Link>
      <span className="text-center font-medium text-tertiary-700">{name}</span>
    </div>
  );
}
