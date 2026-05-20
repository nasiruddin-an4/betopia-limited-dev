"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import { BrainCircuit, Cpu, Cloud, Code, ArrowRight } from "lucide-react";
import Heading from "./Heading";

const categories = [
  {
    title: "AI & Data Engineering",
    icon: "AI",
    color: "from-brand-bright-orange to-brand-coral",
    items: [
      { count: "600+", label: "AI / ML Engineers" },
      { count: "350+", label: "Data Engineers & Data" },
      { count: "150+", label: "Scientists Generative AI & LLM Specialists" },
    ],
  },
  {
    title: "Advanced & Emerging Tech",
    icon: <Cpu size={24} />,
    color: "from-brand-bright-orange to-brand-coral",
    items: [
      { count: "200+", label: "Automation & RPA Engineers" },
      { count: "150+", label: "QA & Quality Engineering Experts" },
      { count: "120+", label: "UI / UX & Product Designers" },
      { count: "100+", label: "AR / VR, IoT & Emerging Tech Engineers" },
    ],
  },
  {
    title: "Cloud, DevOps & Infra",
    icon: <Cloud size={24} />,
    color: "from-brand-bright-orange to-brand-coral",
    items: [
      { count: "220+", label: "DevOps & Cloud Engineers" },
      { count: "180+", label: "Cybersecurity Specialists" },
      { count: "120+", label: "Cloud Architects (AWS, Azure, GCP)" },
    ],
  },
  {
    title: "Software Engineering",
    icon: <Code size={24} />,
    color: "from-brand-bright-orange to-brand-coral",
    items: [
      { count: "1,000+", label: "Python Full-Stack Developers" },
      { count: "900+", label: "JavaScript / MERN / Next.js Engineers" },
      { count: "450+", label: "Java, .NET & Enterprise Engineers" },
      { count: "300+", label: "Mobile App Devs (iOS android, Flutter)" },
    ],
  },
];

export default function CompetencyMap() {
  return (
    <section className="bg-gray-50 py-10 lg:py-32 relative overflow-hidden text-black font-sans">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-2 md:gap-8">
          <ScrollReveal>
            <p className="text-brand-bright-orange text-lg md:text-md tracking-widest">
              Where Our Strength Meets Your Ambition
            </p>
            <Heading level={1}>
              Experienced global <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-bright-orange to-brand-coral">
                tech professionals
              </span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-left md:text-right">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-bright-orange leading-none mb-3">
                5,000+
              </div>
              <div className="text-sm md:text-base font-semibold text-brand-black tracking-wider">
                Engineers On Tap
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
          {categories.map((cat, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
              <div className="group h-full bg-white border border-gray-100 p-4 md:p-10 rounded-xl md:rounded-3xl hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500 flex flex-col relative overflow-hidden">
                {/* Decorative background element */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} opacity-[0.03] rounded-bl-full transition-all duration-500 group-hover:scale-150`}
                ></div>

                <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-8">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-md bg-gradient-to-br ${cat.color} text-white shrink-0 transition-transform duration-500 group-hover:rotate-6`}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="text-xl md:text-3xl font-semibold text-brand-black leading-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-3 md:space-y-6 relative z-10">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex gap-6 group/item">
                      <div className="flex flex-col w-20 md:w-28 shrink-0">
                        <span className="text-brand-bright-orange text-xl md:text-2xl font-bold leading-none">
                          {item.count}
                        </span>
                        <div className="w-0 h-[2px] bg-brand-bright-orange transition-all duration-300 group-hover/item:w-full"></div>
                      </div>
                      <div className="text-gray-600 text-sm md:text-lg font-medium leading-snug">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
