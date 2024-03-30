import * as Accordion from "@radix-ui/react-accordion";

// Internal dependencies
import Section from "../Section";
import Heading from "../Heading";

// Content dependencies
import { FAQ as faq } from "@/content/constants";

export default function FAQ() {
  return (
    <Section offset={5} containerClassName="bg-red-100" mdAlign="left">
      <div className="h-full md:m-auto md:max-w-[800px]">
        <Heading align="center" className="text-tertiary-700">
          FAQ
        </Heading>
        <div className="h-full overflow-y-auto p-4 py-8">
          <Questions />
        </div>
      </div>
    </Section>
  );
}

const Questions = () => {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="h-[70vh] overflow-y-auto rounded-md"
    >
      {faq.map(({ question, answer }, index) => (
        <Question
          key={index}
          value={`item-${index}`}
          question={question}
          answer={answer}
        />
      ))}
    </Accordion.Root>
  );
};

const Question = ({
  value,
  question,
  answer
}: {
  value: string;
  question: string;
  answer: string | string[];
}) => {
  return (
    <Accordion.Item
      value={value}
      className="rounded-md border-2 border-secondary-200 bg-tertiary-700/90 p-4 px-6 text-white data-[state=open]:bg-primary-700/90"
    >
      <Accordion.Trigger className="w-full text-left font-display text-xl">
        {question}
      </Accordion.Trigger>
      <Accordion.Content className="w-full py-4 text-left">
        {typeof answer === "string" ? (
          answer
        ) : (
          <ul className="list-outside list-disc">
            {answer.map((point, index) => {
              return <li key={index}>{point}</li>;
            })}
          </ul>
        )}
      </Accordion.Content>
    </Accordion.Item>
  );
};
