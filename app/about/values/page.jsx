"use client";

import React from "react";
import Image from "next/image";
import {
  Shield,
  Lightbulb,
  Users,
  Award,
  Zap,
  ChevronRight,
  Heart,
  Globe,
  Rocket,
} from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    tagline: "Do Right, Always",
    description:
      "We act with honesty, transparency, and accountability in every interaction. Trust is the foundation of our relationships with clients, partners, and colleagues.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    tagline: "Think Bold, Build Smart",
    description:
      "Curiosity fuels our creativity. We embrace AI, cloud, and data-driven solutions to solve real-world challenges and help businesses transform.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Users,
    title: "Collaboration",
    tagline: "Together, We Achieve More",
    description:
      "Teamwork and empathy are at the heart of everything we do. By sharing knowledge and working closely with clients, we create outcomes no one could achieve alone.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Award,
    title: "Excellence",
    tagline: "Deliver Beyond Expectation",
    description:
      "We strive for precision and quality in every project. Our commitment to excellence ensures that we provide consistent, high-value results for our global partners.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Zap,
    title: "Courage",
    tagline: "Lead Change, Embrace Challenges",
    description:
      "We take bold, smart risks and tackle challenges head-on. Courage drives us to innovate, disrupt, and lead in a rapidly changing world.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
];

export default function ValuesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-[#04060e]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Values-page-cover-design.jpg"
            alt="Betopia Values"
            fill
            className="object-cover opacity-40 brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04060e] via-transparent to-[#04060e]/50" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] mb-8 backdrop-blur-md">
              <span className="text-[10px] font-bold uppercase tracking-[3px] text-gray-400">
                Our Foundation
              </span>
              <ChevronRight size={12} className="text-gray-600" />
              <span className="text-[10px] font-bold uppercase tracking-[3px] text-brand-bright-orange">
                Values
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Betopia <span className="text-brand-bright-orange">Values</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Where integrity, innovation, and courage power intelligent
              solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── NARRATIVE SECTION ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4 leading-tight">
                Our values aren't just words they are our way of working,
                thinking, and building the future.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                They guide every decision, shape our culture, and inspire us to
                deliver secure, cloud-ready, AI-powered business solutions for
                clients around the globe.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── VALUES GRID ─── */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] flex flex-col">
                <ScrollReveal delay={idx * 0.1} className="h-full w-full flex flex-col">
                  <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 h-full flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 ${value.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm font-bold tracking-widest mb-6">
                      "{value.tagline}"
                    </p>
                    <p className="text-gray-500 leading-relaxed text-lg grow">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
