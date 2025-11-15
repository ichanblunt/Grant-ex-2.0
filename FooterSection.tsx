import React from "react";

const menuItems = [
  { label: "Home" },
  { label: "Safaris" },
  { label: "Tours" },
  { label: "Blog" },
];

const supportItems = [
  { label: "FAQ" },
  { label: "Newsletter" },
  { label: "Privacy Policy" },
  { label: "Terms & Conditions" },
];

const contactInfo = [
  { label: "Email: info@grantexpedition.com" },
  { label: "Phone: +255 766 437 358" },
  { label: "Address: Arusha, Tanzania" },
];

const socialLinks = [
  { name: "Facebook", icon: "/figmaAssets/icon-6.svg" },
  { name: "Twitter", icon: "/figmaAssets/icon-5.svg" },
  { name: "Instagram", icon: "/figmaAssets/icon-3.svg" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex w-full relative mt-8 flex-col items-start gap-8 pt-12 pb-0 px-[51px] bg-[#39362a]">
      <div className="grid grid-cols-4 gap-12 w-full">
        <div className="flex flex-col items-start gap-4">
          <div className="w-full">
            <div className="[font-family:'Inter',Helvetica] font-normal text-[#ffb869] text-base tracking-[-0.31px] leading-6 whitespace-nowrap">
              Grant Expedition
            </div>
          </div>

          <div className="w-full">
            <div className="w-[270px] [font-family:'Inter',Helvetica] font-normal text-[#e9aa5a] text-sm tracking-[-0.15px] leading-5">
              Your trusted partner for unforgettable Tanzanian adventures. From
              safaris to trekking, we offer personalized itineraries that
              connect you with nature, culture, and adventure.
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <div className="w-full">
            <div className="[font-family:'Inter',Helvetica] font-medium text-[#ffb869] text-lg tracking-[-0.44px] leading-[27px] whitespace-nowrap">
              Main Menu
            </div>
          </div>

          <nav className="flex flex-col items-start gap-2 w-full">
            {menuItems.map((item, index) => (
              <div key={index} className="w-full">
                <a
                  href="#"
                  className="[font-family:'Inter',Helvetica] font-normal text-[#ffb869] text-base tracking-[-0.31px] leading-6 whitespace-nowrap hover:underline"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start gap-4">
          <div className="w-full">
            <div className="[font-family:'Inter',Helvetica] font-medium text-[#ffb869] text-lg tracking-[-0.44px] leading-[27px] whitespace-nowrap">
              Support
            </div>
          </div>

          <nav className="flex flex-col items-start gap-2 w-full">
            {supportItems.map((item, index) => (
              <div key={index} className="w-full">
                <a
                  href="#"
                  className="[font-family:'Inter',Helvetica] font-normal text-[#ffb869] text-base tracking-[-0.31px] leading-6 whitespace-nowrap hover:underline"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start gap-4">
          <div className="w-full">
            <div className="[font-family:'Inter',Helvetica] font-normal text-[#ffb869] text-base tracking-[-0.31px] leading-6 whitespace-nowrap">
              Contact Us
            </div>
          </div>

          <address className="flex flex-col items-start gap-2 w-full not-italic">
            {contactInfo.map((item, index) => (
              <div key={index} className="w-full">
                <div className="[font-family:'Inter',Helvetica] font-normal text-[#ffb869] text-sm tracking-[-0.15px] leading-5 whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            ))}
          </address>
        </div>
      </div>

      <div className="flex items-start gap-4 pt-4 pb-0 px-0 w-full">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img className="w-5 h-5" alt={social.name} src={social.icon} />
            <div className="[font-family:'Inter',Helvetica] font-normal text-[#ffb869] text-base tracking-[-0.31px] leading-6 whitespace-nowrap">
              {social.name}
            </div>
          </a>
        ))}
      </div>
    </footer>
  );
};
