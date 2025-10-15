"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  // const [isMobile, setIsMobile] = useState(true); // Default to true to avoid flash

  useEffect(() => {
    // Check if device has a fine pointer (mouse/trackpad)
    // const checkMobile = () => {
    //   const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    //   const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    //   // setIsMobile(!hasFinePointer || hasCoarsePointer);
    // };

    // checkMobile();

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.closest("a, button, [role='button'], [onclick], input, textarea, select, label")) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkPointer);
    window.addEventListener("mouseout", checkPointer);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkPointer);
      window.removeEventListener("mouseout", checkPointer);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Don't render on mobile devices
  // if (isMobile) return null;

  return (
    <motion.div
      className="hidden sm:inline-block pointer-events-none fixed top-0 left-0 z-[9999] items-center justify-center"
      animate={{
        x: position.x - 8,
        y: position.y - 10,
      }}
    >
      <div className="relative h-full w-full">
        <motion.img
          src="/Polygon 1.svg"
          alt="cursor"
          className="h-8 w-8 object-contain dark:hidden"
          animate={{
            scale: isClicking ? 1 : isPointer ? 2 : 1.5,
          }}
          transition={{
            type: "inertia",
            damping: 45,
            stiffness: 400,
            mass: 1,
            restDelta: 0.001,
          }}
        />
        <motion.img
          src="/Polygon 2.svg"
          alt="cursor"
          className="hidden h-8 w-8 object-contain dark:block"
          animate={{
            scale: isClicking ? 1 : isPointer ? 2 : 1.5,
          }}
          transition={{
            type: "inertia",
            damping: 45,
            stiffness: 400,
            mass: 1,
            restDelta: 0.001,
          }}
        />
      </div>
    </motion.div>
  );
};

export default CustomCursor;