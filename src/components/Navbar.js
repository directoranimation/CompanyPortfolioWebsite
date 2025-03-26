// // import Link from 'next/link';
// // import Image from 'next/image';
// // import logo from '../assets/DTF-Logo.png';
// // import Nav from './Nav';

// // const Navbar = () => {
// //   return (
// //     <header className="w-full bg-transparent top-0">
// //         <div className="flex items-center relative ml-[5%]">
// //           <Link href="/">
// //             <Image src={logo} alt="logo" width={260}  />
// //           </Link>
// //           <Nav/>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { IoMenu, IoClose } from "react-icons/io5"; // ✅ Import menu icons
// import logo from '../assets/DTF-Logo.png'; // Adjust the path if needed

// import Nav from "./Nav";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="w-full bg-white md:bg-transparent top-0 fixed z-50">
//       <div className="flex items-center justify-between px-6 md:px-10 py-4">
//         <Link href="/">
//           <Image src={logo} alt="logo"  height={100}  />
//         </Link>

//         <div className="hidden md:flex">
//           <Nav />
//         </div>

//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-gray-700 p-1 z-50 focus:outline-none"
//         >
//           {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
//         </button>
//       </div>

//       {/* Mobile Nav (Slide-in effect) */}
//       <div
//         className={`absolute top-0 left-0 w-full  bg-white shadow-md md:hidden transition-transform ${
//           isOpen ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <Nav mobileClose={() => setIsOpen(false)} />
//       </div>
//     </header>
//   );
// };

// export default Navbar;


"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/DTF-Logo.png";
import Nav from "./Nav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#ffffff10] backdrop-blur-xs top-0 fixed z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-2">
        <Link href="/">
          <Image src={logo} alt="logo" width={200} priority />
        </Link>

        <div className="hidden md:flex">
          <Nav />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 z-50 p-2 focus:outline-none"
        >
          {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
      </div>

      {/* Mobile Nav (Slide-in effect) */}
      <div
        className={`absolute top-0 left-0 w-full bg-white shadow-lg md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Nav mobileClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
};

export default Navbar;