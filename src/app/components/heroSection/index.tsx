import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import heroImage from "../../../../public/assets/images/hero_section.png";

interface ActionButtonProps {
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label }) => (
  <Button className="uppercase font-bold  w-full px-[24vw]  text-[calc(1.25rem+0.3vw)]  rounded-full   md:h-[calc(3rem+.2vw)] md:px-[calc(1rem+.1vw)] lg:h-[calc(2.8rem+1vw)] lg:px-[calc(2.5rem+.5vw)]  xl:h-[calc(2.8rem+1vw)] xl:px-[calc(4.5rem+.5vw)] 2xl:h-[calc(3.8rem+1vw)] 2xl:px-[calc(7rem+1vw)]">
    {label}
  </Button>
);
// md:h-[50vh] lg:h-[65vh] xl:h-[78vh]  xxl:h-[calc(10rem+56vh)] 2xl:h-[80vh]
const Hero: React.FC = () => {
  return (
    <>
      {/* Large Screen Section (Visible on md and above) */}
      <section
        id="hero"
        className="hidden md:block bg-white w-full  h-full bg-[length:85%_96%] bg-hero-image bg-no-repeat bg-right-top"
      >
        <div className="h-full w-[100%]">
          <div className="h-full w-[50%]">
            <h1 className="font-light w-full md:text-[4vw]  md:leading-[5vw] md:pt-[10%] md:ml-[10%]   pr-[1rem] 2xl:pr-[3rem]">
              THE RIGHT TALENT MATCHED TO THE BEST ROLES
            </h1>

            <p className="font-extralight  md:my-[5%]  lg:my-[7%]   md:text-[2vw] leading-[3vw] mb-[1rem] md:ml-[10%] md:max-w-60 lg:max-w-[20rem]  xl:max-w-[30rem] 2xl:max-w-[40rem] ">
              Meaningful Connections Through Human-Curated Matchmaking
            </p>

            <div className="md:pb-[10%]  flex felx-row justify-start items-center gap-4 md:ml-[10%]">
              <ActionButton label="CANDIDATES" />
              <ActionButton label="COMPANIES" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Section (Visible below md) */}
      <section id="hero" className="block md:hidden bg-white">
        <div className="flex flex-col h-full">
          {/* Top Section (Image with absolute heading) */}
          <div className="relative w-full">
            <Image
              src="/assets/images/hero_section_mobile.png"
              height={425}
              width={375}
              alt="hero_mobile"
              className="object-cover w-full h-full"
            />
            {/* Absolute heading at the bottom of the image */}
            <div className="bg-white opacity-50 absolute bottom-[4vw] left-0 right-0 p-[2vw]">
              <h1 className=" text-[8vw] font-light text-black text-left leading-snug">
                THE RIGHT TALENT MATCHED TO THE BEST ROLES
              </h1>
            </div>
          </div>

          {/* Bottom Section (Text and Buttons) */}
          <div className="flex flex-col justify-center items-center gap-[3vw] py-[5vw]  text-center">
            <p className="text-[5vw] font-extralight leading-[8vw]">
              Meaningful Connections Through Human-Curated Matchmaking
            </p>
            <div className="space-y-[3vw] flex flex-col mb-[7%]">
              <ActionButton label="CANDIDATES" />
              <ActionButton label="COMPANIES" />
            </div>
            <p className="text-[5vw] font-extralight leading-[8vw]">
              We create meaningful connections between candidates and employers
              through a carefully managed matchmaking service overseen by human
              administrators.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
