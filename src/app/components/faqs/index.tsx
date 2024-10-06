import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import React from "react";

type FAQSProps = {
  type: "company" | "candidate";
  faqs: { id: string; question: string; answer: string }[];
};

const FAQS: React.FC<FAQSProps> = ({ type, faqs }) => {
  const isCompany = type === "company";

  return (
    <section id={`${type}_faqs`}>
      <div className="max-w-7xl container mx-auto py-6 md:py-24 md:px-16">
        <h1
          className={`text-2xl font-light text-center md:${
            type === "company" ? "text-left" : "text-right"
          } md:text-4xl md:font-medium w-full`}
        >
          {isCompany ? "For Companies" : "For Candidates"}
        </h1>
        <div
          className={`flex flex-col md:flex-row gap-8 mt-8 lg:mt-8 ${
            isCompany ? "" : "md:flex-row-reverse"
          }`}
        >
          <div className="md:w-1/2">
            <Image
              src={
                isCompany
                  ? "/assets/images/img_comapanies-D4hSvE5v.png"
                  : "/assets/images/img_candidates-CDrrYNzK.png"
              }
              alt={isCompany ? "Company image" : "Candidate image"}
              width={600}
              height={600}
              className="rounded-lg object-cover w-full h-full px-6"
            />
          </div>
          <div className="md:w-2/3 px-6">
            <Accordion
              type="single"
              collapsible
              className="w-full bg-[#f2f2f2] rounded-lg border-[1px] border-[#f2f2f2]"
            >
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger
                    className={`${
                      type === "company" ? "text-red" : "text-green"
                    } font-bold text-md md:text-xl text-left px-8`}
                    style={{ textDecoration: "none" }} // Inline style to remove underline
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-sm md:text-[1.1rem] font-light bg-background p-4"
                    style={{ lineHeight: "2rem" }}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQS;
