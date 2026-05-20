import React from "react";

export const metadata = {
  title: "Terms & Conditions | Betopia Limited",
  description:
    "Official Terms and Conditions of Betopia Limited and Betopia Group (BL-TC-2026-001).",
};

const Section = ({ title, id, number, children }) => (
  <section id={id} className="py-8 border-b border-gray-50 last:border-0">
    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 tracking-tight">
      {number}. {title}
    </h2>
    <div className="text-gray-600 leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

export default function TermsOfServicePage() {
  return (
    <main className="bg-white min-h-screen font-sans selection:bg-brand-bright-orange/20">
      {/* Hero Section */}
      <div className="bg-gray-900 pt-32 pb-20 md:pt-44 md:pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(247,149,73,0.1),transparent_70%)]" />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-32 relative z-10 flex flex-col items-center text-center">
          <div className="text-xs font-bold text-brand-bright-orange uppercase tracking-widest mb-4">
            Legal / Document
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Terms & Conditions
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            <span>Document Reference: <span className="text-white">BL-TC-2026-001</span></span>
            <span className="hidden md:block text-gray-700">|</span>
            <span>Version: <span className="text-white">1.0</span></span>
            <span className="hidden md:block text-gray-700">|</span>
            <span>Effective: <span className="text-white">11 May 2026</span></span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-32 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Notice Box */}
          <div className="mb-12 p-6 bg-blue-50 border border-blue-100 rounded-xl text-blue-900 text-sm leading-relaxed">
            Welcome to Betopia Limited. These terms and conditions outline the rules and regulations for the use of Betopia Limited's Website and Services, located at <span className="font-bold">www.betopiagroup.com</span> and <span className="font-bold">www.betopialimited.com</span>.
          </div>

          <Section title="Acceptance of Terms" id="acceptance" number="1">
            <p>
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Betopia Limited's digital properties if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            <p>
              These terms apply to all visitors, users, and others who access or use the Service.
            </p>
          </Section>

          <Section title="Intellectual Property Rights" id="intellectual-property" number="2">
            <p>
              Unless otherwise stated, Betopia Limited and/or its licensors own the intellectual property rights for all material on Betopia Limited. All intellectual property rights are reserved. You may access this from Betopia Limited for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <div className="mt-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-widest">You must not:</h4>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                <li>Republish material from Betopia Limited</li>
                <li>Sell, rent or sub-license material from Betopia Limited</li>
                <li>Reproduce, duplicate or copy material from Betopia Limited</li>
                <li>Redistribute content from Betopia Limited</li>
              </ul>
            </div>
          </Section>

          <Section title="Usage Restrictions" id="usage-restrictions" number="3">
            <p>
              You are specifically restricted from all of the following:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-3 text-sm">
              <li>Publishing any website material in any other media without prior written consent</li>
              <li>Using this website in any way that is or may be damaging to this website</li>
              <li>Using this website in any way that impacts user access to this website</li>
              <li>Using this website contrary to applicable laws and regulations</li>
              <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity</li>
            </ul>
          </Section>

          <Section title="Disclaimer" id="disclaimer" number="4">
            <p>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-3 text-sm">
              <li>Limit or exclude our or your liability for death or personal injury</li>
              <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
              <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
            </ul>
          </Section>

          <Section title="Limitation of Liability" id="limitation" number="5">
            <p>
              In no event shall Betopia Limited, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Betopia Limited, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.
            </p>
          </Section>

          <Section title="Governing Law" id="governing-law" number="7">
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of Bangladesh, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Dhaka, Bangladesh for the resolution of any disputes.
            </p>
          </Section>

          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              © 2026 Betopia Limited. All rights reserved. Document Reference: BL-TC-2026-001 v1.0
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
