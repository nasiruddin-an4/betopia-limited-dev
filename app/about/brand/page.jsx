"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const timelineData = [
  {
    era: "01",
    year: "BRAND STORY",
    title: "Technology that empowers growth securely, intelligently, globally.",
    description: (
      <>
        <p className="mb-4">The technological phase of change is relentless in today’s AI driven world. Either businesses must adapt or perish. At Betopia, we believe technology should empower, not overwhelm. Founded in Bangladesh with a global vision, Betopia helps organizations transform data in accurate, secure, efficient and intelligent manner.</p>
        <p className="mb-4">In today’s AI-driven world, the pace of change is relentless. Businesses must adapt or risk lag behind. At Betopia, we believe that technology should empower, not overwhelm. Starting from the group up and founded in Bangladesh with a global vision, Betopia assists organizations transform securely, efficiently, and intelligently.</p>
        <p className="mb-4">We deliver secure, cloud-native, AI-powered platforms that drive modernization and growth. From Cloud Modernization and Cybersecurity to AI & Analytics and enterprise-grade products, our solutions are built for scale, compliance, and measurable impact.</p>
        <p className="mb-4">We have taken a simple strategy to accredit businesses and for that we have blended quite a few things such as profound technical expertise, vendor-neutral multi-cloud solutions, and innovation-focused delivery starting from startups to enterprises to unlock their full potential.</p>
        <p className="mb-4">At Betopia, we’re more than a technology partner rather we’re a strategic enabler of transformation, assisting organizations navigate complexity, embrace innovation, and thrive in the AI era.</p>
        <p>Talking Bangladesh to the World, we make enterprise technology smarter, secure, and accessible for every sophisticated business.</p>
      </>
    )
  },
  {
    era: "02",
    year: "BRAND MOMENTUM",
    title: "Betopia reaches a multi-million-dollar brand milestone",
    description: (
      <>
        <p className="mb-4">Betopia Limited continues its upward growth trajectory, reaching a multi-million-dollar brand valuation driven by innovation-led services, global B2B engagements, and enterprise-grade technology delivery.</p>
        <p>Sustained focus on advanced engineering, customer success, and scalable digital solutions has strengthened Betopia’s brand presence across international markets, reinforcing its vision to become a globally recognized technology transformation company.</p>
      </>
    )
  },
  {
    era: "03",
    year: "FUTURE OUTLOOK",
    title: "The Continuously Adaptive Enterprise",
    description: (
      <>
        <p className="mb-4">Betopia Limited applies advanced technology and deep engineering expertise to help organizations reimagine what’s possible when unlocking innovation while balancing growth, resilience, and sustainability.</p>
        <p>We enable our clients not only to succeed in the present, but also to lead transformation, adapt continuously, and create meaningful digital legacies for years to come.</p>
      </>
    )
  }
];

export default function BrandTimelinePage() {
  return (
    <div className="bg-[#FAFaf9] min-h-screen text-[#1a1a1a] font-sans">

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative h-[100vh] flex flex-col justify-end overflow-hidden">
        {/* Full-bleed background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/brand.png"
            alt="Betopia Hero"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/60 to-transparent" />
          {/* Orange accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto w-full px-6 md:px-12 pb-20 pt-40">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-orange-400" />
            <span className="text-[11px] tracking-[0.35em] text-orange-400 uppercase font-bold">
              Betopia Brand Story
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8 max-w-3xl">
            Betopia Limited
            <br />
            <span className="text-orange-400">Brand Story</span>
          </h1>

          {/* Sub-copy */}
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-12">
            Enabling secure, intelligent transformation for modern businesses worldwide.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 md:gap-12 mb-14 border-t border-white/10 pt-10">
            {[
              { num: "5+", label: "Global Offices" },
              { num: "14+", label: "Years of Excellence" },
              { num: "80+", label: "Country Delivered" },
              { num: "40,000+", label: "Client Served" },
              { num: "85,000+", label: "Projects Delivered" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-semibold text-white">
                  {s.num}
                </p>
                <p className="text-[11px] tracking-[0.2em] text-white/40 uppercase font-semibold mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BRAND NARRATIVE SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-2 space-y-16">
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative bg-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-gray-100/50 hover:shadow-xl transition-shadow duration-500 group overflow-hidden">
              {/* Subtle accent blob */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-50 rounded-full blur-3xl group-hover:bg-orange-100 transition-colors duration-700 pointer-events-none" />

              {/* Tag / Eyebrow */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-orange-400" />
                <span className="text-[11px] tracking-[0.3em] text-orange-500 uppercase font-bold">
                  {item.year}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-10 leading-[1.2] tracking-tight relative z-10">
                {item.title}
              </h2>

              {/* Content */}
              <div className="text-gray-600 text-[17px] leading-[1.85] font-normal relative z-10">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </section>



    </div>
  );
}
