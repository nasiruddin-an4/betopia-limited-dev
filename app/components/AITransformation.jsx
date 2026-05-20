"use client";

import React from "react";
import Link from "next/link";
import { Lightbulb, Zap, Code2, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import RollingButton from "./RollingButton";

const services = [
  {
    icon: Lightbulb,
    title: "AI strategy & discovery",
    description:
      "Identify AI opportunities, operational bottlenecks, readiness levels, and transformation priorities through strategic enterprise assessment.",
    tags: ["Process audit", "Opportunity map", "ROI modelling", "AI readiness score"],
    blob: "radial-gradient(ellipse at 20% 20%, rgba(247,149,73,0.18) 0%, transparent 65%), radial-gradient(ellipse at 80% 80%, rgba(255,127,80,0.1) 0%, transparent 60%)",
  },
  {
    icon: Zap,
    title: "Intelligent automation",
    description:
      "Automate workflows, reduce manual processes, and improve execution through AI-powered operational systems.",
    tags: ["Workflow automation", "RPA integration", "AI agents", "Process optimisation"],
    blob: "radial-gradient(ellipse at 80% 15%, rgba(34,211,238,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 85%, rgba(99,102,241,0.1) 0%, transparent 55%)",
  },
  {
    icon: Code2,
    title: "AI-native product development",
    description:
      "Build scalable AI-powered platforms, enterprise applications, integrations, and intelligent digital products.",
    tags: ["LLM integration", "Custom AI models", "API development", "MLOps pipeline"],
    blob: "radial-gradient(ellipse at 15% 80%, rgba(167,243,208,0.2) 0%, transparent 60%), radial-gradient(ellipse at 85% 20%, rgba(250,204,21,0.1) 0%, transparent 55%)",
  },
  {
    icon: Users,
    title: "Change management & training",
    description:
      "Enable teams to adopt AI successfully through governance, operational training, implementation support, and transformation planning.",
    tags: ["AI literacy", "Team upskilling", "Adoption roadmap", "Executive coaching"],
    blob: "radial-gradient(ellipse at 75% 75%, rgba(192,132,252,0.18) 0%, transparent 60%), radial-gradient(ellipse at 25% 25%, rgba(251,146,60,0.1) 0%, transparent 55%)",
  },
];

const AITransformation = () => {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <ScrollReveal duration={0.7} delay={0.1}>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-700 mb-2 leading-[1.3]">
              Enterprise AI <br /> From Strategy to Execution
            </h2>
          </ScrollReveal>

          <ScrollReveal duration={0.7} delay={0.2}>
            <p className="text-gray-500 text-base leading-relaxed">
              Betopia helps organizations modernize operations through AI-powered systems, intelligent automation, and scalable enterprise infrastructure designed for real-world execution.
            </p>
          </ScrollReveal>
        </div>

        {/* 2×2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} duration={0.65} delay={0.1 + i * 0.08} className="h-full">
                <div
                  className="noise-overlay group relative rounded-2xl p-8 flex flex-col gap-5 h-full
                    hover:shadow-xl
                    transition-all duration-300 overflow-hidden"
                  style={{ background: `${service.blob}, #ffffff` }}
                >

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-bright-orange/5 via-transparent to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 group-hover:bg-brand-bright-orange group-hover:border-brand-bright-orange">
                    <Icon
                      size={44}
                      strokeWidth={1.75}
                      className="text-brand-bright-orange group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-600 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Tags */}
                  {service.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-gray-500 bg-gray-100 border border-gray-200
                            rounded-full px-3 py-1 hover:bg-gray-200 transition-colors duration-150"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="w-full flex justify-center mt-14">
          <RollingButton text="Let's Start AI Transformation" href="/ai-readiness" />
        </div>

      </div>
    </section>
  );
};

export default AITransformation;
