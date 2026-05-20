"use client";

import React, { useState } from "react";
import { Handshake, ChevronRight, Send, ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

const inputCls =
  "w-full bg-white/5 border border-white/10 rounded-xl px-5 h-14 text-white focus:outline-none focus:border-brand-bright-orange focus:bg-white/10 transition-all placeholder:text-gray-600";

const PARTNER_TYPES = [
  "White-label & Co-branded (Custom Software)",
  "Resource Augmentation / MSP",
  "Reseller / Referral Partner",
  "Technology Alliance",
  "System Integrator",
];

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

export default function PartnershipPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    partnerTypes: [],
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const toggleList = (key, val) => {
    setForm((p) => {
      const list = p[key].includes(val)
        ? p[key].filter((v) => v !== val)
        : [...p[key], val];
      return { ...p, [key]: list };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  const valid = (s) => {
    if (s === 1) return form.firstName && form.lastName && form.email && form.company;
    if (s === 2) return form.partnerTypes.length > 0;
    return true;
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#04060e] flex items-center justify-center p-6 text-center">
        <div className="animate-in fade-in zoom-in duration-700 max-w-2xl">
          <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/20">
            <ShieldCheck size={48} className="text-green-500" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Application Received</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            We appreciate your interest in partnering with Betopia. Our partnership team will review your application soon.
          </p>
          <Link href="/" className="inline-flex items-center gap-3 px-10 h-14 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-all group">
            Return Home <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#04060e] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(239,139,66,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(239,139,66,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-4 lg:px-0 relative z-10 pt-32 pb-20">
        <ScrollReveal>
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-bright-orange transition-colors text-sm font-medium mb-10 group">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
        </ScrollReveal>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 group cursor-default">
            <div className="w-10 h-10 rounded-lg bg-brand-bright-orange/10 border border-brand-bright-orange/20 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-brand-bright-orange/20">
              <Handshake size={20} className="text-brand-bright-orange" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-bright-orange">Become a Partner</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-[1.1]">
            Scale faster with <br /><span className="text-brand-bright-orange">Betopia Partnership.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Progress Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-10">
              {[
                { n: 1, title: "Company Details", desc: "Basic information about your business" },
                { n: 2, title: "Partnership Type", desc: "Select how you'd like to collaborate" },
                { n: 3, title: "Final Details", desc: "Tell us about your specific goals" },
              ].map((s, i) => {
                const isActive = step === s.n;
                const isCompleted = step > s.n;
                return (
                  <div key={i} className="flex gap-6 relative group">
                    {/* Connecting Line */}
                    {i < 2 && (
                      <div className="absolute left-6 top-12 bottom-[-40px] w-px bg-white/10 overflow-hidden">
                        <div 
                          className="w-full bg-brand-bright-orange transition-all duration-700 ease-in-out" 
                          style={{ height: isCompleted ? "100%" : "0%" }}
                        />
                      </div>
                    )}

                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-500 relative z-10 ${
                      isActive 
                        ? "bg-brand-bright-orange border-brand-bright-orange shadow-lg shadow-brand-bright-orange/20 scale-110" 
                        : isCompleted 
                        ? "bg-green-500/20 border-green-500/30 text-green-500" 
                        : "bg-white/5 border-white/10 text-gray-500"
                    }`}>
                      {isCompleted ? (
                        <ShieldCheck size={24} />
                      ) : (
                        <span className={`text-lg font-bold ${isActive ? "text-white" : ""}`}>{s.n}</span>
                      )}
                    </div>

                    <div className="pt-1">
                      <h3 className={`font-bold transition-colors duration-300 ${isActive ? "text-white text-xl" : "text-gray-500"}`}>
                        {s.title}
                      </h3>
                      <p className={`text-sm mt-1 transition-opacity duration-300 ${isActive ? "text-gray-400 opacity-100" : "text-gray-600 opacity-0 lg:opacity-100"}`}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Form Area */}
          <div className="lg:col-span-8">
            <form onSubmit={onSubmit} className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-bright-orange/5 blur-[100px] rounded-full pointer-events-none" />
              
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold text-white mb-2">Company Details</h2>
                    <p className="text-gray-400">Tell us about you and your organization.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="First Name" required>
                      <input type="text" name="firstName" required value={form.firstName} onChange={onChange} className={inputCls} placeholder="John" />
                    </Field>
                    <Field label="Last Name" required>
                      <input type="text" name="lastName" required value={form.lastName} onChange={onChange} className={inputCls} placeholder="Doe" />
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Work Email" required>
                      <input type="email" name="email" required value={form.email} onChange={onChange} className={inputCls} placeholder="john@company.com" />
                    </Field>
                    <Field label="Phone Number">
                      <input type="tel" name="phone" value={form.phone} onChange={onChange} className={inputCls} placeholder="+1 (555) 000-0000" />
                    </Field>
                  </div>
                  <Field label="Company Name" required>
                    <input type="text" name="company" required value={form.company} onChange={onChange} className={inputCls} placeholder="Acme Corporation" />
                  </Field>
                  <div className="pt-8">
                    <button type="button" onClick={() => valid(1) && setStep(2)} disabled={!valid(1)} className="flex items-center justify-center gap-3 w-full md:w-auto h-14 px-12 bg-white text-black rounded-xl font-bold hover:bg-brand-bright-orange hover:text-white transition-all disabled:opacity-50 group">
                      Continue <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold text-white mb-2">Partnership Type</h2>
                    <p className="text-gray-400">How do you want to partner with Betopia?</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PARTNER_TYPES.map((pt) => {
                      const checked = form.partnerTypes.includes(pt);
                      return (
                        <button key={pt} type="button" onClick={() => toggleList("partnerTypes", pt)} className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 ${checked ? "border-brand-bright-orange bg-brand-bright-orange/10" : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/8"}`}>
                          <span className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${checked ? "bg-brand-bright-orange border-brand-bright-orange" : "border-gray-600"}`}>
                            {checked && <svg width="12" height="9" viewBox="0 0 12 9" fill="none"><path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                          </span>
                          <span className={`font-medium ${checked ? "text-brand-bright-orange" : "text-gray-300"}`}>{pt}</span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="pt-8 flex flex-col sm:flex-row gap-4">
                    <button type="button" onClick={() => setStep(1)} className="h-14 px-10 border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-all">Back</button>
                    <button type="button" onClick={() => valid(2) && setStep(3)} disabled={!valid(2)} className="flex-1 h-14 bg-white text-black rounded-xl font-bold hover:bg-brand-bright-orange hover:text-white transition-all disabled:opacity-50 group flex items-center justify-center gap-2">
                      Next Step <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold text-white mb-2">Final Details</h2>
                    <p className="text-gray-400">Tell us a bit about your goals.</p>
                  </div>
                  <Field label="Brief Description" required>
                    <textarea name="message" required rows={6} value={form.message} onChange={onChange} className={`${inputCls} resize-none py-5`} placeholder="What are your goals for this partnership?" />
                  </Field>
                  <div className="pt-8 flex flex-col sm:flex-row gap-4">
                    <button type="button" onClick={() => setStep(2)} className="h-14 px-10 border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-all">Back</button>
                    <button type="submit" disabled={submitting} className="flex-1 h-14 bg-brand-bright-orange text-white rounded-xl font-bold hover:bg-orange-600 transition-all disabled:opacity-70 group flex items-center justify-center gap-3 shadow-xl shadow-brand-bright-orange/20">
                      {submitting ? "Sending Application..." : <><Send size={20} /> Submit Application</>}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
