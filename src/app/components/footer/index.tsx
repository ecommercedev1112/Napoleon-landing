import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-backgroundalt text-white  md:h-[10vh] 2xl:h-[12vh] my-auto  md:sticky bottom-0 no-underline">
      <div className=" mx-auto px-6 md:px-12 lg:pl-[4.5rem] py-6 md:py-0">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image
                width={144}
                height={41}
                src="/assets/images/NapoleonLogo-gxDssng4.png"
                alt="Napoleon logo"
                className="h-10 2xl:w-[14rem] 2xl:h-16"
              />
            </Link>
          </div>

          <div className="text-center ">
            <div className=" md:ml-4 md:mt-2 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-sm 2xl:text-xl  font-light ">
              <div className=" flex flex-row gap-10 md:gap-3 justify-between w-2/3 md:w-full">
                <Link href="/about" className="">
                  About
                </Link>
                <Link href="/privacy" className=" whitespace-nowrap">
                  User Agreement
                </Link>
              </div>
              <div className=" flex flex-row gap-10 md:gap-3 justify-between w-2/3 md:w-full">
                <Link href="/terms" className=" whitespace-nowrap">
                  Privacy Policy
                </Link>
                <Link href="/help" className="">
                  Help
                </Link>
              </div>
            </div>
            <p className=" hidden  md:block text-xs mt-1 ml-2 2xl:text-xl">
              Napoleon © 2024
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-sm mt-6 md:mt-0 py-4 2xl:text-xl">
            <p>
              Email:{" "}
              <a
                href="mailto:support@napoleon.cloud"
                className="hover:underline"
              >
                support@napoleon.cloud
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+12024561111" className="hover:underline">
                (202) 456-1111
              </a>
            </p>
            <p className=" sm:block  md:hidden text-xs mt-1">Napoleon © 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
