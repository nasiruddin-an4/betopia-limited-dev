"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import {
  Cpu,
  Shield,
  Handshake,
  ClipboardCheck,
  Users,
  Building2,
  Globe,
  Rocket,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════ */
const pillars = [
  {
    icon: Cpu,
    title: "Proprietary IP & Innovation",
    description:
      "Unlike firms that rent headcount, we bring real product IP and enterprise-grade digital products to every engagement.",
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    icon: Handshake,
    title: "Strategic Ownership Culture",
    description:
      "We are self-funded and outcomes-driven. We think like partners, not vendors, ensuring our incentives are always aligned with your long-term commercial success.",
    gradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    icon: ClipboardCheck,
    title: "Enterprise-Grade Governance",
    description:
      "We operate under a structured model with defined SLAs, milestone accountability and executive-level reporting to ensure complete delivery confidence.",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
];

const stats = [
  {
    value: "5,000+",
    label: "Production-Ready Engineers",
    description:
      "A massive bench of specialized developers, architects and AI experts capable of handling any project scale.",
    icon: Users,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    value: "300+",
    label: "Trusted Organizations",
    description:
      "Global enterprises that trust us to architect and scale their mission-critical technology platforms.",
    icon: Building2,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
  },
  {
    value: "4",
    label: "Global Hubs",
    description:
      "United States (Suwanee, GA), UAE (Dubai), Bangladesh (Dhaka) and the Philippines.",
    icon: Globe,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════════════════════════ */
function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  /* Extract numeric part and suffix (e.g. "5,000+" → "5,000" + "+") */
  const numericString = value.replace(/[^0-9,]/g, "");
  const suffix = value.replace(/[0-9,]/g, "");
  const cleanNum = parseInt(numericString.replace(/,/g, ""), 10);
  const formatted = numericString; // keep original formatting

  return (
    <span ref={ref} className="tabular-nums">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {formatted}
          {suffix}
        </motion.span>
      ) : (
        <span className="opacity-0">{value}</span>
      )}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
export default function TestimonialsMetrics() {
  return (
    <section className="bg-gray-50 py-24 overflow-hidden">
      <div className="container mx-auto px-5 md:px-4">
        {/* ─── Section Header ─── */}
        <ScrollReveal>
          <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span className="text-[11px] font-bold uppercase tracking-[4px] text-orange-500">
                Who We Are
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center tracking-tight leading-tight">
              A Global Engineering Engine Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                Real-World Complexity
              </span>
            </h2>
            <p className="text-center text-gray-500 text-lg leading-relaxed max-w-2xl">
              Betopia Limited architects, deploys and manages AI-powered cloud
              and enterprise software platforms that help organizations operate
              with greater speed, security and strategic clarity.
            </p>
          </div>
        </ScrollReveal>

        {/* ─── Hero Card with Image ─── */}
        <ScrollReveal delay={0.08}>
          <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 p-3 md:p-3 flex flex-col md:flex-row gap-8 lg:gap-14 items-center w-full mb-8">
            {/* Left Graphic */}
            <div className="w-full md:w-[55%] h-[300px] md:h-[380px] bg-gradient-to-br from-[#0c2259] via-[#085a95] to-[#01b3d8] rounded-[18px] relative overflow-hidden shrink-0 shadow-inner">
              <img
                src="/bentoimg.png"
                alt="Betopia engineering illustration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-[45%] flex flex-col items-start px-4 md:px-0 md:pr-10 pb-8 md:pb-0">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[3px] text-orange-500">
                  Our Mission
                </span>
              </div>
              <h3 className="text-2xl lg:text-[26px] font-semibold text-[#0c2340] leading-[1.3] mb-5 text-balance">
                Empowering Organizations with Secure, Cloud-Native & AI-Powered
                Platforms
              </h3>
              <p className="text-gray-500 text-[16px] leading-relaxed">
                Whether functioning as an invisible extension of a
                partner&apos;s team or a direct enterprise consultant, we power
                the delivery excellence behind your digital transformation —
                ensuring high availability and performance optimization across
                evolving infrastructure environments.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── Three Pillars ─── */}
        <ScrollReveal delay={0.12}>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6 px-1">
              <h3 className="text-lg font-semibold text-gray-800">
                The Three Pillars of the Betopia Identity
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <ScrollReveal key={pillar.title} delay={0.14 + i * 0.08}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      }}
                      className="group relative bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 p-7 md:p-8 h-full flex flex-col cursor-default overflow-hidden"
                    >
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                          <Icon className="w-8 h-8 text-gray-900" />
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
                          {pillar.title}
                        </h4>

                        {/* Description */}
                        <p className="text-gray-500 text-md leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* ─── Stats / Who We Are in Numbers ─── */}
        <ScrollReveal delay={0.18}>
          <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-lg font-semibold text-gray-800">
                Who We Are in Numbers
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <ScrollReveal key={stat.label} delay={0.22 + i * 0.08}>
                    <div className="flex flex-col">
                      {/* Number */}
                      <div className="flex items-center gap-4 mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center shrink-0`}
                        >
                          <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                        </div>
                        <span className="text-4xl font-bold text-gray-500">
                          <AnimatedNumber value={stat.value} />
                        </span>
                      </div>

                      {/* Label */}
                      <h4 className="text-[15px] font-semibold text-gray-800 mb-1.5 pl-14">
                        {stat.label}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-500 text-sm leading-relaxed pl-14">
                        {stat.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* ─── Not Just a Vendor tagline ─── */}
        <ScrollReveal delay={0.24}>
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm font-medium tracking-wide">
              We are not just a vendor — we are a{" "}
              <span className="text-gray-700 font-semibold">
                global engineering engine
              </span>{" "}
              designed to handle real-world complexity.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
