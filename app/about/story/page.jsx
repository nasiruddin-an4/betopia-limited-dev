"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import RollingButton from "../../components/RollingButton";
import {
  BrainCircuit,
  ShieldCheck,
  Cloud,
  Layers,
  Rocket,
  ArrowRight,
  Leaf,
  Recycle,
  Zap,
  TrendingUp,
  Factory,
  Heart,
  ShoppingCart,
  Radio,
  GraduationCap,
  Landmark,
} from "lucide-react";

/* ───── Data ───── */

const pillars = [
  {
    title: "Human Capital AI",
    desc: "Break organizational bottlenecks by creating insight at the heart of decision making, securing genuine outcomes and every powerful data insight.",
    caps: "AI Agents, Machine Learning, OCR, Predictive Analytics, Conversational AI, AI-Powered IVR, Intelligent Automation.",
    icon: BrainCircuit,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Secure Digital Foundation",
    desc: "Building enterprise-grade cybersecurity, governance and compliance frameworks to protect data, infrastructure and digital assets.",
    caps: "Cybersecurity Operations, SOC, ISO 27001, GDPR Compliance, Zero Trust Architecture, Endpoint & Network Security.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Cloud & Data Center Excellence",
    desc: "Enabling scalable, resilient and high-performance infrastructure through hybrid cloud, multi-cloud and modern data center solutions.",
    caps: "AWS, Microsoft Azure, Google Cloud, Hybrid Cloud, DevOps, Containerization, Data Center Infrastructure Management.",
    icon: Cloud,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Connected Enterprise Systems",
    desc: "Integrating ERP, CRM, HRM and business platforms into a unified digital backbone for real-time visibility and operational efficiency.",
    caps: "Odoo ERP, Custom ERP Development, CRM Solutions, Business Process Automation, API & System Integrations.",
    icon: Layers,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Rapid Digital Product Innovation",
    desc: "Accelerating product development using modern frameworks, agile methodologies and cloud-native architectures to bring ideas to market faster.",
    caps: "Web & Mobile Applications, SaaS Platforms, UI/UX Design, MVP Development, Application Modernization.",
    icon: Rocket,
    color: "from-rose-500 to-pink-500",
  },
];

const industries = [
  { name: "Banking & Financial Services", icon: Landmark },
  { name: "Manufacturing & Supply Chain", icon: Factory },
  { name: "Healthcare & Life Sciences", icon: Heart },
  { name: "Retail & E-commerce", icon: ShoppingCart },
  { name: "Telecom & Media", icon: Radio },
  { name: "Education & Public Sector", icon: GraduationCap },
];

const caseStudies = [
  {
    title: "Chase The Cash SA",
    desc: "An innovative mobile app that transforms the thrill of treasure hunting into an engaging, gamified adventure with puzzles, QR scans and real rewards.",
    image: "/caseStudyImg/Chase the cash sa/Cover image.jpg",
    href: "/case-studies/chase-the-cash",
  },
  {
    title: "Nutri AI",
    desc: "Nutri AI is your AI-powered nutrition coach, helping you track calories, analyze meals and achieve a healthier lifestyle with ease.",
    image: "/caseStudyImg/Nutri Ai/Cover iomage.png",
    href: "/case-studies/nutri-ai",
  },
  {
    title: "Umrah Guide",
    desc: "Embark on your spiritual journey with confidence using Umrah Guide & Connection, the ultimate app designed to assist pilgrims at every step.",
    image: "/caseStudyImg/Umrah Guide/Cover-image.jpg",
    href: "/case-studies/umrah-guide",
  },
];

const partners = [
  { name: "AWS Advanced", logo: "/aws2.png" },
  { name: "Google Cloud", logo: "/img/10011.png" },
  { name: "Microsoft Azure", logo: "/logos_microsoft-icon.png" },
  { name: "Fortinet", logo: "/img/10012.png" },
  { name: "Odoo", logo: "/oddo_up.png" },
  { name: "Trend Micro", logo: "/img/10013.png" },
];

