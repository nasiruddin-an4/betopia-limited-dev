"use client";

import React, { useState } from "react";
import { Mail, ChevronDown, Target, Users, ShieldCheck } from "lucide-react";
import { Field, SuccessScreen, inputCls, ContactLayout } from "../SharedComponents";

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
      <div className="min-h-screen bg-[#04060e] flex items-center justify-center p-6">
        <SuccessScreen type="general" />
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
    <ContactLayout
      title="General Contact"
      subtitle={<>Tell us what you need. <br /><span className="text-brand-bright-orange">We&apos;ll take it from there.</span></>}
      icon={Mail}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="First name" required>
                <input
                  name="firstName"
                  type="text"
                  required
                  className={inputCls}
                  placeholder="John"
                  onChange={onChange}
                />
              </Field>
              <Field label="Last name" required>
                <input
                  name="lastName"
                  type="text"
                  required
                  className={inputCls}
                  placeholder="Doe"
                  onChange={onChange}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Work email" required>
                <input
                  name="email"
                  type="email"
                  required
                  className={inputCls}
                  placeholder="john.doe@company.com"
                  onChange={onChange}
                />
              </Field>
              <Field label="Organization name" required>
                <input
                  name="org"
                  type="text"
                  required
                  className={inputCls}
                  placeholder="Your organization"
                  onChange={onChange}
                />
              </Field>
            </div>

            <Field label="Region" required>
              <div className="relative">
                <select
                  name="region"
                  required
                  className={`${inputCls} appearance-none cursor-pointer`}
                  onChange={onChange}
                >
                  <option value="">Select your region</option>
                  <option value="Americas">Americas</option>
                  <option value="Europe">Europe</option>
                  <option value="Asia Pacific">Asia Pacific</option>
                  <option value="Middle East">Middle East</option>
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                />
              </div>
            </Field>

            <Field label="Message" required>
              <textarea
                name="message"
                required
                rows={4}
                className={`${inputCls} resize-none`}
                placeholder="How can we help you?"
                onChange={onChange}
              />
            </Field>

            <button
              type="submit"
              disabled={submitting}
              className="w-full md:w-auto h-14 px-12 bg-brand-bright-orange text-white rounded-xl font-bold hover:bg-orange-600 transition-all shadow-xl shadow-brand-bright-orange/20 disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 md:p-10 sticky top-32">
            <h3 className="text-2xl font-bold text-white mb-8">
              Why Betopia?
            </h3>
            <div className="space-y-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-bright-orange/10 flex items-center justify-center shrink-0 border border-brand-bright-orange/20 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContactLayout>
  );
}
