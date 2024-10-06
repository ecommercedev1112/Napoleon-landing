"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

// Reusable component for navigation items
const NavItem = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <>
    <Button
      variant="ghost"
      className="w-full justify-end text-black text-xl font-bold"
      onClick={onClick}
    >
      {label}
    </Button>
    <div className="border-b border-gray-200 w-full" />
  </>
);

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items array to map over
  const navItems = [
    { label: "Home", url: "/" },
    { label: "Platform", url: "/platform" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden bg-primary text-black"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full bg-white text-black p-0">
        {/* Close Button */}
        <SheetHeader className="h-[10vh] bg-backgroundalt p-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="absolute left-2 top-4 text-white hover:text-gray-300"
          >
            <X className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </Button>
        </SheetHeader>

        {/* Navigation Items */}
        <div className="py-6 space-y-6">
          <nav className="space-y-6">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = item.url; // Handle URL change
                }}
              />
            ))}
          </nav>
        </div>

        {/* "Get Started" Button */}
        <div className="absolute bottom-10 left-0 w-full px-6">
          <Button className="w-full text-white py-3 rounded-md text-lg font-semibold rounded-full">
            GET STARTED
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
