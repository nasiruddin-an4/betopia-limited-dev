"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import RollingButton from "./RollingButton";

const ROTATING_WORDS = [
  "Cloud Modernization",
  "AI & Analytics",
  "Resource Augmentation",
  "Software Development",
  "Managed Services",
];

const TYPE_SPEED = 80; // ms per character typed
const DELETE_SPEED = 40; // ms per character deleted
const HOLD_DURATION = 1400; // ms to hold full word before deleting

/* ── Animated Counter ──────────────────────────────────── */
function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  // Format number with commas
  const formattedCount = count.toLocaleString();

  return (
    <span ref={ref}>
      {formattedCount}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // "typing" | "holding" | "deleting"
  const timeoutRef = useRef(null);



  useEffect(() => {
    const word = ROTATING_WORDS[wordIndex];

    if (phase === "typing") {
      if (displayed.length < word.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(word.slice(0, displayed.length + 1));
        }, TYPE_SPEED);
      } else {
        timeoutRef.current = setTimeout(
          () => setPhase("holding"),
          HOLD_DURATION,
        );
      }
    }

    if (phase === "holding") {
      timeoutRef.current = setTimeout(() => setPhase("deleting"), 0);
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, DELETE_SPEED);
      } else {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, phase, wordIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#04060e]">
      {/* Background Video (Full Color, Full Opacity) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10"
      >
        <source src="HeroImg/Limited Hero Section_Computer.mp4" type="video/mp4" />
      </video>


      {/* Content */}
      <div className="absolute bottom-12 md:bottom-20 left-0 right-0 z-30 flex flex-col items-center justify-end px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl font-medium text-white mb-2 drop-shadow-lg leading-[1.3] tracking-tight"
          >
            From Bangladesh to the World <br />
            Delivering AI, Cloud and Digital Transformation
          </motion.h1>

          {/* <motion.p
            variants={itemVariants}
            className="text-md md:text-xl text-gray-200 max-w-5xl mx-auto font-light leading-relaxed drop-shadow-md"
          >
            Betopia Limited delivers enterprise-grade technology solutions that accelerate digital transformation through AI, cloud modernization, automation, and scalable digital platforms.
          </motion.p> */}
        </motion.div>
      </div>

      {/* Bottom Gradient Overlay for Text Legibility */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[#04060e] via-[#04060e]/80 to-transparent z-20 pointer-events-none" />
    </div>
  );
}
