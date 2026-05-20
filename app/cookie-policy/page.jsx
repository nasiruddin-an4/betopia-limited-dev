import React from "react";

export const metadata = {
  title: "Cookie & Tracker Policy | Betopia Limited",
  description:
    "Official Cookie and Tracker Policy of Betopia Limited (BL-CTP-2026-001).",
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

export default function CookiePolicyPage() {
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
            Cookie & Tracker Policy
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            <span>Document Reference: <span className="text-white">BL-CTP-2026-001</span></span>
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
          <div className="mb-12 p-6 bg-orange-50/50 border border-orange-100 rounded-xl text-orange-800 text-sm leading-relaxed italic">
            This policy should be read in conjunction with the Betopia Group Privacy Policy (BL-PP-2026-001).
          </div>

          <Section title="Overview" id="overview" number="1">
            <p>
              This Cookie and Tracker Policy explains how Betopia Limited and its affiliates ("Betopia," "we," "us," or "our") use cookies, web beacons, pixels, and similar tracking technologies when you visit our websites or use our digital services.
            </p>
          </Section>

          <Section title="What are Cookies and Trackers?" id="what-are-cookies" number="2">
            <p>
              Cookies are small text files stored on your device that help websites remember your preferences and improve your experience. Other trackers, like pixels and tags, help us understand how you interact with our content.
            </p>
          </Section>

          <Section title="How We Use Cookies" id="how-we-use" number="3">
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><span className="font-bold">Essential:</span> Necessary for the website to function (e.g., security, load balancing).</li>
              <li><span className="font-bold">Functional:</span> Remember your choices (e.g., language, region).</li>
              <li><span className="font-bold">Analytical:</span> Help us understand site performance and user behavior (e.g., Google Analytics).</li>
              <li><span className="font-bold">Marketing:</span> Deliver relevant advertisements and track campaign performance.</li>
            </ul>
          </Section>

          <Section title="Third-Party Cookies" id="third-party" number="4">
            <p>
              We may use third-party services that set their own cookies on our site. These include Google Analytics, LinkedIn Insight Tag, and other social media pixels. We do not control these cookies.
            </p>
            <Table>
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Provider</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Purpose</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">Google Analytics</td>
                  <td className="px-4 py-3 text-gray-500">Website usage analytics</td>
                  <td className="px-4 py-3 text-gray-500">Persistent</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">LinkedIn</td>
                  <td className="px-4 py-3 text-gray-500">Marketing & attribution</td>
                  <td className="px-4 py-3 text-gray-500">Persistent</td>
                </tr>
              </tbody>
            </Table>
          </Section>

          <Section title="Managing Your Preferences" id="managing" number="5">
            <p>
              You can manage or disable cookies through your browser settings. However, disabling certain cookies may impact your ability to use some features of our website.
            </p>
          </Section>

          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              © 2026 Betopia Limited. All rights reserved. Document Reference: BL-CTP-2026-001 v1.0
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
