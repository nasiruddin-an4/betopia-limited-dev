"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as Lucide from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CtaSection from "../../components/CtaSection";
import ScrollReveal from "../../components/ScrollReveal";
import RollingButton from "../../components/RollingButton";
import servicesData from "../../data/services.json";

// Dynamic Icon Resolver
const getIcon = (name, className = "w-6 h-6") => {
  if (!name) return null;
  const IconComponent = Lucide[name] || Lucide.HelpCircle;
  return <IconComponent className={className} />;
};

// Map fallback icons for benefit items dynamically based on index to ensure premium design
const benefitIcons = ["Zap", "Shield", "Users", "Activity", "Globe", "Award", "Clock", "CheckCircle2"];

// Slug mapping to services.json keys
const slugMap = {
  "ai-analytics": "ai-analytics",
  "cloud-modernization": "cloud-modernization",
  "cybersecurity": "cybersecurity",
  "cyber-security": "cybersecurity",
  "managed-services": "managed-services",
  "software-development": "software-development",
  "team-augmentation": "team-augmentation"
};

// Custom premium aesthetic color schemes dynamically matched per service
const serviceColors = {
  "ai-analytics": {
    accent: "from-orange-500 via-amber-500 to-orange-600",
    accentBg: "bg-orange-500/10",
    accentText: "text-brand-bright-orange",
    glow: "from-orange-500/10 to-transparent",
    heroBg: "/servicesImg/coverImg/AI & Data analysis.png"
  },
  "cloud-modernization": {
    accent: "from-orange-500 via-amber-500 to-orange-600",
    accentBg: "bg-orange-500/10",
    accentText: "text-brand-bright-orange",
    glow: "from-orange-500/10 to-transparent",
    heroBg: "/servicesImg/coverImg/cloud modernization.png"
  },
  "cybersecurity": {
    accent: "from-orange-500 via-amber-500 to-orange-600",
    accentBg: "bg-orange-500/10",
    accentText: "text-brand-bright-orange",
    glow: "from-orange-500/10 to-transparent",
    heroBg: "/servicesImg/coverImg/Cyber security services.png"
  },
  "managed-services": {
    accent: "from-orange-500 via-amber-500 to-orange-600",
    accentBg: "bg-orange-500/10",
    accentText: "text-brand-bright-orange",
    glow: "from-orange-500/10 to-transparent",
    heroBg: "/servicesImg/coverImg/managed services.png"
  },
  "software-development": {
    accent: "from-orange-500 via-amber-500 to-orange-600",
    accentBg: "bg-orange-500/10",
    accentText: "text-brand-bright-orange",
    glow: "from-orange-500/10 to-transparent",
    heroBg: "/servicesImg/coverImg/Software development.png"
  },
  "team-augmentation": {
    accent: "from-orange-500 via-amber-500 to-orange-600",
    accentBg: "bg-orange-500/10",
    accentText: "text-brand-bright-orange",
    glow: "from-orange-500/10 to-transparent",
    heroBg: "/servicesImg/coverImg/Resource Argumentation.png"
  }
};

