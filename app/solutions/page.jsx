"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Server,
  Cloud,
  ShieldCheck,
  Laptop,
  Zap,
  Layers,
  Award,
  HeartHandshake,
  Database,
  Globe,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

import solutionsData from "../data/solutions.json";

/* ─────────────────────── ICON MAP ─────────────────────── */

const iconMap = {
  Server, Cloud, ShieldCheck, Laptop, Zap, Layers, Award,
  HeartHandshake, Database, Globe, CheckCircle2, ArrowRight, ChevronRight,
};

function resolveIcon(name) {
  return iconMap[name] || Zap;
}

/* ─────────────────────── DATA ─────────────────────── */

const { overview } = solutionsData;

const solutions = overview.solutions.map(s => ({
  ...s,
  icon: resolveIcon(s.icon),
}));

const whyChoose = overview.whyChoose.map(s => ({
  ...s,
  icon: resolveIcon(s.icon),
}));

const technologies = overview.technologies;
const caseStudies = overview.caseStudies;

const processSteps = overview.processSteps.map(s => ({
  ...s,
  icon: resolveIcon(s.icon),
}));

/* ─────────────────────── COMPONENT ─────────────────────── */

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState("datacenter");
  const active = solutions.find((s) => s.id === activeTab);
  const ActiveIcon = active.icon;

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[85vh] flex items-center bg-[#04060e] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/serviceImg/Enterprise-Networking-Solutions.jpg"
            alt="Solutions"
            fill
            className="object-cover opacity-30 grayscale-[20%]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#04060e]/60 via-[#04060e]/80 to-[#04060e]" />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-brand-bright-orange/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48 w-full text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-bright-orange/10 border border-brand-bright-orange/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-bright-orange animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[4px] text-brand-bright-orange">
                Our Solutions
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.03] tracking-tight mb-6 max-w-5xl mx-auto">
              Transform Your Business with{" "}
              <span className="text-brand-bright-orange">
                Cutting-Edge Solutions
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
              From cloud migration to cybersecurity, we deliver comprehensive
              infrastructure solutions that drive growth, efficiency and
              innovation for enterprises worldwide.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/meeting"
                className="group inline-flex items-center gap-2 bg-brand-bright-orange text-white font-bold px-10 py-5 rounded-full hover:bg-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
              >
                Book a Consultation
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white border border-white/10 hover:border-white/30 font-medium px-8 py-5 rounded-full transition-all duration-300"
              >
                Explore Solutions <ChevronRight size={16} />
              </a>
            </div>
          </ScrollReveal>

          {/* Floating metrics */}
          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap justify-center gap-6 mt-16">
              {[
                { value: "300+", label: "Enterprise clients" },
                { value: "99.99%", label: "Guaranteed uptime" },
                { value: "40%", label: "Cost reduction" },
                { value: "24/7", label: "Expert support" },
              ].map((m, i) => (
                <div
                  key={i}
                  className="text-center px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/8 rounded-2xl"
                >
                  <div className="text-2xl font-black text-brand-bright-orange">
                    {m.value}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CORE SOLUTIONS ═══ */}
      <section id="solutions" className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-bright-orange/8 border border-brand-bright-orange/15 mb-5">
                <ShieldCheck size={14} className="text-brand-bright-orange" />
                <span className="text-[11px] font-bold uppercase tracking-[4px] text-brand-bright-orange">
                  Core Solutions
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                Comprehensive infrastructure solutions designed{" "}
                <span className="text-brand-bright-orange">
                  for modern enterprises
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Tab navigation */}
            <div className="lg:col-span-1 flex flex-col gap-3">
              {solutions.map((s) => {
                const Icon = s.icon;
                const isActive = s.id === activeTab;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveTab(s.id)}
                    className={`group flex items-center gap-4 w-full p-5 rounded-2xl border text-left transition-all duration-300 ${
                      isActive
                        ? "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-gray-100"
                        : "bg-white/50 border-gray-100/50 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    <div
                      className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? s.color + "15" : "#f3f4f6",
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: isActive ? s.color : "#9ca3af" }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-sm font-bold leading-snug transition-colors"
                        style={{ color: isActive ? s.color : "#374151" }}
                      >
                        {s.label}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">
                        {s.items.length} sub-solutions
                      </div>
                    </div>
                    {isActive && (
                      <ChevronRight
                        size={16}
                        style={{ color: s.color }}
                        className="shrink-0"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: Active solution detail */}
            <div className="lg:col-span-2">
              <div
                key={active.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] h-full"
              >
                {/* Header */}
                <div
                  className="p-8 md:p-10"
                  style={{ backgroundColor: active.color + "08" }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: active.color + "20" }}
                    >
                      <ActiveIcon size={26} style={{ color: active.color }} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        {active.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Items */}
                <div className="p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {active.items.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="group flex items-start gap-3 p-4 rounded-2xl border border-gray-50 hover:border-gray-100 hover:bg-gray-50 transition-all duration-200"
                    >
                      <div
                        className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: active.color + "15" }}
                      >
                        <CheckCircle2
                          size={13}
                          style={{ color: active.color }}
                        />
                      </div>
                      <span className="text-gray-700 font-medium text-[15px] leading-snug group-hover:text-brand-bright-orange transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-8 md:px-10 pb-8 md:pb-10">
                  <Link
                    href="/meeting"
                    className="group inline-flex items-center gap-2 font-bold text-sm text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: active.color }}
                  >
                    Explore {active.label} Solutions
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE ═══ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-bright-orange/8 border border-brand-bright-orange/15 mb-5">
                <Award size={14} className="text-brand-bright-orange" />
                <span className="text-[11px] font-bold uppercase tracking-[4px] text-brand-bright-orange">
                  The Betopia Advantage
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                Why Choose{" "}
                <span className="text-brand-bright-orange">Our Solutions</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 text-center hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}08, transparent)`,
                      }}
                    />
                    <div
                      className="relative z-10 w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: item.color + "15" }}
                    >
                      <Icon size={28} style={{ color: item.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGIES ═══ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-bright-orange/8 border border-brand-bright-orange/15 mb-5">
                <Zap size={14} className="text-brand-bright-orange" />
                <span className="text-[11px] font-bold uppercase tracking-[4px] text-brand-bright-orange">
                  Technologies
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                Technologies We Master
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                Industry-leading platforms and tools to build robust solutions
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {technologies.map((tech, i) => (
                <div
                  key={i}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-brand-bright-orange/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 relative flex items-center justify-center">
                    {/* Fallback icon-based visualization when logos aren't present */}
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center text-gray-400 font-black text-xs">
                      {tech.name.slice(0, 2).toUpperCase()}
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-700 group-hover:text-brand-bright-orange transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SUCCESS STORIES ═══ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-bright-orange/8 border border-brand-bright-orange/15 mb-5">
                <Award size={14} className="text-brand-bright-orange" />
                <span className="text-[11px] font-bold uppercase tracking-[4px] text-brand-bright-orange">
                  Success Stories
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                Real Results from{" "}
                <span className="text-brand-bright-orange">Real Clients</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Across diverse industries, our solutions consistently deliver
                measurable impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col">
                  {/* Top bar */}
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: cs.color }}
                  />

                  {/* Industry badge + metric */}
                  <div className="p-8 pb-0 flex items-start justify-between">
                    <div>
                      <span
                        className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: cs.color + "15",
                          color: cs.color,
                        }}
                      >
                        {cs.industry}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mt-3">
                        {cs.label}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div
                        className="text-4xl font-black leading-none"
                        style={{ color: cs.color }}
                      >
                        {cs.metric}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                        {cs.metricLabel}
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Challenge & Solution */}
                    <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
                      <div>
                        <p className="text-xs font-black uppercase tracking-wider text-gray-400 mb-1">
                          Challenge
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {cs.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-wider text-gray-400 mb-1">
                          Solution
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-gray-400 mb-3">
                        Results
                      </p>
                      <ul className="space-y-2">
                        {cs.results.map((r, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <div
                              className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                              style={{ backgroundColor: cs.color + "15" }}
                            >
                              <CheckCircle2
                                size={11}
                                style={{ color: cs.color }}
                              />
                            </div>
                            <span className="text-gray-700 text-sm font-medium">
                              {r}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-bright-orange/8 border border-brand-bright-orange/15 mb-5">
                <Layers size={14} className="text-brand-bright-orange" />
                <span className="text-[11px] font-bold uppercase tracking-[4px] text-brand-bright-orange">
                  Our Process
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                A Proven Methodology to{" "}
                <span className="text-brand-bright-orange">
                  Deliver Exceptional Results
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p, i) => {
              const Icon = p.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-brand-bright-orange/20 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(247,149,73,0.15)]">
                    {/* Big step bg */}
                    <div className="text-[64px] font-black text-gray-100 group-hover:text-orange-50 transition-colors leading-none absolute top-6 right-6 select-none">
                      {p.step}
                    </div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-brand-bright-orange/10 flex items-center justify-center mb-5 group-hover:bg-brand-bright-orange transition-colors duration-300">
                        <Icon
                          size={20}
                          className="text-brand-bright-orange group-hover:text-white transition-colors"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-bright-orange transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                    {/* Connector */}
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-brand-bright-orange/10 rounded-full items-center justify-center z-20">
                        <ChevronRight
                          size={12}
                          className="text-brand-bright-orange"
                        />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="relative bg-[#04060e] rounded-4xl overflow-hidden">
              {/* Glows */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(247,149,73,0.18),transparent_65%)] pointer-events-none" />
              <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/8 blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-bright-orange/5 blur-[100px] pointer-events-none" />

              <div className="relative z-10 p-12 md:p-20 lg:p-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Left */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                      <span className="w-2 h-2 rounded-full bg-brand-bright-orange animate-pulse" />
                      <span className="text-[11px] font-bold uppercase tracking-[4px] text-gray-300">
                        Ready to Get Started?
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                      Let&apos;s Build Something{" "}
                      <span className="text-brand-bright-orange">
                        Amazing Together
                      </span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      Schedule a free consultation with our experts to discuss
                      your infrastructure needs and discover how we can help
                      transform your business.
                    </p>
                  </div>

                  {/* Right */}
                  <div className="space-y-4">
                    {[
                      "Free 60-minute discovery session",
                      "Custom solution architecture plan",
                      "ROI analysis & cost estimation",
                      "No commitment required",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-bright-orange/15 flex items-center justify-center shrink-0">
                          <CheckCircle2
                            size={13}
                            className="text-brand-bright-orange"
                          />
                        </div>
                        <span className="text-gray-300 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}

                    <div className="pt-4 flex flex-wrap gap-4">
                      <Link
                        href="/meeting"
                        className="group inline-flex items-center gap-2 bg-brand-bright-orange text-white font-bold px-8 py-4 rounded-full hover:bg-orange-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20"
                      >
                        Book Free Consultation
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white border border-white/10 hover:border-white/30 font-medium px-8 py-4 rounded-full transition-all duration-300"
                      >
                        Contact Sales
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
