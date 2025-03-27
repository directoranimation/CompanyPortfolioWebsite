"use client";

import { useState } from "react";
import Image from "next/image";
import WorldSvgMap from "@/assets/WorldSvgMap.png";
import FlagPAK from "@/assets/Flags.png";
import { IoIosCloseCircle } from "react-icons/io";

export default function OurLocations() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 1,
      name: "Lahore, PAK",
      address: "D-34 Innovista Ravi, DHA Business Hub, DHA Phase-8",
      coordinates: { top: "45%", left: "70%" },
      img: FlagPAK,
    },
    {
      id: 2,
      name: "New York, USA",
      address: "123 Madison Ave, Manhattan, NY 10016",
      coordinates: { top: "35%", left: "25%" },
      img: FlagPAK,
    },
    {
      id: 3,
      name: "Sydney, AUS",
      address: "45 George Street, Sydney, NSW 2000",
      coordinates: { top: "75%", left: "90%" },
      img: FlagPAK,
    },
  ];

  return (
    <section className="w-full h-full py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-gray-800">Our Locations</h2>
      <p className="text-gray-500 mt-2">Say hello to our friendly team at one of these locations.</p>

      <div className="relative w-[90%] md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-7xl mx-auto mt-8 bg-contain bg-no-repeat bg-center rounded-lg"
           style={{ backgroundImage: `url(${WorldSvgMap.src})`, height: "50vh" }}>
        {locations.map((location) => (
          <span key={location.id}
                className="absolute flex size-2 cursor-pointer"
                style={{ top: location.coordinates.top, left: location.coordinates.left }}
                onClick={() => setSelectedLocation(location)}>
            <span className="absolute h-3 w-3 animate-ping rounded-full bg-purple-400"></span>
            <span className="relative inline-flex size-2 rounded-full bg-purple-500"></span>
          </span>
        ))}

        {selectedLocation && (
          <div className="font-['SatoshiVariable'] absolute flex flex-col items-center justify-center bg-white shadow-lg p-4 rounded-lg text-center w-44 "
               style={{
                 top: `calc(${selectedLocation.coordinates.top} - 50px)`,
                 left: `calc(${selectedLocation.coordinates.left} + 20px)`,
               }}>
            <button className="absolute right-2 top-2 text-red-400" onClick={() => setSelectedLocation(null)}>
              <IoIosCloseCircle className="w-5 h-5" />
            </button>
            <Image className="w-7 h-7" src={selectedLocation.img} alt="Flag" />
            <strong className="text-[#0A6A30] block">{selectedLocation.name}</strong>
            <p className="text-sm">{selectedLocation.address}</p>
          </div>
        )}
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[90%] md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-7xl mx-auto text-gray-800">
        <div className="text-center bg-white p-4 rounded-lg md:bg-transparent md:p-0 md:rounded-none">
          <h3 className="font-semibold">Operations/HR</h3>
          <p className="text-sm text-gray-600">Our friendly team is here to help.</p>
          <a href="mailto:jahanzaib@devtechfusion.com" className="text-blue-500 text-sm">jahanzaib@devtechfusion.com</a>
        </div>
        <div className="text-center bg-white p-4 rounded-lg md:bg-transparent md:p-0 md:rounded-none">
          <h3 className="font-semibold">Business Development</h3>
          <p className="text-sm text-gray-600">Questions or queries? Get in touch!</p>
          <a href="mailto:sales@devtechfusion.com" className="text-blue-500 text-sm">sales@devtechfusion.com</a>
        </div>
        <div className="text-center bg-white p-4 rounded-lg md:bg-transparent md:p-0 md:rounded-none">
          <h3 className="font-semibold">Technology</h3>
          <p className="text-sm text-gray-600">Questions or queries? Get in touch!</p>
          <a href="mailto:ahmad@devtechfusion.com" className="text-blue-500 text-sm">ahmad@devtechfusion.com</a>
        </div>
      </div>
    </section>
  );
}
