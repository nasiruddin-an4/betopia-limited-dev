"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import { FaCircle } from "react-icons/fa";
import { Circle } from "lucide-react";
import Heading from "./Heading";

const dynamicsData = [
  {
    label: "DYNAMIC 01",
    title: "You Own the Client Relationship",
    bullets: [
      "You present and position the solution",
      "You lead contract discussions and closure",
      "You manage billing and invoicing",
      "You remain the primary point of contact",
      "Your brand stays focused throughout the engagement",
    ],
  },
  {
    label: "DYNAMIC 02",
    title: "We Handle the Execution",
    bullets: [
      "You define the project scope - we take it from there",
      "We deploy the most suitable team from our global talent pool",
      "We ensure delivery aligned with timeline, scope and budget",
      "We take full responsibility for execution and delivery risks",
      "We manage resources, quality assurance and operations",
    ],
  },
  {
    label: "DYNAMIC 03",
    title: "Attractive Revenue Opportunity",
    bullets: [
      "Transparent pricing with no hidden costs",
      "No onboarding or ramp-up fees",
      "No additional charges for urgent delivery",
      "Competitive, partner-friendly cost structure",
      "Strong and scalable revenue potential on every project",
    ],
  },
];

export default function PartnershipDynamics() {
  return (
    <section className="bg-white py-10 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-2 lg:px-0">
        {/* Header */}
        <div className="mb-10">
          <ScrollReveal>
            <Heading level={2}>Three simple dynamics</Heading>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mt-2 max-w-4xl">
              We deliver measurable business results in every engagement. Our
              model is designed to improve efficiency, scalability and
              speed-to-market ensuring consistent success for our partners.
            </p>
          </ScrollReveal>
        </div>

        {/* Dynamics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {dynamicsData.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="pt-4 border-t border-brand-bright-orange">
                <span className="text-brand-bright-orange text-sm md:text-md font-semibold tracking-[0.2em] uppercase mb-2 md:mb-4 block">
                  {item.label}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-brand-black mb-4 md:mb-5 leading-tight">
                  {item.title}
                </h3>
                <div className="space-y-2">
                  {item.bullets.map((bullet, i) => (
                    <div
                      key={i}
                      className="flex gap-2 text-gray-600 text-md md:text-base leading-relaxed items-start bg-gray-100 px-3 py-2 rounded-sm"
                    >
                      <FaCircle
                        size={6}
                        className="text-brand-bright-orange mt-2.5 shrink-0"
                      />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quote Box */}
        <ScrollReveal delay={0.4}>
          <div className="bg-brand-black rounded-sm p-4 md:p-8 relative overflow-hidden flex items-center gap-4 md:gap-8 group">
            {/* Styled Quote Bar */}
            <div className="flex gap-1.5 shrink-0">
              <div className="w-1 h-8 md:h-12 bg-brand-bright-orange" />
              <div className="w-1 h-8 md:h-12 bg-brand-bright-orange" />
            </div>

            <p className="text-lg md:text-2xl lg:text-3xl text-white font-medium">
              We don’t just collaborate we scale possibilities,{" "}
              <span className="text-brand-bright-orange font-bold">
                Limitless Together.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
