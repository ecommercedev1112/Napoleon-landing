import Image from "next/image";
import React from "react";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-2 items-center text-center md:text-left">
      <div className="flex justify-center mb-2 md:mb-0">
        <Image
          src={icon}
          width={50}
          height={50}
          alt={title}
          className="md:w-24 md:h-24 2xl:w-36 2xl:h-36"
          objectFit="contain"
          priority
        />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-xl md:text-[1.8rem] 2xl:text-[2.2rem] font-bold mb-2">
          {title}
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm 2xl:text-lg max-w-[18rem] 2xl:max-w-[20rem]">
          {description}
        </p>
      </div>
    </div>
  );
};

const ElevateJobSearch: React.FC = () => {
  return (
    <section id="elevate_job_search" className="bg-[#f2f2f2]">
      <div className="w-full max-w-[85rem] mx-auto py-4 md:py-20 md:px-20 lg:px-28  2xl:max-w-[112rem] 2xl:px-40  2xl:py-28 ">
        <div className="max-w-2xl 2xl:max-w-5xl mx-auto hidden md:block">
          <p
            className="text-[1.55rem] text-center font-medium leading-relaxed mt-16 2xl:text-[2.2rem] 2xl:leading-[3rem]"
            // style={{ lineHeight: "2.4rem" }}
          >
            We create meaningful connections between candidates and employers
            through a carefully managed matchmaking service overseen by human
            administrators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-12 lg:my-20 w-full">
          <div className="flex items-center justify-start h-full  w-full md:gap-10">
            <h1
              className="text-xl text-center md:text-3xl lg:text-[2.8rem] 2xl:text-[3.5rem] font-normal md:text-center w-full md:max-w-md  2xl:max-w-full md:ml-28  2xl:ml-0 2xl:mr-28  leading-relaxed "
              style={{ lineHeight: "3.8rem" }}
            >
              Elevate Your Job{" "}
              <span className="  whitespace-nowrap">Search Experience</span>
            </h1>
          </div>

          <div className="space-y-4">
            <FeatureItem
              icon="/assets/images/icons_effectivness.png"
              title="Effectiveness"
              description="We fully embrace AI advancements while maintaining a balanced approach."
            />
            <FeatureItem
              icon="/assets/images/icons_accuracy.png"
              title="Accuracy"
              description="We prioritize the enduring importance of the human touch in the hiring process."
            />
            <FeatureItem
              icon="/assets/images/icons_speed.png"
              title="Speed"
              description="Our goal is to match the perfect candidate with the right employer within two days."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevateJobSearch;
