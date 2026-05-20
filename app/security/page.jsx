import React from "react";

export const metadata = {
  title: "Security Policy | Betopia Limited",
  description:
    "Official Security Policy and infrastructure guidelines of Betopia Limited (BL-SP-2026-001).",
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
    <div className="text-gray-600 leading-relaxed space-y-4">{children}</div>
  </section>
);

export default function SecurityPage() {
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
            Security Policy
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            <span>Document Reference: <span className="text-white">BL-SP-2026-001</span></span>
            <span className="hidden md:block text-gray-700">|</span>
            <span>Version: <span className="text-white">1.0</span></span>
            <span className="hidden md:block text-gray-700">|</span>
            <span>Effective: <span className="text-white">11 May 2026</span></span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-32 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Certifications Notice */}
          <div className="mb-12 p-6 bg-blue-50 border border-blue-100 rounded-xl flex items-center gap-6">
            <div className="flex-1">
              <h4 className="text-blue-900 font-bold mb-2">
                Enterprise Grade Security
              </h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Betopia Limited is{" "}
                <span className="font-bold">ISO 22301:2019</span> and{" "}
                <span className="font-bold">ISO 9001:2015</span> certified. Our
                security operations are aligned with ISO 27001 standards.
              </p>
            </div>
          </div>

          <Section title="Security Principles" id="principles" number="1">
            <p>
              Security is foundational to the Betopia Group. We utilize a
              multi-layered approach to protect our infrastructure, employee
              endpoints, and client data.
            </p>
          </Section>

          <Section title="Access Control and Identity" id="access" number="5">
            <p>
              We enforce strict access control based on the principle of Least
              Privilege.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <span className="font-bold">MFA Mandatory:</span> Required for
                all administrative and remote access.
              </li>
              <li>
                <span className="font-bold">Zero Trust:</span> Identity
                verification required regardless of location.
              </li>
              <li>
                <span className="font-bold">Access Reviews:</span> User rights
                reviewed quarterly.
              </li>
            </ul>
          </Section>

          <Section title="Cryptography and Encryption" id="crypto" number="6">
            <Table>
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">
                    Data State
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">
                    Minimum Standard
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">
                    Application
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">
                    Data in transit
                  </td>
                  <td className="px-4 py-3 text-gray-500">TLS 1.2 minimum</td>
                  <td className="px-4 py-3 text-gray-500">
                    HTTPS, APIs, Email
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">
                    Data at rest
                  </td>
                  <td className="px-4 py-3 text-gray-500">AES-256</td>
                  <td className="px-4 py-3 text-gray-500">
                    Databases, Backups
                  </td>
                </tr>
              </tbody>
            </Table>
          </Section>

          <Section
            title="Infrastructure Security"
            id="infrastructure"
            number="7"
          >
            <p>
              Our production environments are protected by Web Application
              Firewalls (WAF) and DDoS mitigation. We utilize network
              segmentation to isolate production, development, and corporate
              environments.
            </p>
          </Section>

          <Section title="Business Continuity" id="bcp" number="11">
            <Table>
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">
                    Metric
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">
                    Target
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">
                    Recovery Time Objective (RTO)
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    4 hours for critical systems
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900">
                    Recovery Point Objective (RPO)
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    1 hour maximum data loss
                  </td>
                </tr>
              </tbody>
            </Table>
          </Section>

          <Section title="Incident Response" id="incident" number="12">
            <p>
              Report suspected vulnerabilities or incidents to:{" "}
              <span className="font-bold text-gray-900 underline">
                security@betopialimited.com
              </span>
            </p>
            <p className="mt-2">We acknowledge reports within 48 hours.</p>
          </Section>

          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              © 2026 Betopia Limited. All rights reserved. Document Reference:
              BL-SP-2026-001 v1.0
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
