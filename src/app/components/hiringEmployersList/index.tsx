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
      className="container mx-auto px-4 py-12 md:py-24 md:px-16"
    >
      <h2 className="text-xl md:text-3xl lg:text-[2.8rem] font-bold text-center mb-10 text-gold">
        Current Top Employers Hiring
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employers.map((employer, index) => (
          <Card key={index} className="flex flex-col p-0 relative">
            {/* Card Header with Image */}
            <CardHeader className="p-0">
              <Image
                src={employer.image}
                alt="People working"
                width={400}
                height={200}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="absolute bottom-[350px] left-6 z-0">
                <Image
                  src={employer.logo}
                  alt={`${employer.name} logo`}
                  width={65}
                  height={62}
                  className="bg-white p-1 w-full h-full"
                />
              </div>
            </CardHeader>
            {/* Card Content */}
            <CardContent className="flex-grow z-10">
              <CardTitle className="text-center py-4 text-xl font-medium">
                {employer.name}
              </CardTitle>
              <p className="text-xl text-gray-600 py-4 text-center leading-relaxed">
                {employer.description}
              </p>
            </CardContent>
            {/* Card Footer */}
            <CardFooter className="flex justify-between items-center">
              <span className="text-sm font-medium">
                {employer.activePositions} active positions
              </span>
              <Button
                variant="outline"
                className="rounded-full font-bold text-primary"
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
