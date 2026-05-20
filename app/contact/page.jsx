"use client";

import React, { useState } from "react";
import { Mail, ChevronDown, Target, Users, ShieldCheck, ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

const inputCls =
  "w-full bg-white/5 border border-white/10 rounded-xl px-5 h-14 text-white focus:outline-none focus:border-brand-bright-orange focus:bg-white/10 transition-all placeholder:text-gray-600";

function Field({ label, required, children }) {
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

export default function GeneralContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    org: "",
    region: "",
    industry: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#04060e] flex items-center justify-center p-6 text-center">
        <div className="animate-in fade-in zoom-in duration-700 max-w-2xl">
          <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/20">
            <ShieldCheck size={48} className="text-green-500" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Inquiry Sent Successfully</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Thank you for reaching out. Our team will review your request and get back to you within 24-48 hours.
          </p>
          <Link href="/" className="inline-flex items-center gap-3 px-10 h-14 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-all group">
            Return Home <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  const benefits = [
    {
      icon: <Target className="text-brand-bright-orange" size={24} />,
      title: "Business-first approach",
      desc: "We focus on outcomes that drive real impact for your business.",
    },
    {
      icon: <Users className="text-brand-bright-orange" size={24} />,
      title: "Expertise that scales",
      desc: "A dedicated team with deep industry and domain expertise.",
    },
    {
      icon: <ShieldCheck className="text-brand-bright-orange" size={24} />,
      title: "Trusted & secure",
      desc: "Your data is always protected with the highest standards.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#04060e] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(239,139,66,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(239,139,66,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <ScrollReveal>
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-bright-orange transition-colors text-sm font-medium mb-10 group">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
        </ScrollReveal>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 group cursor-default">
            <div className="w-10 h-10 rounded-lg bg-brand-bright-orange/10 border border-brand-bright-orange/20 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-brand-bright-orange/20">
              <Mail size={20} className="text-brand-bright-orange" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-bright-orange">General Contact</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-[1.1]">
            Tell us what you need. <br /><span className="text-brand-bright-orange">We&apos;ll take it from there.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="First name" required>
                  <input name="firstName" type="text" required className={inputCls} placeholder="John" onChange={onChange} />
                </Field>
                <Field label="Last name" required>
                  <input name="lastName" type="text" required className={inputCls} placeholder="Doe" onChange={onChange} />
                </Field>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Work email" required>
                  <input name="email" type="email" required className={inputCls} placeholder="john.doe@company.com" onChange={onChange} />
                </Field>
                <Field label="Organization name" required>
                  <input name="org" type="text" required className={inputCls} placeholder="Your organization" onChange={onChange} />
                </Field>
              </div>
              <Field label="Region" required>
                <div className="relative">
                  <select name="region" required className={`${inputCls} appearance-none cursor-pointer`} onChange={onChange}>
                    <option value="">Select your region</option>
                    <option value="Americas">Americas</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia Pacific">Asia Pacific</option>
                    <option value="Middle East">Middle East</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </Field>
              <Field label="Message" required>
                <textarea name="message" required rows={4} className={`${inputCls} resize-none`} placeholder="How can we help you?" onChange={onChange} />
              </Field>
              <button type="submit" disabled={submitting} className="w-full md:w-auto h-14 px-12 bg-brand-bright-orange text-white rounded-xl font-bold hover:bg-orange-600 transition-all shadow-xl shadow-brand-bright-orange/20 disabled:opacity-50">
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 md:p-10 sticky top-32">
              <h3 className="text-2xl font-bold text-white mb-8">Why Betopia?</h3>
              <div className="space-y-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-brand-bright-orange/10 flex items-center justify-center shrink-0 border border-brand-bright-orange/20 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                    <div>
                      <h4 className="text-white font-bold mb-2">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
