"use client";

import React, { useState } from "react";
import { Calendar, ChevronDown, Users, ShieldCheck } from "lucide-react";
import { Field, SuccessScreen, inputCls, ContactLayout } from "../SharedComponents";

export default function ConsultationPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
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
        <SuccessScreen type="consultation" />
      </div>
    );
  }

  const benefits = [
    {
      icon: <Calendar className="text-brand-bright-orange" size={24} />,
      title: "Flexible scheduling",
      desc: "Book a time that works best for your schedule and time zone.",
    },
    {
      icon: <Users className="text-brand-bright-orange" size={24} />,
      title: "One-on-one expert time",
      desc: "Get direct access to our senior technology and business strategists.",
    },
    {
      icon: <ShieldCheck className="text-brand-bright-orange" size={24} />,
      title: "Tailored insights",
      desc: "Receive personalized recommendations specific to your industry.",
    },
  ];

  return (
    <ContactLayout
      title="Book a Consultation"
      subtitle={<>Ready to transform? <br /><span className="text-brand-bright-orange">Let&apos;s start the conversation.</span></>}
      icon={Calendar}
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

            <Field label="Consultation Topic" required>
              <div className="relative">
                <select
                  name="topic"
                  required
                  className={`${inputCls} appearance-none cursor-pointer`}
                  onChange={onChange}
                >
                  <option value="">Select a topic</option>
                  <option value="Digital Transformation">Digital Transformation</option>
                  <option value="AI & Automation">AI & Automation</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Cybersecurity">Cybersecurity</option>
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
                placeholder="Briefly describe what you'd like to discuss..."
                onChange={onChange}
              />
            </Field>

            <button
              type="submit"
              disabled={submitting}
              className="w-full md:w-auto h-14 px-12 bg-brand-bright-orange text-white rounded-xl font-bold hover:bg-orange-600 transition-all shadow-xl shadow-brand-bright-orange/20 disabled:opacity-50"
            >
              {submitting ? "Booking..." : "Schedule Consultation"}
            </button>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 md:p-10 sticky top-32">
            <h3 className="text-2xl font-bold text-white mb-8">Why book a session?</h3>
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
    </ContactLayout>
  );
}
