import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const employers = [
  {
    name: "Jade Global",
    logo: "/assets/images/JadeGlobal.jpeg",
    image: "/assets/images/top_employers.png",
    description:
      "For the past 21 years, Jade Global has been the growth guiding star for hundreds of mid-size to large enterprises in North America.",
    activePositions: 3,
  },
  {
    name: "Charity Dynamics",
    logo: "/assets/images/CharityDynamics.jpeg",
    image: "/assets/images/top_employers.png",
    description:
      "More awareness, supporters, engagement, and donations. This is what nonprofits need to fulfill their mission, and this is what Charity Dynamics delivers.",
    activePositions: 5,
  },
  {
    name: "Stonebranch",
    logo: "/assets/images/Stonebranch.png",
    image: "/assets/images/top_employers.png",
    description:
      "With decades of experience, Stonebranch set out to change the IT automation market for the better. To develop the right purpose-built solutions with user experience and accessibility in mind.",
    activePositions: 2,
  },
];

export default function HiringEmployersList() {
  return (
    <section
      id="hiring_employers_list"
      className=" px-4 py-[5%]  max-w-[85rem] 2xl:max-w-[112rem] md:py-12  md:px-[4.9rem]  mx-auto    2xl:py-28 w-full"
    >
      <h2 className="text-[6vw]  2xl:py-4 md:text-3xl lg:text-[2.8rem] 2xl:text-[3.5rem]  font-bold text-center mb-4 md:mb-8 text-gold">
        Current Top Employers Hiring
      </h2>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
        {employers.map((employer, index) => (
          <Card key={index} className="relative flex flex-col p-0">
            {/* Card Header with Image */}
            <CardHeader className="p-0 relative">
              <Image
                src={employer.image}
                alt="People working"
                width={400}
                height={200}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="absolute bottom-[-40px] left-6 z-0">
                <Image
                  src={employer.logo}
                  alt={`${employer.name} logo`}
                  width={94}
                  height={94}
                  className="bg-white p-1 w-full h-full"
                />
              </div>
            </CardHeader>
            {/* Card Content */}
            <CardContent className="flex-grow z-10">
              <CardTitle className="text-center py-4 text-[calc(1.3rem+.6vw)] font-medium px-2">
                {employer.name}
              </CardTitle>
              <p className="text-[3vw] xxl:text-[calc(1.275rem+.3vw)] text-gray-600 py-4 text-center leading-relaxed lg:text-[2vw]">
                {employer.description}
              </p>
            </CardContent>
            {/* Card Footer */}
            <CardFooter className="flex flex-col sm:gap-2.5 justify-start items-start xl:flex-row xl:justify-between xl:items-center">
              <span className="text-xl font-medium 2xl:text-2xl mb-2 md:mb-0 text-red whitespace-nowrap mr-1">
                {employer.activePositions}{" "}
                <span className="text-black">active positions</span>
              </span>

              <Button
                variant="outline"
                className="rounded-full text-lg 2xl:text-2xl p-4 2xl:p-8 font-bold text-primary w-full xl:w-auto "
              >
                FIND MORE
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
