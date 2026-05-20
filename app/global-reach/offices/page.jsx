"use client";
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Globe,
  Navigation,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RollingButton from "@/app/components/RollingButton";

const GLOBE_LOCATIONS = [
  {
    id: 1,
    lat: 34.0522,
    lng: -84.0713,
    country: "United States",
    label: "USA Office",
    type: "Country Head",
    repName: "Zahir Haque Bhuiyan",
    repImage: "/country_representive/Zahir-Haque-Bhuiyan-2.png",
    address: "3651 Peachtree Pkwy Ste. E 116, Suwanee, GA 30024, USA",
    email: "zahir@betopialimited.com",
    phone: "+1 (404) 936-3567",
    flag: "🇺🇸",
  },
  {
    id: 2,
    lat: 25.2048,
    lng: 55.2708,
    country: "United Arab Emirates",
    label: "Dubai Office",
    type: "Country Head",
    repName: "Md. Ashraful Mamun",
    repImage: "/country_representive/Md.-Ashraful-Mamun-2.png",
    address:
      "Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.",
    email: "ashraful@betopialimited.com",
    phone: "+971 52 415 7275",
    flag: "🇦🇪",
  },
  {
    id: 4,
    lat: 15.1441,
    lng: 120.5887,
    country: "Philippines",
    label: "Angeles City Office",
    type: "Country Head",
    repName: "Ronald Vergera",
    repImage: "/country_representive/Ronald-Vergera-2.png",
    address:
      "Pulo Amsic Dr., Blk 1 Lot 13 Pulo Amsic Subd., Amsic, Angeles City, Pampanga, 2009",
    email: "ron@betopialimited.com",
    phone: "+61 406 560 146",
    flag: "🇵🇭",
  },
  {
    id: 6,
    lat: -37.7997,
    lng: 144.8755,
    country: "Australia",
    label: "Melbourne Office",
    type: "Country Head",
    repName: "Shahidul Islam",
    repImage: "/country_representive/Shahidul-Islam-2.png",
    address: "72B Ashley St, West Footscray VIC 3012, Australia",
    email: "shahidul@betopialimited.com",
    phone: "+61406964454",
    flag: "🇦🇺",
  },
  {
    id: 7,
    lat: 51.5074,
    lng: -0.1278,
    country: "United Kingdom",
    label: "London Office",
    type: "Country Head",
    repName: "Emdadul Haque Emon",
    repImage: "/country_representive/Emdadul-Haque-Emon-2.png",
    address: "77 Hudson Close, London, W12 7LY",
    email: "emdadul@betopialimited.com",
    phone: "+44 7533 109468",
    flag: "🇬🇧",
  },
  {
    id: 8,
    lat: 21.5433,
    lng: 39.1728,
    country: "Saudi Arabia",
    label: "Jeddah Office",
    type: "Country Head",
    repName: "Mohammad Didar E Rasul",
    repImage: "/country_representive/Mohammad-Didar-E-Rasul-2.png",
    address: "Jeddah, Saudi Arabia",
    email: "didar@betopialimited.com",
    phone: "+966537620879",
    flag: "🇸🇦",
  },
];

export default function GlobalOfficesPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden font-sans">
      {/* ═══════════════════════ HERO SECTION (SLATE-900) ═══════════════════════ */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 bg-slate-900 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/global_hero.png"
            alt="Global Connectivity"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-bright-orange/10 rounded-full blur-[150px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] -ml-24 -mb-24" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-bright-orange text-xs font-bold uppercase tracking-widest mb-8">
                <Globe size={14} />
                Global Presence
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                Connecting You to <br />
                <span className="text-brand-bright-orange">
                  Local Expertise,
                </span>{" "}
                Globally
              </h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                Strategically positioned across three continents, our regional
                offices provide dedicated support, local cultural insights, and
                unparalleled access to global markets for our enterprise
                partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ GLOBAL OFFICES GRID (WHITE) ═══════════════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
            <div>
              <h2 className="text-slate-900 text-3xl md:text-5xl font-bold tracking-tight mb-2">
                Our Strategic Locations
              </h2>
              <p className="text-slate-500 text-lg max-w-xl">
                Explore our offices and meet the representatives dedicated to
                your region's success.
              </p>
            </div>
            <div className="flex items-center gap-4 text-slate-400 font-medium">
              <span className="text-brand-bright-orange font-bold">
                {GLOBE_LOCATIONS.length}
              </span>{" "}
              Regional Centers Worldwide
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {GLOBE_LOCATIONS.map((loc, idx) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col"
              >
                <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-400 flex flex-col h-full">
                  {/* Card Top: Image first */}
                  <div className="relative h-80 w-full bg-white group-hover:bg-orange-100/50 transition-colors duration-500 overflow-hidden">
                    <Image
                      src={loc.repImage}
                      alt={loc.repName}
                      fill
                      className="object-contain object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Rep Info */}
                  <div className="p-6 pb-4 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="text-slate-900 font-bold text-xl leading-tight">
                      {loc.repName}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className="text-brand-bright-orange text-xs font-semibold">
                        {loc.country} · {loc.type}
                      </span>
                    </div>
                    {loc.hq && (
                      <span className="inline-block mt-2 px-2.5 py-0.5 bg-brand-bright-orange/10 text-brand-bright-orange text-[10px] font-bold uppercase tracking-wider rounded-full">
                        Global HQ
                      </span>
                    )}
                  </div>

                  {/* Card Body: Contact Info */}
                  <div className="p-6 flex flex-col gap-2 flex-1">
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2">
                        <Phone size={14} />
                        <p className="text-slate-900 font-semibold text-sm truncate">
                          {loc.phone}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} />
                        <p className="text-slate-900 font-semibold text-sm truncate">
                          {loc.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: CTA */}
                  <div className="px-6 pb-6">
                    <a
                      href="/contact"
                      className="group/btn w-full flex items-center justify-center gap-2 py-2 border border-slate-300 text-slate-600 rounded-md font-semibold text-sm cursor-pointer hover:bg-brand-bright-orange hover:text-white transition-all duration-300"
                    >
                      <Navigation
                        size={15}
                        className="group-hover/btn:rotate-12 transition-transform"
                      />
                      Get In Touch
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA SECTION (WHITE) ═══════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-bright-orange/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-transform duration-700 group-hover:scale-125" />
            <div className="relative z-10">
              <h2 className="text-white text-3xl md:text-6xl font-semibold mb-4 tracking-tight">
                Ready to take your enterprise <br className="hidden md:block" />
                to the next level?
              </h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                Connect with our regional experts and discover how Betopia can
                help you achieve your global business objectives.
              </p>
              <RollingButton text="Contact Us" href="/contact" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
