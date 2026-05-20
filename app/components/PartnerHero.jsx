"use client";

import React from "react";
import Image from "next/image";
import RollingButton from "./RollingButton";
import ScrollReveal from "./ScrollReveal";
import { Sparkles, PhoneCall, Star, Search } from "lucide-react";

export default function PartnerHero() {
  return (
    <section className="relative min-h-screen bg-[#0A192F] overflow-hidden flex items-start md:items-center pt-36 md:pt-24 pb-16">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Image */}
        <Image
          src="/16x9-2.png"
          alt="Partner Global Network"
          fill
          className="hidden md:block object-cover object-center opacity-30"
          priority
        />
        {/* Mobile Image */}
        <Image
          src="/new-one.png"
          alt="Partner Global Network"
          fill
          className="md:hidden object-cover object-center opacity-80"
          priority
        />
        {/* Dark overlay to ensure text readability while matching brand colors */}
        <div className="hidden md:block absolute inset-0 bg-linear-to-r from-[#0A192F] via-[#0A192F]/30 to-transparent" />
        <div className="hidden md:block absolute inset-0 bg-linear-to-t from-[#0A192F] via-transparent to-transparent" />
        {/* Mobile overlay: top to bottom transparent */}
        <div className="md:hidden absolute inset-0 bg-linear-to-b from-brand-black via-brand-black/70 to-transparent" />
      </div>

      {/* Background Decorative Elements */}
      <div className="hidden md:block absolute top-0 right-0 w-[60%] h-full bg-linear-to-l from-amber-600/40 to-transparent blur-[120px] pointer-events-none" />
      <div className="hidden md:block absolute -bottom-20 -left-[10%] w-[70%] h-[60%] bg-linear-to-t from-amber-600/60 rounded-full overflow-hidden to-transparent blur-[120px] pointer-events-none" />
      <div className="hidden md:block absolute -bottom-20 -right-[10%] w-[50%] h-[40%] bg-linear-to-t from-amber-600/40 rounded-full to-transparent blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <ScrollReveal delay={0.3}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.3]">
              <span className="text-white block">
                A Strategic Business Partnership That Powers Your Growth
              </span>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mt-2 md:mt-4 lg:mt-6 max-w-3xl">
              Grow Your Business with a Trusted Global Technology Partner
            </p>

            {/* <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6 max-w-3xl">
              Transform your business into a global digital powerhouse without
              increasing overhead or delivery risk. With 5,000+ production ready
              engineers, Betopia accelerates your AI, ERP and cloud initiatives
              while you retain full client ownership and we ensure seamless
              execution.
            </p> */}

            <div className="mt-4 md:mt-6 lg:mt-8 flex flex-wrap gap-4">
              <RollingButton
                text="Become a Partner"
                href="/become-partner"
                icon={PhoneCall}
                className="shadow-[0_0_30px_rgba(255,102,0,0.3)]"
              />
              <RollingButton
                text="Find a Partner"
                href="/partners"
                variant="outline"
                icon={Search}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
