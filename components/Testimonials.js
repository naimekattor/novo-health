import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="bg-white py-12 px-6 lg:px-20 container mx-auto">
      <h2 className="text-center text-[#199DF6] text-[40px] font-sans font-bold mb-2">
        Patient Testimonials
      </h2>
      <h3 className="text-center text-black text-[45px] font-semibold mb-8">
        Hear From Those We’ve Cared For
      </h3>
      <div className="space-y-6">
        {/* Testimonial 1 */}
        <div className="flex items-center bg-gradient-to-r from-[#F1F9FF] to-[#F1F9FF]/70 border-[1px] border-[#199DF6] rounded-2xl shadow-md p-6">
          <Image
            src="/images/person1.jpeg"
            alt="Patient 1"
            width={120}
            height={120}
            className="rounded mr-4 h-[120px]"
          />
          <div>
            <p className="text-black text-[24px] font-normal mb-2">
              “After my knee surgery, the convenience of online consultations
              made my recovery smoother than I could have imagined.”
            </p>
            <p className="text-black font-bold">-Linda A.</p>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="flex items-center bg-gradient-to-r from-[#F1F9FF] to-[#F1F9FF]/70 border-[1px] border-[#199DF6] rounded-2xl shadow-md p-6">
          <Image
            src="/images/person2.jpeg"
            alt="Patient 2"
            width={120}
            height={120}
            className="rounded mr-4 h-[120px]"
          />
          <div>
            <p className="text-black text-[24px] font-normal mb-2">
              “Managing chronic conditions like diabetes requires a lot of
              vigilance, but the medicine refill system has simplified my life.”
            </p>
            <p className="text-black font-bold">-Henry B.</p>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="flex items-center bg-gradient-to-r  from-[#F1F9FF] to-[#F1F9FF]/70 border-[1px] border-[#199DF6] rounded-2xl shadow-md p-6">
          <Image
            src="/images/person3.jpeg"
            alt="Patient 3"
            width={120}
            height={120}
            className="rounded mr-4 h-[120px]"
          />
          <div className="relative">
            <p className="text-black text-[24px] font-normal mb-2">
              “Finding a doctor who really understands all of my health needs
              has never been easier. This platform has changed my life.”
            </p>
            <p className="text-black font-bold">-Joshua T.</p>
            <div className=" absolute right-[-150px] top-[-90px] rotate-45 md:block hidden">
              <Image
                src={"/images/stethoscope.png"}
                width={220}
                height={254}
                alt="stethoscope"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
