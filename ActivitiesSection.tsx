import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const reviewsData = [
  {
    name: "shabanabashir",
    date: "2022-10-12",
    text: "We had amazing experience with grant expedition from hiking to kilimanjaro summit through machame route to Safari and zanzibar. Everything was top cla...",
  },
  {
    name: "Alicia is key",
    date: "2022-09-27",
    text: "Thankyou so much to the whole team! I had the experience of a lifetime! I set out to climb Kilimanjaro, and because of Grant Expedition, I achieved my...",
  },
  {
    name: "Jeffrey Gleijm",
    date: "2022-07-20",
    text: "What a nice experience! We made a day trip from Zanzibar and Samuel helped us a lot with the tickets. grand expedition picked us up once we arrived at...",
  },
  {
    name: "George",
    date: "Jan 2022",
    text: "Grant Expedition and Samuel are the most professional tour operator for safari and other tours! We had the chance to organize everything in order to h...",
  },
];

export const ActivitiesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-52 items-center gap-4">
      <header className="w-[63.69px] h-6">
        <h2 className="[font-family:'Merriweather',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-6 whitespace-nowrap">
          Reviews
        </h2>
      </header>

      <div className="flex w-[79.31px] h-6 items-center gap-2">
        <img className="w-6 h-6" alt="Icon" src="/figmaAssets/icon-1.svg" />
        <div className="flex-1 h-5">
          <div className="[font-family:'Merriweather',Helvetica] font-normal text-black text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
            Google
          </div>
        </div>
      </div>

      {reviewsData.map((review, index) => (
        <Card
          key={index}
          className="w-52 h-[236px] bg-white rounded border border-solid border-[#ffb869]"
        >
          <CardContent className="p-[17px]">
            <img
              className="w-[174px] h-3 mb-2"
              alt="Container"
              src="/figmaAssets/container.svg"
            />

            <div className="flex w-[174px] h-4 items-start mb-2">
              <div className="flex-1 mt-[-1.00px] [font-family:'Merriweather',Helvetica] font-normal text-neutral-950 text-xs tracking-[0] leading-4">
                {review.name}
              </div>
            </div>

            <div className="flex w-[174px] h-4 items-start mb-6">
              <div className="flex-1 mt-[-1.00px] [font-family:'Merriweather',Helvetica] font-normal text-[#697282] text-xs tracking-[0] leading-4">
                {review.date}
              </div>
            </div>

            <div className="w-[174px] h-[114px] flex mb-2">
              <p className="[font-family:'Merriweather',Helvetica] font-normal text-black text-xs tracking-[0] leading-[19.5px]">
                {review.text}
              </p>
            </div>

            <div className="flex w-[174px] h-4 items-start">
              <button className="flex-1 mt-[-1.00px] [font-family:'Merriweather',Helvetica] font-normal text-[#f54900] text-xs tracking-[0] leading-4 text-left">
                Read more
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
