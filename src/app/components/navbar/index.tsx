"use client";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./mobile";

const NavLinks = [
  { href: "#platform", label: "Platform" },

  { href: "#contactus", label: "Contact" },
];

export default function Header() {
  return (
    <header className="bg-backgroundalt text-white h-[10vh] 2xl:h-[12vh] flex sticky top-0 left-0 right-0 z-50 w-full">
      <div className="flex justify-between items-center w-full text-xl font-light px-4 md:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/NapoleonLogo-gxDssng4.png"
            alt="Napoleon logo"
            width={144}
            height={41}
            className=" 2xl:w-[14rem]"
          />
        </Link>

        <nav className="hidden md:flex  flex-1 ml-16 text-[1.75rem]  2xl:text-[2.2rem] font-light">
          {NavLinks.map(({ href, label }, index) => (
            <span key={href} className="flex items-center">
              <Link className=" p-2" href={href}>
                {label}
              </Link>
              {index < NavLinks.length - 1 && (
                <div className="mx-4">
                  <div className="w-[0.8px] h-[1.95rem] bg-white rounded-sm">
                    &nbsp;
                  </div>
                </div>
              )}
            </span>
          ))}
        </nav>

        <div className="flex items-center text-[1.75rem] 2xl:text-[2.2rem] font-light">
          <Link href="#how_it_works" className="hidden md:inline-block">
            How this works
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
