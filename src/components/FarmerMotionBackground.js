"use client"; // Ensure this component runs on the client side

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedGradient = () => {
  const [gradient, setGradient] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradient((prev) => (prev + 1) % 360);
    }, 50); // Smooth transition effect
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={{
        background: [
          "linear-gradient(45deg, #211951, #ff758c, #ff7eb3)",
          "linear-gradient(90deg, #ff758c, #211951, #ff758c)",
          "linear-gradient(180deg, #ff7eb3, #ff758c, #211951)",
          "linear-gradient(360deg, #ff758c, #211951, #ff758c)",
        ],
      }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      }}
      className="absolute top-0 left-0 w-full h-full"
    />
  );
};

export default AnimatedGradient;