const sustainability = [
  {
    title: "Optimizing Resources",
    desc: "Maximize efficiency while minimizing environmental impact",
    icon: Zap,
  },
  {
    title: "Reducing Waste",
    desc: "Streamline operations to eliminate unnecessary consumption",
    icon: Recycle,
  },
  {
    title: "Improving Efficiency",
    desc: "Intelligent systems that work smarter, not harder",
    icon: TrendingUp,
  },
  {
    title: "Long-term Growth",
    desc: "Sustainable solutions for responsible business evolution",
    icon: Leaf,
  },
];

/* ───── Page ───── */

export default function StoryPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* ═══════ HERO: Brand Story ═══════ */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-brand-bright-orange/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <span className="bg-brand-bright-orange/10 border border-brand-bright-orange/20 text-brand-bright-orange px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8">
                Brand
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
                Betopia{" "}
                <span className="text-brand-bright-orange">Brand Story</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl">
                Enabling secure, intelligent transformation for modern
                businesses worldwide.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ Brand Narrative ═══════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black tracking-tight leading-[1.1] mb-10">
              Technology that empowers growth{" "}
              <span className="text-brand-bright-orange">
                securely, intelligently, globally.
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ScrollReveal delay={0.1}>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  The technological phase of change is relentless in
                  today&apos;s AI driven world. Either businesses must adapt or
                  perish. At Betopia, we believe technology should empower, not
                  overwhelm. Founded in Bangladesh with a global vision, Betopia
                  helps organizations transform data in accurate, secure,
                  efficient and intelligent manner.
                </p>
                <p>
                  We deliver secure, cloud-native, AI-powered platforms that
                  drive modernization and growth. From Cloud Modernization and
                  Cybersecurity to AI & Analytics and enterprise-grade products,
                  our solutions are built for scale, compliance and measurable
                  impact.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  We have taken a simple strategy to accredit businesses and for
                  that we have blended quite a few things such as profound
                  technical expertise, vendor-neutral multi-cloud solutions and
                  innovation-focused delivery starting from startups to
                  enterprises to unlock their full potential.
                </p>
                <p>
                  At Betopia, we&apos;re more than a technology partner rather
                  we&apos;re a strategic enabler of transformation, assisting
                  organizations navigate complexity, embrace innovation and
                  thrive in the AI era.
                </p>
                <p className="font-semibold text-brand-black text-xl border-l-4 border-brand-bright-orange pl-6">
                  Taking Bangladesh to the World, we make enterprise technology
                  smarter, secure and accessible for every sophisticated
                  business.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ Brand Momentum ═══════ */}
      <section className="py-20 md:py-32 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-brand-bright-orange/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-brand-bright-orange font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
                  <span className="w-12 h-[2px] bg-brand-bright-orange" />
                  Brand Momentum
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-[1.1]">
                  Betopia reaches a{" "}
                  <span className="text-brand-bright-orange">
                    multi-million-dollar
                  </span>{" "}
                  brand milestone
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Betopia Limited continues its upward growth trajectory,
                  reaching a multi-million-dollar brand valuation driven by
                  innovation-led services, global B2B engagements and
                  enterprise-grade technology delivery.
                </p>
                <p className="text-gray-500 text-base leading-relaxed">
                  Sustained focus on advanced engineering, customer success and
                  scalable digital solutions has strengthened Betopia&apos;s
                  brand presence across international markets, reinforcing its
                  vision to become a globally recognized technology
                  transformation company.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                  The Continuously Adaptive Enterprise
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Betopia Limited applies advanced technology and deep
                  engineering expertise to help organizations reimagine
                  what&apos;s possible when unlocking innovation while balancing
                  growth, resilience and sustainability.
                </p>
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  We enable our clients not only to succeed in the present, but
                  also to lead transformation, adapt continuously and create
                  meaningful digital legacies for years to come.
                </p>
                <RollingButton text="Discover More" href="/about/brand" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ ADAPTABILITY HERO ═══════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-brand-bright-orange font-bold uppercase tracking-widest text-sm mb-4 block">
                Adaptability
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight leading-[1.1] mb-6">
                Transforming Complexity into{" "}
                <span className="text-brand-bright-orange">
                  Competitive Advantage
                </span>
              </h2>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Empowering organizations to adapt, scale and lead through AI,
                Cloud, Cybersecurity and Digital Innovation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <ScrollReveal delay={0.1}>
              <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-4">
                  Staying Ahead in a Rapidly Changing Digital World
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Organizations must go beyond digital adoption in today&apos;s
                  fast-changing global economy as they need to be parallelly
                  intelligent. It&apos;s been said that change is constant and
                  resilience comes from the ability to adapt in real time.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  At Betopia Limited, we shape enterprises transform uncertainty
                  into opportunity by building adaptive digital ecosystems by
                  optimizing AI, cloud-native platforms, secure infrastructures,
                  and data-driven decision intelligence.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-brand-black rounded-3xl p-8 md:p-10 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Built for Change. Designed for Growth.
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Betopia combines deep engineering expertise, global delivery
                  capabilities and strategic technology partnerships to help
                  businesses modernize operations, optimize performance and
                  unlock new value streams.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  We don&apos;t just engage in technology deployment, we also
                  build future oriented enterprises that unfold with market
                  demands, customer expectations and operational complexity.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ Transformation Pillars ═══════ */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-brand-bright-orange font-bold uppercase tracking-widest text-sm mb-4 block">
                Our Capabilities
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-black tracking-tight leading-[1.1] mb-4">
                The Betopia Enterprise Transformation Pillars
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="group bg-white rounded-2xl border border-gray-100 p-8 h-full flex flex-col hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black mb-3">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                      {p.desc}
                    </p>
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-[11px] uppercase tracking-wider text-brand-bright-orange font-bold mb-1">
                        Capabilities include:
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {p.caps}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ Industries ═══════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-brand-bright-orange font-bold uppercase tracking-widest text-sm mb-4 block">
                Where We Deliver
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-black tracking-tight leading-[1.1] mb-4">
                Industries We Transform
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Betopia delivers tailored digital transformation solutions
                across multiple industries
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:bg-brand-black transition-all duration-500 cursor-pointer h-full flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-bright-orange/10 text-brand-bright-orange flex items-center justify-center group-hover:bg-brand-bright-orange group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <p className="text-sm font-semibold text-brand-black group-hover:text-white transition-colors leading-tight">
                      {ind.name}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ Success Stories ═══════ */}
      <section className="py-20 md:py-32 bg-brand-black text-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-brand-bright-orange font-bold uppercase tracking-widest text-sm mb-4 block">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
                Adaptability in action
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-bright-orange/30 transition-all duration-500 h-full flex flex-col">
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{cs.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
                      {cs.desc}
                    </p>
                    <Link
                      href={cs.href}
                      className="text-brand-bright-orange text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      View Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Technology Partners ═══════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-brand-bright-orange font-bold uppercase tracking-widest text-sm mb-4 block">
                Global Partners
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-black tracking-tight leading-[1.1] mb-4">
                Global-Powered Tech
              </h2>
              <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                Our solutions are strengthened through strategic partnerships
                with leading global technology providers and OEMs, enabling us
                to deliver best-in-class enterprise solutions worldwide.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 h-32 hover:shadow-lg transition-shadow">
                  <div className="relative w-12 h-12">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs font-semibold text-gray-600 text-center">
                    {p.name}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Sustainability ═══════ */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-black tracking-tight leading-[1.1] mb-4">
                Smart Tech.{" "}
                <span className="text-brand-bright-orange">
                  Sustainable Growth.
                </span>
              </h2>
              <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                Betopia helps organizations align innovation with sustainability
                optimizing resources, reducing operational waste, improving
                efficiency and enabling long-term responsible growth through
                intelligent digital solutions.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainability.map((s, i) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full">
                    <div className="w-14 h-14 rounded-full bg-brand-bright-orange/10 text-brand-bright-orange flex items-center justify-center mx-auto mb-5">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-black mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ Final CTA ═══════ */}
      <section className="pb-20 md:pb-32 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="bg-brand-black rounded-3xl md:rounded-[4rem] p-10 md:p-24 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-bright-orange/10 blur-[120px] rounded-full pointer-events-none" />
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] relative z-10">
                Let&apos;s shape the{" "}
                <span className="text-brand-bright-orange">digital future</span>{" "}
                together.
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                Partner with Betopia to build secure, intelligent and scalable
                enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <RollingButton text="Get in Touch" href="/contact" />
                <RollingButton
                  text="Partner Program"
                  href="/partner"
                  variant="outline"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
