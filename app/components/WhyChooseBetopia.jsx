"use client";
import React from "react";
import { ShieldCheck, Globe, Server, BadgeCheck, Settings, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Enterprise\nGrade Security",
  },
  {
    icon: Globe,
    title: "Compliance at\nGlobal Scale",
  },
  {
    icon: Server,
    title: "Always on\nInfrastructure",
  },
  {
    icon: BadgeCheck,
    title: "Accountable\nEnterprise Support",
  },
  {
    icon: Settings,
    title: "Engineering\nwith Precision",
  },
  {
    icon: Target,
    title: "Success Measured\nby Impact",
  },
];

export default function WhyChooseBetopia() {
  return (
    <section className="relative bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-4 border border-gray-200 p-8 rounded-2xl">
        <ScrollReveal>
          <div className="bg-white overflow-hidden">
            {/* Title */}
            <div className="text-center mb-6 md:mb-10 flex flex-col items-center">
              <h2 className="hidden md:block text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-700">
                The Foundation of Enterprise Trust
              </h2>

              <h2 className="block md:hidden text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-700">
                The Foundation of <br /> Enterprise Trust
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-4 max-w-3xl mx-auto">
                From strategy and architecture to deployment and operational adoption, Betopia focuses on real-world implementation.
              </p>

            </div>

            {/* Features Row */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-[#f8f9fa] hover:bg-orange-50/50 border border-transparent hover:border-orange-100 transition-colors duration-300 px-4 py-3 md:px-5 md:py-4 rounded-xl w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] xl:w-auto xl:flex-1"
                  >
                    <div className="w-8 h-8 shrink-0 flex justify-center items-center">
                      <Icon className="w-7 h-7 text-brand-bright-orange" strokeWidth={1.5} />
                    </div>
                    <span className="text-lg md:text-md font-medium text-gray-700 leading-tight ">
                      {feat.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
