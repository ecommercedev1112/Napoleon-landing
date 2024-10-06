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
    <header className="bg-backgroundalt text-white h-[10vh] flex sticky top-0 z-50">
      <div className="px-4 md:px-12 flex justify-between items-center w-full text-xl font-light">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/NapoleonLogo-gxDssng4.png"
            alt="Napoleon logo"
            width={150}
            height={43}
            className="mr-2"
          />
        </Link>

        <nav className="hidden md:flex space-x-6 flex-1 ml-16 text-3xl  font-light">
          {NavLinks.map(({ href, label }, index) => (
            <span key={href} className="flex items-center">
              <Link href={href}>{label}</Link>
              {index < NavLinks.length - 1 && (
                <div className="w-[0.9px] bg-white rounded-sm ml-6">&nbsp;</div>
              )}
            </span>
          ))}
        </nav>

        <div className="flex items-center text-3xl  font-light">
          <Link href="#how_it_works" className="hidden md:inline-block">
            How this works
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
