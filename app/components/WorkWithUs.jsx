import React from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const WorkWithUs = () => {
  return (
    <section className="bg-gray-200 py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-16">
        {/* Header */}
        <div className="mb-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 leading-[1.1] mb-2">
              Our Methodology to{" "}
              <span className="text-brand-bright-orange">Collaboration</span>
            </h2>
            <p className="text-gray-500 text-md md:text-lg leading-relaxed max-w-2xl mx-auto">
              Direct enterprise engagement when you own the outcome & Strategic
              partnership when your agency owns the relationship
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Card 1: Direct Delivery */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 h-full flex flex-col justify-between group hover:shadow-xl transition-all duration-500">
              <div>
                <span className="text-brand-bright-orange font-bold text-xs tracking-widest uppercase mb-6 block">
                  DIRECT DELIVERY
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 leading-tight">
                  Execute the full program, under one roof
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  From AI strategy to ERP rollouts, our delivery teams plug into
                  yours and own the outcome discovery, design, build, deployment
                  and operations.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center text-gray-900 font-medium text-lg group/link"
              >
                See enterprise services
                <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2">
                  →
                </span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 2: Partner Program */}
          <ScrollReveal delay={0.4}>
            <div className="bg-brand-bright-orange rounded-3xl p-8 md:p-12 shadow-sm h-full flex flex-col justify-between group transition-all duration-500">
              <div>
                <span className="text-white font-bold text-xs tracking-widest uppercase mb-6 block">
                  PARTNER PROGRAM
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 leading-tight">
                  Extend your delivery capacity, under your brand
                </h3>
                <p className="text-gray-50 text-lg leading-relaxed mb-10">
                  Build a dedicated offshore engineering pod with senior
                  architects, full IP protection, NDA grade confidentiality and
                  a single point of accountability.
                </p>
              </div>
              <Link
                href="/partner"
                className="inline-flex items-center text-white font-medium text-lg group/link"
              >
                Explore the partner program
                <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2">
                  →
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
