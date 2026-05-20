"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

const dimensions = [
  {
    label: "Time to capacity",
    traditional: "5 – 8 months",
    betopia: "2 – 4 weeks",
  },
  {
    label: "Cost to scale",
    traditional: "$80–150K per hire + overhead",
    betopia: "$0 upfront",
  },
  {
    label: "Risk profile",
    traditional: "Bench costs if project ends",
    betopia: "Zero — we carry the bench",
  },
  {
    label: "Time to revenue",
    traditional: "~12 months before ROI",
    betopia: "Revenue in week one",
  },
  {
    label: "Client relationship",
    traditional: "Shifts to outsourcer",
    betopia: "Stays 100% yours",
  },
  {
    label: "Flexibility",
    traditional: "Locked into permanent overhead",
    betopia: "Scale up / down per project",
  },
  {
    label: "Your brand",
    traditional: "Your team delivers",
    betopia: "White-label — your brand on everything",
  },
];

export default function BetopiaComparison() {
  return (
    <section className="bg-gray-50 py-10 lg:py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-bright-orange/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16 max-w-5xl mx-auto">
          <ScrollReveal delay={0.3}>
            <h2 className="text-4xl md:text-5xl font-semibold text-center text-brand-black leading-[1.3]">
              Betopia Partnership vs. Traditional Scaling Models
            </h2>
          </ScrollReveal>
        </div>

        {/* Comparison Table */}
        <ScrollReveal delay={0.4}>
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1.2fr_1.2fr_1.2fr] bg-white">
              <div className="px-6 md:px-8 py-5">
                <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em]">
                  Dimension
                </span>
              </div>
              <div className="px-6 md:px-8 py-5">
                <span className="text-brand-black text-[10px] md:text-xs font-bold uppercase tracking-[0.15em]">
                  Traditional Hiring
                </span>
              </div>
              <div className="px-6 md:px-8 py-5">
                <span className="text-brand-bright-orange text-[10px] md:text-xs font-bold uppercase tracking-[0.15em]">
                  Betopia Partnership
                </span>
              </div>
            </div>

            {/* Table Rows */}
            {dimensions.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1.2fr_1.2fr_1.2fr] border-t border-gray-100 transition-colors duration-300 hover:bg-white/[0.03] ${
                  idx % 2 === 0 ? "bg-transparent" : "bg-white"
                }`}
              >
                <div className="px-6 md:px-8 py-5 md:py-6 flex items-center">
                  <span className="text-brand-black font-semibold text-sm md:text-base">
                    {row.label}
                  </span>
                </div>
                <div className="px-6 md:px-8 py-5 md:py-6 flex items-center">
                  <span className="text-brand-black text-sm md:text-base">
                    {row.traditional}
                  </span>
                </div>
                <div className="px-6 md:px-8 py-5 md:py-6 flex items-center">
                  <span className="text-brand-bright-orange font-semibold text-sm md:text-base">
                    {row.betopia}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom tagline */}
        <ScrollReveal delay={0.6}>
          <p className="mt-10 text-brand-black text-base md:text-lg text-center">
            You keep the client. You keep the revenue.{" "}
            <span className="text-brand-bright-orange font-medium">
              We handle the execution risk.
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
