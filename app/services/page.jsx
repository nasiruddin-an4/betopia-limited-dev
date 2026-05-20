"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cloud,
  ShieldCheck,
  Code2,
  Settings2,
  Users,
  Brain,
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe,
  BarChart3,
  Lock,
  Clock,
  Award,
  MessageSquare,
  ChevronRight,
  Star,
  PlayCircle,
  X,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import CtaSection from "../components/CtaSection";

/* ─────────────────────────── DATA ─────────────────────────── */

const services = [
  {
    id: "ai",
    link: "ai-analytics",
    icon: Brain,
    color: "#f79549",
    title: "AI & Analytics",
    subtitle: "Intelligent systems that learn, adapt and grow",
    img: "/1.png",
    description:
      "Betopia Limited harnesses advanced Artificial Intelligence to automate decisions, surface hidden insights and create enterprise-grade competitive advantages that scale with your business. Transform operations and drive innovation with predictive analytics and intelligent automation.",
    items: [
      "Machine Learning & Deep Learning Models",
      "Natural Language Processing (NLP)",
      "Predictive Analytics & Forecasting",
      "AI-Powered Chatbots & Virtual Assistants",
      "Computer Vision & Image Recognition Solutions",
      "Intelligent Process Automation for Enterprises",
    ],
  },
  {
    id: "cloud",
    link: "cloud-modernization",
    icon: Cloud,
    color: "#6366f1",
    title: "Cloud Services",
    subtitle: "Enterprise cloud solutions that scale seamlessly",
    img: "/3.png",
    description:
      "Betopia Limited provides modern cloud infrastructure designed for reliability, security and scalability. We manage, migrate and optimize cloud ecosystems so your business can innovate without limits, accelerate digital transformation and reduce IT costs.",
    items: [
      "Cloud Migration & Modernization",
      "Multi-Cloud & Hybrid Architecture",
      "Serverless & Microservices Design",
      "Cloud Security & Compliance",
      "Cloud Cost Optimization & Monitoring",
      "24/7 Cloud Infrastructure Management",
    ],
  },
  {
    id: "security",
    link: "cyber-security",
    icon: ShieldCheck,
    color: "#10b981",
    title: "Cyber Security",
    subtitle: "Zero-compromise enterprise protection",
    img: "/22.webp",
    description:
      "Betopia Limited delivers end-to-end cybersecurity solutions for enterprises. From SOC monitoring to penetration testing, we protect critical assets, ensure compliance with international standards and safeguard your digital operations against evolving threats.",
    items: [
      "24/7 SOC & Threat Monitoring",
      "Penetration Testing & Red Team Exercises",
      "Vulnerability Management & Risk Assessment",
      "Incident Response & Recovery",
      "Security Compliance (ISO, SOC2, GDPR)",
      "Threat Intelligence & Enterprise Risk Strategy",
    ],
  },
  {
    id: "software",
    link: "software-development",
    icon: Code2,
    color: "#3b82f6",
    title: "Software Development",
    subtitle: "Enterprise products engineered to excel",
    img: "/777.png",
    description:
      "Betopia Limited crafts scalable, secure and intuitive software products. Our agile teams deliver web, mobile and SaaS solutions that meet modern enterprise demands while accelerating digital transformation and business innovation.",
    items: [
      "Custom Web & Mobile Applications",
      "Enterprise Software & ERP Systems",
      "SaaS Product Engineering & Optimization",
      "UI/UX Design & Prototyping",
      "API Development & System Integration",
      "Code Audits & Technical Debt Reduction",
    ],
  },
  {
    id: "managed",
    link: "managed-services",
    icon: Settings2,
    color: "#f59e0b",
    title: "Managed Services",
    subtitle: "Enterprise IT management without the overhead",
    img: "/4444.jpg",
    description:
      "Betopia Limited provides proactive IT management, monitoring and support. We ensure your enterprise systems stay healthy, secure and optimized so your team can focus on innovation and growth.",
    items: [
      "24/7 Infrastructure & Network Management",
      "IT Helpdesk & End-User Support",
      "Server, Storage & Backup Solutions",
      "Cloud Infrastructure Management",
      "Disaster Recovery Planning & Testing",
      "Security Patch & Update Management",
    ],
  },
  {
    id: "augmentation",
    link: "team-augmentation",
    icon: Users,
    color: "#8b5cf6",
    title: "Resource Augmentation",
    subtitle: "The right talent for your enterprise, on-demand",
    img: "/5.png",
    description:
      "Betopia Limited helps scale your engineering capacity instantly with handpicked professionals. Our teams integrate seamlessly into your projects, aligned with your culture, workflows and business goals, ensuring faster delivery and operational efficiency.",
    items: [
      "Dedicated Engineering Squads",
      "On-Demand Senior Specialists",
      "Short & Long-Term Engagements",
      "Rapid Team Scaling (2–4 weeks)",
      "Staff Augmentation & Outsourcing",
      "Flexible Resource Management",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Scoping",
    desc: "We start by understanding your business goals, tech stack and challenges. No assumptions — just deep listening.",
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    desc: "Our architects define a precise technical strategy with milestones, deliverables and risk mitigations built in.",
  },
  {
    step: "03",
    title: "Agile Delivery",
    desc: "Iterative sprints, continuous feedback and transparent progress updates so you're never in the dark.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    desc: "We go live with confidence and scale systems to match your growth — with ongoing support every step of the way.",
  },
];

const stats = [
  { value: "300+", label: "Enterprise Clients", icon: Award },
  { value: "8+", label: "Years of Excellence", icon: Clock },
  { value: "98%", label: "Client Retention Rate", icon: Star },
  { value: "24/7", label: "Global Support", icon: Globe },
];

const trustedBy = [
  "Fortune 500",
  "Government Bodies",
  "Healthcare Systems",
  "Financial Institutions",
  "Telecom Operators",
  "Global NGOs",
];

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0].id);
  const [videoOpen, setVideoOpen] = useState(false);
  const active = services.find((s) => s.id === activeService);
  const ActiveIcon = active.icon;

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-[95vh] flex items-center bg-black overflow-hidden"
        style={{
          backgroundImage: "url('/serviceImg/Enterprise-Networking-Solutions.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left-to-right gradient so text is readable */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/20 z-0" />
        {/* Soft bottom fade */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="text-left max-w-5xl">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xl font-semibold text-gray-400">
                  Enterprise Services
                </span>
              </div>
            </ScrollReveal>
            <div className="flex-1 w-full h-px bg-gray-700" />

            <ScrollReveal delay={0.15}>
              <h1 className="text-4xl md:text-7xl font-semibold text-white mb-6 pt-6">
                <span className="text-brand-bright-orange block md:inline md:mr-4 mb-2 md:mb-0">
                  Technology Services
                </span>
                That Deliver
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-gray-400 text-lg md:text-2xl leading-relaxed max-w-3xl">
                From AI and cloud to cybersecurity, Betopia Limited helps
                enterprises scale faster, operate smarter and stay secure.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ecosystem Pulse Section */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-[1.05] tracking-tight mb-8">
              Staying Ahead in the AI-Driven World
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-gray-700 text-xl md:text-2xl leading-relaxed max-w-6xl">
              In today's rapidly evolving global landscape, businesses must go
              beyond adaptation — they must lead through innovation. At Betopia
              Limited, we empower enterprises with cutting-edge Artificial
              Intelligence, enterprise AI solutions and digital transformation
              strategies that enable continuous growth in a dynamic world.
              Organizations that embrace AI-driven innovation, automation and
              intelligent ecosystems can respond faster to change, unlock new
              opportunities and build future-ready operations. By combining deep
              tech expertise with scalable solutions, Betopia helps businesses
              transform challenges into competitive advantages and thrive in the
              age of intelligent technology.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our Enterprise Services Ecosystem ── */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        {/* Subtle ambient background glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-orange-100/60 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-100/40 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-50/50 blur-[180px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-[1.05] tracking-tight mb-4">
                Our Core Technology{" "}
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Discover enterprise-grade technology services designed to
                modernize your infrastructure, ensure tight security and
                accelerate growth.
              </p>
            </div>
          </ScrollReveal>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <ScrollReveal key={service.id} delay={(idx + 1) * 0.12}>
                <Link
                  href={`/services/${service.link}`}
                  className="group block h-full"
                >
                  <div className="relative rounded-2xl border border-gray-200 bg-white flex flex-col transition-all duration-500 hover:border-gray-300 hover:shadow-xl overflow-hidden h-full">
                    {/* Top accent line */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-20" />

                    {/* Background glow on hover */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-orange-100/80 blur-[60px] opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-0" />

                    {/* Top Image Container */}
                    <div className="relative w-full h-[250px] bg-white flex items-center justify-center border-b border-gray-100 overflow-hidden z-10">
                      <div className="absolute inset-0 transition-opacity duration-500" />
                      <Image
                        src={service.img}
                        alt={service.title}
                        width={300}
                        height={300}
                        className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-700 relative z-10"
                      />
                    </div>

                    <div className="relative z-10 flex flex-col flex-1 p-8 md:p-8">
                      {/* Title */}
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-brand-bright-orange">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 leading-relaxed mb-6 text-[15px] line-clamp-3">
                        {service.description}
                      </p>

                      {/* Features Checkmarks (Taking first 3 from array to balance card size) */}
                      <ul className="space-y-2.5 mt-auto">
                        {service.items.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center">
                              <CheckCircle2
                                size={12}
                                className="text-orange-500"
                              />
                            </div>
                            <span className="text-gray-600 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW WE WORK ═══ */}
      <section className="py-14 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight text-gray-900">
                How We Work With You
              </h2>
              <div className="max-w-5xl">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                  A transparent, structured process that gives you full
                  visibility — from the first conversation to go-live.
                </p>
              </div>
              <div className="inline-block bg-gray-200 px-3 py-1 mt-4">
                <span className="text-xs md:text-sm font-bold tracking-widest text-gray-800">
                  Our Process
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative bg-white border-l-2 border-gray-200 pl-6 pr-2 py-4 h-full flex flex-col cursor-default transition-all duration-300 hover:border-brand-bright-orange">
                  {/* Step number */}
                  <div className="text-[56px] font-black text-gray-100 group-hover:text-orange-100 transition-colors leading-none absolute top-6 right-6">
                    {p.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-brand-bright-orange/10 flex items-center justify-center mb-5 group-hover:bg-brand-bright-orange transition-colors duration-300">
                      <span className="text-brand-bright-orange group-hover:text-white font-black text-sm transition-colors">
                        {p.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-bright-orange transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  {/* Connector arrow (not last) */}
                  {i < process.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-brand-bright-orange/10 rounded-full items-center justify-center z-20">
                      <ChevronRight
                        size={12}
                        className="text-brand-bright-orange"
                      />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <CtaSection />
    </div>
  );
}
