"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Layers,
  Globe,
  Lock,
  PlayCircle,
  X,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import CtaSection from "../components/CtaSection";

import productsData from "../data/products.json";

const { productOverview, partnerOverview } = productsData;

const iconMap = {
  Zap,
  Layers,
  Globe,
  BarChart3,
  Lock,
};

const whyChoose = productsData.whyChoose.map(item => {
  const IconComponent = iconMap[item.icon];
  return {
    ...item,
    icon: <IconComponent className={item.iconColor} />
  };
});

export default function ProductsPage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-black min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[95vh] flex items-center bg-black overflow-hidden"
        style={{
          backgroundImage: "url('/img/10005.png')",
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
            <ScrollReveal yOffset={20} delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] mb-8 backdrop-blur-sm">
                <span className="text-[11px] font-bold uppercase tracking-[3px] text-gray-400">
                  Products
                </span>
              </div>
            </ScrollReveal>
            <div className="flex-1 w-full h-px bg-gray-700" />

            <ScrollReveal delay={0.15}>
              <h1 className="text-4xl md:text-7xl font-semibold text-white mb-6 max-w-5xl pt-6">
                AI-Powered Products Built for{" "}
                <span className="text-brand-bright-orange">
                  Modern Enterprises
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-gray-400 text-lg md:text-2xl leading-relaxed max-w-2xl">
                Explore Betopia's intelligent product ecosystem designed to
                automate operations, enhance engagement and drive business
                growth.
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

      {/* ── Our AI Product Ecosystem — Main Selling Point ── */}
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
                Our AI Product{" "}
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                  Ecosystem
                </span>
              </h2>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Intelligent, scalable and enterprise-ready software products
                designed to accelerate digital transformation, automation and
                business growth.
              </p>
            </div>
          </ScrollReveal>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {productOverview.map((product, idx) => (
              <ScrollReveal key={product.id} delay={(idx + 1) * 0.12}>
                <Link
                  href={product.href || `/products/${product.id}`}
                  target={product.href ? "_blank" : undefined}
                  rel={product.href ? "noopener noreferrer" : undefined}
                  className="group block h-full"
                >
                  <div className="relative rounded-2xl border border-gray-200 bg-white flex flex-col transition-all duration-500 hover:border-gray-300 hover:shadow-xl overflow-hidden h-full">
                    {/* Top accent line */}
                    <div
                      className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${product.accent} opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-20`}
                    />

                    {/* Background glow on hover */}
                    <div
                      className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${product.accentBg} blur-[60px] opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-0`}
                    />

                    {/* Top Image Container */}
                    <div className="relative w-full h-[250px] bg-gray-50/50 flex items-center justify-center p-6 border-b border-gray-100 overflow-hidden z-10">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${product.accent} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500`}
                      />
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={300}
                        className="object-contain max-h-[250px] drop-shadow-sm group-hover:scale-110 transition-transform duration-700 relative z-10"
                      />
                    </div>

                    <div className="relative z-10 flex flex-col h-full p-8 md:p-8">
                      {/* Title */}
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-brand-bright-orange">
                        {product.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 leading-relaxed mb-6 text-[15px]">
                        {product.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2.5 flex-1">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div
                              className={`flex-shrink-0 w-5 h-5 rounded-full ${product.accentBg} flex items-center justify-center`}
                            >
                              <CheckCircle2
                                size={12}
                                className={product.accentText}
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

      {/* ── Partner Ecosystem ── */}
      <section className="relative py-16 md:py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-left mb-16 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-[1.05] tracking-tight mb-4">
                Partner Solutions
              </h2>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                Complementing our core AI offerings with specialized,
                enterprise-grade software products through our global
                partnership.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerOverview.map((product, idx) => {
              const isExternal = product.href.startsWith("http");

              return (
                <ScrollReveal key={product.id} delay={(idx + 1) * 0.1}>
                  <Link
                    href={product.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group block h-full"
                  >
                    <div className="relative rounded-2xl border border-gray-200 bg-white flex flex-col transition-all duration-300 hover:border-gray-300 hover:shadow-lg overflow-hidden h-full p-8 pt-10">
                      {/* Top accent line */}
                      <div
                        className={`absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r ${product.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20`}
                      />

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-brand-bright-orange">
                            {product.title}
                          </h3>
                          {isExternal ? (
                            <ArrowUpRight
                              className="text-gray-400 group-hover:text-brand-bright-orange transition-colors"
                              size={24}
                            />
                          ) : (
                            <ArrowRight
                              className="text-gray-400 group-hover:text-brand-bright-orange transition-colors"
                              size={24}
                            />
                          )}
                        </div>

                        <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
                          {product.description}
                        </p>

                        <ul className="space-y-3 flex-1 mt-auto">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div
                                className={`flex-shrink-0 w-6 h-6 rounded-full ${product.accentBg} flex items-center justify-center mt-0.5`}
                              >
                                <CheckCircle2
                                  size={14}
                                  className={product.accentText}
                                />
                              </div>
                              <span className="text-gray-600 text-[15px] leading-snug">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-14 md:py-24 border-t border-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-6xl mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
                Why Choose Betopia Limited for AI & Digital Transformation
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Betopia Limited is a leading Artificial Intelligence and
                technology company delivering enterprise AI solutions, digital
                transformation and intelligent automation for modern businesses.
                Built on scalable architecture and deep tech expertise, our
                solutions are designed for performance, security and global
                growth. We help organizations streamline operations, improve
                decision-making and achieve measurable business outcomes in an
                AI-driven world.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 mt-10">
            {whyChoose.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="group flex flex-col h-full border-l-2 border-gray-200 pl-6 hover:border-brand-bright-orange transition-colors duration-500">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-brand-bright-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-base flex-1">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaSection />
    </div>
  );
}
