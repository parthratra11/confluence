// Internal dependencies
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Sponsor from "./Sponsor";

// Content dependencies
import { SPONSORS as sponsors } from "@/content/constants";

export default function Sponsors() {
  return (
    <Section offset={5} containerClassName="bg-red-900" mdAlign="left">
      <Heading align="left" className="text-secondary-200">
        Credit <span className="text-secondary-700">Roll </span>
        for the <span className="text-secondary-700">Sponsors</span>
      </Heading>
      <div className="mt-8 h-[70%] overflow-y-hidden">
        <div className="no-scrollbar sponsors-animation flex h-full flex-col gap-8 p-4 text-center">
          {sponsors.map((collection, index) => (
            <div key={index}>
              <h2 className="display mb-4 text-2xl text-secondary-700">
                {collection[0]}
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {collection[1].map((sponsor, index) => (
                  <Sponsor key={index} {...sponsor} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
