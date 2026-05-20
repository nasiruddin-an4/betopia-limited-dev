"use client";

import React from "react";
import {
  Headphones,
  GitMerge,
  Zap,
  Shield,
  Database,
  Globe,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const integrationIcons = [
  { Icon: Zap, delay: "0s", top: "18%", left: "12%" },
  { Icon: Shield, delay: "0.4s", top: "14%", left: "68%" },
  { Icon: Database, delay: "0.8s", top: "62%", left: "18%" },
  { Icon: Globe, delay: "1.2s", top: "65%", left: "72%" },
  { Icon: GitMerge, delay: "0.6s", top: "38%", left: "6%" },
];

export default function BentoSection() {
  return (
    <section className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span className="text-[12px] font-bold uppercase tracking-[4px] text-orange-500">
                Platform Experience
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              Designed for the People
              <br className="hidden md:block" /> Who Run Your Business.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-gray-400 text-lg leading-relaxed">
              Enterprise software should empower your teams, not frustrate them.
              Betopia platforms combine the depth of enterprise functionality
              with the clarity and usability that modern business users demand.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-4">
          {/* Top Card — Interface Preview */}
          <ScrollReveal delay={0.4}>
            <div className="bg-brand-black border-t-2 border-white/6 border-b-0 rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[260px]">
              {/* Left: Text */}
              <div className="flex flex-col justify-center py-8 md:py-20 px-8 md:px-12 md:w-[45%] shrink-0">
                <span className="inline-block self-start bg-brand-bright-orange text-black text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
                  Platform Experience
                </span>
                <h3 className="text-white text-2xl md:text-4xl font-semibold tracking-tight mb-4 leading-tight">
                  Interfaces Built Around How Teams Actually Work.
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Betopia platforms are designed through extensive research with
                  real enterprise users — resulting in interfaces that surface
                  the right information at the right time, reduce cognitive load
                  and enable faster, more confident action across every business
                  function.
                </p>
              </div>

              {/* Right: Fake UI Mockup */}
              <div className="flex-1 flex items-center justify-end relative">
                {/* Outer browser chrome */}
                <div className="w-full h-[460px] bg-brand-black rounded-xl border border-white/8 overflow-hidden mt-5 -mr-20 -mb-20">
                  {/* Browser bar */}
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/6 bg-brand-black">
                    <span className="w-4 h-4 rounded-full bg-red-500/70" />
                    <span className="w-4 h-4 rounded-full bg-yellow-400/70" />
                    <span className="w-4 h-4 rounded-full bg-green-500/70" />
                  </div>
                  {/* Content area */}
                  <div className="p-4 flex gap-3">
                    {/* Sidebar */}
                    <div className="w-[30%] flex flex-col gap-2 pt-1">
                      {[60, 80, 50, 70, 45].map((w, i) => (
                        <div
                          key={i}
                          className="h-3 rounded-full bg-white/10"
                          style={{ width: `${w}%` }}
                        />
                      ))}
                    </div>
                    {/* Main panel */}
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="h-5 rounded bg-white/10 w-[90%]" />
                      <div className="h-5 rounded bg-white/6 w-full" />
                      <div className="h-5 rounded bg-white/6 w-[80%]" />
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4].map((n) => (
                          <div
                            key={n}
                            className="h-20 rounded-lg bg-white/6 border border-white/5"
                          />
                        ))}
                      </div>
                      <div className="h-5 rounded bg-white/6 w-[70%] mt-1" />
                      <div className="h-5 rounded bg-white/6 w-[55%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bottom Left — Easy Integration */}
            <ScrollReveal delay={0.5}>
              <div className="bg-brand-black border-t-2 border-white/6 border-b-0 rounded-2xl p-8 relative overflow-hidden min-h-[380px] flex flex-col justify-end h-full">
                {/* Floating icons */}
                <div className="absolute inset-0">
                  {integrationIcons.map(({ Icon, delay, top, left }, i) => (
                    <div
                      key={i}
                      className="absolute w-9 h-9 rounded-full bg-white/6 border border-white/8 flex items-center justify-center"
                      style={{
                        top,
                        left,
                        animation: `floatIcon 4s ease-in-out infinite`,
                        animationDelay: delay,
                      }}
                    >
                      <Icon
                        size={16}
                        className="text-white/50"
                        strokeWidth={1.5}
                      />
                    </div>
                  ))}
                  {/* Centre circle */}
                  <div
                    className="absolute w-14 h-14 rounded-full bg-brand-bright-orange shadow-[0_0_30px_rgba(200,241,53,0.4)] flex items-center justify-center"
                    style={{
                      top: "38%",
                      left: "46%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <GitMerge
                      size={22}
                      className="text-black"
                      strokeWidth={2}
                    />
                  </div>
                  {/* Connecting dots */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-white/20"
                      style={{
                        top: `${20 + i * 12}%`,
                        left: `${30 + (i % 3) * 18}%`,
                        animation: `pulse 2s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Text */}
                <div className="relative z-10 pt-24">
                  <h3 className="text-white font-bold text-2xl mb-3 leading-snug">
                    Ecosystem Integration — Not Replacement.
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Betopia platforms connect seamlessly with your existing
                    technology stack — integrating with ERPs, CRMs,
                    communication tools, identity providers and third-party APIs
                    — so you accelerate transformation without starting from
                    scratch.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Bottom Right — 24/7 Support */}
            <ScrollReveal delay={0.6}>
              <div className="bg-brand-black border-t-2 border-white/6 border-b-0 rounded-2xl p-8 relative overflow-hidden min-h-[380px] flex flex-col justify-end h-full">
                {/* Big 24/7 BG text */}
                <div
                  className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                  aria-hidden="true"
                >
                  <span className="text-[130px] md:text-[160px] font-black text-white/4 leading-none tracking-tighter">
                    24/7
                  </span>
                </div>

                {/* Support button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="flex items-center gap-2 bg-brand-bright-orange hover:bg-[#d4f74f] transition-colors duration-200 text-black font-bold text-sm px-5 py-2.5 rounded-full shadow-[0_0_30px_rgba(200,241,53,0.35)]">
                    <Headphones size={16} strokeWidth={2} />
                    Support
                  </button>
                </div>

                {/* Text */}
                <div className="relative z-10 pt-26">
                  <h3 className="text-white font-bold text-2xl mb-3 leading-snug">
                    Enterprise Support That Exceeds Your SLA.
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our global support operations span multiple time zones,
                    providing round-the-clock technical assistance, incident
                    management and proactive platform health monitoring.
                    Recognized by enterprise clients for exceptional response
                    times and genuine product expertise.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Float animation keyframes */}
      <style jsx>{`
        @keyframes floatIcon {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.3);
          }
        }
      `}</style>
    </section>
  );
}
