"use client";

import React, { useState } from "react";
import { Handshake, ChevronRight, Send } from "lucide-react";
import { Field, SuccessScreen, inputCls, ContactLayout, PARTNER_TYPES } from "../SharedComponents";

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
      <div className="min-h-screen bg-[#04060e] flex items-center justify-center p-6">
        <SuccessScreen type="partnership" />
      </div>
    );
  }

  return (
    <ContactLayout
      title="Become a Partner"
      subtitle={<>Scale faster with <br /><span className="text-brand-bright-orange">Betopia Partnership.</span></>}
      icon={Handshake}
    >
      <div className="max-w-4xl">
        <form onSubmit={onSubmit} className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 md:p-12">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Company Details</h2>
                <p className="text-gray-400">Tell us about you and your organization.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="First Name" required>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="John"
                  />
                </Field>
                <Field label="Last Name" required>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="Doe"
                  />
                </Field>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Work Email" required>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="john@company.com"
                  />
                </Field>
                <Field label="Phone Number">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="+1 (555) 000-0000"
                  />
                </Field>
              </div>
              <Field label="Company Name" required>
                <input
                  type="text"
                  name="company"
                  required
                  value={form.company}
                  onChange={onChange}
                  className={inputCls}
                  placeholder="Acme Corporation"
                />
              </Field>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => valid(1) && setStep(2)}
                  disabled={!valid(1)}
                  className="flex items-center justify-center gap-3 w-full md:w-auto h-14 px-10 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all disabled:opacity-50 group"
                >
                  Continue <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Partnership Type</h2>
                <p className="text-gray-400">How do you want to partner with Betopia?</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PARTNER_TYPES.map((pt) => {
                  const checked = form.partnerTypes.includes(pt);
                  return (
                    <button
                      key={pt}
                      type="button"
                      onClick={() => toggleList("partnerTypes", pt)}
                      className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 ${checked ? "border-brand-bright-orange bg-brand-bright-orange/10" : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/8"}`}
                    >
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${checked ? "bg-brand-bright-orange border-brand-bright-orange" : "border-gray-600"}`}>
                        {checked && (
                          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                            <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <span className={`font-medium ${checked ? "text-brand-bright-orange" : "text-gray-300"}`}>{pt}</span>
                    </button>
                  );
                })}
              </div>
              <div className="pt-4 flex gap-4">
                <button type="button" onClick={() => setStep(1)} className="h-14 px-8 border border-white/20 text-white rounded-xl font-medium hover:bg-white/5 transition-all">Back</button>
                <button type="button" onClick={() => valid(2) && setStep(3)} disabled={!valid(2)} className="flex-1 h-14 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all disabled:opacity-50 group flex items-center justify-center gap-2">
                  Next Step <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Final Details</h2>
                <p className="text-gray-400">Tell us a bit about your goals.</p>
              </div>
              <Field label="Brief Description" required>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  className={`${inputCls} resize-none`}
                  placeholder="What are your goals for this partnership?"
                />
              </Field>
              <div className="pt-4 flex gap-4">
                <button type="button" onClick={() => setStep(2)} className="h-14 px-8 border border-white/20 text-white rounded-xl font-medium hover:bg-white/5 transition-all">Back</button>
                <button type="submit" disabled={submitting} className="flex-1 h-14 bg-brand-bright-orange text-white rounded-xl font-semibold hover:bg-orange-400 transition-all disabled:opacity-70 group flex items-center justify-center gap-2">
                  {submitting ? "Sending..." : <><Send size={18} /> Submit Request</>}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </ContactLayout>
  );
}
