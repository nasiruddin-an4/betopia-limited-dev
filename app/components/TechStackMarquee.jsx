"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

const TechStackSection = () => {
  const edgeMaskStyle = {
    maskImage:
      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  };

  return (
    <section className="bg-white pt-5 md:pt-20 overflow-hidden flex flex-col justify-center">

      {/* Title Header */}
      <div className="container mx-auto px-6 mb-0 text-center">
        <ScrollReveal duration={0.7} delay={0.1}>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-700 mb-2 tracking-tight leading-tight">
            The Tools of Transformation
          </h2>
        </ScrollReveal>

        <ScrollReveal duration={0.8} delay={0.2}>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We combine best-in-class frameworks with emerging technologies to
            turn ambitious ideas into robust reality. Whatever the challenge, we
            have the stack to solve it.
          </p>
        </ScrollReveal>
      </div>

      {/* Marquee Image Strip */}
      <ScrollReveal duration={0.9} delay={0.3}>
        <div className="relative w-full overflow-hidden" style={edgeMaskStyle}>
          <div
            className="flex w-max"
            style={{
              animation: "marquee 90s linear infinite",
              willChange: "transform",
            }}
          >
            {/* Repeat the image twice for seamless loop */}
            <img
              src="/landing_tech_stack_full_img.webp"
              alt="Tech Stack"
              className="h-[420px] md:h-[880px] w-auto object-contain select-none pointer-events-none"
              draggable={false}
            />
            <img
              src="/landing_tech_stack_full_img.webp"
              alt="Tech Stack"
              className="h-[420px] md:h-[880px] w-auto object-contain select-none pointer-events-none"
              draggable={false}
              aria-hidden="true"
            />
          </div>
        </div>
      </ScrollReveal>

    </section>
  );
};

export default TechStackSection;
