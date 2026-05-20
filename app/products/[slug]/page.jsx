"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as Lucide from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RollingButton from "../../components/RollingButton";
import ScrollReveal from "../../components/ScrollReveal";
import CtaSection from "../../components/CtaSection";
import productsData from "../../data/products.json";

// Dynamic Icon Resolver
const getIcon = (name, className = "w-6 h-6") => {
  if (!name) return null;
  const IconComponent = Lucide[name] || Lucide.HelpCircle;
  return <IconComponent className={className} />;
};

// URL Slugs mapping to products.json details keys
const slugMap = {
  "betopia-lms": "iums",
  "betopia lms": "iums",
  "iums": "iums"
};

// Custom marketing copy dictionary to preserve premium wording precisely for each page
const customContent = {
  "agentic-ai": {
    heroTag: "Products",
    titleHighlights: "Betopia Agentic AI",
    heroTitle: "Built for Autonomous Enterprise Automation",
    heroDesc: "Our AI-driven agents seamlessly integrate into your business, providing automated support, managing complex tasks, and enhancing customer experiences 24/7 with human-like precision.",
    heroBg: "/brand-hero-bg.png",
    introTitle: "Intelligent agents that work while you sleep.",
    introDesc: "Betopia Agentic AI represents the next frontier of business automation. Unlike traditional bots, our agents are capable of understanding intent, processing complex workflows, and making autonomous decisions to assist your customers and employees.",
    checklist: ["24/7 Multilingual Support", "Autonomous Task Execution", "Real-Time Sentiment Analysis", "Seamless CRM Integration", "Privacy-First Data Handling"],
    checklistCta: "Explore Use Cases",
    rollingBtn: "Experience Agentic AI",
    securityTitle: "Enterprise-Grade Security & Compliance",
    securityDesc: "We build our AI agents with strict security controls, data isolation, and auditability to ensure your proprietary company knowledge remains fully secure."
  },
  "betopia-emailing-system": {
    heroTag: "Products",
    titleHighlights: "Betopia Emailing System",
    heroTitle: "Built for Private Corporate Communications",
    heroDesc: "Betopia B2B Emailing Platform is a private, enterprise-grade mailing system designed for mass employee engagement, complete privacy control, and seamless CRM integrations.",
    heroBg: "/brand-hero-bg.png",
    introTitle: "Enterprise communication without the third-party compromise.",
    introDesc: "Our B2B Emailing Platform is engineered specifically for companies that prioritize data privacy, operational efficiency, and scalable B2B outreach. Instead of relying on expensive, public SMTP relays that expose employee data and analytics, we host your entire communication ecosystem privately within your own infrastructure.",
    checklist: ["Mass Mailing Efficiency", "Complete Privacy Control", "Advanced SMTP Delivery", "Hierarchical Org Mapping", "Comprehensive Reports"],
    checklistCta: "Explore Private Emailing",
    rollingBtn: "Request a Demo",
    securityTitle: "100% Private Infrastructure Deployment",
    securityDesc: "No shared servers, no data leakage. Betopia Emailing System runs exclusively in your virtual private cloud (VPC) or local server farm."
  },
  "betopia-erp": {
    heroTag: "Products",
    titleHighlights: "Business Brain",
    heroTitle: "Built for Complete Enterprise Integration",
    heroDesc: "A unified ERP platform that integrates and automates core business processes, delivers real-time visibility, and drives operational excellence. Built to scale, secure your growth, and adapt to the evolving needs of modern enterprises.",
    heroBg: "/product/erp-product/erp.webp",
    introTitle: "Managing complex organizations requires more than disconnected systems.",
    introDesc: "Business Brain is a comprehensive, enterprise-grade ERP platform designed to unify people, processes, data and decision-making across multi-branch and multi-location organizations — all within a secure, scalable and modular system. Whether deployed on the cloud or on-premise, it delivers operational visibility, financial control and real-time intelligence to help organizations scale with confidence.",
    checklist: ["Multi-Branch Connectivity", "Modular Scalability", "Financial Transparency", "Operational Security", "Real-Time Intelligence"],
    checklistCta: "Explore Solutions",
    rollingBtn: "Book a Call With Experts",
    securityTitle: "Role-Based Governance & Ironclad Audit Trails",
    securityDesc: "Enforce separation of duties, track every transaction history, and maintain complete compliance with global corporate financial standards."
  },
  "count-trust": {
    heroTag: "Products",
    titleHighlights: "CountTrust",
    heroTitle: "Built for Secure and Verifiable Elections",
    heroDesc: "A secure, transparent, and user-friendly digital voting and election management system designed to make voting accessible, verifiable, and tamper-proof.",
    heroBg: "/servicesImg/coverImg/Cyber security services.png",
    introTitle: "Elections demand trust, transparency and total security.",
    introDesc: "CountTrust is an enterprise-grade digital voting platform engineered to deliver end-to-end verifiable elections for organizations, committees, associations and universities. By combining cryptographic voter verification with seamless real-time auditing, CountTrust eliminates double-voting, prevents tampering and guarantees absolute confidentiality for every single ballot cast.",
    checklist: ["End-to-End Encryption", "Cryptographic Verification", "Deduplication Auditing", "Multi-Tenancy Scale", "Certified Audits"],
    checklistCta: "Explore Security",
    rollingBtn: "Start Secure Election",
    securityTitle: "Security & Compliance That Protects Every Ballot",
    securityDesc: "We follow global security standards to ensure data privacy, voter anonymity, and electoral compliance, giving you complete peace of mind."
  },
  "smart-hospital": {
    heroTag: "Products",
    titleHighlights: "Betopia CareOS",
    heroTitle: "Built for Intelligent Hospital Administration",
    heroDesc: "Revolutionize your healthcare facility with our integrated digital solution. Empowering Healthcare with Betopia CareOS a comprehensive system that integrates patient records, scheduling, billing and pharmacy into one platform.",
    heroBg: "/product/smart-hospital/hero.png",
    rollingBtn: "Request a Demo",
  },
  "eduvas-school": {
    heroTag: "Products",
    titleHighlights: "Betopia Smart Class",
    heroTitle: "Built for Collaborative Digital Learning",
    heroDesc: "Revolutionize your school with our integrated digital solution. Empowering education with Betopia Smart Class a comprehensive system that integrates student lifecycle, virtual learning, fee collection and operations.",
    heroBg: "/product/eduvas-school/hero.png",
    rollingBtn: "Request a Demo",
  },
  "eduvas-university": {
    heroTag: "Products",
    titleHighlights: "Betopia EduOS",
    heroTitle: "Built for Smart Campus Administration",
    heroDesc: "Scale your campus with our comprehensive enterprise platform. Empowering administrators, faculty and students with unified academic and back-office management.",
    heroBg: "/product/eduvas-university/hero.png",
    rollingBtn: "Request a Demo",
  },
  "iums": {
    heroTag: "Products",
    titleHighlights: "Betopia LMS",
    heroTitle: "Built for Next-Gen Educational Ecosystems",
    heroDesc: "Transform your institution operations with our intelligent all in one digital platform. Empowering educators, engaging students and streamlining administration",
    heroBg: "/Gemini_Generated_Image_bf5av9bf5av9bf5a.png",
    rollingBtn: "Request a Demo",
  },
  "study-abroad": {
    heroTag: "Products",
    titleHighlights: "Betopia StudyOS",
    heroTitle: "Built for Seamless Study Abroad Operations",
    heroDesc: "Empower your agency with the ultimate student CRM and application tracker. Automating admissions, tracking visas and managing partner universities globally.",
    heroBg: "/product/study-abroad/hero.png",
    rollingBtn: "Request a Demo",
  },
  "virtual-gate": {
    heroTag: "Products",
    titleHighlights: "Virtual Gate",
    heroTitle: "Built for Intelligent Visitor & Access Control",
    heroDesc: "Secure your facility with smart digital access, real-time logging, and biometric identity verification. The definitive security perimeter for modern enterprises.",
    heroBg: "/product/virtual-gate/hero.png",
    rollingBtn: "Request a Demo",
  },
  "talkora-ai": {
    heroTag: "Products",
    titleHighlights: "Talkora AI",
    heroTitle: "Built for Autonomous Voice Conversations",
    heroDesc: "Intelligent virtual receptionists and automated call workflows powered by conversational AI. Never miss a lead, route calls flawlessly, and log summaries automatically.",
    heroBg: "/brand-hero-bg.png",
    introTitle: "Intelligent call management that works 24/7.",
    introDesc: "Talkora AI is a comprehensive business call automation platform designed to simplify communications. Powered by advanced LLMs and high-fidelity speech engines, Talkora automatically answers inbound calls, schedules appointments, answers FAQs, and maps data directly to your CRM.",
    checklist: ["24/7 Phone Answering", "Dynamic Call Routing", "Intelligent Summaries", "Bi-directional CRM Sync", "Zero Inbound Queue"],
    checklistCta: "See Case Studies",
    rollingBtn: "Start Call Automating",
    securityTitle: "Highly Compliant Call Security",
    securityDesc: "All call recordings, transcripts, and operational logs are securely stored and encrypted in transit and at rest, maintaining complete industry standard privacy compliance."
  },
  "human-resource-management": {
    heroTag: "Products",
    titleHighlights: "Betopia HRMS",
    heroTitle: "Built for High-Performance Talent Management",
    heroDesc: "A complete human capital management suite designed to automate payroll, streamline recruiting, evaluate performance, and maximize employee retention.",
    heroBg: "/product/hrm/hero.webp",
    introTitle: "Modern workforces demand an integrated HR platform.",
    introDesc: "Betopia HRMS is an all-in-one system designed to manage your entire employee lifecycle. From automated attendance and cloud payroll to personalized training paths and robust 360 appraisals, we keep your workforce engaged and compliant with local labor laws.",
    checklist: ["Cloud Payroll & Taxes", "Automated Timesheets", "360 Appraisals & KPIs", "Applicant Tracking System", "Self-Service Portal"],
    checklistCta: "Request Demo",
    rollingBtn: "Optimize Your HR",
    securityTitle: "GDPR Compliant Data Secrecy & Security",
    securityDesc: "Protect sensitive employee biological data, personal identification documents, and financial payouts with dedicated data residency constraints."
  },
  "erp": {
    heroTag: "Products",
    titleHighlights: "Business Brain",
    heroTitle: "Built for Global Enterprise Operations",
    heroDesc: "An all-in-one corporate ERP designed to link procurement, manufacturing, logistics, and financials into a single real-time dashboard.",
    heroBg: "/product/erp/hero.webp",
    introTitle: "Break down silos with unified corporate intelligence.",
    introDesc: "Business Brain integrates supply chains, manufacturing, accounts, and human resources into a seamless dashboard. Engineered for corporations running multi-country and multi-entity architectures.",
    checklist: ["Consolidated Financials", "Supply Chain Control", "Production Scheduling", "Multi-Currency Taxes", "Regulatory Compliance"],
    checklistCta: "Schedule Consultation",
    rollingBtn: "Experience Corporate ERP",
    securityTitle: "Corporate Audit-Ready Security Systems",
    securityDesc: "Every change log is signed, verified, and backed by robust enterprise permissions, ensuring that internal audits are perfectly fluid."
  }
};

