// "use client";

// import Image from "next/image";
// import EllipseTilt from "@/assets/EllipseTilt.png";
// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// export default function MilestoneSection() {

//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);


//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.5 } // Trigger when 50% of the section is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);
//   return (
//     <section ref={sectionRef} className="relative flex items-center justify-center w-full h-full z-20 py-16 px-6">
//       <Image
//         src={EllipseTilt}
//         alt="EllipseTilt"
  
//         className="absolute w-full h-full -z-10"
//       />
//     <div className=" flex flex-col md:flex-row items-center py-16 px-6 max-w-6xl">
//       <div className="z-40 bg-white rounded-lg md:w-1/2">
//         <Image
//           src="/image.png"
//           alt="Modern Office"
//           width={600}
//           height={400}
//           className="rounded-lg shadow-lg"
//         />
//       </div>

//       <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0 md:ml-12">
//         <p className="text-sm text-[#211951]  uppercase">We’ve helped hundreds of companies</p>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-tight">
//           We’re only just getting <br /> started on our journey
//         </h2>


//         <div className="grid grid-cols-2 gap-6 mt-4">
//          <motion.div
//             initial={{ opacity: 0}}
//             animate={isVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1 }}
//           >
//             <CountUp end={400}  suffix="+"/> <br /> Projects Completed
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1 }}
//           >
//             <CountUp end={600} suffix="%" /> <br /> Return on investment
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0}}
//             animate={isVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1 }}
//           >
//             <CountUp end={10000} suffix="+" /> <br /> Global Downloads
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0}}
//             animate={isVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1 }}
//           >
//             <CountUp end={200} suffix="+" /> <br /> 5-star Reviews
//           </motion.div>
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// }

// function CountUp({ end, suffix = "" }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const interval = setInterval(() => {
//       start += Math.ceil(end / 50);
//       if (start >= end) {
//         start = end;
//         clearInterval(interval);
//       }
//       setCount(start);
//     }, 50); // Adjust speed here (smaller = faster)

//     return () => clearInterval(interval);
//   }, [end]);

//   return <span className="text-[#211951] text-4xl font-bold flex items-center">{count}{suffix}</span>;
// }



"use client";

import Image from "next/image";
import EllipseTilt from "@/assets/EllipseTilt.png";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MilestoneSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-full relative flex items-center justify-center z-20 py-16 px-6">
      <Image src={EllipseTilt} alt="EllipseTilt" className="absolute w-full h-full -z-10" />
      <div className="flex flex-col lg:flex-row items-center justify-center py-16 w-[90%] md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-2/3">
        <div className="z-40 bg-white rounded-lg w-full md:w-5/6 lg:w-1/2">
          <Image src="/image.png" alt="Modern Office" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-5 lg:w-1/2 text-center md:text-left mt-10 md:mt-10 lg:mt-0 lg-12">
          <p className="text-sm text-center lg:text-left text-[#211951] uppercase">We’ve helped hundreds of companies</p>
          <h2 className="text-2xl text-center lg:text-left md:text-3xl 2xl:text-4xl font-bold text-gray-900 mt-2 leading-tight">
            <span className="lg:block">We’re only just getting </span>started on our journey
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 md:gap-x-40 md:gap-y-10 lg:grid-cols-2 gap-6 mt-4">
            {[{ end: 400, suffix: "+", text: "Projects Completed" },
              { end: 600, suffix: "%", text: "Return on investment" },
              { end: 10000, suffix: "+", text: "Global Downloads" },
              { end: 200, suffix: "+", text: "5-star Reviews" }].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
              >
                <CountUp end={item.end} suffix={item.suffix} /> <br /> {item.text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, suffix = "" }) {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const interval = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCount(start);
      }, 50); // Adjust speed here (smaller = faster)
  
      return () => clearInterval(interval);
    }, [end]);

  return <span className="text-[#211951] md:text-3xl 2xl:text-4xl font-bold flex items-center">{count}{suffix}</span>;
}
