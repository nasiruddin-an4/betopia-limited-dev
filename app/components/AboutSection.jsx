"use client";

import React from "react";
import { Layers, Cpu, Globe, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import RollingButton from "./RollingButton";

const partnerReasons = [
  {
    icon: Layers,
    title: "Enterprise Delivery",
    description:
      "Collaborate on enterprise transformation initiatives, operational modernization, and scalable technology execution.",
    blob: "radial-gradient(ellipse at 20% 20%, rgba(247,149,73,0.18) 0%, transparent 65%), radial-gradient(ellipse at 80% 80%, rgba(255,127,80,0.1) 0%, transparent 60%)",
    hoverBorder: "hover:border-brand-bright-orange/40",
    hoverText: "group-hover:text-brand-bright-orange",
  },
  {
    icon: Cpu,
    title: "Technology Ecosystem",
    description:
      "Integrate platforms, infrastructure, AI systems, and enterprise technologies through strategic technical collaboration.",
    blob: "radial-gradient(ellipse at 80% 15%, rgba(34,211,238,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 85%, rgba(99,102,241,0.1) 0%, transparent 55%)",
    hoverBorder: "hover:border-brand-bright-orange/40",
    hoverText: "group-hover:text-brand-bright-orange",
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description:
      "Expand into new markets and operational regions through Betopia’s delivery ecosystem and infrastructure capabilities.",
    blob: "radial-gradient(ellipse at 15% 80%, rgba(167,243,208,0.2) 0%, transparent 60%), radial-gradient(ellipse at 85% 20%, rgba(250,204,21,0.1) 0%, transparent 55%)",
    hoverBorder: "hover:border-brand-bright-orange/40",
    hoverText: "group-hover:text-brand-bright-orange",
  },
  {
    icon: TrendingUp,
    title: "Innovation & Growth",
    description:
      "Build next-generation solutions, AI-powered products, and intelligent enterprise systems together.",
    blob: "radial-gradient(ellipse at 75% 75%, rgba(192,132,252,0.18) 0%, transparent 60%), radial-gradient(ellipse at 25% 25%, rgba(251,146,60,0.1) 0%, transparent 55%)",
    hoverBorder: "hover:border-brand-bright-orange/40",
    hoverText: "group-hover:text-brand-bright-orange",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-[#fdfdfd] to-[#f4f5f6]">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-bright-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-100/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-[1.25] mb-6">
              Why Organizations Partner With Us
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Partner Program is designed for organizations seeking long-term collaboration across AI transformation, enterprise technology, operational execution, and scalable digital growth.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {partnerReasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                <div
                  className={`group relative h-full min-h-[400px] md:min-h-[320px] bg-white border border-gray-200/80 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${reason.hoverBorder}`}
                >
                  {/* Glowing background blob */}
                  {/* <div
                    className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-all duration-500 pointer-events-none scale-100 group-hover:scale-105"
                    style={{ backgroundImage: reason.blob }}
                  /> */}

                  {/* Top: Icon */}
                  <div className="relative z-10">
                    <Icon className={`w-14 h-14 text-gray-500 transition-colors duration-300 ${reason.hoverText}`} strokeWidth={1.5} />
                  </div>

                  {/* Bottom: Title & Description */}
                  <div className="relative z-10">
                    <h3 className={`text-xl md:text-2xl font-bold text-gray-900 mb-2 transition-colors duration-300 ${reason.hoverText}`}>
                      {reason.title}
                    </h3>
                    <p className="text-gray-500 text-md leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  {/* Bottom Hover Bar */}
                  <div className="absolute bottom-0 left-0 h-[4px] bg-brand-bright-orange w-0 group-hover:w-full transition-all duration-500 ease-out z-20" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-14">
          <RollingButton text="Explore Partner Program" href="/partner" />
        </div>
      </div>
    </section>
  );
}
