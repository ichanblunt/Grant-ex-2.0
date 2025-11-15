import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const reviewsData = [
  {
    name: "Stacy Grizzard",
    date: "2024-01-06",
    text: "Grant Expedition made our Kilimanjaro climb a reality and provided great service. Samuel was very patient with us and all of our concerns and question...",
  },
  {
    name: "Etienne Lessard",
    date: "2023-11-30",
    text: "I was welcome at the airport during a late flight 21h, I had exceptional service from them during all my trip. Grant expedition was very listening to ...",
  },
  {
    name: "Alexander P",
    date: "Mar 2024",
    text: "Having worked and lived in Africa for several years, climbing mount Kilimanjaro was a long-cherished project of mine. Grant expedition's manager Samwe...",
  },
  {
    name: "Konstantina1983",
    date: "Aug 2021",
    text: "Samuel was our amazing tour operator and guide through our 5 days safari and he joined us also in our whole trip to Tanzania. He climp with us in Kili...",
  },
];

export const TourPackagesWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-4">
      <div className="w-full text-center">
        <h2 className="[font-family:'Merriweather',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
          Reviews
        </h2>
      </div>

      <div className="flex items-center gap-2">
        <img className="w-6 h-6" alt="Icon" src="/figmaAssets/icon.svg" />
        <div className="[font-family:'Merriweather',Helvetica] font-normal text-black text-sm tracking-[0] leading-5">
          Trip Advisor
        </div>
      </div>

      {reviewsData.map((review, index) => (
        <Card
          key={index}
          className="w-52 bg-white rounded border border-solid border-[#ffb869]"
        >
          <CardContent className="p-[17px] flex flex-col gap-4">
            <img
              className="w-full h-3"
              alt="Container"
              src="/figmaAssets/container.svg"
            />

            <div className="[font-family:'Merriweather',Helvetica] font-normal text-neutral-950 text-xs tracking-[0] leading-4">
              {review.name}
            </div>

            <div className="[font-family:'Merriweather',Helvetica] font-normal text-[#697282] text-xs tracking-[0] leading-4">
              {review.date}
            </div>

            <div className="[font-family:'Merriweather',Helvetica] font-normal text-black text-xs tracking-[0] leading-[19.5px]">
              {review.text}
            </div>

            <div className="[font-family:'Merriweather',Helvetica] font-normal text-[#f54900] text-xs tracking-[0] leading-4 cursor-pointer">
              Read more
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
