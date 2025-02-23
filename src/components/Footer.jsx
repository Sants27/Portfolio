import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#190b1f] text-gray-400 py-10">
      {/* Garis Pembatas Footer */}
      <div className="border-t border-gray-600 mb-8"></div>

      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-16 text-base">
        {/* Logo & Social Media */}
        <div>
            <h3 className="text-white font-bold mb-4">Social Media</h3>
            <div className="flex gap-4 text-3xl">
                <a href="#" className="hover:text-white transition duration-300"><FaFacebook /></a>
                <a href="#" className="hover:text-white transition duration-300"><FaInstagram /></a>
                <a href="#" className="hover:text-white transition duration-300"><FaLinkedin /></a>
                <a href="#" className="hover:text-white transition duration-300"><FaGithub /></a>
            </div>
        </div>

        {/* Navigation */}
        <div className="text-center md:text-left mt-6 md:mt-0">
            <h3 className="text-orange-400 font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-base">
                <li><a href="#" className="hover:text-white transition duration-300">About Me</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Skill</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Project</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Contact Me</a></li>
            </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left mt-6 md:mt-0">
            <h3 className="text-orange-400 font-semibold mb-3">Contact</h3>
            <p className="text-base">+62-853-2003-6737</p>
            <p className="text-base">ignatius.varrel@gmail.com</p>
        </div>
      </div>
      
      {/* Bottom Line & Terms */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
        <p>Copyright © 2025 Ignatius Varrel Santoso. All Rights Reserved.</p>
        <div className="mt-2">
            <a href="#" className="hover:text-white transition duration-300">User Terms & Conditions</a> | 
            <a href="#" className="hover:text-white transition duration-300"> Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
