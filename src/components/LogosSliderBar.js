// "use client"; // Ensure this runs on the client side

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import Logos from "./Logos";

// const LogoSlider = () => {
//     console.log(Logos.length);
    
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//         setIndex((prevIndex) => (prevIndex + 1) % Logos.length);
//     }, 5000); 

//     return () => clearInterval(interval);
//   }, []);

//   const visibleLogos = [
//     ...Logos.slice(index, index + 6), 
//     ...Logos.slice(0, Math.max(0, 6 - (Logos.length - index))),
//   ];


//   return (
//     <div className="w-[90%] md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:2/3 my-5 overflow-hidden flex justify-center z-40 items-center h-20">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 1, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, type: "spring", stiffness: 50, ease: "easeInOut"  }}
//           className="flex space-x-4 bg-transparent shadow-none"
//         >
//           {visibleLogos.map((logo, i) => (
//             <div key={i} className="p-1 md:px-1 md:py-0 lg:px-2 lg:py-1 xl:px-5 z-50 rounded-2xl bg-white">
//               <Image className="w-auto h-10 2xl:h-9 object-contain" src={logo} alt={`logo-${i}`} />
//             </div>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default LogoSlider;

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Logos from "./Logos";

const LogoSlider = () => {
  console.log(Logos.length);

  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(6);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(3); // Show 3 logos on mobile
      } else {
        setItemsToShow(6); // Show 6 logos on larger screens
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Logos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleLogos = [
    ...Logos.slice(index, index + itemsToShow),
    ...Logos.slice(0, Math.max(0, itemsToShow - (Logos.length - index))),
  ];

  return (
    <div className="w-[90%] md:w-5/6 lg:w-4xl xl:w-5xl 2xl:7xl my-5 overflow-hidden flex justify-center z-40 items-center h-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 1, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 50, ease: "easeInOut" }}
          className="flex space-x-4 bg-transparent shadow-none"
        >
          {visibleLogos.map((logo, i) => (
            <div key={i} className="md:px-1 md:py-0 lg:px-2 lg:py-1 xl:px-5 z-50 rounded-lg md:rounded-2xl bg-white">
              <Image className="w-auto h-10 2xl:h-9 object-contain" src={logo} alt={`logo-${i}`} />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LogoSlider;

