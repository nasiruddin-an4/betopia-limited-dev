"use client";

import React from "react";
import { CheckCircle2, ChevronRight, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export const inputCls =
  "w-full bg-white/5 border border-white/10 rounded-xl px-5 h-14 text-white focus:outline-none focus:border-brand-bright-orange focus:bg-white/10 transition-all placeholder:text-gray-600";

export const PARTNER_TYPES = [
  "White-label & Co-branded (Custom Software)",
  "Resource Augmentation / MSP",
  "Reseller / Referral Partner",
  "Technology Alliance",
  "System Integrator",
];

export function Field({ label, required, children }) {
  return (
    <div className="space-y-2.5">
      <label className="text-sm font-semibold text-gray-400 flex items-center gap-1">
        {label}
        {required && <span className="text-brand-bright-orange">*</span>}
      </label>
      {children}
    </div>
  );
}

export function SuccessScreen({ type }) {
  const titles = {
    general: "Inquiry Sent Successfully",
    partnership: "Application Received",
    consultation: "Consultation Requested",
  };

  const messages = {
    general: "Thank you for reaching out. Our team will review your request and get back to you within 24-48 hours.",
    partnership: "We appreciate your interest in partnering with Betopia. Our partnership team will review your application soon.",
    consultation: "We've received your consultation request. A strategist will contact you shortly to confirm a time.",
  };

  return (
    <div className="py-20 text-center max-w-2xl mx-auto animate-in fade-in zoom-in duration-700">
      <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/20">
        <CheckCircle2 size={48} className="text-green-500" />
      </div>
      <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
        {titles[type] || "Success!"}
      </h2>
      <p className="text-gray-400 text-lg leading-relaxed mb-12">
        {messages[type]}
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-3 px-10 h-14 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-all group"
      >
        Return Home
        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

export function ContactLayout({ children, title, subtitle, icon: Icon }) {
  return (
    <div className="relative min-h-screen bg-[#04060e] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(239,139,66,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(239,139,66,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-4 lg:px-0 relative z-10 pt-32 pb-20">
        <ScrollReveal>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-bright-orange transition-colors text-sm font-medium mb-10 group"
          >
            <ArrowLeft
              size={15}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Selection
          </Link>
        </ScrollReveal>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 group cursor-default">
            <div className="w-10 h-10 rounded-lg bg-brand-bright-orange/10 border border-brand-bright-orange/20 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-brand-bright-orange/20">
              <Icon size={20} className="text-brand-bright-orange" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-bright-orange">
              {title}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-[1.1]">
            {subtitle}
          </h1>
        </div>

        {children}
      </div>
    </div>
  );
}
