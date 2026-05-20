"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import { TrendingUp, Users, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Accelerated Growth",
    description:
      "Expand your service offerings locally and globally without the overhead of hiring and training new teams in-house.",
  },
  {
    icon: Users,
    title: "Elite Engineering Teams",
    description:
      "Gain immediate access to our 5,000+ strong network of specialized developers, strategists and solution architects.",
  },
  {
    icon: Shield,
    title: "De-Risked Delivery",
    description:
      "We assume technical liability, ensuring enterprise-grade stability and security on all implementations and integrations.",
  },
  {
    icon: Zap,
    title: "Enhanced Margin Control",
    description:
      "Leverage optimal cost-to-quality ratios, opening up high-margin recurring revenue streams for your agency.",
  },
];

export default function PartnerBenefits() {
  return (
    <section className="bg-white py-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-semibold text-brand-black mb-6">
              Benefits for a Partner
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
              Unlock the resources, margin and technical muscle needed to win
              larger enterprise accounts.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={idx} delay={0.2 + idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 hover:bg-brand-bright-orange hover:text-white transition-all duration-300 group border border-gray-100 hover:border-transparent h-full shadow-sm hover:shadow-xl hover:-translate-y-2">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors shadow-sm">
                    <Icon className="w-7 h-7 text-brand-bright-orange group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-brand-black group-hover:text-white transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-white/90 leading-relaxed transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
