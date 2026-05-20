"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
  ChevronRight,
  Briefcase,
  Trophy,
  Target,
  Rocket,
} from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";

/* ─── DATA ─── */
const executives = [
  {
    id: 1,
    name: "Muhammad Monir Hossain",
    role: "Founder & Group CEO",
    bio: "Muhammad Monir Hossain leads Betopia Group's global strategy across IT, Software, Cloud and Fintech. With a workforce of over 4,000, he focuses on empowering people and organizations through technological innovation and resilience.",
    image: "/ron photo.webp",
    linkedin: "#",
    category: "Corporate Leadership",
  },
  {
    id: 2,
    name: "Sabina Akter",
    role: "Chairperson",
    bio: "Sabina Akter provides executive oversight and strategic direction for the group's diversified portfolio. She is a dedicated advocate for job creation and women's leadership in the global technology sector.",
    image: "/client/stacy.webp",
    linkedin: "#",
    category: "Board Leadership",
  },
  {
    id: 3,
    name: "Mohammed Shahid Ullah",
    role: "Managing Director, PulseGrid",
    bio: "Mohammed Shahid Ullah spearheads PulseGrid's mission to deliver innovative energy and technology solutions, focusing on operational excellence and sustainable growth within the Betopia ecosystem.",
    image: "/client/chris.webp",
    linkedin: "#",
    category: "Business Unit Leadership",
  },
];

export default function ExecutivesPage() {
  return (
    <main className="bg-[#070a12] min-h-screen text-white overflow-hidden">
      {/* ═══ HERO ═══ */}
      <section className="relative pt-40 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-gradient-to-bl from-blue-500/[0.05] via-orange-500/[0.02] to-transparent blur-[120px] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-10 tracking-widest uppercase">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link
                href="/about/board"
                className="hover:text-white transition-colors"
              >
                Who We Are
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-orange-400 font-bold">Executive Team</span>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl">
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-8">
                Executive <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                  Leadership
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-12 font-light">
                Meet the visionary leaders driving operational excellence and
                digital transformation for our clients around the world.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ EXECUTIVES GRID ═══ */}
      <section className="px-4 md:px-8 py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {executives.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 0.1}>
                <div className="group bg-[#0c0f1a] border border-white/[0.06] rounded-[2rem] overflow-hidden hover:border-white/[0.12] transition-all duration-500 flex flex-col h-full shadow-2xl">
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f1a] via-transparent to-transparent opacity-80" />

                    {/* Role Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="text-xs text-blue-400 font-bold uppercase tracking-[0.2em] mb-2">
                        {member.category}
                      </div>
                      <h3 className="text-2xl font-black text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-white/60 text-sm font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                      {member.bio}
                    </p>
                    <div className="flex justify-between items-center pt-6 border-t border-white/5">
                      <div className="flex gap-4">
                        <Link
                          href={member.linkedin}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-orange-400 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </Link>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LEADERSHIP PILLARS ═══ */}
      <section className="px-4 md:px-8 py-24 bg-white/[0.02]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Visionary Growth",
                desc: "Leading with foresight to navigate the complex landscape of AI and Cloud technologies.",
                icon: Rocket,
              },
              {
                title: "Operational Excellence",
                desc: "Driving efficiency and quality across our global delivery network of 4,000+ professionals.",
                icon: Target,
              },
              {
                title: "Client-Centricity",
                desc: "Ensuring every strategic decision is anchored in delivering measurable impact for our partners.",
                icon: Trophy,
              },
            ].map((pillar, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom accent */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />
    </main>
  );
}
