"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    id: 1,
    question: "How do you ensure quality and prevent delivery failures?",
    answer:
      "We operate under a structured enterprise governance model with clearly defined SLAs, milestone-based delivery plans and layered quality assurance at every stage. Each engagement is governed by a dedicated programme manager, with sprint reviews, performance dashboards and executive steering meetings that ensure complete visibility and early risk identification. Accountability is not just a process — it is embedded into our delivery culture.",
  },
  {
    id: 2,
    question:
      "How do you protect our client relationships in a white-label model?",
    answer:
      "We function as an invisible extension of your team. All communication, delivery artefacts and client-facing outputs are aligned to your brand standards and protocols. Our teams operate within your processes, use your tools and represent your values. Your clients experience you — Betopia operates entirely in the background. We have maintained this model successfully across dozens of long-term channel partnerships globally.",
  },
  {
    id: 3,
    question:
      "What genuinely differentiates Betopia from other offshore technology vendors?",
    answer:
      "Three things: proprietary IP, strategic intent and ownership culture. Unlike transactional outsourcing firms that rent headcount, Betopia brings real product IP, certified delivery capability and a genuine interest in your long-term commercial success. We are self-funded, which means our incentives are always aligned with your outcomes — not investor timelines. We think like partners, not vendors.",
  },
  {
    id: 4,
    question:
      "What industries and regulatory environments do you have deep expertise in?",
    answer:
      "Our primary verticals are healthcare (HIPAA, HL7, FHIR), banking and financial services (PCI-DSS, Basel III), manufacturing, logistics, education and technology. We hold deep compliance expertise in ISO 27001, SOC 2 Type II, GDPR, CMMI Level 3 and multiple Southeast Asian and South Asian regulatory frameworks.",
  },
  {
    id: 5,
    question:
      "How do you handle engagements spanning multiple time zones and geographies?",
    answer:
      "Our delivery model is designed for global operations. With centres in Dhaka, Manila and Eastern Europe, we provide true follow-the-sun coverage across major time zones. Each global engagement has a single point of accountability with a local engagement lead who manages coordination, cultural alignment and communication cadence — ensuring consistency regardless of geography.",
  },
  {
    id: 6,
    question:
      "What does a typical engagement look like from initial contact to go-live?",
    answer:
      "We begin with a structured discovery workshop — typically two to three weeks — producing a detailed statement of work, architecture blueprint and delivery roadmap. From there, we operate in two-week sprints with clear acceptance criteria, regular demonstrations and a defined change management process. Most mid-scale implementations reach initial go-live within three to six months, with hypercare and continuous improvement support thereafter.",
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`mb-5 transition-all duration-500 rounded-2xl ${
        isOpen ? "bg-blue-50" : "bg-gray-100/50 hover:bg-gray-100"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 px-8 py-7 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-xl md:text-2xl font-semibold text-brand-black leading-snug">
          {faq.question}
        </span>
        <span
          className={`shrink-0 w-11 h-11 rounded-md flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-brand-bright-orange text-white"
              : "bg-brand-bright-orange/20 text-brand-bright-orange group-hover:bg-brand-orange"
          }`}
        >
          <ChevronDown
            size={24}
            strokeWidth={2.5}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </span>
      </button>

      {/* Smooth height with grid trick */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`transition-all duration-500 ease-out px-8 pb-8 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <p className="text-gray-500 text-lg leading-relaxed max-w-4xl font-medium">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        {/* Header Block */}
        <div className="mb-16">
          <ScrollReveal delay={0.3}>
            <h2 className="text-4xl md:text-5xl font-semibold text-brand-black mb-2 tracking-tight">
              Questions We Hear From Enterprise Leaders
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              We believe in radical transparency. Here are honest answers to the
              questions that matter most when evaluating a strategic technology
              partner.
            </p>
          </ScrollReveal>
        </div>

        {/* Accordion List */}
        <ScrollReveal delay={0.5}>
          <div className="max-w-5xl mx-auto text-left">
            {visibleFaqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Load More Button */}
        <ScrollReveal delay={0.6}>
          <div className="mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 border border-brand-bright-orange hover:border-brand-bright-orange/80 text-brand-bright-orange font-semibold rounded-full transition-all duration-300"
            >
              {showAll ? "Show Less" : "Load More"}
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
