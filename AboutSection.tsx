import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const statsData = [
  {
    value: "2012",
    label: "Established",
  },
  {
    value: "1000+",
    label: "Guests Hosted",
  },
  {
    value: "4x4",
    labels: ["Fleet", "Reliable Vehicles"],
  },
  {
    value: "24/7",
    labels: ["Local", "Support"],
  },
];

export const AboutSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col lg:flex-row border-b border-[#0000001a]">
      <div className="w-full lg:w-1/3 h-80 bg-[url(/figmaAssets/imagewithfallback-13.svg)] bg-cover bg-center" />

      <div className="w-full lg:w-1/3 flex flex-col items-start justify-center gap-3 px-6 py-8 lg:py-0 border-r border-[#0000001a]">
        <h2 className="[font-family:'Merriweather',Helvetica] font-normal text-neutral-950 text-xl tracking-[0] leading-[30px]">
          About
        </h2>

        <div className="flex flex-col gap-6 opacity-60">
          <p className="[font-family:'Merriweather',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
            Headquartered in Arusha, Tanzania, Grant Expedition specializes in
            creating unforgettable safari experiences across Tanzania&apos;s
            most stunning landscapes. We deliver personalized itineraries
            blending luxury, comfort, and authenticity.
          </p>

          <p className="[font-family:'Merriweather',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
            Whether you are seeking thrilling wildlife encounters, breathtaking
            natural wonders, or immersive cultural experiences, Grant Expedition
            is your trusted partner in discovering the best of Tanzania.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/3 grid grid-cols-2 gap-4 p-6">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="bg-gray-100 rounded-2xl border border-solid"
          >
            <CardContent className="flex flex-col items-center justify-center gap-2 p-6 h-full">
              <div className="[font-family:'Merriweather',Helvetica] font-bold text-[#008235] text-4xl text-center tracking-[0] leading-10">
                {stat.value}
              </div>
              {stat.label ? (
                <div className="[font-family:'Merriweather',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-7">
                  {stat.label}
                </div>
              ) : (
                stat.labels?.map((label, labelIndex) => (
                  <div
                    key={labelIndex}
                    className="[font-family:'Merriweather',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-7"
                  >
                    {label}
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
