import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Blog = () => {
  return (
    <div className="bg-white py-12 px-6 lg:px-20 container mx-auto">
      {/* Header Section */}
      <div className="bg-[url('/images/bimage1.jpeg')] bg-cover bg-center bg-no-repeat rounded-lg shadow-md p-8 mb-12 h-[556px] flex items-center ">
        <div className="px-6">
          <h1 className="text-[48px] font-semibold text-black mb-8">
            Healthcare Insights
          </h1>
          <p className="text-[26px] font-sans font-normal text-black">
            Stay informed with the latest health <br></br> advice, wellness
            tips, and medical news.
          </p>
        </div>
      </div>

      {/* Recent Posts Section */}
      <h2 className="text-2xl font-bold text-[#199DF6] mb-8">Recent Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog Post 1 */}
        <div className="bg-gradient-to-r from-[#F1F9FF] to-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-black mb-4">
            Understanding Chronic Diseases: Prevention, Management, and
            Lifestyle Tips
          </h3>
          <Image
            src="/images/bimg2.png"
            alt="Blog Post 1"
            width={394}
            height={235}
            className="rounded-lg mb-4 h-[235px]"
          />

          <p className="text-black text-[16px] font-bold font-sans mb-4">
            -Henry
          </p>
          <p className="text-black text-[16px] font-semibold font-sans mb-4">
            Introduction
          </p>
          <p className="text-black text-[13px] font-normal font-sans mb-4">
            Chronic diseases, such as heart disease, diabetes, and respiratory
            conditions, are among the leading causes of death worldwide. This
            article explores their causes, prevention, and management.
          </p>
          <button className="bg-gradient-to-b from-[#199DF6] to-[#87CFFF] text-white px-4 py-2 rounded-lg flex items-center gap-2">
            Read More
            <MdOutlineKeyboardArrowRight className="text-xl" />
          </button>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-gradient-to-r from-[#F1F9FF] to-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-black mb-4">
            The Power of Nutrition: Fueling Your Body for Health and Vitality
          </h3>
          <Image
            src="/images/bimg3.jpeg"
            alt="Blog Post 2"
            width={394}
            height={235}
            className="rounded-lg mb-4 h-[235px]"
          />

          <p className="text-black text-[16px] font-bold font-sans mb-4">
            -Jack
          </p>
          <p className="text-black text-[16px] font-semibold font-sans mb-4">
            Introduction
          </p>
          <p className="text-black text-[13px] font-normal font-sans mb-4">
            Nutrition is the foundation of a healthy life. This article explores
            the importance of balanced meals and offers practical tips for
            making healthier choices every day.
          </p>
          <button className="bg-gradient-to-b from-[#199DF6] to-[#87CFFF] text-white px-4 py-2 rounded-lg flex items-center gap-2">
            Read More
            <MdOutlineKeyboardArrowRight className="text-xl" />
          </button>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-gradient-to-r from-[#F1F9FF] to-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-black mb-4">
            The Benefits of Regular Exercise: A Path to Physical and Mental
            Well-Being
          </h3>
          <Image
            src="/images/bimg4.jpeg"
            alt="Blog Post 3"
            width={394}
            height={235}
            className="rounded-lg mb-4 h-[235px]"
          />

          <p className="text-black text-[16px] font-bold font-sans mb-4">
            -Liana
          </p>
          <p className="text-black text-[16px] font-semibold font-sans mb-4">
            Introduction
          </p>
          <p className="text-black text-[13px] font-normal font-sans mb-4">
            Exercise is one of the most powerful tools we have to improve our
            health. This article highlights the benefits of regular physical
            activity and offers tips to make it a part of your life.
          </p>
          <button className="bg-gradient-to-b from-[#199DF6] to-[#87CFFF] text-white px-4 py-2 rounded-lg flex items-center gap-2">
            Read More
            <MdOutlineKeyboardArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
