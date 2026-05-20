"use client";

import React, { useState } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const sectors = [
  {
    id: "01",
    label: "AI & Deep Tech",
    color: "bg-violet-500",
    side: "left",
  },
  {
    id: "02",
    label: "Manufacturing & RMG",
    color: "bg-emerald-500",
    side: "left",
  },
  {
    id: "03",
    label: "Enterprise Mobility & Web",
    color: "bg-rose-500",
    side: "left",
  },
  {
    id: "04",
    label: "Healthcare & Life Sciences",
    color: "bg-amber-500",
    side: "right",
  },
  {
    id: "05",
    label: "Cloud & Infrastructure",
    color: "bg-cyan-500",
    side: "right",
  },
  {
    id: "06",
    label: "Digital Experience Platforms",
    color: "bg-purple-500",
    side: "right",
  },
];

const industries = [
  "Banking & BFSI",
  "Manufacturing",
  "Healthcare",
  "Education",
  "Logistics",
  "Retail",
  "Real Estate",
  "Energy",
  "Government",
  "Insurance",
  "Telecom",
  "Life Sciences",
  "CPG",
  "Capital Markets",
];

const stats = [
  { value: "14", label: "Verticals served" },
  { value: "80+", label: "Countries delivered" },
  { value: "300+", label: "Integrated tools" },
];

const IndustriesWeServe = () => {
  const [activeIndustry, setActiveIndustry] = useState("Banking & BFSI");

  const leftSectors = sectors.filter((s) => s.side === "left");
  const rightSectors = sectors.filter((s) => s.side === "right");

  return (
    <section className="bg-slate-900 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-0">



        {/* Heading */}
        <ScrollReveal duration={0.7} delay={0.15}>
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Every sector has its own complexity<br />
              We've already worked through yours.
            </h2>
          </div>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal duration={0.7} delay={0.2}>
          <p className="text-center text-zinc-400 text-base md:text-lg max-w-5xl mx-auto mb-10 leading-relaxed">
            We've built and deployed enterprise AI across 14 industry verticals from banking and
            manufacturing to healthcare and education. Our cross-sector depth means we come with
            context, not just code.
          </p>
        </ScrollReveal>



        {/* Sector Diagram */}
        <ScrollReveal duration={0.8} delay={0.3}>
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-16">

            {/* Left Sectors */}
            <div className="flex flex-col gap-3 flex-1 max-w-[220px] md:max-w-[260px]">
              {leftSectors.map((sector) => (
                <div
                  key={sector.id}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-default group"
                >
                  <div className={`w-7 h-7 rounded-lg ${sector.color} flex-shrink-0`} />
                  <div>

                    <div className="text-sm font-semibold text-white leading-tight">{sector.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Logo */}
            <div className="flex-shrink-0 relative">
              {/* Connecting dashes */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[180px] md:w-[240px] h-[1px] border-t border-dashed border-rose-500/40" />
              </div>
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-brand-bright-orange via-brand-coral to-brand-red flex items-center justify-center shadow-2xl shadow-orange-500/30 ring-4 ring-orange-500/20">
                <img
                  src="/Animated Icon_1.gif"
                  alt="Betopia"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain brightness-0 invert"
                />
              </div>
            </div>

            {/* Right Sectors */}
            <div className="flex flex-col gap-3 flex-1 max-w-[220px] md:max-w-[260px]">
              {rightSectors.map((sector) => (
                <div
                  key={sector.id}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-default"
                >
                  <div className={`w-7 h-7 rounded-lg ${sector.color} flex-shrink-0`} />
                  <div>
                    <div className="text-sm font-semibold text-white leading-tight">{sector.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Industry Tags Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

            {/* Label */}
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex-shrink-0">
              All 14 Verticals
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 flex-1">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveIndustry(industry)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${activeIndustry === industry
                    ? "bg-brand-bright-orange text-white border-brand-bright-orange"
                    : "text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                >
                  {industry}
                </button>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/industries"
              className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-white bg-brand-bright-orange hover:bg-brand-coral rounded-full px-5 py-2.5 transition-all duration-200 whitespace-nowrap"
            >
              View all industries
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesWeServe;
