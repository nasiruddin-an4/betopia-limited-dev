"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Server,
  Database,
  Monitor,
  Layers,
  Box,
  HardDrive,
  Award,
  ShieldCheck,
  Shield,
  Activity,
  Cloud,
  Zap,
  Globe,
  Lock,
  Eye,
  Wifi,
  Cpu,
  Network,
  Brain,
  Bot,
  FileSearch,
  BarChart3,
  LineChart,
  Settings,
  GitBranch,
  Code,
  Rocket,
  RefreshCw,
  Terminal,
  Container,
  FileCode,
  Laptop,
  Mail,
  Fingerprint,
  Key,
  UserCheck,
  Scan,
  Search,
  FileText,
  AlertTriangle,
  Radio,
  Smartphone,
  Camera,
  Router,
  Workflow,
  Binary,
  CircuitBoard,
  AppWindow,
  Blocks,
  PanelLeft,
  Headphones,
  MessageSquare,
  HeartHandshake,
  Megaphone,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import RollingButton from "./RollingButton";

/* ─────── Icon Mapping ─────── */
const iconMap = {
  Server, Database, Monitor, Layers, Box, HardDrive, Award, ShieldCheck,
  Shield, Activity, Cloud, Zap, Globe, Lock, Eye, Wifi, Cpu, Network,
  Brain, Bot, FileSearch, BarChart3, LineChart, Settings, GitBranch,
  Code, Rocket, RefreshCw, Terminal, Container, FileCode, Laptop,
  Mail, Fingerprint, Key, UserCheck, Scan, Search, FileText,
  AlertTriangle, Radio, Smartphone, Camera, Router, Workflow, Binary,
  CircuitBoard, AppWindow, Blocks, PanelLeft, Headphones, MessageSquare,
  HeartHandshake, Megaphone, CheckCircle2, ArrowRight, ChevronRight,
};

function resolveIcon(name) {
  return iconMap[name] || Shield;
}

/* ─────── Image Pool ─────── */
const imagePool = [
  "/img/10001.jpeg",
  "/img/10002.jpeg",
  "/img/10003.jpeg",
  "/img/10004.jpeg",
  "/img/10005.jpeg",
  "/img/10006.jpeg",
  "/img/10007.jpeg",
  "/img/10008.jpeg",
  "/img/10009.jpeg",
];

/* ─────── Component ─────── */
export default function SolutionPageLayout({ data }) {
  const {
    heroBg,
    heroAlt,
    breadcrumb,
    breadcrumbHighlight,
    heroTitle,
    titleHighlights,
    heroDesc,
    sectionTitle,
    sectionDesc,
    solutionsList = [],
    whyChoose = [],
    stats = [],
  } = data;

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[85vh] flex items-center bg-[#04060e] overflow-hidden pt-24 md:pt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt={heroAlt || "Solution"}
            fill
            className="object-cover opacity-30 grayscale-[10%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#04060e]/60 via-[#04060e]/80 to-[#04060e]" />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-brand-bright-orange/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 py-20 w-full">


          <div className="max-w-3xl">
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.08] tracking-tight">
                {heroTitle && (
                  <span className="text-brand-bright-orange block md:inline md:mr-4 mb-2 md:mb-0">
                    {heroTitle}
                  </span>
                )}
                {titleHighlights}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
                {heroDesc}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <RollingButton text="Book a Consultation" href="/meeting" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ INTRO / WHAT WE DO ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6 mt-4">
              What We Do
            </h2>
            <h3 className="text-xl md:text-2xl text-brand-bright-orange font-semibold mb-6">
              {sectionTitle}
            </h3>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              {sectionDesc}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ HIGHLY EFFECTIVE SOLUTIONS ═══ */}
      <section className="py-10 md:py-16 bg-white relative border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <ScrollReveal>

              <h2 className="text-3xl lg:text-5xl font-semibold text-gray-700 mb-4 tracking-tight">
                Highly Effective Solutions
              </h2>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-10">
            {solutionsList.map((sol, idx) => {
              const Icon = resolveIcon(sol.icon);
              const img_src = imagePool[idx % imagePool.length];

              return (
                <div key={idx} className="sticky top-32">
                  <ScrollReveal>
                    <div className="rounded-2xl p-0 border border-gray-200 bg-white overflow-hidden transition-all duration-500 shadow-sm hover:shadow-lg">
                      <div className="grid lg:grid-cols-12 gap-0 items-center">
                        {/* Text Side */}
                        <div
                          className={`lg:col-span-7 p-6 lg:p-16 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-last" : ""}`}
                        >
                          <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-brand-bright-orange mb-8 shadow-sm">
                            <Icon
                              size={28}
                              className="text-brand-bright-orange"
                            />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 leading-tight">
                            {sol.title}
                          </h3>
                          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                            {sol.desc}
                          </p>
                          <ul className="space-y-3">
                            {sol.bullets.map((bullet, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <CheckCircle2
                                  size={18}
                                  className="text-brand-bright-orange mt-0.5 shrink-0"
                                />
                                <span className="text-gray-700 text-[14px] leading-relaxed">
                                  {bullet}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Image Side */}
                        <div className="lg:col-span-5 h-[450px] relative bg-gray-100">
                          <Image
                            src={img_src}
                            alt={sol.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE BETOPIA ═══ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-bright-orange/8 border border-brand-bright-orange/15 mb-5">
                <Award size={14} className="text-brand-bright-orange" />
                <span className="text-[11px] font-bold uppercase tracking-[4px] text-brand-bright-orange">
                  Why Betopia
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                The Betopia Advantage
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => {
              const Icon = resolveIcon(item.icon);
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group relative bg-gray-50 rounded-3xl p-8 border border-gray-100 text-center hover:-translate-y-2 transition-all duration-500 hover:shadow-lg overflow-hidden h-full flex flex-col items-center">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-white shadow-sm mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-gray-100 group-hover:border-brand-bright-orange/30">
                      <Icon size={24} className="text-brand-bright-orange" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
