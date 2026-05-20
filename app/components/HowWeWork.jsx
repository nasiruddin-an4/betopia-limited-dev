"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    tag: "AI transformation",
    tagColor: "text-brand-bright-orange bg-orange-50 border border-orange-100",
    title: "Transform your business with AI",
    description:
      "End to end AI implementation from strategy and automation to AI native product development and team training. Built for your industry, deployed in your environment.",
    cta: "See AI transformation",
    href: "/services",
    accent: true,
    bgImage: "/card 1.png",
    image: "/AIsectionImg/ai Automation image.png",
    btnClass: "bg-black hover:bg-zinc-800",
  },
  {
    tag: "Products & solutions",
    tagColor: "text-zinc-500 bg-zinc-50 border border-zinc-100",
    title: "Enterprise Infrastructure",
    description:
      "From ready to deploy SaaS products to fully custom built enterprise platforms. We build and deliver technology that scales with your business.",
    cta: "Explore products",
    href: "/products",
    accent: false,
    bgImage: "/card 1.png",
    image: "/AIsectionImg/app icons.png",
    btnClass: "bg-zinc-600 hover:bg-zinc-500",
  },
  {
    tag: "Partner program",
    tagColor: "text-zinc-500 bg-zinc-50 border border-zinc-100",
    title: "Strategic Ecosystem Partnerships",
    description:
      "Expand your service offerings with Betopia’s proven technology. Join our partner ecosystem to deliver AI transformation and enterprise solutions to your clients with full training, technical support, and co selling opportunities.",
    cta: "View partner program",
    href: "/partners",
    accent: false,
    bgImage: "/card 1.png",
    image: "/AIsectionImg/partnercardimage 5.png",
    btnClass: "bg-zinc-600 hover:bg-zinc-500",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-[#f5f5f5] py-14 md:py-20">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center gap-6 mb-10">
          <ScrollReveal duration={0.7} delay={0.1}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-700 leading-tight mb-2">
              Betopia Intelligent Enterprise Systems
            </h2>
          </ScrollReveal>

          <div className="self-end">
            <ScrollReveal duration={0.7} delay={0.2}>
              <p className="text-gray-500 text-sm md:text-xl max-w-2xl mx-auto">
                Enterprise AI infrastructure, automation, and operational intelligence designed for scalable modern organizations
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <ScrollReveal key={card.tag} duration={0.6} delay={0.1 + i * 0.1} className="h-full">
              <div
                className={` relative rounded-2xl p-7 flex flex-col justify-between h-[516px]  overflow-hidden transition-all duration-300 hover:shadow-xl group ${card.bgImage
                  ? "border border-zinc-200/50"
                  : `bg-gradient-to-tl ${card.accent
                    ? "from-orange-100 via-white to-white border border-orange-100"
                    : "from-orange-100 via-white to-white border border-zinc-100"
                  }`
                  }`}
              >
                {/* Background Image */}
                {card.bgImage && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={card.bgImage}
                      alt={card.title}
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                )}

                {/* Tag */}
                <div className="relative z-10 flex flex-col gap-4">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full w-fit ${card.tagColor}`}
                  >
                    {card.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-600 leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed -mt-2">
                    {card.description}
                  </p>
                </div>

                {/* Visual Area */}
                <div className="relative z-10 flex flex-col gap-5 rounded-md">
                  {card.image && (
                    <div className="relative h-[260px] flex items-center justify-center">
                      {/* White glow effect circle */}
                      <div className="absolute w-[270px] h-[270px] rounded-full bg-white/75 blur-[30px] z-0 pointer-events-none" />

                      <div className="relative rounded-md h-full w-full z-10 flex items-center justify-center">
                        <img
                          src={card.image}
                          alt={card.tag}
                          className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 ease-in-out"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
