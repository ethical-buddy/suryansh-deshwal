"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function MouseEffect() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const shadowX = useSpring(mouseX, springConfig);
  const shadowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Primary Spotlight */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          x: shadowX,
          y: shadowY,
          left: -300,
          top: -300,
          background: "radial-gradient(circle, rgba(0, 255, 120, 0.08) 0%, transparent 70%)",
        }}
      />
      
      {/* Secondary Accent */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          x: shadowX,
          y: shadowY,
          left: -150,
          top: -150,
          background: "radial-gradient(circle, rgba(0, 255, 120, 0.1) 0%, transparent 50%)",
        }}
      />

      {/* Dynamic Grid Distortion (Visual Overlay) */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30" />
    </div>
  );
}
