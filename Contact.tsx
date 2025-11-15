import React from "react";
import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";

export const Contact = (): JSX.Element => {
  return (
    <div className="bg-white w-full flex flex-col">
      <HeaderSection />

      <section className="w-full bg-[#00a63e] border-b border-[#e8c5a0] flex justify-center px-24 pt-16 pb-8">
        <h1 className="font-['Montserrat',Helvetica] font-bold text-[48px] text-black text-center leading-[48px] tracking-[0.35px]">
          Contact Grant Expedition
        </h1>
      </section>

      <div className="w-full flex justify-center px-24 py-12">
        <div className="max-w-[1248px] w-full flex gap-8">
          <aside className="w-[395px] flex flex-col gap-6">
            <div className="bg-white border border-[#e8c5a0] rounded-[10px] p-6">
              <div className="flex flex-col gap-3">
                <a href="#" className="flex items-center gap-3">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0z"/>
                  </svg>
                  <span className="font-['Merriweather',Helvetica] text-[#1e2939] text-base">Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-3">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M20 3.924a8.21 8.21 0 01-2.357.646A4.115 4.115 0 0019.448 2.3a8.224 8.224 0 01-2.606.996A4.103 4.103 0 0013.847 2c-2.266 0-4.103 1.838-4.103 4.103 0 .322.036.635.106.935-3.41-.171-6.433-1.804-8.457-4.287a4.088 4.088 0 00-.556 2.063c0 1.424.724 2.679 1.825 3.415a4.084 4.084 0 01-1.859-.514v.052c0 1.988 1.414 3.647 3.292 4.023a4.108 4.108 0 01-1.853.07c.522 1.63 2.038 2.816 3.833 2.848A8.233 8.233 0 010 16.407 11.616 11.616 0 006.29 18c7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.531A8.336 8.336 0 0020 3.924z"/>
                  </svg>
                  <span className="font-['Merriweather',Helvetica] text-[#1e2939] text-base">Twitter</span>
                </a>
                <a href="#" className="flex items-center gap-3">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 0C7.284 0 7.003.012 5.935.06 4.87.108 4.14.277 3.503.525a4.92 4.92 0 00-1.772 1.153A4.92 4.92 0 00.578 3.45C.33 4.087.161 4.817.113 5.882.065 6.95.053 7.231.053 9.947s.012 2.997.06 4.065c.048 1.065.217 1.795.465 2.432a4.92 4.92 0 001.153 1.772 4.92 4.92 0 001.772 1.153c.637.248 1.367.417 2.432.465 1.068.048 1.349.06 4.065.06s2.997-.012 4.065-.06c1.065-.048 1.795-.217 2.432-.465a4.92 4.92 0 001.772-1.153 4.92 4.92 0 001.153-1.772c.248-.637.417-1.367.465-2.432.048-1.068.06-1.349.06-4.065s-.012-2.997-.06-4.065c-.048-1.065-.217-1.795-.465-2.432a4.92 4.92 0 00-1.153-1.772A4.92 4.92 0 0016.497.525C15.86.277 15.13.108 14.065.06 12.997.012 12.716 0 10 0zm0 1.802c2.67 0 2.986.01 4.04.058.975.045 1.504.207 1.857.344.467.181.8.398 1.15.748.35.35.567.683.748 1.15.137.353.299.882.344 1.857.048 1.054.058 1.37.058 4.04s-.01 2.986-.058 4.04c-.045.975-.207 1.504-.344 1.857-.181.467-.398.8-.748 1.15-.35.35-.683.567-1.15.748-.353.137-.882.299-1.857.344-1.054.048-1.37.058-4.04.058s-2.986-.01-4.04-.058c-.975-.045-1.504-.207-1.857-.344a3.097 3.097 0 01-1.15-.748 3.097 3.097 0 01-.748-1.15c-.137-.353-.299-.882-.344-1.857-.048-1.054-.058-1.37-.058-4.04s.01-2.986.058-4.04c.045-.975.207-1.504.344-1.857.181-.467.398-.8.748-1.15.35-.35.683-.567 1.15-.748.353-.137.882-.299 1.857-.344 1.054-.048 1.37-.058 4.04-.058z"/>
                    <path d="M10 13.333A3.333 3.333 0 1110 6.667a3.333 3.333 0 010 6.666zm0-8.468a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm6.538-.203a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
                  </svg>
                  <span className="font-['Merriweather',Helvetica] text-[#1e2939] text-base">Instagram</span>
                </a>
              </div>
            </div>

            <div className="bg-white border border-[#e8c5a0] rounded-[10px] p-6">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-['Merriweather',Helvetica] font-bold text-[#1e2939] text-base mb-3">
                    Head Office
                  </h3>
                  <div className="flex flex-col gap-2">
                    <p className="font-['Merriweather',Helvetica] text-[#364153] text-base">
                      <span className="font-['Inter',Helvetica] font-medium">Address:</span> Usa River, Arusha, Tanzania
                    </p>
                    <p className="font-['Merriweather',Helvetica] text-[#364153] text-base">
                      <span className="font-['Inter',Helvetica] font-medium">Phone:</span> +255 766 437 358
                    </p>
                    <p className="font-['Merriweather',Helvetica] text-[#364153] text-base">
                      <span className="font-['Inter',Helvetica] font-medium">Email:</span> info@grantexepedition
                    </p>
                    <p className="font-['Merriweather',Helvetica] text-[#364153] text-base">
                      <span className="font-['Inter',Helvetica] font-medium">Office Hours:</span> Mon-Sat: 8:00 AM-6:00 PM
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-['Merriweather',Helvetica] font-bold text-[#1e2939] text-lg mb-3">
                    Emergency Contact
                  </h3>
                  <p className="font-['Merriweather',Helvetica] font-bold text-[#1e2939] text-base">
                    For urgent safari assistance or wildlife emergencies; Call the number above. Available 24/7
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 flex flex-col gap-6">
            <div className="bg-white rounded-[14px] h-64 overflow-hidden relative">
              <div className="w-full h-full bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                <div className="bg-red-600 rounded-full p-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8c5a0] rounded-[14px] p-8">
              <h2 className="font-['Merriweather',Helvetica] font-bold text-[#1e2939] text-[30px] text-center mb-12">
                Travel Tips Before You Call
              </h2>
              
              <div className="flex flex-col gap-3">
                {[
                  "Check seasonal wildlife migrations to choose the best safari dates.",
                  "Ensure your passport and visas are valid for Tanzania.",
                  "Bring appropriate safari clothing, including hats, neutral colors, and good walking shoes.",
                  "Vaccinations may be required; consult your healthcare provider before traveling.",
                  "Plan for early morning game drives — wake-up times can be as early as 5:30 AM.",
                  "Confirm your travel insurance covers adventure and safari activities.",
                  "Respect local cultures, traditions, and environmental guidelines.",
                  "Stay hydrated and carry sunscreen and insect repellent.",
                  "These tips help you have a safe, smooth, and memorable safari experience with Grant Expedition."
                ].map((tip, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="font-['Inter',Helvetica] font-bold text-[#e8c5a0] text-base">•</span>
                    <p className="font-['Merriweather',Helvetica] font-bold text-[#1e2939] text-sm flex-1">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};
