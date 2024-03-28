import Head from "next/head";
import { Parallax } from "@react-spring/parallax";
import { useRef } from "react";

// Type definitions
import type { IParallax } from "@react-spring/parallax";

// Internal dependencies
import Navbar from "@/components/Navbar";
import Jumbotron from "@/components/introduction/Jumbotron";
import Artists from "@/components/artists/Artists";
import FAQ from "@/components/faq/FAQ";
import Events from "@/components/events/Events";
import Sponsors from "@/components/sponsors/Sponsors";

const Home = () => {
  const parallax = useRef<IParallax>(null);
  return (
    <>
      <Head>
        <title>
          Confluence | The Annual Fest of Hansraj College, University of Delhi
        </title>
      </Head>
      <Navbar parallax={parallax} />
      <Parallax ref={parallax} pages={6} className="bg-primary-200">
        <Jumbotron />
        <Artists />
        <FAQ />
        <Events />
        <Sponsors />
      </Parallax>
    </>
  );
};

export default Home;
