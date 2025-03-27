import "../app/globals.css";
import Logo from "@/assets/DTF-Logo.png";
import Image from "next/image";
import { FaFacebookF, FaGithub, FaDribbble, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="font-['SatoshiVariable'] flex flex-col items-center justify-center bg-white pt-16 pb-12 px-6">
      <div className="w-full md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-7xl mx-auto grid grid-cols-1 gap-8 items-center">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col items-left">
            <div className="flex items-center">
              <Image
                className="w-32 sm:w-40 md:w-48"
                src={Logo}
                alt="DevTech Fusion"
                objectFit="cover"
              />
            </div>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Design amazing digital experiences that create more happy in the world.
            </p>
          </div>

          <nav className="flex flex-wrap justify-start sm:justify-center md:justify-start gap-4 sm:gap-6 text-sm md:text-base text-gray-800 font-medium">
            <a href="#" className="hover:text-purple-700">About Us</a>
            <a href="#" className="hover:text-purple-700">Services</a>
            <a href="#" className="hover:text-purple-700">Why Us</a>
            <a href="#" className="hover:text-purple-700">Projects</a>
            <a href="#" className="hover:text-purple-700">Testimonials</a>
            <a href="#" className="hover:text-purple-700">Team</a>
            <a href="#" className="hover:text-purple-700">Contact</a>
          </nav>
        </div>
      </div>

      <div className="w-full md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-7xl flex flex-col md:flex-row items-center justify-between pt-10 border-t-[1px] border-gray-200 text-gray-500 text-sm mt-8 px-2">
        <span className="text-center md:text-left">© 2025 DTF. All rights reserved.</span>
        <div className="flex justify-center space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-700 hover:text-purple-700 text-xl"><FaXTwitter /></a>
          <a href="#" className="text-gray-700 hover:text-purple-700 text-xl"><FaLinkedinIn /></a>
          <a href="#" className="text-gray-700 hover:text-purple-700 text-xl"><FaFacebookF /></a>
          <a href="#" className="text-gray-700 hover:text-purple-700 text-xl"><FaGithub /></a>
          <a href="#" className="text-gray-700 hover:text-purple-700 text-xl"><FaDribbble /></a>
        </div>
      </div>
    </footer>
  );
}
