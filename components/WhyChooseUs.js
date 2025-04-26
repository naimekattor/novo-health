import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="bg-white rounded-4xl shadow-[#87CFFF] border-[#87CFFF] border-[1px] shadow-md py-[80px] px-[30px] ">
        <h2 className="md:text-[68px] text-[40px] font-bold text-[#03436E] font-sans mb-[40px]">
          Why Choose Novo Health?
        </h2>
        <div className="flex flex-col lg:flex-row items-center  gap-4">
          <div>
            <ul className="text-black md:text-[30px] text-[26px] mb-4 font-semibold font-sans space-y-2">
              <li className="flex items-start">
                <span className="text-black font-bold mr-2">▪</span>
                24/7 access to medical support and resources.
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-2">▪</span>
                Secure, user-friendly tools for health management.
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-2">▪</span>
                Personalized guidance for every step of your health journey.
              </li>
            </ul>
          </div>
          <div className=" flex justify-end">
            <Image
              src="/images/whychoose.png"
              alt="Why Choose Us"
              width={360}
              height={216}
              loading="lazy"
              className="rounded-4xl shadow-[#87CFFF] border-[#87CFFF] border-[1px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
