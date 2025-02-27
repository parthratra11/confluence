import Image from "next/image";

export const Header = () => {
  return (
    <div className="absolute top-4 left-4 flex gap-4 z-50">
      <a
        href="https://www.instagram.com/confluence.hrc"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <Image
          src="/confluenceLogo2.png"
          width={50}
          height={50}
          alt="Confluence Logo"
          className="rounded-full"
        />
      </a>
      <a
        href="https://www.hansrajcollege.ac.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <Image
          src="/hrcLogo.jpeg"
          width={50}
          height={50}
          alt="HRC Logo"
          className="rounded-full"
        />
      </a>
    </div>
  );
};
