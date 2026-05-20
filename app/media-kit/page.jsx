"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Mail,
  Phone,
  ChevronRight,
  Shield,
  ArrowRight,
  ArrowUpRight,
  Locate,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { RiMapPinFill, RiMapPinLine, RiWhatsappLine } from "react-icons/ri";

const mediaContacts = [
  {
    country: "Bangladesh",
    city: "Dhaka",
    email: "media@betopialimited.com",
    phone: "+8801332840871",
    flag: "🇧🇩",
  },
];

const leadership = [
  {
    name: "Muhammad Monir Hossain",
    title: "Chief Executive Officer",
    image: "https://i.postimg.cc/k5wP7WjR/CEO.webp",
    galleryUrl: "https://muhammadmonirhossain.com/gallery",
  },
  {
    name: "Sabina Akter",
    title: "Chairperson",
    image: "https://i.postimg.cc/1zM1yDWD/Chairperson.png",
    galleryUrl: "https://sabinaakter.com/gallery",
  },
];

export default function MediaKitPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative bg-slate-900 pt-36 pb-28 overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.postimg.cc/ZnHTgXGy/media-jpg.jpg"
            alt="Media Kit Background"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04060e] via-[#04060e]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04060e] via-transparent to-[#04060e]/50" />
        </div>

        {/* ambient glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-bright-orange/10 blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-10 backdrop-blur-sm">
              <span className="text-[10px] font-bold uppercase tracking-[3px] text-gray-400">
                Resources
              </span>
              <ChevronRight size={12} className="text-gray-600" />
              <span className="text-[10px] font-bold uppercase tracking-[3px] text-brand-bright-orange">
                Media Kit
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Media <span className="text-brand-bright-orange">Kit</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Official Betopia Limited brand assets for editorial use. Download
              logos, leadership imagery, and press resources below.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── USAGE POLICY ─────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-4">
          <ScrollReveal>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 mt-1">
                <Shield size={22} className="text-brand-bright-orange" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                  Brand Usage Policy
                </h2>
                <div className="space-y-4 text-gray-500 leading-relaxed text-lg">
                  <p>
                    Betopia Limited exclusively owns all brand assets, including
                    its logos, product names, designs, and slogans. Partners and
                    the public may reference Betopia and its products only in
                    truthful text form and without implying endorsement. Use of
                    logos, icons, trade dress, or &quot;official/partner&quot;
                    claims requires explicit written authorization.
                  </p>
                  <p>
                    Betopia&apos;s name must not be used in business names,
                    domains, apps, merchandise, or altered forms. Apps
                    integrating with Betopia must use unique branding. Any
                    confusingly similar designs are prohibited. Betopia reserves
                    the right to revoke permissions that conflict with its
                    values of Innovation, Integrity, and Excellence.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── LOGO ASSETS ──────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Dark logo panel */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <div className="aspect-[1.8/1] bg-[#1a1a1a] rounded-sm flex items-center justify-center p-12">
                  <div className="relative w-full h-full">
                    <Image
                      src="/logo.svg"
                      alt="Betopia Logo"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-6 text-[13px] font-medium text-gray-800">
                  <a
                    href="/logo.svg"
                    download
                    className="flex items-center gap-1.5 hover:text-brand-bright-orange transition-colors"
                  >
                    Download SVG <Download size={14} />
                  </a>
                  <span className="text-gray-200 text-sm">|</span>
                  <a
                    href="/logo.png"
                    download
                    className="flex items-center gap-1.5 hover:text-brand-bright-orange transition-colors"
                  >
                    Download PNG <Download size={14} />
                  </a>
                  <span className="text-gray-200 text-sm">|</span>
                  <a
                    href="/logo.ai"
                    download
                    className="flex items-center gap-1.5 hover:text-brand-bright-orange transition-colors"
                  >
                    Download AI <Download size={14} />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Light logo panel */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-6">
                <div className="aspect-[1.8/1] bg-[#fcfcfc] rounded-sm flex items-center justify-center p-12 border border-gray-50">
                  <div className="relative w-full h-full">
                    <Image
                      src="/logo.svg"
                      alt="Betopia Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-6 text-[13px] font-medium text-gray-800">
                  <a
                    href="/logo.svg"
                    download
                    className="flex items-center gap-1.5 hover:text-brand-bright-orange transition-colors"
                  >
                    Download SVG <Download size={14} />
                  </a>
                  <span className="text-gray-200 text-sm">|</span>
                  <a
                    href="/logo.png"
                    download
                    className="flex items-center gap-1.5 hover:text-brand-bright-orange transition-colors"
                  >
                    Download PNG <Download size={14} />
                  </a>
                  <span className="text-gray-200 text-sm">|</span>
                  <a
                    href="/logo.ai"
                    download
                    className="flex items-center gap-1.5 hover:text-brand-bright-orange transition-colors"
                  >
                    Download AI <Download size={14} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-4">
          <ScrollReveal>
            <p className="text-md font-bold uppercase tracking-tight text-gray-900 mb-4">
              IMAGES OF OUR LEADERSHIP TEAM
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
            {leadership.map((person, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Link
                  href={person.galleryUrl}
                  target="_blank"
                  className="group block"
                >
                  {/* Image Card */}
                  <div className="relative aspect-[4/3] bg-white rounded-xl overflow-hidden border border-gray-100 mb-8">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Text Description */}
                  <div className="flex justify-between items-start border-b border-gray-100 pb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-brand-bright-orange transition-colors">
                        {person.name}
                      </h3>
                      <p className="text-gray-500 text-base md:text-lg">
                        {person.title}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-bright-orange/10 transition-colors">
                      <ArrowUpRight
                        size={20}
                        className="text-brand-bright-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEDIA CONTACTS ───────────────────────────── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <ScrollReveal>
              <div>
                <h2 className="text-[44px] font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Media Contacts
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                  Operating across global markets, our media team is available
                  to support press inquiries, strategic communications, event
                  coverage and official statements worldwide.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Column */}
            <div className="space-y-4">
              <ScrollReveal delay={0.1}>
                <div className="flex items-center gap-6">
                  <div className="w-8 h-8 rounded-md bg-orange-50 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-[#e67e22]" />
                  </div>
                  <a
                    href="mailto:media@betopiagroup.com"
                    className="text-lg  text-gray-900 hover:text-[#e67e22] transition-colors"
                  >
                    media@betopiagroup.com
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex items-center gap-6">
                  <div className="w-8 h-8 rounded-md bg-orange-50 flex items-center justify-center shrink-0">
                    <RiWhatsappLine className="text-[#e67e22]" size={20} />
                  </div>
                  <a
                    href="tel:+8801332840800"
                    className="text-lg  text-gray-900 hover:text-[#e67e22] transition-colors"
                  >
                    +88 01332840800
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex items-start gap-6">
                  <div className="w-8 h-8 rounded-md bg-orange-50 flex items-center justify-center shrink-0">

                    <RiMapPinLine className="text-[#e67e22]" size={20} />
                  </div>
                  <p className="text-[15px] font-medium text-gray-600 leading-relaxed pt-1">
                    Lotus Kamal Tower - 2, Level 6, 59 & 61, South Avenue, Gulshan Ave Dhaka 1212, Bangladesh
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
