import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="bg-white py-12 px-6 lg:px-20 container mx-auto ">
      <div className="bg-gradient-to-r from-[#F1F9FF] to-white rounded-lg shadow-md shadow-[#199DF6] border-[1px] border-[#199DF6] p-8 ">
        <h2 className="text-[40px] font-sans font-bold text-[#199DF6] mb-4 text-center">
          Our Mission
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="flex-shrink-0 bg-[#CCEBFF] rounded-2xl shadow-md shadow-[#CCEBFF] ">
            <Image
              src="/images/mission.png"
              alt="Our Mission Team"
              width={450}
              height={377}
              className="rounded-lg"
            />
          </div>
          {/* Text Section */}
          <div>
            <p className="text-black  text-[20px] font-normal font-sans mb-4">
              Novo Health's belief in accessible, quality healthcare, combining
              expert professionals with innovative technology to make health
              management seamless and convenient.
            </p>
            <p className="text-black  text-[20px] font-normal font-sans mb-4">
              Emphasize Novo Health's approach to personalized care through
              continuous health monitoring, virtual consultations, and 24/7
              access to resources.
            </p>
            <p className="text-black  text-[20px] font-normal font-sans mb-4">
              Highlight the community-focused aspect of Novo Health, aiming for
              wellness, prevention, and support across various healthcare needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
