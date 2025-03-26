"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
  const scrollY = useMotionValue(0); // Track scroll position
  const smoothScroll = useTransform(scrollY, [0, 1], [0, -1]); // Interpolate

  const mainRef = useRef(null); // Ref for scrolling container

  useEffect(() => {
    const updateScroll = () => {
      let scrollTop = mainRef.current.scrollTop;
      animate(scrollY, scrollTop, { type: "spring", stiffness: 100, damping: 10 }); // Smooth animation
    };

    mainRef.current.addEventListener("scroll", updateScroll);
    return () => mainRef.current.removeEventListener("scroll", updateScroll);
  }, [scrollY]);

  return (
    <div
      ref={mainRef}
      className="h-screen overflow-y-scroll overflow-x-hidden relative"
      style={{ scrollBehavior: "smooth" }}
    >
      <motion.div style={{ y: smoothScroll }}>{children}</motion.div>
    </div>
  );
}
