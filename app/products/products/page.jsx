"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Grid,
  ShieldCheck,
  Mail,
  Bot,
  Phone,
  ArrowRight,
  AppWindow,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import CtaSection from "../../components/CtaSection";
import ScrollReveal from "../../components/ScrollReveal";

import productsData from "../../data/productsCatalog.json";

const iconMap = {
  Users,
  Grid,
  ShieldCheck,
  Mail,
  Bot,
  Phone,
};

const products = productsData.map(product => ({
  ...product,
  icon: iconMap[product.icon]
}));

export default function ProductsCatalogPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-40 pb-24 bg-[#020516] border-b border-white/5">
        {/* Dynamic ambient background */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020516] z-10" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-bright-orange/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[130px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 w-full text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              }}
            >
              <motion.div
                variants={fadeUpVariants}
                className="flex items-center justify-center gap-2 mb-6 text-brand-bright-orange font-bold text-sm tracking-widest uppercase"
              >
                <AppWindow className="w-5 h-5" /> Unified Ecosystem
              </motion.div>

              <motion.h1
                variants={fadeUpVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8"
              >
                Our Powerful <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-brand-bright-orange">
                  Digital Products
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariants}
                className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Explore Betopia&apos;s complete suite of enterprise software and
                AI solutions designed to transform the way you do business.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Link href={product.href}>
                  <div
                    className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 h-full flex flex-col group relative overflow-hidden ${product.borderColor}`}
                  >
                    {/* Accent Gradient Line */}
                    <div
                      className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${product.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                    ></div>

                    <div className="flex items-start justify-between mb-8 relative z-10">
                      <div
                        className={`w-16 h-16 rounded-2xl ${product.bgLight} ${product.textColor} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500`}
                      >
                        <product.icon className="w-8 h-8" />
                      </div>

                      <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-gray-50 group-hover:text-gray-900 group-hover:border-gray-200 transition-all">
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-brand-bright-orange transition-colors duration-300">
                      {product.title}
                    </h3>

                    <p className="text-gray-500 text-base leading-relaxed mb-8 flex-grow">
                      {product.desc}
                    </p>

                    <div
                      className={`flex items-center gap-2 text-sm font-bold ${product.textColor} mt-auto`}
                    >
                      Explore Platform <ChevronRight className="w-4 h-4" />
                    </div>

                    {/* Hover abstract shape */}
                    <div
                      className={`absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 blur-[80px] rounded-full transition-all duration-700`}
                    ></div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Banner */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="bg-slate-900 rounded-2xl p-10 md:p-16 relative overflow-hidden text-center max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-brand-bright-orange opacity-10 blur-[100px]"></div>

              <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                <Sparkles className="w-10 h-10 text-brand-bright-orange mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Looking for a custom solution?
                </h2>
                <p className="text-xl text-gray-400 mb-10">
                  Our engineering team can build tailor-made platforms designed
                  Specifically for your organization&apos;s unique challenges.
                </p>

                <Link
                  href="/contact"
                  className="h-14 px-8 rounded-full bg-brand-bright-orange text-white font-bold text-lg inline-flex items-center gap-3 hover:bg-orange-600 hover:-translate-y-1 shadow-lg shadow-brand-bright-orange/20 transition-all"
                >
                  Talk to our Experts <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
