"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "../../components/ScrollReveal";
import {
  MapPin,
  Globe,
  Building2,
  Users,
  ShieldCheck,
  CheckCircle2,
  Lock,
  FileCheck,
} from "lucide-react";

/* ───── Data ───── */

const partners = [
  {
    name: "Zahirul Bhuiyan",
    role: "CEO",
    company: "ZHB Solutions LLC",
    image: "/client/chris.webp",
  },
  {
    name: "Ronald Vergara",
    role: "CMO",
    company: "Beyond AI",
    image: "/client/Ronald.webp",
  },
  {
    name: "Nehir Can Buyukyazi",
    role: "CEO",
    company: "TasteHub",
    image: "/client/stacy.webp",
  },
];

const offices = [
  {
    title: "Dhaka",
    subtitle: "Corporate Office",
    location: "Bangladesh",
    address:
      "Lotus Kamal Tower-2, Level 6, 59 & 61 Gulshan South Avenue, Gulshan-1, Dhaka-1212",
    phone: "+8801321231828",
    email: "sales@betopialimited.com",
    flag: "🇧🇩",
  },
  {
    title: "United States of America",
    subtitle: "USA Office",
    location: "United States of America",
    address:
      "3651 Peachtree Pkwy STE. E #116, Suwanee, GA 30024, United States of America",
    phone: "+1 (404) 936-3567",
    email: "sales@betopialimited.com",
    flag: "🇺🇸",
  },
  {
    title: "United Arab Emirates",
    subtitle: "Talent Hub",
    location: "United Arab Emirates",
    address: "Meydan Grandstand, 6th Floor, Meydan Road",
    phone: "+1 (312) 877-3570 (WA)",
    email: "sales@betopialimited.com",
    flag: "🇦🇪",
  },
  {
    title: "Philippines",
    subtitle: "Philippines Office",
    location: "Philippines",
    address: "Angeles, Philippines",
    phone: "+1 (312) 877-3570 (WA)",
    email: "sales@betopialimited.com",
    flag: "🇵🇭",
  },
  {
    title: "Dhaka",
    subtitle: "Talent Hub",
    location: "Dhaka",
    address:
      "C/A, Ak Khandaker Road Kaderia Tower J-28/B-B, Mohakhali, Dhaka 1213",
    phone: "+8801332840871",
    email: "sales@betopialimited.com",
    flag: "🇧🇩",
  },
];

const deliveryHubs = [
  { city: "Dhaka", country: "Bangladesh" },
  { city: "Manila", country: "Philippines" },
  { city: "Meydan Grandstand", country: "UAE" },
];

const futureExpansions = [
  { city: "Japan", status: "Coming Soon", flag: "🇯🇵" },
  { city: "Canada", status: "Coming Soon", flag: "🇨🇦" },
  { city: "United Kingdom", status: "Coming Soon", flag: "🇬🇧" },
];

const deliveryModel = [
  "Long-term partnership focus",
  "Consistent service quality across regions",
  "Secure & compliant operations",
  "Flexible engagement models",
];

const governance = [
  {
    title: "Strong Governance",
    desc: "Aligned with international standards across all regions",
    icon: Building2,
  },
  {
    title: "Data Protection",
    desc: "Ensuring security and privacy in every operation",
    icon: Lock,
  },
  {
    title: "Compliance",
    desc: "Meeting global regulatory requirements",
    icon: FileCheck,
  },
];

/* ───── Page ───── */

