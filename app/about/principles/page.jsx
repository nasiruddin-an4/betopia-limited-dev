"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "../../components/ScrollReveal";
import RollingButton from "../../components/RollingButton";
import {
  ShieldCheck,
  Lightbulb,
  Users,
  Award,
  Zap,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    title: "Integrity",
    tagline: "Do Right, Always",
    desc: "We act with honesty, transparency and accountability in every interaction. Trust is the foundation of our relationships with clients, partners and colleagues.",
    icon: ShieldCheck,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Innovation",
    tagline: "Think Bold, Build Smart",
    desc: "Curiosity fuels our creativity. We embrace AI, cloud and data-driven solutions to solve real-world challenges and help businesses transform.",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Collaboration",
    tagline: "Together, We Achieve More",
    desc: "Teamwork and empathy are at the heart of everything we do. By sharing knowledge and working closely with clients, we create outcomes no one could achieve alone.",
    icon: Users,
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "Excellence",
    tagline: "Deliver Beyond Expectation",
    desc: "We are committed to delivering the highest quality in everything we do. By continuously improving and pushing boundaries, we create outcomes that exceed expectations.",
    icon: Award,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Courage",
    tagline: "Lead Change, Embrace Challenges",
    desc: "We take bold, smart risks and tackle challenges head-on. Courage drives us to innovate, disrupt and lead in a rapidly changing world.",
    icon: Zap,
    color: "from-rose-500 to-red-500",
  },
];

export default function PrinciplesPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-brand-bright-orange/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <span className="bg-brand-bright-orange/10 border border-brand-bright-orange/20 text-brand-bright-orange px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8">
                Values
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Betopia <span className="text-brand-bright-orange">Values</span>
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-3xl mb-6">
                Where integrity, innovation and courage power intelligent
                solutions.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                At Betopia, our values aren&apos;t just words—they are our way
                of working, thinking and building the future. They guide every
                decision, shape our culture and inspire us to deliver secure,
                cloud-ready, AI-powered business solutions for clients around
                the globe.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ VALUES GRID ═══════ */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-2xl hover:border-transparent transition-all duration-500 h-full flex flex-col group">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                    >
                      <Icon size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-brand-black mb-2">
                      {v.title}
                    </h2>
                    <h3 className="text-sm font-bold text-brand-bright-orange uppercase tracking-widest mb-6">
                      &quot;{v.tagline}&quot;
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {v.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="bg-brand-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(247,149,73,0.15),transparent_70%)]" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight relative z-10">
                Experience our values in action.
              </h2>
              <div className="flex justify-center relative z-10">
                <RollingButton text="Partner With Us" href="/partner" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
