import React from "react";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
const Team = () => {
  return (
    <div className="bg-white py-12 px-6 lg:px-20 container mx-auto">
      <h2 className="text-center text-[#199DF6] text-2xl font-bold mb-4">
        Meet Our Team of Specialists
      </h2>
      <p className="text-center text-[#7A7A7A] text-[24px] font-sans mb-12 w-3/4 mx-auto">
        Our team of specialists is at the forefront of medical innovation. Each
        specialist brings a unique brand of expertise, empathy, and experience
        to ensure that your health is in the best hands.
      </p>
      <div className="space-y-25 pt-10">
        {/* Specialist 1 */}
        <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-[#F1F9FF] to-[#D6EDFF]  shadow-md  relative ">
          <div className="relative w-[350px]">
            <Image
              src={"/images/doctor1.png"}
              alt="Dr. Mark Lee"
              width={350}
              height={525}
              className="absolute bottom-[-220px] mb-4 lg:mb-0 lg:mr-6"
            />
          </div>

          <div className="flex-1 h-[437px] flex items-center justify-center p-12">
            <div>
              <h3 className="text-[32px] font-semibold font-sans text-black mb-2">
                Dr. Mark Lee (Dermatologist)
              </h3>
              <p className="text-black font-normal font-sans text-[24px] mb-4 mr-12">
                Dr. Lee is a visionary in dermatology advancing treatments for
                skin health with a gentle approach. His dedication to clinical
                excellence and patient education has made him a leader in
                dermatological care.
              </p>
              <button className="bg-white text-[#0579C6] px-4 py-2 rounded-lg flex items-center gap-2">
                Book Appointment
                <span className="text-lg text-[#0579C6]">
                  <BsFillTelephoneFill />
                </span>
              </button>
            </div>
          </div>
          <div className="absolute top-[-100px] right-[-100px] md:block hidden">
            <Image
              src="/images/insurance.png"
              alt="Shield Icon"
              width={200}
              height={200}
              className="h-[200px] w-[200px] "
            />
          </div>
        </div>
        {/* Specialist 2 */}
        <div className="flex flex-col h-[437px] lg:flex-row items-center bg-gradient-to-r from-[#F1F9FF] to-[#D6EDFF]  shadow-md  relative ">
          <div className="relative w-[350px]">
            <Image
              src={"/images/doctor2.png"}
              alt="Dr. Mark Lee"
              width={350}
              height={525}
              className="absolute bottom-[-220px] mb-4 lg:mb-0 lg:mr-6 h-[525px] w-[350px]"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-[32px] font-semibold font-sans text-black mb-2">
              Dr. Sarah Johnson (Cardiologist)
            </h3>
            <p className="text-black font-normal font-sans text-[24px] mb-4 mr-12">
              Dr. Johnson is a visionary in cardiology advancing treatments for
              heart health with a gentle approach. Her dedication to clinical
              excellence and patient education has made her a leader in
              cardiological care.
            </p>
            <button className="bg-white text-[#0579C6] px-4 py-2 rounded-lg flex items-center gap-2">
              Book Appointment
              <span className="text-lg text-[#0579C6]">
                <BsFillTelephoneFill />
              </span>
            </button>
          </div>
          <div className="absolute bottom-[-100px] right-[-70px] md:block hidden">
            <Image
              src="/images/siringe.png"
              alt="Syringe Icon"
              width={200}
              height={200}
              className="h-[200px] w-[200px] rotate-180"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
