"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "How do you ensure quality and prevent delivery failures?",
    answer:
      "We implement a rigorous multi-tier governance framework. Every project is overseen by a dedicated Project Success Manager (PSM) and follows our ISO-aligned delivery standards. We also provide transparent, real-time reporting so you always know the status of your delivery.",
  },
  {
    question: "How do you protect our client relationships?",
    answer:
      "We operate as a true white-label partner. Our engineers can work under your brand, use your email domains and even follow your internal communication protocols. We stay completely invisible to your clients unless you explicitly want us to be involved as 'your technical department'.",
  },
  {
    question: "What makes you different from other offshore vendors?",
    answer:
      "Unlike traditional vendors who just 'provide bodies', we provide managed outcome-based delivery. We assume technical liability, provide 48-hour bench activation and offer a shared-success model where we scale our costs alongside your business growth.",
  },
  {
    question: "How quickly can we start the partnership?",
    answer:
      "The onboarding process is designed to be swift. After a successful Strategic Fit Call and signing the Mutual NDA, we can typically activate your first 'Growth Pack' and have your dedicated team ready to start within 48 to 72 hours.",
  },
  {
    question: "What technologies and skill sets do you support?",
    answer:
      "We maintain deep expertise across modern tech stacks including cloud platforms (AWS, Azure, GCP), AI and machine learning, full-stack web development, mobile app development, data engineering, DevOps, cybersecurity and enterprise systems integration. Our team stays current with industry trends and emerging technologies.",
  },
  {
    question: "How do you handle communication and time zone differences?",
    answer:
      "We provide overlapping working hours to ensure real-time collaboration with your team. Our global presence allows us to offer coverage across multiple time zones. We use structured communication protocols including daily standups, weekly sync meetings and async documentation to keep everyone aligned.",
  },
  {
    question: "Can you scale our team up or down based on project needs?",
    answer:
      "Absolutely. Our flexible engagement model allows you to scale team size from 1 engineer to 50+ based on your requirements. You can onboard specialists for specific phases and adjust capacity as project demands evolve, without long-term overhead commitments.",
  },
  {
    question: "What level of confidentiality and IP protection can we expect?",
    answer:
      "We maintain strict confidentiality agreements and ensure all intellectual property remains with you. Our team members sign individual NDAs and we follow compliance standards including ISO 27001, SOC 2 and GDPR. Your codebase, algorithms and business logic are fully protected.",
  },
  {
    question: "How do you manage team stability and prevent staff turnover?",
    answer:
      "We provide dedicated team members committed to your project for the duration of your engagement. Our competitive compensation, career development programs and project diversity ensure low turnover. If any team member leaves, we provide a seamless replacement with no disruption to your project.",
  },
  {
    question: "What is included in your support and maintenance offerings?",
    answer:
      "Beyond development, we offer ongoing support including bug fixes, performance optimization, security updates and infrastructure maintenance. Our 24/7 monitoring and SLA-backed support ensures your applications run smoothly post-launch. We also provide knowledge transfer to your internal teams.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden mb-4 transition-all duration-300 hover:border-brand-bright-orange/30">
      <button
        onClick={onClick}
        className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer group"
      >
        <span className="text-brand-black font-semibold text-lg md:text-xl pr-8 group-hover:text-brand-bright-orange transition-colors">
          {question}
        </span>
        <div
          className={`shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-brand-bright-orange border-brand-bright-orange rotate-90" : ""}`}
        >
          {isOpen ? (
            <Plus size={18} className="text-white" />
          ) : (
            <Plus size={18} className="text-brand-bright-orange" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-8 pb-8 text-gray-500 leading-relaxed text-base md:text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function PartnerFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="bg-gray-50 py-10 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 relative">
          {/* Left Side - Sticky Header */}
          <div className="lg:w-1/3 w-full">
            <div className="lg:sticky lg:top-32 space-y-6">
              <ScrollReveal>
                <span className="text-brand-bright-orange font-bold text-sm uppercase tracking-widest block mb-2">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-5xl font-semibold text-brand-black mb-6 tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500 text-md md:text-xl leading-relaxed max-w-md">
                  Everything you need to know about joining and growing with the
                  Betopia Partnership
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Side - Accordion List */}
          <div className="lg:w-2/3 w-full">
            <ScrollReveal delay={0.3}>
              <div className="space-y-4">
                {displayedFaqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === idx}
                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  />
                ))}
              </div>

              {/* See More / Show Less Button */}
              {faqs.length > 5 && (
                <div className="mt-12 flex justify-center lg:justify-start">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-10 py-3 border-2 border-brand-bright-orange/30 text-brand-bright-orange font-semibold rounded-xl hover:bg-brand-bright-orange hover:text-white hover:border-brand-bright-orange transition-all duration-300 cursor-pointer"
                  >
                    {showAll ? "Show Less" : "See More"}
                  </button>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
