import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 lg:px-20 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-[#199DF6] rounded-full flex items-center justify-center text-white font-bold text-xl">
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={80}
                height={80}
              />
            </div>
            <h2 className="text-2xl font-bold text-[#199DF6] ml-2">
              Novo Health
            </h2>
          </div>
          <p className="text-gray-600">
            Join us in redefining the future of online healthcare.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-black mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-[#199DF6]">
                Doctors
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#199DF6]">
                Diagnostics
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#199DF6]">
                Emergency
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#199DF6]">
                Hospitality
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#199DF6]">
                Caregiver
              </a>
            </li>
          </ul>
        </div>

        {/* Healthcare Links */}
        <div>
          <h3 className="text-lg font-bold text-black mb-4">Healthcare</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-[#199DF6]">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#199DF6]">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#199DF6]">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#199DF6]">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#199DF6]">
                Our services
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-black mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-gray-600 flex items-center">
              <span className="text-black mr-2">
                <FaPhone />
              </span>
              +880178247476
            </li>
            <li className="text-gray-600 flex items-center">
              <span className="text-black mr-2">
                <FaEnvelope />
              </span>
              novohealth21@gmail.com
            </li>
            <li className="text-gray-600 flex items-center">
              <span className="text-black mr-2">
                <FaMapMarkerAlt />
              </span>
              Block-A, Dhanmondi, Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media and Policies */}
      <div className="mt-8  pt-4 flex flex-col md:flex-row items-center justify-between">
        <hr className="flex-grow border-[#199DF6]" />
        <div className="flex items-center gap-4 mx-4">
          <a href="#" className="text-[#199DF6] text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-[#199DF6] text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-[#199DF6] text-xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-[#199DF6] text-xl">
            <FaGoogle />
          </a>
        </div>
        <hr className="flex-grow border-[#199DF6]" />
      </div>
      <div className="flex items-center gap-4 mt-4 md:mt-0 justify-end">
        <a href="#" className="text-gray-600 hover:text-[#199DF6]">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-600 hover:text-[#199DF6]">
          Terms of Service
        </a>
        <a
          href="/privacy-policy"
          className="text-gray-600 hover:text-[#199DF6]"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
