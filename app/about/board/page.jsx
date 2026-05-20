"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Building2,
  Users,
  Briefcase,
} from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";
import RollingButton from "../../components/RollingButton";

/* ─── DATA ─── */
const boardMembers = [
  {
    id: 1,
    name: "Sabina Akter",
    role: "Chairperson",
    bio: "Widely recognized as one of Bangladesh’s most influential women leaders in technology and business, Sabina Akter has dedicated her career to creating jobs, empowering youth and advancing women’s leadership. Under her acumen leadership, Betopia Group has grown into a diversified conglomerate that has created more than 4,000 jobs. She believes prosperity is defined not only by economic growth but by the opportunities created for people and the lives transformed through them.",
    image: "/client/stacy.webp", // Placeholder image from public/client
    linkedin: "#",
    experience: "12+ Years",
    focus: "Governance & Strategic Growth",
  },
  {
    id: 2,
    name: "Muhammad Monir Hossain",
    role: "Founder & CEO",
    bio: "Engineer Muhammad Monir Hossain is a technologist and global business leader who built Betopia Group from humble beginnings. Today, he leads more than 4,000 employees under a clear vision: 'To empower people and organizations to reach their highest potential'. His journey stands as proof that resilience and perseverance are the foundations of success. He oversees the strategic vision for the group's international operations across IT, Software, Cloud and Fintech.",
    image: "/ron photo.webp", // Placeholder image from public
    linkedin: "#",
    experience: "12+ Years",
    focus: "Technology & Innovation",
  },
];

export default function BoardPage() {
  return (
    <main className="bg-[#070a12] min-h-screen text-white overflow-hidden">
      {/* ═══ HERO ═══ */}
      <section className="relative pt-40 pb-20 px-4 md:px-8 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-gradient-to-bl from-orange-500/[0.05] via-blue-500/[0.02] to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-purple-500/[0.04] via-transparent to-transparent blur-[100px] pointer-events-none" />

        <div className="container mx-auto relative z-10">
          {/* Breadcrumb */}
          <ScrollReveal>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-10 tracking-widest uppercase">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link
                href="/about/story"
                className="hover:text-white transition-colors"
              >
                Who We Are
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-orange-400 font-bold">
                Board of Directors
              </span>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl">
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-8">
                Strategic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
                  Governance
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-12 font-light">
                Our Board of Directors provides the vision, oversight and
                strategic guidance that powers Betopia's global mission to
                empower organizations through technology.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ BOARD LIST ═══ */}
      <section className="px-4 md:px-8 py-20 bg-white/[0.02] border-y border-white/[0.05]">
        <div className="container mx-auto">
          <div className="grid gap-20">
            {boardMembers.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 0.1}>
                <div
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Image side */}
                  <div className="w-full lg:w-[400px] shrink-0">
                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        sizes="(max-width: 1024px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-transparent opacity-60" />

                      {/* Social bar */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20">
                        <Link
                          href={member.linkedin}
                          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </Link>
                        <Link
                          href="#"
                          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Text side */}
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-lg text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Board Member
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
                      {member.name}
                    </h2>
                    <div className="text-xl text-orange-400 font-semibold mb-8">
                      {member.role}
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
                      {member.bio}
                    </p>

                    <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-widest font-bold mb-2">
                          Experience
                        </div>
                        <div className="text-white font-bold text-xl">
                          {member.experience}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 uppercase tracking-widest font-bold mb-2">
                          Focus Area
                        </div>
                        <div className="text-white font-bold text-xl">
                          {member.focus}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GOVERNANCE PILLARS ═══ */}
      <section className="px-4 md:px-8 py-24">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Governance Standards
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Our leadership is committed to the highest standards of
                transparency, accountability and ethical business conduct.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Oversight",
                desc: "Directing global strategy and ensuring alignment with our core mission of enterprise transformation.",
                icon: Building2,
              },
              {
                title: "Ethical Leadership",
                desc: "Upholding integrity and transparency in every decision, fostering a culture of trust worldwide.",
                icon: Users,
              },
              {
                title: "Risk Management",
                desc: "Ensuring long-term sustainability and resilience through rigorous compliance and security standards.",
                icon: Briefcase,
              },
            ].map((pillar, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-[#0c0f1a] border border-white/[0.06] rounded-3xl p-10 hover:border-white/[0.12] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-black transition-all">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {pillar.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-4 md:px-8 py-24 pb-40">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="relative bg-gradient-to-br from-[#0e1220] to-[#0a0d16] border border-white/[0.06] rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-b from-orange-500/[0.08] to-transparent blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                  Meet Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                    Executive Team
                  </span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                  Discover the leaders driving operational excellence across our
                  global delivery network.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <RollingButton
                    text="View Executives"
                    href="/about/executives"
                  />
                  <RollingButton
                    text="Our Story"
                    href="/about/story"
                    variant="outline"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom accent */}
      <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600" />
    </main>
  );
}
