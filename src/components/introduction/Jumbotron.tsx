import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { ParallaxLayer } from "@react-spring/parallax";

// Internal dependencies
import Dates from "./Dates";

export default function Jumbotron() {
  return (
    <>
      <ParallaxLayer
        style={{
          background:
            "linear-gradient(rgba(95, 4, 28, 0.95), rgba(157, 92, 160, 0.6)),  url('assets/images/jumbotron.png') no-repeat center/cover"
        }}
        factor={2}
      >
        <Hero />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.4}>
        <CutoutLayer1 />
      </ParallaxLayer>
      <ParallaxLayer offset={0.4} speed={-0.3}>
        <CutoutLayer2 />
      </ParallaxLayer>
      <ParallaxLayer offset={0.7} speed={-0.2}>
        <CutoutLayer3 />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5}>
        <Dates />
      </ParallaxLayer>
    </>
  );
}

function Hero() {
  return (
    <div className="relative z-[100] flex h-screen items-center justify-center p-4 md:scale-150">
      <div className="relative z-[10] flex translate-y-[-4vh] flex-col items-center justify-center gap-4 rounded-lg p-4 md:translate-y-0">
        <p className="heading text-center text-xl text-secondary-300">
          The Annual Fest of <br />
          <b className="display text-medium text-nowrap text-4xl text-secondary-700">
            Hansraj College
          </b>
        </p>
        <Image
          height={200}
          width={350}
          src="/assets/images/logo-light.png"
          alt="Logo"
          className="w-3/4 object-contain md:max-h-[10vh]"
        />
        <p className="confluence w-full text-white">Confluence</p>
        <p className="display w-full text-right text-white">&apos;24</p>
      </div>
    </div>
  );
}

function CutoutLayer1() {
  return (
    <div className="relative h-screen">
      <Cutout
        src="umrao"
        alt="Umrao"
        className="left-0 w-[55vmin] md:h-[50vmin]"
      />
      <Cutout
        src="shahrukh2"
        alt="shahrukh"
        className="right-[20vw] w-[60vmin] md:right-[10vw] md:h-[50vmin]"
      />
      <Cutout
        src="saas"
        alt="Saas"
        className="right-0 w-[70vmin] md:h-[40vmin]"
      />
    </div>
  );
}

function CutoutLayer2() {
  return (
    <div className="relative h-screen">
      <Cutout
        src="gabbar"
        alt="Gabbar"
        className="left-0 w-[70vmin] md:left-[50vw] md:h-[50vmin]"
      />
      <Cutout
        src="bunny"
        alt="Bunny"
        className="right-0 w-[80vmin] md:right-[50vw] md:h-[50vmin]"
      />
    </div>
  );
}

function CutoutLayer3() {
  return (
    <div className="relative h-screen">
      <Cutout
        src="shahrukh"
        alt="shahrukh"
        className="left-0 w-[80vmin] md:left-[50vw] md:h-[50vmin]"
      />
      <Cutout
        src="woman"
        alt="woman"
        className="right-0 w-[70vmin] md:right-[50vw] md:h-[50vmin]"
      />
    </div>
  );
}

function Cutout({
  src,
  alt,
  className
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <Image
      width={200}
      height={200}
      src={`/assets/images/cutouts/${src}.png`}
      alt={alt}
      className={twMerge(`absolute bottom-0 object-contain`, className)}
    />
  );
}
