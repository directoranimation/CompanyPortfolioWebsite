"use client";

import Image from "next/image";
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
    <section ref={sectionRef} className="font-['SatoshiVariable'] w-full sm:h-[100vh] lg:h-[70vh] relative flex items-center justify-center z-20 py-16 px-6">
      <div className="flex flex-col lg:flex-row items-center lg:justify-evenly py-16 w-[90%] md:w-5/6 lg:w-4xl xl:w-5xl 2xl:w-7xl">
        <div className="z-40 bg-white rounded-lg w-full h-full md:w-[90%] lg:w-[45%] xl:w-2/5">
          <Image src="/image.png" alt="Modern Office" width={600} height={600} className="rounded-lg shadow-lg md:h-96" />
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-5 lg:w-[45%] xl:w-2/5 text-center md:text-left mt-10 md:mt-10 lg:mt-0 lg-12">
          <p className="text-sm text-center lg:text-left text-[#211951] uppercase">We’ve helped hundreds of companies</p>
          <h2 className="text-center lg:text-left text-2xl  md:text-3xl 2xl:text-4xl font-bold text-gray-900 mt-2 leading-tight">
            <span className="lg:block">We’re only just getting </span>started on our journey
          </h2>

          <div className="grid grid-cols-1 text-center md:grid-cols-2 md:gap-x-40 lg:gap-x-20 md:gap-y-10 lg:grid-cols-2 gap-y-10 mt-4">
            {[{ end: 400, suffix: "+", text: "Projects Completed" },
              { end: 600, suffix: "%", text: "Return on investment" },
              { end: 10000, suffix: "+", text: "Global Downloads" },
              { end: 200, suffix: "+", text: "5-star Reviews" }].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="bg-white p-5 rounded-2xl lg:bg-transparent lg:p-0 lg:rounded-none" 
              >
                <CountUp end={item.end} suffix={item.suffix} /> <span> {item.text} </span>
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

  return <span className="text-[#211951]  md:text-3xl 2xl:text-4xl text-center font-bold mb-3 block">{count}{suffix}</span>;
}
