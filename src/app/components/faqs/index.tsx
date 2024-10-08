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
      <div className=" px-4 w-full  mx-auto py-[5%] md:px-[12%]">
        <h1
          className={`text-[6vw]  font-light text-center  md:text-[3vw] md:font-medium w-full ${
            isCompany ? "md:text-left" : "md:text-right"
          }`}
        >
          {isCompany ? "For Companies" : "For Candidates"}
        </h1>
        <div
          className={`flex flex-col md:flex-row gap-8 mt-4  ${
            isCompany ? "" : "md:flex-row-reverse"
          }`}
        >
          <div className="w-full md:w-2/3 flex-grow-0">
            <Image
              src={
                isCompany
                  ? "/assets/images/img_comapanies-D4hSvE5v.png"
                  : "/assets/images/img_candidates-CDrrYNzK.png"
              }
              alt={isCompany ? "Company image" : "Candidate image"}
              width={480}
              height={635}
              className="rounded-lg object-cover w-full h-auto" // Ensure height auto for proper scaling
            />
          </div>
          <div className="w-full">
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
                    } font-bold text-[4vw] md:text-[1.5vw]  text-left px-2`}
                    style={{ textDecoration: "none" }} // Inline style to remove underline
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-md md:text-[1.25vw]    font-light bg-background p-2">
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
