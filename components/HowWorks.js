"use client";
import React, { use } from "react";
import Image from "next/image";

const HowWorks = () => {
  return (
    <div className="bg-white py-12 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">
        How <span className="text-[#199DF6]">our platform</span> works
      </h2>
      <p className="text-center text-gray-600 mb-12 ">
        Navigating your healthcare journey with Novo Health is seamless. Just
        follow these steps mentioned below to <br></br> proceed with your
        selected services. You can also see our FAQ section for more guidance.
      </p>
      <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
        <style jsx>{`
          .circle {
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(
              to bottom,
              rgba(135, 207, 255, 0.8),
              rgba(26, 139, 214, 0.8)
            );
            color: white;
            font-weight: bold;
            border-radius: 50%;
            font-size: 36px;
            z-index: 10;
          }
        `}</style>
        <div className="grid grid-cols-1 gap-4 w-full">
          {/* Step 1 */}
          <div className="flex items-start relative mb-8">
            <div className="flex flex-col items-center">
              <div className="w-[70px] h-[70px] flex items-center justify-center bg-gradient-to-b from-[#87CFFF]/80 to-[#1A8BD6]/80 text-white font-bold rounded-full text-[36px] z-10">
                1
              </div>
              <div className="w-[2px] h-[103px] bg-black mt-8"></div>
            </div>
            <div className="ml-4">
              <h3 className="md:text-[36px] text-[26px] text-black font-semibold mb-4">
                Create Your Profile
              </h3>
              <p className="md:text-[20px] text-[16px] text-black font-normal text-wrap w-3/4">
                Sign up and fill in your medical history securely. Setting up
                your profile this way would ensure that you stay up-to-date with
                your medical processes.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start relative mb-8">
            <div className="flex flex-col items-center">
              <div className="w-[70px] h-[70px] flex items-center justify-center bg-gradient-to-b from-[#87CFFF]/80 to-[#1A8BD6]/80 text-white font-bold rounded-full text-[36px] z-10">
                2
              </div>
              <div className="w-[2px] h-[103px] bg-black mt-8"></div>
            </div>
            <div className="ml-4">
              <h3 className="md:text-[36px] text-[26px] text-black font-semibold mb-4">
                Choose Your Service
              </h3>
              <p className="md:text-[20px] text-[16px] text-black font-normal w-3/4">
                Select from our range of services and book a consultation.
                Booking a consultation with Novo Health is fairly simple and
                straightforward.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start">
            <div className="w-[70px] h-[70px] flex items-center justify-center bg-gradient-to-b from-[#87CFFF]/80 to-[#1A8BD6]/80 text-[36px] text-white font-bold rounded-full mr-4">
              3
            </div>
            <div>
              <h3 className="md:text-[36px] text-[26px] text-black font-semibold mb-2">
                Meet Your Doctor
              </h3>
              <p className="md:text-[20px] text-[16px] text-black font-normal w-3/4">
                Have a virtual consultation with one of our certified
                specialists.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center relative w-full ">
          <Image
            src="/images/howWork.png"
            alt="How it works"
            width={627}
            height={591}
            className="rounded-lg z-10"
          />
          <div className=" absolute md:w-[440px] w-[330px] h-[405px] bg-gradient-to-b from-[#87CFFF]/40 to-[#F1F9FF] -z-0 bottom-0  border-1 border-[#87CFFF] rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
