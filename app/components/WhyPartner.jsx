"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    title: "Seamless Brand Alignment",
    description:
      "We operate as a true extension of your team—embedded into your processes, aligned with your standards and invisible to your clients.",
    image: "/1.png",
  },
  {
    title: "Reliable, Predictable Delivery",
    description:
      "Mature governance frameworks, transparent reporting, structured SLAs and measurable KPIs ensure consistent outcomes no surprises.",
    image: "/22.webp",
  },
  {
    title: "Flexible Engagement Models",
    description:
      "Scale with precision. Project-based execution, dedicated teams, or long-term managed services designed around your growth strategy.",
    image: "/3.png",
  },
  {
    title: "Long-Term Revenue Stability",
    description:
      "Unlock high-margin recurring revenue through managed services, AI transformation and cloud lifecycle support.",
    image: "/4444.jpg",
  },
  {
    title: "Shared Success Mindset",
    description:
      "We measure success by your expansion. As you win bigger deals, enter new markets and increase wallet share we scale alongside you.",
    image: "/5.png",
  },
  {
    title: "Zero Client Risk",
    description:
      "White-label delivery protects your client relationships. We stay behind the scenes while you retain full ownership of communication, strategy and client trust.",
    image: "/777.png",
  },
];

export default function WhyPartner() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-semibold text-brand-black mb-6 tracking-tight">
              Why Businesses Stay With Us
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
              We&apos;ve built a partner programme that removes every barrier
              standing between your agency and the revenue it deserves.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <ScrollReveal key={idx} delay={0.2 + idx * 0.1}>
              <div className="group bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2">
                {/* Illustration Area */}
                <div className="w-full h-48 relative mb-8 flex items-center justify-center overflow-hidden rounded-xl">
                  <div className="absolute inset-0" />
                  <div className="relative w-60 h-60">
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                <h3 className="text-brand-black font-semibold text-2xl mb-4 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