// Premium Interactive CSS/SVG Feature Visualizers for All Core Capabilities
const FeatureVisualizer = ({ title }) => {
  const t = title.toLowerCase();

  // 1. Data Strategy & Governance / Cyber Risk & Governance Services
  if (t.includes("governance") || t.includes("risk")) {
    return (
      <div className="w-full h-full min-h-[350px] bg-slate-950 flex flex-col items-center justify-center p-8 relative overflow-hidden group select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_70%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-brand-bright-orange/20 animate-ping duration-1000" />
            <div className="absolute inset-4 rounded-full border border-brand-bright-orange/30 animate-pulse" />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Lucide.Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <span className="text-white font-bold text-lg mb-2">Governance & Risk perimeters</span>
          <span className="text-gray-400 text-xs max-w-[260px] leading-relaxed">
            Real-time compliance validation, regulatory mapping matrix, and enterprise security perimeters.
          </span>
        </div>
      </div>
    );
  }

  // 2. Data Engineering & Platforms
  if (t.includes("engineering") || t.includes("platform")) {
    return (
      <div className="w-full h-full min-h-[350px] bg-slate-950 flex flex-col items-center justify-center p-8 relative overflow-hidden group select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_70%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 flex flex-col items-center w-full text-center">
          <div className="flex gap-4 items-center mb-8 relative w-full justify-center">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-brand-bright-orange">
              <Lucide.Database className="w-5 h-5 animate-pulse" />
            </div>
            <div className="w-20 h-[2px] bg-orange-500/20 relative overflow-hidden">
              <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-brand-bright-orange to-transparent animate-shimmer" style={{ animationDuration: '1.5s' }} />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20 text-white">
              <Lucide.Cpu className="w-7 h-7 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div className="w-20 h-[2px] bg-orange-500/20 relative overflow-hidden">
              <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-brand-bright-orange to-transparent animate-shimmer" style={{ animationDuration: '1.5s', animationDelay: '0.75s' }} />
            </div>
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-brand-bright-orange">
              <Lucide.Server className="w-5 h-5 animate-pulse" />
            </div>
          </div>
          <span className="text-white font-bold text-lg mb-2">Scalable Data Pipelines</span>
          <span className="text-gray-400 text-xs max-w-[260px] leading-relaxed">
            High-performance streaming pipelines processing active analytics payloads continuously.
          </span>
        </div>
      </div>
    );
  }

  // 3. AI & Advanced Analytics
  if (t.includes("ai") || t.includes("analytics")) {
    return (
      <div className="w-full h-full min-h-[350px] bg-slate-950 flex flex-col items-center justify-center p-8 relative overflow-hidden group select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_70%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-brand-bright-orange/5 animate-pulse" />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Lucide.Brain className="w-8 h-8 text-white animate-bounce" style={{ animationDuration: '3s' }} />
            </div>
          </div>
          <span className="text-white font-bold text-lg mb-2">Cognitive AI Core</span>
          <span className="text-gray-400 text-xs max-w-[260px] leading-relaxed">
            Advanced neural net execution clusters providing predictive insights and machine intelligence.
          </span>
        </div>
      </div>
    );
  }

  // 4. BI & Decision Enablement / FinOps & Cost Optimization
  if (t.includes("decision") || t.includes("bi") || t.includes("finops") || t.includes("cost")) {
    return (
      <div className="w-full h-full min-h-[350px] bg-slate-950 flex flex-col items-center justify-center p-8 relative overflow-hidden group select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_70%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 flex flex-col items-center w-full max-w-[280px] text-center">
          <div className="flex items-end gap-3 h-20 mb-6">
            <div className="w-5 bg-orange-500/20 rounded-t-md h-8 animate-pulse" />
            <div className="w-5 bg-gradient-to-t from-orange-500 to-amber-500 rounded-t-md h-16 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-5 bg-orange-500/20 rounded-t-md h-12 animate-pulse" style={{ animationDelay: '0.4s' }} />
            <div className="w-5 bg-gradient-to-t from-orange-500 to-amber-500 rounded-t-md h-20 animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
          <span className="text-white font-bold text-lg mb-2">Optimization Dashboard</span>
          <span className="text-gray-400 text-xs leading-relaxed">
            Real-time interactive monitoring of cost allocations and resource performance metrics.
          </span>
        </div>
      </div>
    );
  }

  // 5. Cloud Strategy & Migration / Transition Services
  if (t.includes("migration") || t.includes("transition")) {
    return (
      <div className="w-full h-full min-h-[350px] bg-slate-950 flex flex-col items-center justify-center p-8 relative overflow-hidden group select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_70%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
            <div className="absolute -top-2 w-4 h-4 rounded bg-brand-bright-orange animate-bounce" style={{ animationDuration: '2s' }} />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Lucide.CloudLightning className="w-8 h-8 text-white" />
            </div>
          </div>
          <span className="text-white font-bold text-lg mb-2">Automated Migration</span>
          <span className="text-gray-400 text-xs max-w-[260px] leading-relaxed">
            Strangler-fig migration engine transferring complex legacy workloads with zero operational downtime.
          </span>
        </div>
      </div>
    );
  }

  // 6. Cloud-Native Architecture
  if (t.includes("native") || t.includes("architecture")) {
    return (
      <div className="w-full h-full min-h-[350px] bg-slate-950 flex flex-col items-center justify-center p-8 relative overflow-hidden group select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_70%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-xl border border-brand-bright-orange/30 animate-spin" style={{ animationDuration: '10s' }} />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Lucide.Layers className="w-8 h-8 text-white" />
            </div>
          </div>
          <span className="text-white font-bold text-lg mb-2">Microservices Cluster</span>
          <span className="text-gray-400 text-xs max-w-[260px] leading-relaxed">
            Highly resilient, decentralized container nodes governed by automated orchestration engines.
          </span>
        </div>
      </div>
    );
  }

  // 7. DevOps & Automation / Agile Development
  if (t.includes("devops") || t.includes("automation") || t.includes("agile")) {
    return (
      <div className="w-full h-full min-h-[350px] bg-slate-950 flex flex-col items-center justify-center p-8 relative overflow-hidden group select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_70%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
            <svg className="w-24 h-24 stroke-current text-brand-bright-orange" viewBox="0 0 100 50" fill="none" strokeWidth="2.5">
              <path d="M25 25 C10 10, 10 40, 25 25 C40 10, 60 40, 75 25 C90 10, 90 40, 75 25 C60 10, 40 40, 25 25 Z" className="animate-pulse" />
            </svg>
            <div className="absolute w-12 h-12 rounded-full bg-slate-950 border border-brand-bright-orange/20 flex items-center justify-center">
              <Lucide.Activity className="w-5 h-5 text-brand-bright-orange animate-pulse" />
            </div>
          </div>
          <span className="text-white font-bold text-lg mb-2">Continuous CI/CD Loop</span>
          <span className="text-gray-400 text-xs max-w-[260px] leading-relaxed">
            Automated deployment workflows guaranteeing continuous, flawless, and rapid code deployment loops.
          </span>
        </div>
      </div>
    );
  }

  // 8. Cybersecurity threat detection / risk
  if (t.includes("detection") || t.includes("response") || t.includes("threat")) {
    return (
      <div className="w-full h-full min-h-[350px] bg-slate-950 flex flex-col items-center justify-center p-8 relative overflow-hidden group select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_70%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-brand-bright-orange/20 animate-ping duration-1000" />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Lucide.Eye className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
          <span className="text-white font-bold text-lg mb-2">Threat Intelligence SOC</span>
          <span className="text-gray-400 text-xs max-w-[260px] leading-relaxed">
            Real-time threat landscape interceptor actively hunting and neutralizing breach vectors.
          </span>
        </div>
      </div>
    );
  }

  // 9. Fully Managed / Co-Managed IT Services / Dedicated Developer Teams / Augmentation
  if (t.includes("managed") || t.includes("team") || t.includes("augmentation") || t.includes("expert")) {
    return (
      <div className="w-full h-full min-h-[350px] bg-slate-950 flex flex-col items-center justify-center p-8 relative overflow-hidden group select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_70%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="flex gap-2 items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-slate-900 border border-brand-bright-orange/30 flex items-center justify-center text-brand-bright-orange">
              <Lucide.User className="w-5 h-5 animate-pulse" />
            </div>
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg text-white">
              <Lucide.Users className="w-7 h-7" />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-900 border border-brand-bright-orange/30 flex items-center justify-center text-brand-bright-orange">
              <Lucide.UserCheck className="w-5 h-5 animate-pulse" />
            </div>
          </div>
          <span className="text-white font-bold text-lg mb-2">Augmented Engineering Hub</span>
          <span className="text-gray-400 text-xs max-w-[260px] leading-relaxed">
            Elite engineering resources integrated seamlessly into your standard repository structures and daily sprints.
          </span>
        </div>
      </div>
    );
  }

  // Fallback visualizer: Build-Operate-Transfer / general
  return (
    <div className="w-full h-full min-h-[350px] bg-slate-950 flex flex-col items-center justify-center p-8 relative overflow-hidden group select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_70%)]" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Lucide.Settings className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '10s' }} />
          </div>
        </div>
        <span className="text-white font-bold text-lg mb-2">Automated Capabilities</span>
        <span className="text-gray-400 text-xs max-w-[260px] leading-relaxed">
          Rigid operational resilience models combining automated perimeters and expert-led engineering protocols.
        </span>
      </div>
    </div>
  );
};

