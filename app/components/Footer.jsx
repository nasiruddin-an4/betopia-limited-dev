"use client";

import React from "react";
import Image from "next/image";
import {
  Facebook,
  Mail,
  MapPin,
  Send,
  Phone,
  ArrowUpRight,
  Globe,
  Youtube,
  Clock,
  Check,
} from "lucide-react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Global Offices", href: "/global-reach/offices" },
  { label: "Partner Program", href: "/partner" },
  {
    label: "Partner Portal",
    href: "https://partners.betopialimited.com/web/login",
    target: "_blank",
  },
];

const resourcesLinks = [
  { label: "Client Stories", href: "/client-stories" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Media Kit", href: "/media-kit" },


];

const reviewsLinks = [
  { label: "Careers", href: "/career" },
  { label: "Contact", href: "/contact" },
  {
    label: "Company Profile",
    href: "/20 Apr 2026 Betopia Group - Profile Small file.pdf",
    target: "_blank",
  },
  { label: "News & Updates", href: "/news" },

];

const socialLinks = [
  {
    icon: <FaFacebookF size={18} />,
    href: "https://www.facebook.com/BetopiaLimited",
    label: "Facebook",
    color: "bg-[#4267B2]",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    href: "https://www.linkedin.com/company/betopia-limited/",
    label: "LinkedIn",
    color: "bg-[#0077b5]",
  },
  {
    icon: <FaBehance size={18} />,
    href: "https://www.behance.net/betopia_limited",
    label: "Behance",
    color: "bg-[#0057ff]",
  },
  {
    icon: <FaDribbble size={18} />,
    href: "https://dribbble.com/betopialimited",
    label: "Dribbble",
    color: "bg-[#ea4c89]",
  },
  {
    icon: <Youtube size={18} />,
    href: "https://www.youtube.com/@betopia-group",
    label: "Youtube",
    color: "bg-[#ff0000]",
  },
];

const offices = [
  {
    country: "Bangladesh",
    address:
      "Lotus Kamal Tower-2, Level 6, 59 & 61 Gulshan South Avenue, Gulshan-1, Dhaka-1212",
    email: "sales@betopialimited.com",
    phone: "+880 1321-231828",
    image: "/officeImg/BD.svg",
  },
  {
    country: "United Arab Emirates",
    address: "Meydan Grandstand, 6th Floor, Meydan Road, UAE",
    email: "sales@betopialimited.com",
    phone: "+971 42420223",
    image: "/officeImg/UAE.svg",
  },
  {
    country: "United States",
    address:
      "3651 Peachtree Pkwy STE. E #116, Suwanee, GA 30024, United States of America",
    email: "sales@betopialimited.com",
    phone: "+1 606 773 7443",
    image: "/officeImg/USA.svg",
  },
  {
    country: "Philippines",
    address:
      "Business Center 4, Philexcel Business Park, M.A. Roxas Highway, Clark Freeport Zone, Angeles City, Pampanga, Region III, Philippines.",
    email: "sales@betopialimited.com",
    phone: "+63 917 123 4567",
    image: "/officeImg/Malaysia.svg",
  },
  {
    country: "Australia",
    address: "72b Ashley street, West Footscray, Victoria 3012. Australia.",
    email: "[EMAIL_ADDRESS]",
    phone: "+61 406 560 146",
    image: "/officeImg/Malaysia.svg",
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full text-white bg-black overflow-hidden flex flex-col justify-end min-h-[92vh]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 hidden md:block"
        >
          <source
            src="/footer-video/earthPanorama_desktop.mp4"
            type="video/mp4"
          />
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 block md:hidden"
        >
          <source
            src="/footer-video/earthPanorama_mobile.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark gradient overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 md:px-0 pt-20">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12 mb-10 px-4 mx-auto">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2 flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo_tm.webp"
                  alt="Betopia Logo"
                  width={160}
                  height={48}
                  className="w-32 md:w-40"
                  style={{ height: "auto" }}
                />
              </div>
              <p className="text-[#a1a1a1] text-base md:text-lg leading-relaxed max-w-md">
                Betopia Limited is a global enterprise technology company
                delivering AI powered cloud, ERP, cybersecurity and digital
                transformation solutions to organizations across healthcare,
                BFSI, manufacturing and technology sectors combining global
                delivery standards with the agility and ownership culture of a
                strategic partner.
              </p>
            </div>

            {/* Company Column */}
            <div className="col-span-1 lg:col-span-1">
              <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-white">
                Company
              </h4>
              <ul className="flex flex-col gap-3 md:gap-4">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target={link.target || "_self"}
                      rel={
                        link.target === "_blank" ? "noopener noreferrer" : ""
                      }
                      className="text-[#a1a1a1] hover:text-white transition-colors duration-200 text-sm md:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>



            {/* Link Column */}
            <div className="col-span-1 lg:col-span-1">
              <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-white">
                Contact
              </h4>
              <ul className="flex flex-col gap-3 md:gap-4">
                {reviewsLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target={link.target || "_self"}
                      rel={
                        link.target === "_blank" ? "noopener noreferrer" : ""
                      }
                      className="text-[#a1a1a1] hover:text-white transition-colors duration-200 text-sm md:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Legal Column */}
            <div className="col-span-1 lg:col-span-1">
              <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-white">
                Legal
              </h4>
              <ul className="flex flex-col gap-3 md:gap-4">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-[#a1a1a1] hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="text-[#a1a1a1] hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/cookie-policy"
                    className="text-[#a1a1a1] hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/security"
                    className="text-[#a1a1a1] hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
            {/* Resources Column */}
            <div className="col-span-1 lg:col-span-1">
              <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-white">
                Resources
              </h4>
              <ul className="flex flex-col gap-3 md:gap-4">
                {resourcesLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target={link.target || "_self"}
                      rel={
                        link.target === "_blank" ? "noopener noreferrer" : ""
                      }
                      className="text-[#a1a1a1] hover:text-white transition-colors duration-200 text-sm md:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Compliance Section */}
        <div className="container mx-auto px-4 mb-10">
          <div className="relative px-6 md:px-10 py-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden">
            {/* Ambient Ambient Glows */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-bright-orange/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-12">
              <div className="text-center lg:text-left max-w-md">
                <h4 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-2">
                  Enterprise Compliance
                </h4>
                <p className="text-[#a1a1a1] text-sm md:text-base leading-relaxed">
                  Committed to global excellence through rigorous certifications
                  and industry-leading standards in security, quality, and
                  operational integrity.
                </p>
              </div>

              {/* Compliance Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-3 sm:gap-x-6 md:gap-x-10 gap-y-6 md:gap-y-8 w-full lg:w-auto">
                {[
                  {
                    label: "DUNS Verified",
                    icon: "/certification/DUNS-Registered-Seal.png",
                  },
                  {
                    label: "ISO 9001:2015",
                    icon: "/certification/Certificate-ISO-9001-2015.png",
                  },
                  {
                    label: "ISO 27001:2022",
                    icon: "/certification/Certificate-ISO-27001-2022.png",
                  },
                  {
                    label: "ISO 22301:2019",
                    icon: "/certification/Certificate-ISO-22301-2019.png",
                  },
                ].map((cert, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 md:gap-4 group transition-transform duration-300 hover:-translate-y-2 shrink-0"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full relative overflow-hidden bg-white p-1.5 md:p-2 ring-1 ring-white/10 group-hover:ring-brand-bright-orange/30 transition-all duration-500 shadow-2xl">
                      <Image
                        src={cert.icon}
                        alt={cert.label}
                        fill
                        sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 80px"
                        className="object-contain p-1.5 md:p-2 transition-all duration-700"
                      />
                    </div>
                    <span className="text-[7.5px] sm:text-[9px] md:text-[10px] font-bold text-white/40 group-hover:text-brand-bright-orange tracking-[0.1em] md:tracking-[0.2em] uppercase transition-colors whitespace-nowrap">
                      {cert.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Profile Bar */}
        <div className="relative z-10 bg-black/40 backdrop-blur-md py-8 border-t border-white/5">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-0">
            {/* Copyright */}
            <div className="order-3 lg:order-1 lg:col-span-3 flex justify-center lg:justify-start">
              <p className="text-[#a1a1a1] text-[14px] font-medium tracking-wide whitespace-nowrap">
                © 2026 Betopia Limited. All Rights Reserved.
              </p>
            </div>

            {/* Global Office Section */}
            <div className="order-2 lg:order-2 lg:col-span-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {offices.map((office, idx) => (
                <span
                  key={idx}
                  className="text-md font-semibold text-white/60 tracking-wider border-r border-gray-800 pr-4 last:border-r-0 last:pr-0"
                >
                  {office.country}
                </span>
              ))}
            </div>

            {/* Social Icons (Colored) */}
            <div className="order-1 lg:order-3 lg:col-span-3 flex items-center justify-center lg:justify-end gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full ${social.color} flex items-center justify-center text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
