import React from "react";
import Image from "next/image";

const HowWorks = () => {
  return (
    <div className="bg-white py-12 px-6 lg:px-20 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">
        How <span className="text-[#199DF6]">our platform</span> works
      </h2>
      <p className="text-center text-gray-600 mb-12 ">
        Navigating your healthcare journey with Novo Health is seamless. Just
        follow these steps mentioned below to <br></br> proceed with your
        selected services. You can also see our FAQ section for more guidance.
      </p>
      <div className="grid lg:grid-cols-2 gap-4 items-center">
        <div>
          {/* Step 1 */}
          <div className="flex items-start relative mb-8">
            <div className="md:w-[141px] w-[284px] h-[70px] flex items-center justify-center bg-gradient-to-b from-[#87CFFF]/80 to-[#1A8BD6]/80 text-white font-bold rounded-full text-[36px] mr-4 z-10">
              1
            </div>
            <div>
              <h3 className="md:text-[36px] text-[26px] text-black font-semibold mb-4">
                Create Your Profile
              </h3>
              <p className="text-[20px] text-black font-normal text-wrap">
                Sign up and fill in your medical history securely. Setting up
                your profile this way would ensure that you stay up-to-date with
                your medical processes.
              </p>
            </div>
            {/* Vertical line */}
            <div className="absolute left-[33px] top-[75px] h-[103px] w-[2px] bg-black"></div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start relative mb-8">
            <div className="md:w-[141px] w-[284px] h-[70px] flex items-center justify-center bg-gradient-to-b from-[#87CFFF]/80 to-[#1A8BD6]/80 text-white font-bold rounded-full text-[36px] mr-4 z-10">
              2
            </div>
            <div>
              <h3 className="md:text-[36px] text-[26px] text-black font-semibold mb-4">
                Choose Your Service
              </h3>
              <p className="text-[20px] text-black font-normal">
                Select from our range of services and book a consultation.
                Booking a consultation with Novo Health is fairly simple and
                straightforward.
              </p>
            </div>
            {/* Vertical line */}
            <div className="absolute left-[33px] top-[75px] h-[103px] w-[2px] bg-black"></div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start">
            <div className="md:w-[70px] w-[100px]  h-[70px] flex items-center justify-center bg-gradient-to-b from-[#87CFFF]/80 to-[#1A8BD6]/80 text-[36px] text-white font-bold rounded-full mr-4">
              3
            </div>
            <div>
              <h3 className="md:text-[36px] text-[26px] text-black font-semibold mb-2">
                Meet Your Doctor
              </h3>
              <p className="text-[20px] text-black font-normal">
                Have a virtual consultation with one of our certified
                specialists.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center relative">
          <Image
            src="/images/howWork.png"
            alt="How it works"
            width={627}
            height={591}
            className="rounded-lg z-10"
          />
          <div className=" absolute w-[440px] h-[405px] bg-gradient-to-b from-[#87CFFF]/40 to-[#F1F9FF] -z-0 bottom-0 right-8 border-1 border-[#87CFFF] rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
