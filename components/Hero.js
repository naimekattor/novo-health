import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 font-sans">
        <div className="grid container px-4 py-8 mx-auto lg:gap-4 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 ">
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-wide leading-none md:text-[40px] xl:text-6xl dark:text-white font sm:text-center">
              <span className="text-[#199DF6] ">Your reliable support</span> for
              all digital health needs
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Where healthcare meets innovation for a healthier tomorrow.
              Personalized, seamless solutions for every step of the journey.
              Count on us as your ally in digital wellness.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white bg-[#199df6] rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Get started
              <MdOutlineKeyboardArrowRight className="text-xl" />
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center items-center ">
            <div className="relative">
              <Image
                src={"/images/hero.png"}
                alt="hero"
                width={575}
                height={575}
                className="h-[575px] w-[575px] object-cover rounded-full border-[20px] border-[#CCEBFF]"
              />
              <div className="absolute bottom-[150px] left-[-100px] p-4 rounded-lg bg-gradient-to-b from-[#F1F9FF]/60 to-white/60 w-[246px] h-[108px] flex flex-col items-center justify-center shadow-lg shadow-[#CCEBFF]">
                <h1 className="font-bold text-4xl text-black">20k +</h1>
                <p className="text-xl font-semibold">Happy Patients</p>
              </div>
              <div className="absolute top-4 left-[-110px] p-4 rounded-lg bg-gradient-to-b from-[#F1F9FF]/60 to-white/60 w-[246px] h-[108px] flex flex-col items-center justify-center shadow-lg shadow-[#CCEBFF]">
                <h1 className="font-bold text-4xl text-black">20k +</h1>
                <p className="text-xl font-semibold">Happy Patients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
