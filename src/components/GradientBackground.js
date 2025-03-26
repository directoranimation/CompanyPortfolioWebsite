"use client";

import { motion } from "framer-motion";

const GradientBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      animate={{
        backgroundPosition: ["0% 60%", "100% 50%", "0% 70%"],
      }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        backgroundImage:
          "linear-gradient(45deg, #770737, #5D3FD3, #ff9a9e, #fad0c4)",
        backgroundSize: "400% 400%",
      }}
    />
  );
};

export default GradientBackground;
