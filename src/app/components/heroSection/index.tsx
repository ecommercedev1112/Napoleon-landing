import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface ActionButtonProps {
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label }) => (
  <Button
    size="xl"
    className="uppercase font-bold text-[1.5rem] 2xl:text-[1.6rem] rounded-full 2xl:py-10 2xl:px-36"
  >
    {label}
  </Button>
);

const Hero: React.FC = () => {
  return (
    <>
      {/* Large Screen Section (Visible on md and above) */}
      <section id="hero" className="hidden md:block bg-white w-full">
        <div className="mx-auto w-full h-auto  md:bg-hero-image  bg-contain bg-no-repeat bg-right-top px-[4.9rem] 2xl:px-[6.6rem] 2xl:pb-2  ">
          <div className="grid md:grid-cols-2 h-full pt-[4.4rem] w-full">
            <div className="flex items-start justify-center w-full">
              <div className="w-full">
                <h1
                  className=" block 2xl:hidden md:text-5xl lg:text-[3.63rem] md:font-light w-full 2xl:text-[5rem]"
                  style={{ lineHeight: "4.5rem" }}
                >
                  THE RIGHT TALENT MATCHED TO THE BEST ROLES
                </h1>
                <h1
                  className=" hidden 2xl:block md:text-5xl lg:text-[3.63rem] md:font-light w-full 2xl:text-[5rem] 2xl:pt-6"
                  style={{ lineHeight: "6rem" }}
                >
                  THE RIGHT TALENT MATCHED TO THE BEST ROLES
                </h1>
                <p
                  className=" block 2xl:hidden my-10 md:text-xl lg:text-[1.8rem] 2xl:text-[2.8rem] font-extralight max-w-md"
                  style={{ lineHeight: "2.6rem" }}
                >
                  Meaningful Connections Through Human-Curated Matchmaking
                </p>

                <p
                  className="hidden 2xl:block my-12 md:text-xl lg:text-[1.8rem] 2xl:text-[2.6rem] font-extralight max-w-2xl"
                  style={{ lineHeight: "3.6rem" }}
                >
                  Meaningful Connections Through Human-Curated Matchmaking
                </p>
                <div className="mt-12  2xl:mt-20  lg:mb-16 2xl:mb-20 flex gap-4 2xl:gap-10 items-center">
                  <ActionButton label="CANDIDATES" />
                  <ActionButton label="COMPANIES" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Section (Visible below md) */}
      <section id="hero" className="block md:hidden bg-white h-screen">
        <div className="flex flex-col h-full">
          {/* Top Section (Image with absolute heading) */}
          <div className="relative h-2/3 w-full">
            <Image
              src="/assets/images/hero_section_mobile.png"
              height={600}
              width={600}
              alt="hero_mobile"
              className="object-cover w-full h-full"
            />
            {/* Absolute heading at the bottom of the image */}
            <div className="bg-white opacity-50 absolute bottom-1 left-0 right-0 p-4">
              <h1
                className="text-3xl font-light text-black px-4 text-left"
                style={{ lineHeight: "3rem" }}
              >
                THE RIGHT TALENT MATCHED TO THE BEST ROLES
              </h1>
            </div>
          </div>

          {/* Bottom Section (Text and Buttons) */}
          <div className="flex flex-col justify-center items-center gap-4 py-6 text-center">
            <p className="text-lg font-normal" style={{ lineHeight: "2.5rem" }}>
              Meaningful Connections Through Human-Curated Matchmaking
            </p>
            <div className="space-y-4 flex flex-col">
              <ActionButton label="CANDIDATES" />
              <ActionButton label="COMPANIES" />
            </div>
            <p className="text-lg" style={{ lineHeight: "2.5rem" }}>
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