export default function ServiceDynamicPage({ params }) {
  const unwrappedParams = React.use(params);
  const { slug } = unwrappedParams;

  const decodedSlug = decodeURIComponent(slug);
  const normalizedSlug = decodedSlug.toLowerCase().trim();
  const serviceKey = slugMap[normalizedSlug] || normalizedSlug;

  const data = servicesData[serviceKey];

  if (!data) {
    return notFound();
  }

  const [openFaq, setOpenFaq] = useState(0);

  // Retrieve service specific color mapping
  const theme = serviceColors[serviceKey] || {
    accent: "from-orange-500 via-amber-500 to-orange-600",
    accentBg: "bg-orange-500/10",
    accentText: "text-brand-bright-orange",
    glow: "from-orange-500/10 to-transparent",
    heroBg: "/brand-hero-bg.png"
  };

  return (
    <main className="min-h-screen text-black bg-white">
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="fixed inset-0 z-0">
          <Image
            src={data.heroBg || theme.heroBg}
            alt={data.title}
            fill
            className="object-cover opacity-45"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/20 z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 z-0" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="flex flex-col py-20 lg:py-32">


            <ScrollReveal delay={0.1}>
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.08] tracking-tight">
                  {data.titleHighlights && (
                    <span className="text-brand-bright-orange block md:inline md:mr-4 mb-2 md:mb-0">
                      {data.titleHighlights}
                    </span>
                  )}
                  {data.heroTitle || `${data.title} built for scale.`}
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl">
                  {data.heroDesc}
                </p>
                <div className="flex flex-wrap gap-6">
                  <RollingButton
                    text="Book a Consultation"
                    href="/contact"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ INTRODUCTION SECTION (Alternating Style) ═══════════════ */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Overview Details */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 leading-tight">
                  {data.overviewTitle}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {data.overviewDesc}
                </p>
              </ScrollReveal>
            </div>

            {/* Right Column: Key Differentiators / Checklist */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.2}>
                <div className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-10 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-8">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-4">
                    {data.whyBetopia.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-700">
                        <div className={`w-6 h-6 mt-0.5 rounded-full ${theme.accentBg} flex items-center justify-center shrink-0 ${theme.accentText}`}>
                          <Lucide.CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-[15px] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-4 font-semibold">
                      See how we collaborate with enterprises around the globe.
                    </p>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 font-bold hover:gap-3 transition-all ${theme.accentText}`}
                    >
                      Request Consultation <Lucide.ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ KEY ADVANTAGES / BENEFITS SECTION ═══════════════ */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                Key Advantages
              </h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-2">
                Discover the operational, financial and strategic gains of partnering with Betopia Limited.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.benefits.map((benefit, idx) => {
              const iconName = benefitIcons[idx % benefitIcons.length];
              return (
                <ScrollReveal key={idx} delay={idx * 0.08}>
                  <div className="h-full flex flex-col items-start p-8 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className={`w-12 h-12 mb-6 rounded-xl bg-orange-50 flex items-center justify-center ${theme.accentText} group-hover:bg-brand-bright-orange group-hover:text-white transition-all shadow-sm`}>
                      {getIcon(iconName, "w-6 h-6")}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-bright-orange transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {benefit.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHAT WE DO / CORE MODULES SECTION ═══════════════ */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                Core Capabilities
              </h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-4">
                Explore the deep technological capabilities and operations we engineer for your enterprise.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-10">
            {data.whatWeDo.map((module, idx) => (
              <div key={idx} className="sticky top-28">
                <ScrollReveal>
                  <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl p-0">
                    <div className="grid lg:grid-cols-12 gap-0 items-center">
                      {/* Info Column */}
                      <div className={`lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                        <div className="flex items-center gap-4 mb-4">
                          <span className={`text-[12px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${theme.accentBg} ${theme.accentText}`}>
                            {module.subtitle}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-tight">
                          {module.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {module.desc}
                        </p>
                      </div>

                      {/* Image Column: Renders custom-crafted digital tech image */}
                      <div className="lg:col-span-5 h-[450px] relative bg-slate-950 flex items-center justify-center overflow-hidden">
                        <Image
                          src={module.image}
                          alt={module.title}
                          fill
                          className="object-cover hover:scale-105 transition-all duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROVEN METHODOLOGY / STEP PACKAGES SECTION ═══════════════ */}
      <section className="py-24 bg-gray-50 relative overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-5xl font-semibold text-gray-700 mb-2 tracking-tight">
                Proven Methodology
              </h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-2">
                We implement a strict, lifecycle-driven process ensuring operational success and complete transparency.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.methodology.map((pkg, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08} className="h-full">
                <div className="h-full bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 text-9xl font-black text-gray-50 opacity-40 group-hover:text-orange-50 transition-colors pointer-events-none select-none">
                    {pkg.step}
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-brand-bright-orange mb-8 group-hover:scale-110 group-hover:bg-brand-bright-orange group-hover:text-white transition-all shadow-sm">
                      {getIcon("Settings", "w-6 h-6")}
                    </div>

                    <div className="mb-4">
                      <span className="text-xs font-bold tracking-widest text-brand-bright-orange uppercase bg-orange-50 px-3 py-1 rounded-full">
                        Step {pkg.step}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-700 mb-4 group-hover:text-brand-bright-orange transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {pkg.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BEST PRACTICES SECTION ═══════════════ */}
      <section className="py-24 bg-white border-t border-gray-100 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                Best Practices We Follow
              </h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-2">
                We combine industry frameworks and rigid engineering standards to guarantee total resilience.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {data.bestPractices.map((practice, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="flex items-start gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-brand-bright-orange transition-colors duration-300">
                  <div className={`w-10 h-10 mt-1 rounded-lg ${theme.accentBg} flex items-center justify-center shrink-0 ${theme.accentText}`}>
                    <Lucide.ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {practice.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {practice.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQS SECTION ═══════════════ */}
      <section className="py-24 bg-gray-50 relative border-t border-gray-150">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-2 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed mt-2">
                Everything you need to know about partnering and launching solutions with Betopia.
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all shadow-sm">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between font-bold text-lg text-gray-900 focus:outline-none hover:text-brand-bright-orange transition-colors"
                    >
                      <span>{faq.question}</span>
                      <Lucide.ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-bright-orange" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-6 text-gray-600 text-md leading-relaxed border-t border-gray-50 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <div className="relative bg-white">
        <CtaSection />
      </div>
    </main>
  );
}
