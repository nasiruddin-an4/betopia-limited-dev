"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const options = [
  {
    id: "Option 01 — Fastest",
    title: "Start with an introduction call",
    desc: "Begin with a focused discussion to understand your business, goals and potential collaboration areas.",
    bullets: [
      "Explore how the partnership model aligns with your growth plans",
      "Identify relevant opportunities and service areas",
      "Get clarity on process, delivery and commercial structure",
      "No obligation—just a practical first step",
    ],
    cta: "Request a call",
    href: "/contact",
    highlight: true,
  },
  {
    id: "Option 02",
    title: "Start with your first project",
    desc: "Bring a real opportunity and we’ll work with you to shape and deliver it.",
    bullets: [
      "Collaborate on scope, approach and execution plan",
      "See how delivery works in a real business scenario",
      "Maintain full ownership of the client relationship",
      "Experience the model while generating immediate value",
    ],
    cta: "Share your project",
    href: "/contact",
    highlight: false,
  },
  {
    id: "Option 03",
    title: "Explore our capabilities",
    desc: "Review how we support partners across delivery, growth and scale.",
    bullets: [
      "Access playbooks, case studies and delivery frameworks",
      "Understand how projects are structured and executed",
      "Share internally and evaluate fit at your own pace",
      "Continue the conversation when you’re ready",
    ],
    cta: "Download our profile",
    href: "/contact",
    highlight: false,
  },
];

export default function PartnerOptions() {
  return (
    <section className="bg-white py-10 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-end gap-5 mb-8 md:mb-16">
          <div>
            <p className="text-brand-bright-orange text-lg md:text-md leading-relaxed max-w-sm md:text-left tracking-widest uppercase mb-2">
              There are many ways to start
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-brand-black leading-[1.1] mb-6">
              Let&apos;s build your{" "}
              <span className="text-brand-bright-orange">growth engine</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl">
              Choose the path that fits your approach—each one is designed to
              help you explore the partnership and move forward with clarity.
            </p>
          </div>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {options.map((option, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
              <div
                className={`h-full p-8 md:p-10 flex flex-col transition-all rounded-2xl duration-300 ${
                  option.highlight
                    ? "bg-brand-bright-orange border border-brand-bright-orange text-white"
                    : "bg-gray-50 backdrop-blur-sm text-black hover:bg-gray-100"
                }`}
              >
                <span
                  className={`text-[10px] font-bold tracking-[0.2em] mb-4 md:mb-6 block uppercase ${
                    option.highlight ? "text-white" : "text-brand-bright-orange"
                  }`}
                >
                  {option.id}
                </span>

                <h3 className="text-xl md:text-xl lg:text-xl 2xl:text-2xl.  font-bold leading-tight mb-4">
                  {option.title}
                </h3>

                <p
                  className={`text-md leading-relaxed mb-8 ${
                    option.highlight ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {option.desc}
                </p>

                {/* {option.bullets && (
                  <ul className={`space-y-4 mb-10 flex-grow ${
                    option.highlight ? "text-white/80" : "text-gray-600"
                  }`}>
                    {option.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                          option.highlight ? "bg-white" : "bg-brand-bright-orange"
                        }`} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )} */}

                <div
                  className={`h-px w-full mb-8 ${
                    option.highlight ? "bg-white/20" : "bg-gray-200"
                  }`}
                />

                <Link
                  href={option.href}
                  className={`flex w-fit items-center gap-2 text-xs font-bold tracking-[0.2em] transition-all duration-300 uppercase ${
                    option.highlight
                      ? "text-white hover:translate-x-2"
                      : "text-brand-bright-orange hover:translate-x-2"
                  }`}
                >
                  {option.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
