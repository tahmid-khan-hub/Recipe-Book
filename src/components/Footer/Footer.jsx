import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" max-w-[1393px] mx-auto bg-gradient-to-r from-green-700 to-green-800 text-white py-8 px-4">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Website Name */}
        <div className="text-xl font-semibold"><span className="text-3xl text-orange-600 font-bold">R</span>ecipeBook</div>

        {/* Contact Info */}
        <div className="text-center md:text-left text-sm ">
          <p className="-ml-2 md:-ml-5">Contact: RecipeBook@gmail.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-blue-500 transition" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-sky-400 transition" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-400 ml-0 md:-ml-9">
        &copy; {new Date().getFullYear()} RecipeBook. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