export default function DiversityPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/world-map.svg')] bg-center bg-no-repeat bg-cover mix-blend-screen" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-brand-black" />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <span className="bg-brand-bright-orange/10 border border-brand-bright-orange/20 text-brand-bright-orange px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <Globe size={16} /> Global Presence
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Worldwide{" "}
                <span className="text-brand-bright-orange">Operations</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-3xl">
                BETOPIA Limited operates with a global mindset, delivering
                technology and digital transformation solutions through a
                distributed international presence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ HQ SECTION ═══════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <ScrollReveal className="w-full md:w-1/2">
              <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-[3rem] overflow-hidden bg-gray-100 group">
                <Image
                  src="/office.webp"
                  alt="Betopia Headquarters"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
                  <h3 className="text-2xl font-bold text-brand-black mb-1">
                    Dhaka, Bangladesh
                  </h3>
                  <p className="text-brand-bright-orange font-bold uppercase tracking-widest text-xs">
                    Global Headquarters
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-bright-orange/10 text-brand-bright-orange flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-brand-black">
                    Headquarters
                  </h2>
                  <p className="text-gray-500">The core of our operations</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                BETOPIA Limited is headquartered in Dhaka, Bangladesh, where
                executive leadership, core engineering teams and global
                operations management are based.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                This central hub drives innovation, strategic direction and
                delivery excellence across all international regions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ REGIONAL OFFICES ═══════ */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-black mb-6">
                Regional Offices
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our regional offices support client engagement, business
                development and strategic partnerships in key global markets.
                These locations enable closer collaboration with clients, faster
                communication and deeper understanding of regional business
                needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {offices.map((office, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 border border-gray-100 h-full flex flex-col hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{office.flag}</div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-black">
                        {office.title}
                      </h3>
                      <p className="text-brand-bright-orange text-xs font-bold uppercase tracking-widest">
                        {office.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex-grow space-y-4 mb-6">
                    <div className="flex gap-3 text-gray-600">
                      <MapPin
                        className="shrink-0 mt-1 text-gray-400"
                        size={18}
                      />
                      <p className="text-sm leading-relaxed">
                        {office.address}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100 space-y-2 mt-auto">
                    <p className="text-sm font-medium text-brand-black">
                      <span className="text-gray-400 font-normal">Phone:</span>{" "}
                      {office.phone}
                    </p>
                    <p className="text-sm font-medium text-brand-black">
                      <span className="text-gray-400 font-normal">Mail:</span>{" "}
                      {office.email}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DELIVERY HUBS & EXPANSION ═══════ */}
      <section className="py-20 md:py-32 bg-brand-black text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Delivery Hubs */}
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6">Delivery Hubs</h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                BETOPIA Limited operates multiple delivery hubs to ensure
                efficient, round-the-clock project execution. Our distributed
                delivery model allows teams to work across time zones while
                maintaining consistent quality and performance.
              </p>
              <div className="space-y-4">
                {deliveryHubs.map((hub, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-bright-orange/20 text-brand-bright-orange flex items-center justify-center">
                        <Users size={20} />
                      </div>
                      <h3 className="text-lg font-semibold">{hub.city}</h3>
                    </div>
                    <span className="text-gray-400 text-sm font-medium">
                      {hub.country}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Future Expansion */}
            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl font-bold mb-6">Future Expansion</h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                As part of our long-term growth strategy, BETOPIA Limited is
                planning expansion into additional international markets. These
                future locations will strengthen regional presence and support a
                growing global client base.
              </p>
              <div className="space-y-4">
                {futureExpansions.map((exp, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-6 bg-gradient-to-r from-white/5 to-transparent border border-white/5 rounded-2xl opacity-70"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{exp.flag}</span>
                      <h3 className="text-lg font-semibold">{exp.city}</h3>
                    </div>
                    <span className="text-brand-bright-orange text-xs font-bold uppercase tracking-widest px-3 py-1 bg-brand-bright-orange/10 rounded-full">
                      {exp.status}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ GLOBAL DELIVERY MODEL ═══════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <ScrollReveal className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-brand-black mb-6">
                Our Global Delivery Model
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                BETOPIA Limited follows a global delivery model designed to
                balance local market understanding with centralized execution.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                This approach enables clients to achieve faster time-to-market,
                operational efficiency and long-term technology scalability.
              </p>
              <div className="space-y-5">
                {deliveryModel.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-brand-black font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="w-full md:w-1/2">
              <div className="relative aspect-square md:h-[500px] w-full rounded-[3rem] overflow-hidden bg-gray-50 border border-gray-100 p-10 flex flex-col items-center justify-center text-center">
                <Globe
                  className="text-brand-bright-orange mb-8"
                  size={80}
                  strokeWidth={1}
                />
                <h3 className="text-2xl font-bold text-brand-black mb-4">
                  Connecting Markets
                </h3>
                <p className="text-gray-500">
                  Seamlessly delivering high-quality enterprise solutions from
                  our global hubs to your local operations, anywhere in the
                  world.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ GOVERNANCE & SECURITY ═══════ */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-brand-black text-white flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-6 tracking-tight leading-[1.1]">
                Trust, Governance & Security
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Across all regions, BETOPIA Limited follows strong governance,
                security and compliance practices. Global operations are aligned
                with international standards to ensure data protection,
                operational integrity and dependable service delivery.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {governance.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300 h-full">
                    <div className="w-12 h-12 rounded-full bg-gray-50 text-brand-bright-orange flex items-center justify-center mx-auto mb-6">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ TRUSTED PARTNERS ═══════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-6 tracking-tight">
                Our Trusted Partners
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                A network of international partners powering technology
                excellence across regions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-24 h-24 rounded-full overflow-hidden relative mx-auto mb-6 border-4 border-white shadow-sm">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-brand-bright-orange text-sm font-bold uppercase tracking-widest mb-4">
                    {partner.role}
                  </p>
                  <p className="text-gray-500 text-sm font-semibold">
                    {partner.company}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