export default function ProductDynamicPage({ params }) {
  const unwrappedParams = React.use(params);
  const { slug } = unwrappedParams;
  const [openFaq, setOpenFaq] = useState(0);

  const decodedSlug = decodeURIComponent(slug);
  const normalizedSlug = decodedSlug.toLowerCase().trim();
  const productKey = slugMap[normalizedSlug] || normalizedSlug;
  let productOverview = productsData.productOverview.find(p => p.id === productKey) ||
    productsData.partnerOverview.find(p => p.id === productKey) ||
    productsData.partnerOverview.find(p => p.id === "Betopia LMS" && productKey === "iums");

  const productDetails = productsData.details[productKey];

  if (!productDetails) {
    return notFound();
  }

  // Synthesize fallback overview if not present in main catalog list
  if (!productOverview) {
    const formattedTitle = customContent[productKey]?.heroTitle
      ? productKey.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
      : "Betopia Product";
    productOverview = {
      title: formattedTitle,
      description: customContent[productKey]?.heroDesc || "",
      accent: "from-orange-500 via-amber-500 to-orange-600",
      accentBg: "bg-orange-500/10",
      accentText: "text-brand-bright-orange"
    };
  }

  const custom = customContent[productKey] || {};

  // Determine accent classes
  const accentGradient = productOverview.accent || "from-orange-500 via-amber-500 to-orange-600";
  const accentBg = productOverview.accentBg || "bg-orange-500/10";
  const accentText = productOverview.accentText || "text-brand-bright-orange";

  return (
    <main className="min-h-screen text-black bg-white">
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section
        className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden"
        style={{ clipPath: "inset(0)" }}
      >
        {/* Background Image with Cinematic Overlay */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Image
            src={custom.heroBg || "/brand-hero-bg.png"}
            alt={productOverview.title}
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
                  {custom.titleHighlights && (
                    <span className="text-brand-bright-orange block md:inline md:mr-4 mb-2 md:mb-0">
                      {custom.titleHighlights}
                    </span>
                  )}
                  {custom.heroTitle || `${productOverview.title} built for scale.`}
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl">
                  {custom.heroDesc || productOverview.description}
                </p>
                <div className="flex flex-wrap gap-6">
                  <RollingButton
                    text={custom.rollingBtn || "Request a Demo"}
                    href="/contact"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ INTRODUCTION SECTION (Alternating Style) ═══════════════ */}
      {custom.introTitle && (
        <section className="py-16 md:py-24 bg-white relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* Left Column: Wording */}
              <div className="lg:col-span-7">
                <ScrollReveal>
                  <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 leading-tight">
                    {custom.introTitle}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {custom.introDesc}
                  </p>

                  {/* Platforms / Badges details if count-trust */}
                  {productKey === "count-trust" && (
                    <div className="mt-12">
                      <p className="text-xs font-black tracking-widest text-gray-400 uppercase mb-6">
                        OUR PLATFORM IS BUILT FOR ALL ELECTION TYPES
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                          { title: "Board Elections", icon: "Building2" },
                          { title: "Membership Votes", icon: "Users" },
                          { title: "Referendums", icon: "Globe" },
                        ].map((type, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-4 bg-orange-50/50 rounded-xl border border-orange-100"
                          >
                            <div className="text-brand-bright-orange">
                              {getIcon(type.icon, "w-5 h-5")}
                            </div>
                            <span className="text-sm font-bold text-gray-700">
                              {type.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </ScrollReveal>
              </div>

              {/* Right Column: Custom Highlight Card */}
              <div className="lg:col-span-5">
                <ScrollReveal delay={0.2}>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-10 shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-8">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-4">
                      {(custom.checklist || []).map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-gray-700">
                          <div className="w-6 h-6 rounded-full bg-brand-bright-orange text-white flex items-center justify-center">
                            <Lucide.CheckCircle2 className="w-4 h-4" />
                          </div>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500 mb-4 font-semibold">
                        See how we solve these challenges for organizations worldwide.
                      </p>
                      <Link
                        href="/contact"
                        className={`inline-flex items-center gap-2 font-bold hover:gap-3 transition-all text-brand-bright-orange`}
                      >
                        {custom.checklistCta || "Explore Solutions"} <Lucide.ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ WHY CHOOSE SECTION / KEY ADVANTAGES ═══════════════ */}
      {(productDetails.whyChooseReasons || productDetails.advantages) && (
        <section className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <ScrollReveal>
                <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                  {productDetails.whyChooseReasons
                    ? `Why Choose ${productOverview.title}`
                    : "Key Advantages"
                  }
                </h2>
                <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-2">
                  Discover how our technology empowers operations with smart, scalable, and secure features.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(productDetails.whyChooseReasons || productDetails.advantages).map((reason, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.08}>
                  <div className="h-full flex flex-col items-start p-8 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className={`w-12 h-12 mb-6 rounded-xl bg-orange-50 flex items-center justify-center text-brand-bright-orange group-hover:bg-brand-bright-orange group-hover:text-white transition-all shadow-sm`}>
                      {getIcon(reason.icon, "w-6 h-6")}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-bright-orange transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {reason.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ CORE CAPABILITIES / CORE MODULES SECTION ═══════════════ */}
      {productDetails.coreModules && (
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-10 md:mb-20">
              <ScrollReveal>
                <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                  Core Platform Capabilities
                </h2>
                <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-4">
                  From secure-by-design architecture to intuitive workflows, explore the foundational modules of {productOverview.title}.
                </p>
              </ScrollReveal>
            </div>

            <div className="flex flex-col gap-10">
              {productDetails.coreModules.map((module, idx) => {
                // If it is a partner product (has a badge and items list instead of a simple body text)
                const isPartnerStyle = !!module.items;

                return (
                  <div key={idx} className="sticky top-28">
                    <ScrollReveal>
                      <div className={`rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl p-0`}>
                        <div className="grid lg:grid-cols-12 gap-0 items-center">

                          {/* Info Column */}
                          <div className={`lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-last" : ""}`}>

                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-tight">
                              {module.title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                              {module.desc}
                            </p>



                            {/* Render items list if present (Partner Products style) */}
                            {isPartnerStyle && (
                              <div className="grid gap-3 mt-4">
                                {module.items.map((item, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center justify-between py-3 border-b border-gray-100 hover:bg-orange-50/10 px-4 rounded-xl transition-all cursor-default group/item"
                                  >
                                    <span className="text-gray-700 font-medium group-hover/item:text-brand-bright-orange transition-colors">
                                      {item}
                                    </span>
                                    <Lucide.ArrowRight className="w-4 h-4 text-gray-300 group-hover/item:text-brand-bright-orange transition-all group-hover/item:translate-x-1" />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Image Column (Only if not a partner style or if image exists) */}
                          {module.image && (
                            <div className="lg:col-span-5 h-[450px] relative bg-gray-50/50 flex items-center justify-center overflow-hidden">
                              <Image
                                src={module.image}
                                alt={module.title}
                                fill
                                className="object-cover hover:scale-105 transition-all duration-700"
                              />
                            </div>
                          )}

                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}


      {/* ═══════════════ SERVICE PACKAGES SECTION ═══════════════ */}
      {productDetails.servicePackages && (
        <section className="py-24 bg-gray-50/30 overflow-hidden border-t border-gray-100">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <ScrollReveal>
                <h2 className="text-3xl lg:text-5xl font-semibold text-gray-700 mb-2 tracking-tight">
                  Our Service Packages
                </h2>
                <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-2">
                  We provide end-to-end integration, deployment and support services to ensure flawless operational success.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productDetails.servicePackages.map((pkg, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.08} className="h-full">
                  <div className="h-full bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute -top-4 -right-4 text-9xl font-black text-gray-50 opacity-40 group-hover:text-orange-50 transition-colors pointer-events-none select-none">
                      {pkg.id}
                    </div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-brand-bright-orange mb-8 group-hover:scale-110 group-hover:bg-brand-bright-orange group-hover:text-white transition-all shadow-sm">
                        {getIcon(pkg.icon, "w-8 h-8")}
                      </div>

                      <div className="mb-4">
                        <span className="text-xs font-bold tracking-widest text-brand-bright-orange uppercase bg-orange-50 px-3 py-1 rounded-full">
                          Step {pkg.id}
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
      )}


      {/* ═══════════════ CASE STUDIES SECTION ═══════════════ */}
      {productDetails.caseStudies && (
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <ScrollReveal>
                <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-2 tracking-tight">
                  Real-World Impact
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed mt-2">
                  See how {productOverview.title} scales client success and resolves enterprise hurdles.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {productDetails.caseStudies.map((study, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {study.image && (
                      <div className="relative h-[220px] bg-gray-200">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-8 flex flex-col flex-1">
                      <span className="text-xs font-bold tracking-widest text-brand-bright-orange uppercase mb-4">
                        {study.industry}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                        {study.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                        {study.desc}
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 font-bold text-brand-bright-orange group/link hover:gap-3 transition-all"
                      >
                        Read Case Study <Lucide.ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ FAQS SECTION ═══════════════ */}
      {productDetails.faqs && (
        <section className="py-24 bg-gray-50 border-t border-gray-150">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <ScrollReveal>
                <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-2 tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed mt-2">
                  Everything you need to know about implementing and using {productOverview.title}.
                </p>
              </ScrollReveal>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col gap-4">
              {productDetails.faqs.map((faq, idx) => {
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
      )}



      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <CtaSection />
    </main>
  );
}
