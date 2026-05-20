"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock, ArrowRight, ShieldCheck, Check, HeartPulse, Home, CreditCard,
  Plane, PhoneCall, ShoppingCart, GraduationCap, Code, HelpCircle
} from "lucide-react";

import Swal from "sweetalert2";

export default function AIReadinessPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    companySize: "",
    industry: "",
    operationalStage: "",
    fullName: "",
    email: "",
    companyName: "",
    role: "",
    country: "",
    aiAdoption: "",
    existingSystems: "",
    dataVisibility: "",
    biggestChallenge: "",
    automationPriority: "",
    timeline: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const updateField = (name, value) => {
    setForm(p => ({ ...p, [name]: value }));
  };

  const handleNext = () => {
    // Basic validation for current step
    if (step === 2) {
      if (!form.companySize || !form.operationalStage) {
        Swal.fire({
          icon: "warning",
          title: "Incomplete Fields",
          text: "Please complete all options on this step before continuing.",
          confirmButtonColor: "#ff7a1a"
        });
        return;
      }
    } else if (step === 3) {
      if (!form.industry) {
        Swal.fire({
          icon: "warning",
          title: "Industry Required",
          text: "Please select your industry before continuing.",
          confirmButtonColor: "#ff7a1a"
        });
        return;
      }
    } else if (step === 4) {
      if (!form.aiAdoption || !form.dataVisibility) {
        Swal.fire({
          icon: "warning",
          title: "Incomplete Answers",
          text: "Please answer all foundation questions before continuing.",
          confirmButtonColor: "#ff7a1a"
        });
        return;
      }
    } else if (step === 5) {
      if (!form.existingSystems || !form.biggestChallenge || !form.automationPriority || !form.timeline) {
        Swal.fire({
          icon: "warning",
          title: "Incomplete Answers",
          text: "Please answer all challenge & priority questions before continuing.",
          confirmButtonColor: "#ff7a1a"
        });
        return;
      }
    } else if (step === 6) {
      if (!form.fullName || !form.email || !form.companyName) {
        Swal.fire({
          icon: "warning",
          title: "Contact Info Required",
          text: "Please fill in your name, business email, and company name to get your report.",
          confirmButtonColor: "#ff7a1a"
        });
        return;
      }
      // Submit form
      handleSubmit();
      return;
    }
    setStep(s => s + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(s => s - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  // Progress Bar percentage
  const progressPercent = step === 1 ? 0 : ((step - 1) / 5) * 100;

  // Options Data for Step 1
  const companySizes = ["1–10", "11–50", "51–200", "201–1000", "1000+"];

  const operationalStages = [
    { value: "Mostly manual", label: "Mostly Manual", desc: "Heavy reliance on spreadsheets, paperwork, and manual email coordination." },
    { value: "Digitally growing", label: "Digitally Growing", desc: "Core cloud software in place but workflows remain siloed and disconnected." },
    { value: "Partially automated", label: "Partially Automated", desc: "Select workflows integrate integrations and script automation." },
    { value: "Enterprise integrated", label: "Enterprise Integrated", desc: "Unified dashboards and automated operations across departments." }
  ];

  // Options Data for Step 2
  const industries = [
    { value: "Healthcare", label: "Healthcare & Life-Sciences", icon: HeartPulse, color: "text-emerald-500 bg-emerald-50" },
    { value: "Real Estate", label: "Real Estate & Proptech", icon: Home, color: "text-teal-500 bg-teal-50" },
    { value: "Finance", label: "Fintech & Insurance", icon: CreditCard, color: "text-blue-500 bg-blue-50" },
    { value: "Travel & Hospitality", label: "Travel & Hospitality", icon: Plane, color: "text-orange-500 bg-orange-50" },
    { value: "Logistics", label: "Telecom & Media", icon: PhoneCall, color: "text-indigo-500 bg-indigo-50" },
    { value: "Retail", label: "Retail & E-commerce", icon: ShoppingCart, color: "text-cyan-500 bg-cyan-50" },
    { value: "Education", label: "Edtech & E-learning", icon: GraduationCap, color: "text-purple-500 bg-purple-50" },
    { value: "Technology", label: "Software & Hi-tech", icon: Code, color: "text-violet-500 bg-violet-50" },
    { value: "Other", label: "Other", icon: HelpCircle, color: "text-gray-500 bg-gray-50" }
  ];

  // Options Data for Step 3
  const aiAdoptions = [
    { value: "Not started yet", label: "Not started yet" },
    { value: "Exploring AI", label: "Exploring AI & doing research" },
    { value: "Running small pilots", label: "Running small experiments/pilots" },
    { value: "Using AI in selected departments", label: "Department-level AI deployment" },
    { value: "AI is already part of operations", label: "AI fully integrated in workflows" }
  ];

  const existingSystems = [
    { value: "CRM", label: "CRM (Customer Relations)" },
    { value: "ERP", label: "ERP (Resource Planning)" },
    { value: "HRM", label: "HRM (Human Resources)" },
    { value: "Accounting / Finance", label: "Accounting & Finance" },
    { value: "Analytics / BI", label: "BI & Data Analytics" },
    { value: "Workflow automation", label: "Workflow Automation" },
    { value: "None", label: "None" },
    { value: "Other", label: "Other Systems" }
  ];

  const dataVisibilities = [
    { value: "Low visibility", label: "Low visibility (reactive analytics)" },
    { value: "Department-level reports", label: "Department-level scheduled reports" },
    { value: "Centralized dashboards", label: "Centralized operational dashboards" },
    { value: "Real-time operational intelligence", label: "Real-time automated intelligence" }
  ];

  // Options Data for Step 4
  const biggestChallenges = [
    { value: "Manual processes", label: "Repetitive manual work" },
    { value: "Slow decision-making", label: "Slow data analysis & choices" },
    { value: "Team productivity", label: "Bottlenecks in team output" },
    { value: "Customer support", label: "High customer ticket backlogs" },
    { value: "Sales follow-up", label: "Delayed client engagement" },
    { value: "Reporting & analytics", label: "Scattered reporting data" },
    { value: "Cost efficiency", label: "Unoptimized operating costs" },
    { value: "Scaling operations", label: "Friction when scaling up" }
  ];

  const automationPriorities = [
    { value: "Sales", label: "Sales & CRM automation" },
    { value: "Customer support", label: "Customer service AI agents" },
    { value: "HR", label: "HR & employee onboarding" },
    { value: "Finance", label: "Accounting & invoicing workflows" },
    { value: "Operations", label: "Core business operations" },
    { value: "Reporting", label: "Data analytics & BI dashboards" },
    { value: "Marketing", label: "Content generation & SEO tools" },
    { value: "Internal workflow", label: "Document processing & chat tools" }
  ];

  const timelines = [
    { value: "Immediately", label: "Urgent", desc: "As soon as possible" },
    { value: "3–6 months", label: "Standard need", desc: "Within 1 to 3 months" },
    { value: "6–12 months", label: "Planning ahead", desc: "Within 3 to 6 months" }
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-gray-900 py-20 px-6 relative overflow-hidden flex flex-col justify-center items-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_70%_30%,rgba(255,122,26,0.06),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.04),transparent_60%)]" />
      </div>

      <div className="max-w-7xl w-full z-10 flex flex-col items-center mt-20">
        
        {/* Wizard Card Box */}
        <div className="w-full max-w-[850px] bg-white text-gray-900 rounded-[28px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative border border-slate-200/80 transition-all duration-300">

          {/* Close / Return link */}
          <Link
            href="/"
            className="absolute top-6 right-8 text-gray-400 hover:text-gray-900 text-2xl font-light transition-colors"
            title="Return to Home"
          >
            &times;
          </Link>

          {!success ? (
            <>
              {/* Top progress area */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
                <span className="text-brand-bright-orange font-bold text-[12px] uppercase tracking-wider">
                  Betopia Assessment
                </span>
                <h2 className="text-lg font-medium text-gray-600 mt-1">
                  {step === 1 ? "Overview" : `Step ${step - 1} of 5`}
                </h2>
              </div>

              {/* Steps render */}
              <div className="min-h-[300px]">

                {/* ═══════ STEP 1: WELCOME & MATURITY OVERVIEW ═══════ */}
                {step === 1 && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    <div className="text-left space-y-3">
                      <span className="text-brand-bright-orange font-bold text-xs uppercase tracking-wider bg-brand-bright-orange/10 px-3 py-1 rounded-full w-fit">
                        Enterprise Assessment
                      </span>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                        Assess Your <span className="text-brand-bright-orange">Enterprise AI</span> Readiness
                      </h3>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        This assessment helps identify your organization’s AI maturity, automation opportunities, infrastructure readiness, and strategic transformation potential.
                      </p>
                    </div>

                    {/* Time & Delivery Badge Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-brand-bright-orange/5 border border-brand-bright-orange/10 rounded-2xl p-4">
                      <div className="flex items-center gap-3 text-left">
                        <div className="w-10 h-10 rounded-full bg-brand-bright-orange/10 flex items-center justify-center text-brand-bright-orange shrink-0">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Assessment Time</p>
                          <p className="text-sm font-extrabold text-gray-900">3–5 Minutes</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-left">
                        <div className="w-10 h-10 rounded-full bg-brand-bright-orange/10 flex items-center justify-center text-brand-bright-orange shrink-0">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Delivery Time</p>
                          <p className="text-sm font-extrabold text-gray-900">Strategic report delivered within 24–48 hours</p>
                        </div>
                      </div>
                    </div>

                    {/* What you'll receive list */}
                    <div className="space-y-4 pt-4 border-t border-gray-100">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider text-left">What You&apos;ll Receive</h4>
                      <div className="grid sm:grid-cols-2 gap-4 text-left">
                        {[
                          { title: "AI Readiness Score", desc: "Evaluate your organization’s current AI maturity and transformation readiness." },
                          { title: "Automation Opportunity Analysis", desc: "Identify operational workflows that can benefit from intelligent automation." },
                          { title: "Infrastructure & Systems Review", desc: "Understand how scalable your current enterprise systems are for AI adoption." },
                          { title: "Strategic Recommendations", desc: "Receive implementation-focused recommendations tailored to your business goals." },
                          { title: "Human-Reviewed Insights", desc: "Every assessment is reviewed by Betopia specialists for real-world strategic direction." }
                        ].map((item, idx) => (
                          <div key={idx} className="flex gap-3">
                            <div className="w-5 h-5 rounded-full bg-brand-bright-orange/10 flex items-center justify-center text-brand-bright-orange shrink-0 mt-0.5">
                              <Check className="w-3 h-3" />
                            </div>
                            <div>
                              <h5 className="text-xs font-extrabold text-gray-900">{item.title}</h5>
                              <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Trust Bar / Designed for */}
                    <div className="space-y-3 pt-4 border-t border-gray-100 text-left">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Designed for:</p>
                      <div className="flex flex-wrap gap-2">
                        {["Growing Businesses", "Enterprise Teams", "Operational Leaders", "Digital Transformation Initiatives"].map((badge) => (
                          <span key={badge} className="px-3 py-1.5 bg-slate-50 border border-slate-200/60 rounded-full text-[11px] font-bold text-gray-600">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ═══════ STEP 2: ORGANIZATION INFO ═══════ */}
                {step === 2 && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    <div className="text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-700 tracking-tight">
                        Let’s understand your organization
                      </h3>
                      <p className="text-sm text-gray-500">
                        Please select your organization size and current automation stage.
                      </p>
                    </div>

                    {/* Company Size horizontal cards */}
                    <div className="space-y-3">
                      <label className="block text-sm font-bold text-gray-800 uppercase tracking-wider text-left">
                        Company Size (Employees)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                        {companySizes.map((size) => {
                          const isSelected = form.companySize === size;
                          return (
                            <button
                              key={size}
                              type="button"
                              onClick={() => updateField("companySize", size)}
                              className={`py-4 px-4 rounded-xl border text-center font-bold text-sm transition-all duration-200 cursor-pointer
                                ${isSelected
                                  ? "border-brand-bright-orange bg-brand-bright-orange/5 text-brand-bright-orange shadow-sm"
                                  : "border-gray-200 bg-white hover:border-gray-400 text-gray-600"
                                }`}
                            >
                              {size}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Operational Stage radio list */}
                    <div className="space-y-3">
                      <label className="block text-sm font-bold text-gray-800 uppercase tracking-wider text-left">
                        Current Operational Stage
                      </label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {operationalStages.map((stage) => {
                          const isSelected = form.operationalStage === stage.value;
                          return (
                            <button
                              key={stage.value}
                              type="button"
                              onClick={() => updateField("operationalStage", stage.value)}
                              className={`p-5 rounded-2xl border text-left flex gap-4 transition-all duration-200 cursor-pointer
                                ${isSelected
                                  ? "border-brand-bright-orange bg-brand-bright-orange/5 text-gray-900 shadow-sm"
                                  : "border-gray-200 bg-white hover:border-gray-400 text-gray-600"
                                }`}
                            >
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5
                                ${isSelected
                                  ? "border-brand-bright-orange bg-brand-bright-orange"
                                  : "border-gray-300"
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                              </div>
                              <div>
                                <h4 className="font-extrabold text-[15px] mb-1">{stage.label}</h4>
                                <p className="text-[12px] text-gray-500 leading-normal">{stage.desc}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* ═══════ STEP 3: INDUSTRY SELECTION ═══════ */}
                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="text-left">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-950 tracking-tight mb-2">
                        Choose your industry
                      </h3>
                      <p className="text-sm text-gray-500">
                        Select the primary industry that describes your company&apos;s business model.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {industries.map((ind) => {
                        const IconComponent = ind.icon;
                        const isSelected = form.industry === ind.value;
                        return (
                          <button
                            key={ind.value}
                            type="button"
                            onClick={() => updateField("industry", ind.value)}
                            className={`p-5 rounded-2xl border text-left flex items-center gap-4 transition-all duration-200 cursor-pointer
                              ${isSelected
                                ? "border-brand-bright-orange bg-brand-bright-orange/5 text-gray-900 shadow-sm"
                                : "border-gray-200 bg-white hover:border-gray-400 text-gray-600"
                              }`}
                          >
                            <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${ind.color}`}>
                              <IconComponent className="w-5.5 h-5.5" />
                            </div>
                            <span className="font-bold text-[14px] leading-snug">{ind.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ═══════ STEP 4: TECH & DATA FOUNDATION ═══════ */}
                {step === 4 && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    <div className="text-left">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-950 tracking-tight mb-2">
                        Where does your organization stand today?
                      </h3>
                      <p className="text-sm text-gray-500">
                        These questions evaluate your existing digital workflows and system capabilities.
                      </p>
                    </div>

                    <div className="space-y-6 text-left">
                      <div className="space-y-3">
                        <label className="block text-sm font-bold text-gray-800 uppercase tracking-wider">
                          Current AI Adoption Level
                        </label>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {aiAdoptions.map((opt) => {
                            const isSelected = form.aiAdoption === opt.value;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => updateField("aiAdoption", opt.value)}
                                className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all duration-200 cursor-pointer
                                  ${isSelected
                                    ? "border-brand-bright-orange bg-brand-bright-orange/5 text-gray-900 shadow-sm"
                                    : "border-gray-200 bg-white hover:border-gray-400 text-gray-600"
                                  }`}
                              >
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5
                                  ${isSelected ? "border-brand-bright-orange bg-brand-bright-orange" : "border-gray-300"}`}
                                >
                                  {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                                </div>
                                <span className="text-[13px] font-bold leading-tight">{opt.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="block text-sm font-bold text-gray-800 uppercase tracking-wider">
                          Business Data Visibility
                        </label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {dataVisibilities.map((opt) => {
                            const isSelected = form.dataVisibility === opt.value;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => updateField("dataVisibility", opt.value)}
                                className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all duration-200 cursor-pointer
                                  ${isSelected
                                    ? "border-brand-bright-orange bg-brand-bright-orange/5 text-gray-900 shadow-sm"
                                    : "border-gray-200 bg-white hover:border-gray-400 text-gray-600"
                                  }`}
                              >
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5
                                  ${isSelected ? "border-brand-bright-orange bg-brand-bright-orange" : "border-gray-300"}`}
                                >
                                  {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                                </div>
                                <span className="text-[13px] font-bold leading-tight">{opt.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ═══════ STEP 5: EXISTING SYSTEMS & CHALLENGES ═══════ */}
                {step === 5 && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    <div className="text-left">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-950 tracking-tight mb-2">
                        What do you want AI to improve first?
                      </h3>
                      <p className="text-sm text-gray-500">
                        Help us understand your operational priorities and business scaling targets.
                      </p>
                    </div>

                    <div className="space-y-6 text-left">
                      <div className="space-y-3">
                        <label className="block text-sm font-bold text-gray-800 uppercase tracking-wider">
                          Primary Existing Operations Platform
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {existingSystems.map((opt) => {
                            const isSelected = form.existingSystems === opt.value;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => updateField("existingSystems", opt.value)}
                                className={`p-3.5 rounded-xl border text-center flex flex-col items-center justify-center gap-2 transition-all duration-200 cursor-pointer min-h-[80px]
                                  ${isSelected
                                    ? "border-brand-bright-orange bg-brand-bright-orange/5 text-gray-900 shadow-sm font-bold"
                                    : "border-gray-200 bg-white hover:border-gray-400 text-gray-600"
                                  }`}
                              >
                                <span className="text-[13px] leading-tight font-bold">{opt.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="block text-sm font-bold text-gray-800 uppercase tracking-wider">
                          Biggest Operational Challenge
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {biggestChallenges.map((opt) => {
                            const isSelected = form.biggestChallenge === opt.value;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => updateField("biggestChallenge", opt.value)}
                                className={`p-3.5 rounded-xl border text-center flex flex-col items-center justify-center gap-2 transition-all duration-200 cursor-pointer min-h-[80px]
                                  ${isSelected
                                    ? "border-brand-bright-orange bg-brand-bright-orange/5 text-gray-900 shadow-sm font-bold"
                                    : "border-gray-200 bg-white hover:border-gray-400 text-gray-600"
                                  }`}
                              >
                                <span className="text-[13px] leading-tight font-bold">{opt.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="block text-sm font-bold text-gray-800 uppercase tracking-wider">
                          Priority Department for Automation
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {automationPriorities.map((opt) => {
                            const isSelected = form.automationPriority === opt.value;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => updateField("automationPriority", opt.value)}
                                className={`p-3.5 rounded-xl border text-center flex flex-col items-center justify-center gap-2 transition-all duration-200 cursor-pointer min-h-[80px]
                                  ${isSelected
                                    ? "border-brand-bright-orange bg-brand-bright-orange/5 text-gray-900 shadow-sm font-bold"
                                    : "border-gray-200 bg-white hover:border-gray-400 text-gray-600"
                                  }`}
                              >
                                <span className="text-[13px] leading-tight font-bold">{opt.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Timeline selection as card chips */}
                      <div className="space-y-3">
                        <label className="block text-sm font-bold text-gray-800 uppercase tracking-wider">
                          Planned Transformation Timeline
                        </label>
                        <div className="grid md:grid-cols-3 gap-4">
                          {timelines.map((item) => {
                            const isSelected = form.timeline === item.value;
                            return (
                              <button
                                key={item.value}
                                type="button"
                                onClick={() => updateField("timeline", item.value)}
                                className={`p-4 rounded-xl border text-center transition-all duration-200 cursor-pointer
                                  ${isSelected
                                    ? "border-brand-bright-orange bg-brand-bright-orange/5 text-gray-900 shadow-sm"
                                    : "border-gray-200 bg-white hover:border-gray-400 text-gray-600"
                                  }`}
                              >
                                <Clock className={`w-5 h-5 mx-auto mb-2 ${isSelected ? 'text-brand-bright-orange' : 'text-gray-400'}`} />
                                <h4 className="font-extrabold text-[14px]">{item.label}</h4>
                                <span className="text-[11px] text-gray-500 leading-normal block mt-1">{item.desc}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ═══════ STEP 6: CONTACT INFORMATION ═══════ */}
                {step === 6 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="text-left">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-950 tracking-tight mb-2">
                        Get Your AI Readiness Snapshot
                      </h3>
                      <p className="text-sm text-gray-500">
                        Receive a personalized AI transformation assessment with strategic insights tailored to your business operations and growth goals.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                        <input
                          type="text"
                          value={form.fullName}
                          onChange={(e) => updateField("fullName", e.target.value)}
                          placeholder="e.g. John Doe"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-bright-orange text-gray-800 placeholder:text-gray-400"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Business Email</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          placeholder="e.g. john.doe@company.com"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-bright-orange text-gray-800 placeholder:text-gray-400"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Company Name</label>
                        <input
                          type="text"
                          value={form.companyName}
                          onChange={(e) => updateField("companyName", e.target.value)}
                          placeholder="e.g. Acme Corp"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-bright-orange text-gray-800 placeholder:text-gray-400"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Role / Designation</label>
                        <input
                          type="text"
                          value={form.role}
                          onChange={(e) => updateField("role", e.target.value)}
                          placeholder="e.g. Chief Operations Officer"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-bright-orange text-gray-800 placeholder:text-gray-400"
                        />
                      </div>

                      <div className="md:col-span-2 space-y-1">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Country</label>
                        <input
                          type="text"
                          value={form.country}
                          onChange={(e) => updateField("country", e.target.value)}
                          placeholder="e.g. United States"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-bright-orange text-gray-800 placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom footer controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-brand-bright-orange font-semibold">
                    Consult Estimation Expert
                  </span>
                  <span className="bg-pink-100 text-brand-bright-orange text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    It&apos;s Free
                  </span>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-2.5 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={submitting}
                    className="px-8 h-12 bg-brand-bright-orange text-white font-bold text-[14px] rounded-xl hover:bg-brand-bright-orange transition-colors shadow-md disabled:opacity-50 flex items-center gap-2 cursor-pointer"
                  >
                    {submitting ? "Submitting..." : step === 6 ? "Complete Assessment" : step === 1 ? "Start Assessment" : "Next Step"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* Success Screen rendering */
            <div className="text-center py-10 px-4 animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6 border border-green-100 shadow-md">
                <ShieldCheck className="w-10 h-10 text-green-500" />
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-3 tracking-tight">
                Your Assessment Is Being Prepared
              </h3>

              <p className="text-slate-600 text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Our enterprise AI specialists will review your responses and prepare a strategic readiness report tailored to your organization’s operational goals and transformation priorities.
              </p>

              <div className="bg-gray-50 rounded-2xl p-4 max-w-sm mx-auto mb-10 border border-gray-100">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Delivery Note</span>
                <p className="text-gray-800 font-bold text-sm mt-1">You’ll receive your assessment report by email within 24–48 hours.</p>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-3 px-8 h-13 bg-brand-bright-orange hover:bg-brand-bright-orange/90 text-white rounded-xl font-bold transition-all shadow-xl shadow-brand-bright-orange/10 cursor-pointer"
              >
                Return to Homepage
              </Link>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
