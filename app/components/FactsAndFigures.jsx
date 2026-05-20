"use client";
import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { useInView } from "framer-motion";

const stats = [
  {
    id: 1,
    target: 5,
    suffix: "+",
    label: "Global Offices",
  },
  {
    id: 2,
    target: 14,
    suffix: "+",
    label: "Years of Excellence",
  },
  {
    id: 3,
    target: 80,
    suffix: "+",
    label: "Country Delivered",
  },
  {
    id: 4,
    target: 40,
    suffix: "K+",
    label: "Client Served",
  },
  {
    id: 5,
    target: 85,
    suffix: "K+",
    label: "Projects delivered",
  },
];

/* ── Animated Counter ──────────────────────────────────── */
function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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

export default function FactsAndFigures() {
  return (
    <section className="relative py-10 md:py-20 bg-[#f7f6f9]">
      <div className="container mx-auto relative z-10">
        {/* Background Video */}
        <div className="h-[30vh] md:h-[75vh]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          >
            <source src="/Map Animation.mp4" type="video/mp4" />
          </video>
        </div>
        <ScrollReveal>
          <div className="container mx-auto -mt-10 md:-mt-52 px">
            {/* Header */}
            <div className="mb-16 px-4 md:px-0">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-700 leading-[1.1] text-center tracking-tight">
                From
                Bangladesh to
                the World
              </h2>
              <p className="text-gray-500 text-md md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mt-1 md:mt-2 text-center">
                Our Facts and Figures
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-4 md:gap-y-12 lg:gap-x-0 relative items-start md:items-center justify-center max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={stat.id}
                  className={`flex flex-col items-center justify-center px-4 md:px-8 lg:px-4 relative text-center ${index === 4 ? "col-span-2 lg:col-span-1" : "col-span-1"
                    }`}
                >
                  {/* Vertical Divider for Desktop */}
                  {index !== stats.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-200" />
                  )}

                  {/* Vertical Divider for Mobile (2 columns) */}
                  {index % 2 === 0 && index !== 4 && (
                    <div className="block lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-200" />
                  )}

                  <div className="text-2xl md:text-4xl lg:text-4xl font-semibold text-gray-700 mb-2 tracking-tighter">
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-brand-bright-orange text-sm tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
