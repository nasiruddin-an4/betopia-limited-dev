import React from "react";

export const metadata = {
  title: "Privacy Policy | Betopia Limited",
  description:
    "Official Privacy Policy of Betopia Limited and Betopia Group (BL-PP-2026-001). Compliant with GDPR, UK GDPR, CCPA, and PDPA.",
};

const Table = ({ children }) => (
  <div className="overflow-x-auto my-6">
    <table className="min-w-full border border-gray-100 text-sm">
      {children}
    </table>
  </div>
);

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

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            <span>Document Reference: <span className="text-white">BL-PP-2026-001</span></span>
            <span className="hidden md:block text-gray-700">|</span>
            <span>Version: <span className="text-white">1.0</span></span>
            <span className="hidden md:block text-gray-700">|</span>
            <span>Effective: <span className="text-white">11 May 2026</span></span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-32 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Compliance Notice */}
          <div className="mb-12 p-5 bg-orange-50/50 border border-orange-100 rounded-xl text-orange-800 text-sm font-medium leading-relaxed">
            Compliant with: GDPR (EU) · UK GDPR · CCPA (California) · PDPA (Bangladesh) · ISO 27001 aligned
          </div>

          <Section title="Overview and Scope" id="overview" number="1">
            <p>
              Betopia Limited (registered office: Banasree, Dhaka-1219, Bangladesh; "Betopia," "we," "us," or "our") is the Data Controller for all personal data collected through our websites and digital properties.
            </p>
            <p>
              Betopia Limited holds <span className="font-bold text-gray-900">ISO 22301:2019</span> and <span className="font-bold text-gray-900">ISO 9001:2015</span> certifications, reflecting our commitment to operational excellence and responsible data stewardship.
            </p>
            
            <h3 className="font-bold text-gray-900 mt-8 mb-4 uppercase tracking-wider text-xs">Applicable Legal Frameworks</h3>
            <Table>
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Framework</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Jurisdiction</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Key Obligation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">GDPR (EU)</td>
                  <td className="px-4 py-3">European Union</td>
                  <td className="px-4 py-3 text-gray-500">Lawful basis, data subject rights</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">UK GDPR</td>
                  <td className="px-4 py-3">United Kingdom</td>
                  <td className="px-4 py-3 text-gray-500">Post-Brexit data protection</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">CCPA / CPRA</td>
                  <td className="px-4 py-3">California, USA</td>
                  <td className="px-4 py-3 text-gray-500">Right to know, delete, opt-out</td>
                </tr>
              </tbody>
            </Table>
          </Section>

          <Section title="Data Controller and Contact Information" id="contact" number="2">
            <Table>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 bg-gray-50/50 w-1/3 font-bold text-gray-700">Legal Entity</td>
                  <td className="px-4 py-3 text-gray-600 font-medium">Betopia Limited</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 bg-gray-50/50 font-bold text-gray-700">Address</td>
                  <td className="px-4 py-3 text-gray-600">Daisy Garden, Banasree, Dhaka-1219</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 bg-gray-50/50 font-bold text-gray-700">Privacy Contact</td>
                  <td className="px-4 py-3 text-brand-bright-orange font-bold">privacy@betopialimited.com</td>
                </tr>
              </tbody>
            </Table>
            <p className="text-sm mt-4 italic">We will acknowledge your request within 72 hours and respond substantively within 30 calendar days.</p>
          </Section>

          <Section title="Personal Data We Collect" id="data-collection" number="3">
            <h4 className="font-bold text-gray-900 mt-4 mb-2 text-sm uppercase">3.1 Data You Provide Directly</h4>
            <Table>
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Category</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Examples</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Collection Point</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">Identity data</td>
                  <td className="px-4 py-3 text-gray-500">Name, Job title</td>
                  <td className="px-4 py-3 text-gray-500">Contact forms</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">Contact data</td>
                  <td className="px-4 py-3 text-gray-500">Email, Phone</td>
                  <td className="px-4 py-3 text-gray-500">Lead capture</td>
                </tr>
              </tbody>
            </Table>
          </Section>

          <Section title="Lawful Basis for Processing" id="lawful-basis" number="4">
            <Table>
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Processing Activity</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Lawful Basis</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">GDPR Article</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">Business Enquiries</td>
                  <td className="px-4 py-3 text-gray-500">Legitimate Interests</td>
                  <td className="px-4 py-3 text-gray-500">Art. 6(1)(f)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">Marketing</td>
                  <td className="px-4 py-3 text-gray-500">Consent</td>
                  <td className="px-4 py-3 text-gray-500">Art. 6(1)(a)</td>
                </tr>
              </tbody>
            </Table>
          </Section>

          <Section title="How We Use Your Personal Data" id="usage" number="5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-4 bg-brand-bright-orange rounded-full" />
                  Business Operations
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 list-disc pl-4">
                  <li>Responding to business enquiries</li>
                  <li>Managing client relationships</li>
                  <li>Providing services across 22+ SBUs</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-4 bg-brand-bright-orange rounded-full" />
                  Marketing & Talent
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 list-disc pl-4">
                  <li>Processing job applications</li>
                  <li>Sending newsletters (consent-based)</li>
                  <li>Targeted advertising campaigns</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Data Retention" id="retention" number="8">
            <Table>
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Data Category</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Retention Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">Business Enquiries</td>
                  <td className="px-4 py-3 text-gray-500">3 years from last contact</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">Client Contact Data</td>
                  <td className="px-4 py-3 text-gray-500">Relationship duration + 7 years</td>
                </tr>
              </tbody>
            </Table>
          </Section>

          <Section title="Your Data Subject Rights" id="rights" number="9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
              {[
                { title: "Right to be informed", desc: "Know what data we hold and how we use it" },
                { title: "Right of access (DSAR)", desc: "Obtain a copy of your personal data" },
                { title: "Right to rectification", desc: "Correct inaccurate or incomplete data" },
                { title: "Right to erasure", desc: "Request deletion of your personal data" },
                { title: "Right to withdraw consent", desc: "Withdraw consent at any time" },
                { title: "Right to object", desc: "Object to processing based on interests" },
              ].map((right) => (
                <div key={right.title} className="p-4 bg-white border border-gray-100 rounded-xl hover:border-brand-bright-orange/30 transition-all group">
                  <h5 className="font-bold text-gray-900 mb-1 group-hover:text-brand-bright-orange transition-colors">{right.title}</h5>
                  <p className="text-xs text-gray-500">{right.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-500 text-center">
              To exercise your rights, email <span className="font-bold text-gray-900 underline">privacy@betopialimited.com</span>
            </p>
          </Section>

          <Section title="Information Security" id="security" number="11">
            <p>Betopia is aligned with ISO 27001 and holds ISO 9001:2015 and ISO 22301:2019 certifications. We implement TLS 1.2+ encryption, MFA, and regular vulnerability scanning.</p>
          </Section>

          <Section title="Governing Law" id="governing-law" number="14">
            <p>This Policy is governed by the laws of Bangladesh. Disputes are subject to the jurisdiction of the courts of Dhaka, Bangladesh.</p>
          </Section>

          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              © 2026 Betopia Limited. All rights reserved.
            </p>
            <div className="flex gap-4">
               {/* Add simple social or status icons if needed */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
