"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Layers,
  ShieldCheck,
  Globe,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import TechStackMarquee from "../components/TechStackMarquee";

const generateSlug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const whatWeDoData = [
  {
    id: "products",
    title: "Enterprise Products",
    description:
      "Intelligent digital products combining software, AI and security to transform business operations.",
    color: "text-orange-500",
    bgColor: "bg-orange-500",
    items: [
      {
        name: "Human Resource Management (HRM)",
        description:
          "Streamline HR workflows, automate payroll and enhance employee engagement with an intelligent, enterprise-grade HRM platform.",
        href: "/industries/human-resource-management",
      },
      {
        name: "Business Brain",
        description:
          "Unify your business processes, financials and supply chain operations into one scalable, AI-ready Enterprise Resource Planning system.",
        href: "/industries/betopia-erp",
      },
      {
        name: "Count Trust",
        description:
          "A robust accounting and financial management solution designed to ensure compliance, transparency and real-time financial reporting.",
        href: "/industries/count-trust",
      },
      {
        name: "Betopia Emailing System",
        description:
          "Secure, mass-scale email delivery infrastructure tailored for high-deliverability marketing and internal corporate communication.",
        href: "/industries/betopia-emailing-system",
      },
      {
        name: "Agentic AI",
        description:
          "Deploy autonomous AI agents that reason, plan and execute complex business tasks with minimal human intervention.",
        href: "/industries/agentic-ai",
      },
      {
        name: "Talkora AI",
        description:
          "Next-generation conversational AI that empowers customer support, internal knowledge bases and sales operations with natural language processing.",
        href: "/industries/talkora-ai",
      },
      {
        name: "Smart Hospital",
        description:
          "Comprehensive digital management system designed to streamline hospital operations, patient records and medical billing.",
        href: "https://daffodilsoft.com/product/smart-hospital/",
      },
      {
        name: "Betopia Smart Class",
        description:
          "An advanced, smart school management application enabling educational institutions to digitalize learning, grading and administration.",
        href: "https://daffodilsoft.com/product/eduvas-school/",
      },
      {
        name: "Betopia EduOS",
        description:
          "A highly scalable university management platform supporting complex degree programs, academic portals and institutional governance.",
        href: "https://daffodilsoft.com/product/eduvas-university/",
      },
      {
        name: "Betopia LMS",
        description:
          "Integrated University Management System bridging academic administration with critical financial and human resource workflows.",
        href: "https://daffodilsoft.com/product/Betopia LMS/",
      },
      {
        name: "Virtual Gate",
        description:
          "A cutting-edge virtual gateway and security solution managing continuous access control, identity tracking and digital checkpoints.",
        href: "https://daffodilsoft.com/product/virtual-gate/",
      },
      {
        name: "Study Abroad",
        description:
          "A unified platform assisting educational consultants in managing student applications, seamless visas and critical documentation for overseas education.",
        href: "https://daffodilsoft.com/product/study-abroad/",
      },
    ],
  },
  {
    id: "services",
    title: "Technology Services",
    description:
      "End-to-End Enterprise Technology Services designed to modernize infrastructure, leverage AI and ensure robust security.",
    color: "text-blue-500",
    bgColor: "bg-blue-500",
    items: [
      {
        name: "Cloud Strategy & Readiness Services",
        description:
          "Assess your infrastructure and architect a future-proof transformation roadmap for a seamless transition to the cloud.",
      },
      {
        name: "Application Modernization & Migration",
        description:
          "Refactor and migrate legacy applications into agile, cloud-native environments to maximize performance and scalability.",
      },
      {
        name: "Cloud Infrastructure & Platform Modernization",
        description:
          "Re-architect your core infrastructure leveraging hybrid or multi-cloud solutions for improved resilience and flexibility.",
      },
      {
        name: "Cloud Optimization, Security & Governance",
        description:
          "Implement FinOps and enforce rigorous compliance policies to continuously secure and optimize your cloud environments.",
      },
      {
        name: "Data Strategy & Governance",
        description:
          "Establish robust frameworks, semantic layers and compliance policies to manage data as a strategic enterprise asset.",
      },
      {
        name: "Data Engineering & Platforms",
        description:
          "Build scalable data pipelines, lakes and warehouses that guarantee fast, reliable access to clean, business-critical data.",
      },
      {
        name: "AI & Advanced Analytics",
        description:
          "Harness machine learning and predictive models to uncover hidden patterns, optimize outcomes and drive actionable insights.",
      },
      {
        name: "BI & Decision Enablement",
        description:
          "Transform complex data into intuitive, real-time dashboards to empower executives with proactive, data-driven decision making.",
      },
      {
        name: "Cyber Risk & Governance Services",
        description:
          "Identify vulnerabilities and align your security posture with global regulatory standards to mitigate enterprise-wide cyber risk.",
      },
      {
        name: "Threat Detection, Response & Resilience",
        description:
          "Deploy proactive monitoring and automated rapid-response mechanisms to neutralize cyber threats before they disrupt operations.",
      },
      {
        name: "Identity, Endpoint & Infrastructure Security",
        description:
          "Secure your perimeter, devices and user access with zero-trust architectures and rigorous access control mechanisms.",
      },
      {
        name: "Data & Application Security Services",
        description:
          "Embed security directly into your software development lifecycle to protect code, APIs and sensitive enterprise data.",
      },
      {
        name: "Managed Security Services",
        description:
          "Enhance your cybersecurity defenses with 24/7 monitoring, incident response and continuous risk management from our SOC experts.",
      },
      {
        name: "Custom Software & Mobile Apps Development",
        description:
          "Design and engineer tailored, high-performance web and mobile applications that precisely address your unique business challenges.",
      },
      {
        name: "Application Modernization & Enhancement",
        description:
          "Revitalize existing software systems by upgrading architecture, improving UX and integrating modern technology stacks.",
      },
      {
        name: "Agile Development, DevOps & Automation",
        description:
          "Accelerate software delivery lifecycles by embedding agile methodologies alongside continuous integration and automated deployment pipelines.",
      },
      {
        name: "Product Engineering & Digital Innovation",
        description:
          "From ideation to launch, engineer market-ready digital products that disrupt industries and create new revenue streams.",
      },
      {
        name: "Fully Managed IT Services",
        description:
          "Outsource standard IT operations and helpdesk support so your internal teams can focus on strategic technology initiatives.",
      },
      {
        name: "Co-Managed IT Services",
        description:
          "Augment your existing IT department with specialized expertise and additional resources to manage complex infrastructure.",
      },
      {
        name: "Project-Managed Transition Services",
        description:
          "Seamlessly navigate major architectural shifts or provider migrations with carefully orchestrated, end-to-end execution.",
      },
      {
        name: "Build-Operate-Transfer (BOT) Services",
        description:
          "Rapidly establish an operational center of excellence and scale it, before completely transferring ownership back to you.",
      },
      {
        name: "Capability-as-a-Service (CaaS)",
        description:
          "Access specific, advanced technological capabilities on-demand without the overhead of building them in-house.",
      },
      {
        name: "Outcome-Based Delivery Pods",
        description:
          "Engage cross-functional, autonomous teams focused exclusively on delivering clearly defined business objectives and solutions.",
      },
      {
        name: "Embedded Engineering Model",
        description:
          "Seamlessly integrate our top-tier engineering talent directly into your internal teams to accelerate development velocity.",
      },
      {
        name: "Managed Engineering Capacity",
        description:
          "Scale your engineering workforce dynamically with dedicated, high-performance teams aligned precisely to your project demands.",
      },
    ],
  },
  {
    id: "solutions",
    title: "Hybrid Solutions",
    description:
      "Vendor-Neutral, Multi-Cloud infrastructure solutions powered by Microsoft, AWS & Google Cloud.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500",
    items: [
      {
        name: "End-User Management Solutions",
        description:
          "Centralize the administration and support of all employee devices to improve productivity and enforce uniform security policies.",
      },
      {
        name: "Endpoint Security Solutions",
        description:
          "Protect desktop, mobile and remote edge devices against malware, ransomware and zero-day exploits.",
      },
      {
        name: "Modern Work Solutions",
        description:
          "Enable seamless remote collaboration, unified communications and productivity through advanced cloud workplace tools.",
      },
      {
        name: "Endpoint Solutions",
        description:
          "Deploy and lifecycle-manage business devices with secure, optimized configurations customized for your workforce.",
      },
      {
        name: "Infrastructure Security Solutions",
        description:
          "Fortify the foundational layers of your IT environment against sophisticated network-level intrusion and disruption.",
      },
      {
        name: "Data Security Solutions",
        description:
          "Implement encryption, access controls and loss prevention to safeguard your most sensitive organizational data.",
      },
      {
        name: "Identity Security Solutions",
        description:
          "Unify identity and access management with multi-factor authentication, single sign-on and adaptive zero-trust protocols.",
      },
      {
        name: "Application Security Solutions",
        description:
          "Protect critical enterprise apps from vulnerabilities, unauthorized access and malicious attacks through comprehensive shielding.",
      },
      {
        name: "Email Security Solutions",
        description:
          "Defend against phishing, spam and targeted social engineering attacks with intelligent email filtering and encryption.",
      },
      {
        name: "IoT Security Solutions",
        description:
          "Safeguard connected devices and operational technologies from exploitation across complex industrial and enterprise setups.",
      },
      {
        name: "AI Security Solutions",
        description:
          "Secure machine learning models and AI operations from adversarial attacks, poisoning and unauthorized data inferences.",
      },
      {
        name: "Cyber Security Operations Solutions",
        description:
          "Leverage our unified SecOps platforms to streamline threat intelligence, incident investigation and automated remediation.",
      },
      {
        name: "Data Center & Virtualization Solutions",
        description:
          "Optimize hardware footprint and maximize compute efficiency with highly available, software-defined data center architectures.",
      },
      {
        name: "Infrastructure Management Solutions",
        description:
          "Monitor, maintain and provision your IT infrastructure globally to guarantee continuous uptime and reliable performance.",
      },
      {
        name: "Enterprise Networking Solutions",
        description:
          "Design robust, high-bandwidth networks and SD-WAN architectures that flawlessly connect all your corporate locations.",
      },
      {
        name: "Network Security Solutions",
        description:
          "Protect data in transit using next-generation firewalls, secure gateways and rigorous deep-packet inspection.",
      },
      {
        name: "Cloud Infrastructure Solutions",
        description:
          "Build resilient, auto-scaling environments tailored to support mission-critical workloads reliably in the cloud.",
      },
      {
        name: "Hybrid Cloud Solutions",
        description:
          "Integrate on-premises infrastructure seamlessly with public cloud platforms for optimal resource utilization and compliance.",
      },
      {
        name: "DevOps Solutions",
        description:
          "Standardize infrastructure-as-code and streamline CI/CD practices across your entire enterprise technology stack.",
      },
      {
        name: "Digital & App Innovation Solutions",
        description:
          "Leverage cutting-edge platforms, microservices architecture and API ecosystems to rapid-prototype new business models.",
      },
      {
        name: "Database & Business Analytics Solutions",
        description:
          "Transform raw, disparate databases into consolidated data warehouses built for high-performance querying and analytics.",
      },
      {
        name: "AI Solutions",
        description:
          "Incorporate custom AI, cognitive services and machine learning models directly into your business processes for a competitive edge.",
      },
      {
        name: "Business Application Solutions",
        description:
          "Deploy tailored CRM, SCM and enterprise software ecosystems configured precisely for your specific industry requirements.",
      },
    ],
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="bg-[#fcfdfd] text-gray-900 min-h-screen overflow-x-hidden w-full">
      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-[70vh] flex items-center bg-[#04060e] overflow-hidden"
        style={{
          backgroundImage: "url('/img/10005.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#04060e] via-[#04060e]/80 to-transparent z-0" />
        <div className="absolute inset-0 bg-linear-to-t from-[#04060e]/60 to-transparent z-0" />

        <div className="container mx-auto px-6 relative z-10 w-full pt-20">
          <div className="text-left max-w-4xl">
            <ScrollReveal delay={0.15}>
              <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-[1.1] tracking-tight">
                Everything You Need to Scale{" "}
                <span className="text-brand-bright-orange block mt-2">
                  Your Business
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mt-8">
                At Betopia Limited, we deliver a full-stack technology ecosystem
                that combines AI solutions, enterprise software, cloud services,
                and digital transformation strategies. Our integrated approach
                helps businesses innovate faster, operate smarter and achieve
                sustainable growth in a rapidly evolving digital world.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* ═══ FLATTENED SECTIONS WITH HIGH-END CARDS ═══ */}
      <div className="w-full">
        {whatWeDoData.map((section, idx) => (
          <section
            key={section.id}
            className="py-16 md:py-24 border-b border-gray-100 last:border-0 even:bg-white odd:bg-[#f8f9fa] relative"
          >
            <div className="container mx-auto px-4 md:px-6">
              {/* Main Heading for each core pillar */}
              <ScrollReveal>
                <div className="mb-10 md:mb-14">
                  <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 tracking-tight leading-tight max-w-4xl">
                    {section.title}
                  </h2>
                  <p className="text-gray-500 text-xl md:text-2xl mt-2 max-w-3xl leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </ScrollReveal>

              {/* High-End Card Grid spanning all specific items beneath this pillar */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {section.items.map((item, itemIdx) => {
                  const href =
                    item.href || `/${section.id}/${generateSlug(item.name)}`;
                  return (
                    <ScrollReveal key={itemIdx} delay={(itemIdx % 5) * 0.05}>
                      <Link
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group relative flex flex-col bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden border border-gray-200/60 shadow-[0_4px_24px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:border-brand-bright-orange/30"
                      >
                        {/* Accent line on top of card */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-orange-400 group-hover:to-brand-bright-orange transition-all duration-500 opacity-0 group-hover:opacity-100" />

                        {/* Icon / Arrow container */}
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-orange-50 group-hover:scale-110 group-hover:border-orange-100 transition-all duration-500">
                          <ArrowUpRight
                            size={22}
                            className="text-gray-400 group-hover:text-brand-bright-orange transition-colors duration-500 rotate-0 group-hover:rotate-12"
                          />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-3xl font-semibold text-gray-700 leading-tight mb-4 group-hover:text-brand-bright-orange transition-colors duration-300">
                          {item.name}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-md leading-relaxed mt-auto font-medium">
                          {item.description}
                        </p>
                      </Link>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section>
        <TechStackMarquee />
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="py-20 md:py-28 bg-brand-black relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal>
                <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-semibold text-white leading-[1.15] tracking-tight mb-2">
                  500+ companies accelerate their
                  <br className="hidden lg:block" /> tech roadmaps with us.
                </h2>
                <h3 className="text-[32px] md:text-[40px] lg:text-[46px] font-semibold text-[#f94d24] leading-[1.15] tracking-tight mb-10">
                  See how we can help you.
                </h3>

                <Link
                  href="/meeting"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0f9d58] text-white text-[15.5px] font-semibold rounded-md hover:bg-[#0b8043] transition-colors duration-300"
                >
                  Book a Discovery Call
                </Link>
              </ScrollReveal>
            </div>

            {/* Right Content - Layered Cutout Style Images */}
            <div className="w-full lg:w-1/2 flex items-center justify-end">
              <ScrollReveal
                delay={0.2}
                className="relative w-full max-w-[600px] h-[350px] md:h-[450px]"
              >
                {/* Back Image (Offset Top) */}
                <div className="absolute top-4 right-[10%] w-[65%] h-[75%] transform -rotate-1 overflow-hidden opacity-95 shadow-2xl">
                  <Image
                    src="/1.png"
                    alt="Tech Roadmap Execution"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Front Image (Offset Bottom Left) */}
                <div className="absolute bottom-4 left-0 w-[80%] h-[75%] transform rotate-[1.5deg] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10 hover:rotate-0 hover:scale-105 transition-all duration-500">
                  <Image
                    src="/3.png"
                    alt="Team Collaborating"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
