import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  { label: "Trekking", href: "#", hasDropdown: true },
  { label: "Safari Tours", href: "#" },
  { label: "Destinations", href: "#", hasDropdown: true },
  { label: "Contact Us", href: "/contact" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex w-full h-[99px] flex-col items-start bg-white border-b border-[#0000001a]">
      <div className="flex h-[98px] items-center justify-between px-24 w-full">
        <div className="relative w-[125.55px] h-[66px] rounded border border-solid border-[#ffb869] flex items-center justify-center">
          <div className="[font-family:'Merriweather',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
            LOGO
          </div>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-6">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1 [font-family:'Montserrat',Helvetica] font-medium text-black text-lg tracking-[0] leading-7 whitespace-nowrap hover:text-[#ff6800] transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDownIcon className="w-4 h-4" />}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="h-9 px-6 py-2 bg-[#ff6800] hover:bg-[#e55f00] rounded-[33554428px] border border-solid [font-family:'Merriweather',Helvetica] font-normal text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
          Plan my own Safari
        </Button>
      </div>
    </header>
  );
};
