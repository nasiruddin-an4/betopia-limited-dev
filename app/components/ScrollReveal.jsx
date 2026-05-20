"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  width = "100%",
  duration = 0.6,
  delay = 0.2,
  yOffset = 50,
  scale = 1,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset, scale: scale === 1 ? 1 : scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Custom luxury ease
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
