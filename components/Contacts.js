import React from "react";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaPhone,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";
const Contacts = () => {
  return (
    <div className="bg-white py-12 px-6 lg:px-20 container mx-auto">
      <h2 className="text-2xl font-bold text-black mb-2">GET IN TOUCH</h2>
      <p className="text-gray-600 mb-8">
        24/7 We will answer your questions and problems
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-lg p-3 w-full pl-10 focus:outline-none focus:ring-2 focus:ring-[#199DF6]"
              />
              <span className="absolute left-3 top-3 text-black text-xl">
                <FaUser />
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-lg p-3 w-full pl-10 focus:outline-none focus:ring-2 focus:ring-[#199DF6]"
              />
              <span className="absolute left-3 top-3 text-black text-xl">
                <FaUser />
              </span>
            </div>
          </div>
          <div className="relative mb-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg p-3 w-full pl-10 focus:outline-none focus:ring-2 focus:ring-[#199DF6]"
            />
            <span className="absolute left-3 top-3 text-black text-xl">
              <FaEnvelope />
            </span>
          </div>
          <div className="relative mb-4">
            <input
              type="tel"
              placeholder="Phone"
              className="border border-gray-300 rounded-lg p-3 w-full pl-10 focus:outline-none focus:ring-2 focus:ring-[#199DF6]"
            />
            <span className="absolute left-3 top-3 text-black text-xl">
              <FaPhone />
            </span>
          </div>
          <textarea
            placeholder="Describe Issues"
            rows="4"
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#199DF6]"
          ></textarea>
          <button className="bg-[#199DF6] text-white px-6 py-3 rounded-lg flex items-center gap-2">
            Send Message <span className="text-lg">➤</span>
          </button>
          <div className="flex items-center gap-4 mt-4">
            <hr className="flex-grow border-[#199DF6]" />
            <div className="flex gap-2">
              <a href="#" className="text-[#199DF6] text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#199DF6] text-xl">
                <GrSend />
              </a>
              <a href="#" className="text-[#199DF6] text-xl">
                <FaFacebookSquare />
              </a>
              <a href="#" className="text-[#199DF6] text-xl">
                <FaSquareInstagram />
              </a>
            </div>
            <hr className="flex-grow border-[#199DF6]" />
          </div>
        </div>
        {/* Map Section */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?..."
            title="Google Maps Location"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
