import ContactUs from "./components/contactus";
import ElevateJobSearch from "./components/elevateJobSearch";

import FAQS from "./components/faqs";
import Hero from "./components/heroSection";
import HiringEmployersList from "./components/hiringEmployersList";
import { HowItWorks } from "./components/howItWorks";

const companyFaqs = [
  {
    id: "item-1",
    question: "How do I get my jobs or company profile on Napoleon?",
    answer: "To get your jobs posted on Napoleon...",
  },
  {
    id: "item-2",
    question:
      "I'm a current client of Napoleon, how can I contact my account manager?",
    answer: "If you are a current customer and aren't sure how to contact...",
  },
  {
    id: "item-3",
    question:
      "How much does it cost for an employer to be featured on Napoleon?",
    answer: "Napoleon is free to use...",
  },
];

const candidateFaqs = [
  {
    id: "item-1",
    question: "How do I get my jobs or company profile on Napoleon?",
    answer:
      "To get your jobs posted on Napoleon and create a company profile, please click here and then on the 'Get Started' button.",
  },
  {
    id: "item-2",
    question:
      "I'm a current client of Napoleon, how can I contact my account manager?",
    answer:
      "If you are a current customer and aren't sure how to contact your Account Manager at Napoleon, please reach out to recruiting@napoleon.cloudto be connected to them.",
  },
  {
    id: "ite-3",
    question:
      "How much does it cost for an employer to be featured on Napoleon?",
    answer:
      "Napoleon is free to use. Upon finding the right candidate for full-time roles, Napoleon will send an invoice for a percentage of the annual salary. For contract roles, Napoleon will send an hourly contract to the customer, representing the contractor candidate.",
  },
];

export default function Home() {
  return (
    <div className="w-full  mx-auto ">
      <Hero />
      <ElevateJobSearch />
      <HiringEmployersList />
      <HowItWorks />
      <FAQS type="company" faqs={companyFaqs} />
      <FAQS type="candidate" faqs={candidateFaqs} />
      <ContactUs />
    </div>
  );
}
