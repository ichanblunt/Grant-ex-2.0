import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featurePackages = [
  {
    title: "Trek the Heights of Mount Kilimanjaro",
    description:
      "Experience the thrill of climbing Mount Kilimanjaro and exploring the stunning landscapes of Tanzania's highlands.",
    image: "../figmaAssets/imagewithfallback.png",
  },
  {
    title: "Relax on the Beaches of Zanzibar",
    description:
      "Relax on pristine white sand beaches and explore the crystal-clear waters of the Indian Ocean in exotic Zanzibar.",
    image: "../figmaAssets/imagewithfallback-1.png",
  },
  {
    title: "Take a Safari through our National Parks",
    description:
      "Witness the incredible wildlife of the Serengeti and experience the adventure of a lifetime on an African safari.",
    image: "../figmaAssets/imagewithfallback-2.png",
  },
  {
    title: "Experience Authentic Tanzanian Culture Tours",
    description:
      "Immerse yourself in the vibrant culture of Tanzania! Visit traditional villages, hunter-gatherer tribes, and popular heritage sites!",
    image: "../figmaAssets/imagewithfallback-3.png",
  },
];

const bestPackages = [
  {
    title: "Mid Range Highlights of Tanzania Safari | 6 days",
    image: "../figmaAssets/imagewithfallback-4.png",
  },
  {
    title: "Mid Range Epic Adventure (Stay on the Crater Rim) | 7 days",
    image: "../figmaAssets/imagewithfallback-5.png",
  },
  {
    title: "Mid Range Ndutu Migration (Dec to April) | 8 days",
    image: "../figmaAssets/imagewithfallback-6.png",
  },
  {
    title: "Mount Kilimanjaro Marangu Route | 5 days",
    image: "../figmaAssets/imagewithfallback-7.png",
  },
  {
    title: "Mount Kilimanjaro Machame Route | 6 days",
    image: "../figmaAssets/imagewithfallback-8.png",
  },
  {
    title: "Mount Kilimanjaro Lemosho Route | 8 days",
    image: "../figmaAssets/imagewithfallback-9.png",
  },
  {
    title: "Zanzibar Package | 2 days 1 night",
    image: "../figmaAssets/imagewithfallback-10.png",
  },
  {
    title: "Zanzibar Package | 3 days 2 nights",
    image: "../figmaAssets/imagewithfallback-11.png",
  },
  {
    title: "Zanzibar Package | 4 days 3 nights",
    image: "../figmaAssets/imagewithfallback-12.png",
  },
];

export const TourPackagesSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center gap-12 py-12 px-4">
      <div className="w-full max-w-[1232px] flex flex-col items-start gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {featurePackages.map((pkg, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-solid shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] rounded-[10px]"
            >
              <CardContent className="p-0 flex flex-col">
                <div className="flex flex-col items-start gap-2 pt-6 pb-0 px-6 min-h-[184px]">
                  <h3 className="w-full [font-family:'Merriweather',Helvetica] font-bold text-black text-2xl text-center tracking-[0] leading-8">
                    {pkg.title}
                  </h3>
                  <p className="w-full [font-family:'Merriweather',Helvetica] font-normal text-[#495565] text-base text-center tracking-[0] leading-6">
                    {pkg.description}
                  </p>
                </div>
                <div className="relative w-full h-48 bg-gray-200">
                  <div
                    className="absolute top-0 left-0 w-full h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  />
                  <div className="flex flex-col w-[130px] h-6 items-start pt-1 pb-0 px-2 absolute top-2 left-2 bg-[#6a7282] rounded">
                    <div className="flex h-4 items-start w-full">
                      <span className="w-fit mt-[-1.00px] mr-[-5.72px] [font-family:'Merriweather',Helvetica] font-normal text-white text-xs tracking-[0] leading-4 whitespace-nowrap">
                        [Placeholder image]
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="w-full [font-family:'Merriweather',Helvetica] font-bold text-black text-4xl text-center tracking-[0] leading-10">
          Our Best Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {bestPackages.map((pkg, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-solid border-[#ffb869] rounded-[10px]"
            >
              <CardContent className="p-0 flex flex-col">
                <div
                  className="w-full h-36 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                />
                <div className="flex flex-col items-start gap-3 p-3 flex-1">
                  <p className="w-full min-h-[40px] [font-family:'Merriweather',Helvetica] font-normal text-black text-sm text-center tracking-[0] leading-5">
                    {pkg.title}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full h-auto px-4 py-2 bg-white rounded-lg border-2 border-solid border-black"
                  >
                    <span className="[font-family:'Merriweather',Helvetica] font-normal text-black text-sm tracking-[0] leading-5">
                      Learn more
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
