import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-backgroundalt text-white  md:h-[10vh] my-auto pt-4 md:sticky bottom-0">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <img
                src="/assets/images/NapoleonLogo-gxDssng4.png"
                alt="Napoleon logo"
                className="h-12"
              />
            </Link>
          </div>

          <div className="text-center ">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-xs  ">
              <div className=" flex flex-row gap-10 justify-between w-2/3 md:w-full">
                <Link href="/about" className="hover:underline">
                  About
                </Link>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </div>
              <div className=" flex flex-row gap-10 justify-between w-2/3 md:w-full">
                <Link
                  href="/terms"
                  className="hover:underline whitespace-nowrap"
                >
                  User Agreement
                </Link>
                <Link href="/help" className="hover:underline">
                  Help
                </Link>
              </div>
            </div>
            <p className=" hidden  md:block text-xs mt-1">Napoleon © 2024</p>
          </div>

          {/* Contact Information */}
          <div className="text-xs mt-6 md:mt-0 py-4">
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
