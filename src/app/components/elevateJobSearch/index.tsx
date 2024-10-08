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
    <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-0 lg:gap-2 items-center text-center md:text-left">
      <div className="flex justify-center mb-2 md:mb-0">
        <Image
          src={icon}
          width={150}
          height={150}
          alt={title}
          className="w-20 h-20 md:w-12 md:h-12 lg:w-24 lg:h-24 2xl:w-36 2xl:h-36"
          objectFit="contain"
          priority
        />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-[4vw] md:text-[2vw] font-bold lg:mb-2">{title}</h2>
        <p className="text-[3vw]  max-w-[16rem] text-muted-foreground md:text-[1vw] md:max-w-[9rem] lg:max-w-[16rem] 2xl:max-w-[22rem]">
          {description}
        </p>
      </div>
    </div>
  );
};

const ElevateJobSearch: React.FC = () => {
  return (
    <section id="elevate_job_search" className="bg-[#f2f2f2]">
      <div className="w-full h-full">
        <div className="mx-auto hidden md:flex justify-center items-center w-full text-center ">
          <p
            className="text-[1.75vw] text-center font-medium leading-relaxed pt-[7%]  max-w-[50%] w-full"
            // style={{ lineHeight: "2.4rem" }}
          >
            We create meaningful connections between candidates and employers
            through a carefully managed matchmaking service overseen by human
            administrators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-[5%]">
          <div className="flex items-center justify-start h-full  w-full gap-2 md:gap-10">
            <h1 className=" text-[6vw] md:text-[3vw] font-normal md:ml-[20%] md:max-w-[calc(12rem+2vw)] lg:max-w-[calc(12rem+6vw)] xl:max-w-[calc(12rem+14vw)] text-center leading-[4vw] w-full ">
              Elevate Your Job Search Experience
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
