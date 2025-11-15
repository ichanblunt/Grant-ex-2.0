import React from "react";
import { AboutSection } from "./sections/AboutSection";
import { ActivitiesSection } from "./sections/ActivitiesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { TourPackagesSection } from "./sections/TourPackagesSection";
import { TourPackagesWrapperSection } from "./sections/TourPackagesWrapperSection";

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-white w-full flex flex-col">
      <HeaderSection />

      <section className="w-full flex flex-col items-center px-[71.5px] py-0 bg-[linear-gradient(135deg,rgba(255,214,167,1)_0%,rgba(255,184,106,1)_50%,rgba(187,77,0,1)_100%)]">
        <div className="w-full max-w-[1280px] py-20">
          <h1 className="w-full mb-[51px] [font-family:'Merriweather',Helvetica] font-bold text-black text-5xl text-center tracking-[0] leading-[48px]">
            Safaris, Trekking, Beaches, and More!
          </h1>
          <div className="w-full flex justify-center">
            <img
              className="w-full max-w-[972px] h-auto"
              alt="Container"
              src="/figmaAssets/container-5.svg"
            />
          </div>
        </div>
      </section>

      <AboutSection />

      <section className="w-full flex flex-col items-center pt-6 pb-px px-0 border-b [border-bottom-style:solid] border-[#0000001a]">
        <h2 className="[font-family:'Merriweather',Helvetica] font-bold text-black text-4xl text-center tracking-[0] leading-10 whitespace-nowrap">
          Explore the Wonders of Africa!
        </h2>
      </section>

      <div className="w-full flex flex-row">
        <TourPackagesWrapperSection />
        <TourPackagesSection />
        <ActivitiesSection />
      </div>

      <FooterSection />
    </div>
  );
};
