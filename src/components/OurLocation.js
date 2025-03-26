// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import WorldSvgMap from "@/assets/WorldSvgMap.png";
// import FlagPAK from "@/assets/Flags.png";
// import { IoIosCloseCircle } from "react-icons/io";

// export default function OurLocations() {
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   const locations = [
//     {
//       id: 1,
//       name: "Lahore, PAK",
//       address: "D-34 Innovista Ravi, DHA Business Hub, DHA Phase-8",
//       coordinates: { top: "45%", left: "70%" },
//       img: FlagPAK,
//     },
//     {
//       id: 2,
//       name: "New York, USA",
//       address: "123 Madison Ave, Manhattan, NY 10016",
//       coordinates: { top: "35%", left: "25%" },
//       img: FlagPAK,
//     },
//     {
//       id: 3,
//       name: "Sydney, AUS",
//       address: "45 George Street, Sydney, NSW 2000",
//       coordinates: { top: "75%", left: "90%" },
//       img: FlagPAK,
//     },
//   ];

//   return (
//     <section className="w-full h-[80vh] py-16 px-6 rounded-xl text-center">
//       <h2 className="text-3xl font-bold text-gray-800">Our Locations</h2>
//       <p className="text-gray-500 mt-2">
//         Say hello to our friendly team at one of these locations.
//       </p>

//       <div className="relative w-full h-[50vh] z-40 max-w-4xl mx-auto p-10 mt-8 bg-[url('../assets/WorldSvgMap.png')] bg-contain bg-no-repeat bg-center rounded-lg">
//         {/* <Image className="w-full h-auto" src={WorldSvgMap} alt="World Map" objectFit="cover" /> */}
//         {locations.map((location) => (
//           <span className="relative z-40 flex size-2" key={location.id} style={{ top: location.coordinates.top, left: location.coordinates.left }} onClick={() => setSelectedLocation(location)}> 
//             <span class="absolute z-40 h-3 w-3 animate-ping rounded-full bg-purple-400 "></span>
//             <span class="relative z-40 inline-flex size-2 rounded-full bg-purple-500"></span>
//           </span>
//         ))}

//         {/* Location Tooltip */}
//         {selectedLocation && (
//           <div
//             className="absolute flex flex-col items-center justify-center bg-white shadow-lg p-4 rounded-lg text-center text-gray-700 w-44"
//             style={{
//               top: `calc(${selectedLocation.coordinates.top} - 50px)`,
//               left: `calc(${selectedLocation.coordinates.left} + 20px)`,
//             }}
//           >
//             <button
//               className="absolute right-2 top-2 text-red-400 mt-2 text-xs underline"
//               onClick={() => setSelectedLocation(null)}
//             >
//               <IoIosCloseCircle className="w-5 h-5" />
//             </button>
//             <Image
//               className="w-7 h-7"
//               src={selectedLocation.img}
//               alt="FlagPAK"
//               objectFit="cover"
//             />
//             <strong className="text-[#0A6A30]">{selectedLocation.name}</strong>
//             <p className="text-sm">{selectedLocation.address}</p>
//           </div>
//         )}
//       </div>

//       {/* Contact Info */}
//       <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-gray-800">
//         <div>
//           <h3 className="font-semibold">Operations/HR</h3>
//           <p className="text-sm text-gray-600">
//             Our friendly team is here to help.
//           </p>
//           <a
//             href="mailto:jahanzaib@devtechfusion.com"
//             className="text-blue-500 text-sm"
//           >
//             jahanzaib@devtechfusion.com
//           </a>
//         </div>
//         <div>
//           <h3 className="font-semibold">Business Development</h3>
//           <p className="text-sm text-gray-600">
//             Questions or queries? Get in touch!
//           </p>
//           <a
//             href="mailto:sales@devtechfusion.com"
//             className="text-blue-500 text-sm"
//           >
//             sales@devtechfusion.com
//           </a>
//         </div>
//         <div>
//           <h3 className="font-semibold">Technology</h3>
//           <p className="text-sm text-gray-600">
//             Questions or queries? Get in touch!
//           </p>
//           <a
//             href="mailto:ahmad@devtechfusion.com"
//             className="text-blue-500 text-sm"
//           >
//             ahmad@devtechfusion.com
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


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
    <section className="w-full min-h-screen py-16 px-6 text-center">
      <h2 className="text-3xl md:text-3xl 2xl:text-4xl font-bold text-gray-800">Our Locations</h2>
      <p className="text-gray-500 mt-2">Say hello to our friendly team at one of these locations.</p>

      <div className="relative w-full md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-2/3 mx-auto mt-8 bg-contain bg-no-repeat bg-center rounded-lg"
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
          <div className="absolute flex flex-col items-center justify-center bg-white shadow-lg p-4 rounded-lg text-center w-44 "
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

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-4xl md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-2/3 mx-auto text-gray-800">
        <div>
          <h3 className="font-semibold">Operations/HR</h3>
          <p className="text-sm text-gray-600">Our friendly team is here to help.</p>
          <a href="mailto:jahanzaib@devtechfusion.com" className="text-blue-500 text-sm">jahanzaib@devtechfusion.com</a>
        </div>
        <div>
          <h3 className="font-semibold">Business Development</h3>
          <p className="text-sm text-gray-600">Questions or queries? Get in touch!</p>
          <a href="mailto:sales@devtechfusion.com" className="text-blue-500 text-sm">sales@devtechfusion.com</a>
        </div>
        <div>
          <h3 className="font-semibold">Technology</h3>
          <p className="text-sm text-gray-600">Questions or queries? Get in touch!</p>
          <a href="mailto:ahmad@devtechfusion.com" className="text-blue-500 text-sm">ahmad@devtechfusion.com</a>
        </div>
      </div>
    </section>
  );
}
